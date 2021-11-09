import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'
import {
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_GROUP,
    SHARE_TARGET_USER,
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
} from '../sharing-constants.js'
import { Title } from '../text/index.js'
import { SharingListItem } from './sharing-list-item.js'

export const AccessList = ({
    onChange,
    onRemove,
    publicAccess,
    allowPublicAccess,
    users,
    groups,
}) => (
    <>
        <Title>{i18n.t('Users and groups that currently have access')}</Title>
        <div className="header">
            <div className="header-left-column">{i18n.t('User / Group')}</div>
            <div className="header-right-column">{i18n.t('Access level')}</div>
        </div>
        <div className="list">
            <SharingListItem
                name={i18n.t('All users')}
                target={SHARE_TARGET_PUBLIC}
                access={publicAccess}
                accessOptions={[
                    ACCESS_NONE,
                    ACCESS_VIEW_ONLY,
                    ACCESS_VIEW_AND_EDIT,
                ]}
                disabled={!allowPublicAccess}
                onChange={(newAccess) =>
                    onChange({ type: 'public', access: newAccess })
                }
            />
            {groups.map(({ id, name, access }) => (
                <SharingListItem
                    key={id}
                    name={name}
                    target={SHARE_TARGET_GROUP}
                    access={access}
                    accessOptions={[ACCESS_VIEW_ONLY, ACCESS_VIEW_AND_EDIT]}
                    onChange={(newAccess) =>
                        onChange({
                            type: 'group',
                            id,
                            access: newAccess,
                        })
                    }
                    onRemove={() => onRemove({ type: 'group', id })}
                />
            ))}
            {users.map(
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
                            onChange={(newAccess) =>
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
        <style jsx>{`
            .header {
                display: flex;
                padding: 10px 8px;
                margin: 0 0 8px 0;
                background-color: ${colors.grey200};
                color: ${colors.grey900};
                font-size: 13px;
            }

            .header-left-column {
                flex: 2;
            }

            .header-right-column {
                flex: 1;
            }

            .list {
                display: flex;
                flex-direction: column;
                overflow-y: auto;
            }
        `}</style>
    </>
)

AccessList.propTypes = {
    allowPublicAccess: PropTypes.bool.isRequired,
    groups: PropTypes.arrayOf(
        PropTypes.shape({
            access: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    publicAccess: PropTypes.string.isRequired,
    users: PropTypes.arrayOf(
        PropTypes.shape({
            access: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}
