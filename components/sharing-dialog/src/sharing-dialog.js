import { useAlert, useDataQuery, useDataMutation } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    VISUALIZATION,
    DASHBOARD,
} from './constants.js'
import { FetchingContext } from './fetching-context/index.js'
import {
    convertAccessToConstant,
    mapUsers,
    mapGroups,
    createOnChange,
    createOnAdd,
    createOnDelete,
} from './helpers/index.js'
import { Modal } from './modal/index.js'
import { TabbedContent } from './tabs/index.js'

const query = {
    sharing: {
        resource: 'sharing',
        params: ({ type, id }) => ({
            type,
            id,
        }),
    },
}

const mutation = {
    resource: 'sharing',
    params: ({ type, id }) => ({
        type,
        id,
    }),
    type: 'update',
    data: ({ data }) => data,
}

export const SharingDialog = ({
    id,
    type,
    onClose,
    onError,
    onSave,
    initialSharingSettings,
}) => {
    const { show: showError } = useAlert((error) => error, { critical: true })

    /**
     * Data fetching
     */

    const { data, refetch, loading, fetching } = useDataQuery(query, {
        variables: { id, type },
        onError: (error) => {
            showError(error)
            onError(error)
        },
    })

    const [mutate, { loading: mutating }] = useDataMutation(mutation, {
        variables: {
            type,
            id,
        },
        onError: (error) => {
            showError(error)
            onError(error)
            refetch()
        },
        onComplete: () => {
            refetch()
            onSave()
        },
    })

    /**
     * Refresh data when type or id props change
     */

    useEffect(() => {
        refetch({ type, id })
    }, [type, id])

    /**
     * Block interaction during the initial load
     */

    if (loading) {
        const users = Object.keys(initialSharingSettings.users).map(mapUsers)
        const groups = Object.keys(initialSharingSettings.groups).map(mapGroups)

        return (
            <FetchingContext.Provider value={true}>
                <Modal onClose={onClose}>
                    <TabbedContent
                        id={id}
                        users={users}
                        groups={groups}
                        publicAccess={initialSharingSettings.public}
                        allowPublicAccess={initialSharingSettings.allowPublic}
                        type={type}
                        onAdd={() => {}}
                        onChange={() => {}}
                        onRemove={() => {}}
                    />
                </Modal>
            </FetchingContext.Provider>
        )
    }

    const { object, meta } = data.sharing
    const publicAccess = convertAccessToConstant(object.publicAccess)
    const users = object.userAccesses.map(mapUsers)
    const groups = object.userGroupAccesses.map(mapGroups)

    return (
        <FetchingContext.Provider value={mutating || fetching}>
            <Modal onClose={onClose} name={object.displayName || object.name}>
                <TabbedContent
                    id={id}
                    users={users}
                    groups={groups}
                    publicAccess={publicAccess}
                    allowPublicAccess={meta.allowPublicAccess}
                    type={type}
                    onAdd={createOnAdd({ mutate, object })}
                    onChange={createOnChange({ mutate, object })}
                    onRemove={createOnDelete({ mutate, object })}
                />
            </Modal>
        </FetchingContext.Provider>
    )
}

SharingDialog.defaultProps = {
    initialSharingSettings: {
        name: '',
        allowPublic: true,
        public: ACCESS_NONE,
        groups: {},
        users: {},
    },
    onClose: () => {},
    onError: () => {},
    onSave: () => {},
}

SharingDialog.propTypes = {
    /** The id of the object to share */
    id: PropTypes.string.isRequired,
    /** The type of object to share */
    type: PropTypes.oneOf([VISUALIZATION, DASHBOARD]).isRequired,
    /** Used to seed the component with data to show whilst loading */
    initialSharingSettings: PropTypes.shape({
        /** Maps to meta.allowPublicAccess from the /sharing responsse */
        allowPublic: PropTypes.bool.isRequired,
        /** Maps to object.userGroupAccesses from the /sharing responsse */
        groups: PropTypes.objectOf(
            PropTypes.shape({
                access: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
            })
        ),
        /** Maps to object.displayName or object.name from the /sharing responsse */
        name: PropTypes.string,
        /** Maps to object.publicAccess from the /sharing responsse */
        public: PropTypes.oneOf([
            ACCESS_NONE,
            ACCESS_VIEW_ONLY,
            ACCESS_VIEW_AND_EDIT,
        ]),
        /** Maps to object.userAccesses from the /sharing responsse */
        users: PropTypes.objectOf(
            PropTypes.shape({
                access: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
            })
        ),
    }),
    onClose: PropTypes.func,
    onError: PropTypes.func,
    onSave: PropTypes.func,
}
