import { useAlert, useDataQuery, useDataMutation } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { FetchingContext } from './context/index.js'
import {
    convertAccessToConstant,
    mapUsers,
    mapGroups,
    createOnChange,
    createOnAdd,
    createOnDelete,
} from './helpers/index.js'
import { Modal } from './modal/index.js'
import { ACCESS_NONE, VISUALIZATION, DASHBOARD } from './sharing-constants.js'
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
        allowExternal: true,
        allowPublic: true,
        external: ACCESS_NONE,
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
    initialSharingSettings: PropTypes.shape({
        allowExternal: PropTypes.bool,
        allowPublic: PropTypes.bool,
        external: PropTypes.string,
        groups: PropTypes.object,
        name: PropTypes.string,
        public: PropTypes.string,
        users: PropTypes.object,
    }),
    onClose: PropTypes.func,
    onError: PropTypes.func,
    onSave: PropTypes.func,
}
