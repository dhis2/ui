import { colors } from '@dhis2/ui-constants'
// import { NoticeBox } from '@dhis2-ui/notice-box'
import PropTypes from 'prop-types'
import React from 'react'
import {
    SHARE_TARGET_PUBLIC,
    SHARE_TARGET_GROUP,
    SHARE_TARGET_USER,
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
} from '../constants.js'
import i18n from '../locales/index.js'
import { Title } from '../text/index.js'
import { ListItem } from './list-item.js'

// const WriteAccessRemoveWarning = () => (
//     <NoticeBox error>
//         <div>
//             Removing metadata write access would remove your write access.
//         </div>
//         <div>
//             Make sure that you or a user group of which you are a member has
//             metadata write access before removing metadata write access here.
//         </div>
//     </NoticeBox>
// )

export const AccessList = ({
    onChange,
    onRemove,
    publicAccess,
    allowPublicAccess,
    users,
    groups,
    dataSharing,
}) => {
    const accessOptions = [ACCESS_NONE, ACCESS_VIEW_ONLY, ACCESS_VIEW_AND_EDIT]
    return (
        <>
            <Title>
                {i18n.t('Users and groups that currently have access')}
            </Title>
            <div className="header">
                <div
                    className={
                        dataSharing
                            ? 'header-start-column-data'
                            : 'header-start-column-metadata'
                    }
                >
                    {i18n.t('User / Group')}
                </div>
                <div
                    className={
                        dataSharing
                            ? 'header-end-column-data'
                            : 'header-end-column-metadata'
                    }
                >
                    <span className="hea">{i18n.t('Access level')}</span>
                </div>
            </div>
            <div className="list">
                <>
                    <ListItem
                        name={i18n.t('All users')}
                        target={SHARE_TARGET_PUBLIC}
                        access={publicAccess}
                        accessOptions={accessOptions}
                        disabled={!allowPublicAccess}
                        onChange={(newAccess) =>
                            onChange({ type: 'public', access: newAccess })
                        }
                        dataSharing={dataSharing}
                        allUsersItem={true}
                    />
                </>
                {groups.map(({ id, name, access }) => (
                    <ListItem
                        key={id}
                        name={name}
                        target={SHARE_TARGET_GROUP}
                        access={access}
                        accessOptions={accessOptions}
                        onChange={(newAccess) =>
                            onChange({
                                type: 'group',
                                id,
                                access: newAccess,
                            })
                        }
                        onRemove={() => onRemove({ type: 'group', id })}
                        dataSharing={dataSharing}
                    />
                ))}
                {users.map(
                    ({ id, name, access }) =>
                        access && (
                            <ListItem
                                key={id}
                                id={id}
                                name={name}
                                target={SHARE_TARGET_USER}
                                access={access}
                                accessOptions={accessOptions}
                                onChange={(newAccess) =>
                                    onChange({
                                        type: 'user',
                                        id,
                                        access: newAccess,
                                    })
                                }
                                onRemove={() => onRemove({ type: 'user', id })}
                                dataSharing={dataSharing}
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

                .header-start-column-metadata {
                    width: 65%;
                }

                .header-end-column-metadata {
                    margin-inline-start: auto;
                    width: 35%;
                }

                .header-start-column-data {
                    width: 35%;
                }

                .header-end-column-data {
                    margin-inline-start: auto;
                    width: 65%;
                }

                .hea {
                    display: inline-block;
                    margin-inline-start: 8px;
                }

                .list {
                    display: flex;
                    flex-direction: column;
                    overflow-y: auto;
                }
            `}</style>
        </>
    )
}

AccessList.propTypes = {
    allowPublicAccess: PropTypes.bool.isRequired,
    dataSharing: PropTypes.bool.isRequired,
    groups: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            access: PropTypes.shape({
                data: PropTypes.oneOf([
                    ACCESS_NONE,
                    ACCESS_VIEW_ONLY,
                    ACCESS_VIEW_AND_EDIT,
                ]),
                metadata: PropTypes.oneOf([
                    ACCESS_NONE,
                    ACCESS_VIEW_ONLY,
                    ACCESS_VIEW_AND_EDIT,
                ]),
            }),
        })
    ).isRequired,
    publicAccess: PropTypes.shape({
        data: PropTypes.oneOf([
            ACCESS_NONE,
            ACCESS_VIEW_ONLY,
            ACCESS_VIEW_AND_EDIT,
        ]),
        metadata: PropTypes.oneOf([
            ACCESS_NONE,
            ACCESS_VIEW_ONLY,
            ACCESS_VIEW_AND_EDIT,
        ]),
    }).isRequired,
    users: PropTypes.arrayOf(
        PropTypes.shape({
            access: PropTypes.shape({
                data: PropTypes.oneOf([
                    ACCESS_NONE,
                    ACCESS_VIEW_ONLY,
                    ACCESS_VIEW_AND_EDIT,
                ]),
                metadata: PropTypes.oneOf([
                    ACCESS_NONE,
                    ACCESS_VIEW_ONLY,
                    ACCESS_VIEW_AND_EDIT,
                ]),
            }).isRequired,
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}
