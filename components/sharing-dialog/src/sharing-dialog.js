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
    replaceAccessWithConstant,
    createOnChangePayload,
    createOnAddPayload,
    createOnRemovePayload,
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
        const users = Object.keys(initialSharingSettings.users).map(
            replaceAccessWithConstant
        )
        const groups = Object.keys(initialSharingSettings.groups).map(
            replaceAccessWithConstant
        )

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
    const users = object.userAccesses.map(replaceAccessWithConstant)
    const groups = object.userGroupAccesses.map(replaceAccessWithConstant)

    /**
     * Handlers
     */

    const onAdd = ({ type, id, access, name }) => {
        const data = createOnAddPayload({
            object,
            type,
            access,
            id,
            name,
        })
        mutate({ data })
    }

    const onChange = ({ type, id, access }) => {
        const data = createOnChangePayload({
            object,
            type,
            access,
            id,
        })
        mutate({ data })
    }

    const onRemove = ({ type, id }) => {
        const data = createOnRemovePayload({
            object,
            type,
            id,
        })
        mutate({ data })
    }

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
                    onAdd={onAdd}
                    onChange={onChange}
                    onRemove={onRemove}
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
        allowPublic: PropTypes.bool.isRequired,
        groups: PropTypes.objectOf(
            PropTypes.shape({
                access: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
            })
        ),
        name: PropTypes.string,
        public: PropTypes.oneOf([
            ACCESS_NONE,
            ACCESS_VIEW_ONLY,
            ACCESS_VIEW_AND_EDIT,
        ]),
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
