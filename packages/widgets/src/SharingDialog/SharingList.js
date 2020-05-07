import React from 'react'

import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'

import { sharingListStyles } from './SharingDialog.styles'
import {
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_EXTERNAL,
    SHARE_TARGET_GROUP,
    SHARE_TARGET_USER,
} from './sharingConstants'
import { SharingListItem } from './SharingListItem'

export const SharingList = ({ sharingSettings, onChange }) => (
    <div>
        <style jsx>{sharingListStyles}</style>
        <p>{i18n.t('Users and groups that have access')}</p>
        <table>
            <tbody>
                <SharingListItem
                    name={i18n.t('External')}
                    target={SHARE_TARGET_EXTERNAL}
                    access={sharingSettings.external}
                    onChange={access =>
                        onChange({ ...sharingSettings, external: access })
                    }
                />
                <SharingListItem
                    name={i18n.t('Public')}
                    target={SHARE_TARGET_PUBLIC}
                    access={sharingSettings.public}
                    onChange={access =>
                        onChange({ ...sharingSettings, public: access })
                    }
                />
                {Object.values(sharingSettings.groups).map(
                    ({ id, name, access }) => (
                        <SharingListItem
                            key={id}
                            name={name}
                            target={SHARE_TARGET_GROUP}
                            access={access}
                            onChange={newAccess =>
                                onChange({
                                    ...sharingSettings,
                                    groups: {
                                        ...sharingSettings.groups,
                                        [id]: {
                                            ...sharingSettings.groups[id],
                                            access: newAccess,
                                        },
                                    },
                                })
                            }
                            onRemove={() => {
                                const updatedSharingSettings = {
                                    ...sharingSettings,
                                }
                                delete updatedSharingSettings.groups[id]
                                onChange(updatedSharingSettings)
                            }}
                        />
                    )
                )}
                {Object.values(sharingSettings.users).map(
                    ({ id, name, access }) =>
                        access && (
                            <SharingListItem
                                key={id}
                                name={name}
                                target={SHARE_TARGET_USER}
                                access={access}
                                onChange={newAccess =>
                                    onChange({
                                        ...sharingSettings,
                                        users: {
                                            ...sharingSettings.users,
                                            [id]: {
                                                ...sharingSettings.users[id],
                                                access: newAccess,
                                            },
                                        },
                                    })
                                }
                                onRemove={() => {
                                    const updatedSharingSettings = {
                                        ...sharingSettings,
                                    }
                                    delete updatedSharingSettings.users[id]

                                    onChange(updatedSharingSettings)
                                }}
                            />
                        )
                )}
            </tbody>
        </table>
    </div>
)

SharingList.propTypes = {
    sharingSettings: PropTypes.object,
    onChange: PropTypes.func,
}
