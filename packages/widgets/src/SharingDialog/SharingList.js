import React from 'react'

import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import { Divider } from '@dhis2/ui'

import { sharingCommonStyles, sharingListStyles } from './SharingDialog.styles'
import {
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_EXTERNAL,
    SHARE_TARGET_GROUP,
    SHARE_TARGET_USER,
    accessStrings,
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
} from './sharingConstants'
import { SharingListItem } from './SharingListItem'

export const SharingList = ({ sharingSettings, onChange, onRemove }) => (
    <>
        <style jsx>{sharingCommonStyles}</style>
        <style jsx>{sharingListStyles}</style>
        <p className="sharing-subtitle">
            {i18n.t('Users, groups and roles that currently have access')}
        </p>
        <Divider />
        <div className="sharing-headers">
            <div className="sharing-header-1">
                {i18n.t('User / Group / Role')}
            </div>
            <div className="sharing-header-2">{i18n.t('Access level')}</div>
        </div>
        <div className="sharing-list">
            <SharingListItem
                name={i18n.t('External users')}
                target={SHARE_TARGET_EXTERNAL}
                access={sharingSettings.external}
                accessOptions={[ACCESS_NONE, ACCESS_VIEW_ONLY]}
                disabled={!sharingSettings.allowExternal}
                onChange={access => onChange({ type: 'external', access })}
            />
            <SharingListItem
                name={i18n.t('All users')}
                target={SHARE_TARGET_PUBLIC}
                access={sharingSettings.public}
                accessOptions={Object.keys(accessStrings)}
                disabled={!sharingSettings.allowPublic}
                onChange={newAccess =>
                    onChange({ type: 'public', access: newAccess })
                }
            />
            {Object.values(sharingSettings.groups).map(
                ({ id, name, access }) => (
                    <SharingListItem
                        key={id}
                        name={name}
                        target={SHARE_TARGET_GROUP}
                        access={access}
                        accessOptions={[ACCESS_VIEW_ONLY, ACCESS_VIEW_AND_EDIT]}
                        onChange={newAccess =>
                            onChange({
                                type: 'group',
                                id,
                                access: newAccess,
                            })
                        }
                        onRemove={() => onRemove({ type: 'group', id })}
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
                            accessOptions={[
                                ACCESS_VIEW_ONLY,
                                ACCESS_VIEW_AND_EDIT,
                            ]}
                            onChange={newAccess =>
                                onChange({
                                    type: 'user',
                                    id,
                                    access: newAccess,
                                })
                            }
                            onRemove={() => onRemove({ type: 'user', id })}
                        />
                    )
            )}
        </div>
    </>
)

SharingList.propTypes = {
    sharingSettings: PropTypes.object,
    onChange: PropTypes.func,
    onRemove: PropTypes.func,
}
