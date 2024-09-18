import { clearSensitiveCaches, useConfig } from '@dhis2/app-runtime'
import { colors } from '../../constants/index.js'
import {
    IconSettings24,
    IconInfo24,
    IconLogOut24,
    IconUser24,
    IconQuestion24,
} from '../../icons/index.js'
import { Card } from '../../card/index.js'
import { Center } from '../../center/index.js'
import { Divider } from '../../divider/index.js'
import { Layer } from '../../layer/index.js'
import { CircularLoader } from '../../loader/index.js'
import { MenuDivider, MenuItem } from '../../menu/index.js'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { DebugInfoMenuItem } from '../debug-info/debug-info-menu-item.js'
import { joinPath } from '../join-path.js'
import i18n from '../../locales/index.js'
import { ProfileHeader } from './profile-header.js'
import { UpdateNotification } from './update-notification.js'

const LoadingMask = () => (
    <Layer
        translucent
        disablePortal
        dataTest="headerbar-profile-menu-loading-mask"
    >
        <Center>
            <CircularLoader />
        </Center>
    </Layer>
)

const ProfileContents = ({
    name,
    email,
    avatarId,
    helpUrl,
    hideProfileMenu,
    showDebugInfoModal,
}) => {
    const { baseUrl } = useConfig()
    const [loading, setLoading] = useState(false)

    return (
        <Card>
            <div>
                <ProfileHeader name={name} email={email} avatarId={avatarId} />
                <Divider margin="13px 0 7px 0" />
                <ul data-test="headerbar-profile-menu">
                    <MenuItem
                        href={joinPath(
                            baseUrl,
                            'dhis-web-user-profile/#/settings'
                        )}
                        label={i18n.t('Settings')}
                        value="settings"
                        icon={<IconSettings24 color={colors.grey700} />}
                    />
                    <MenuItem
                        href={joinPath(
                            baseUrl,
                            'dhis-web-user-profile/#/account'
                        )}
                        label={i18n.t('Account')}
                        value="account"
                        icon={<IconUser24 color={colors.grey700} />}
                    />
                    {helpUrl && (
                        <MenuItem
                            href={helpUrl}
                            label={i18n.t('Help')}
                            value="help"
                            icon={<IconQuestion24 color={colors.grey700} />}
                        />
                    )}
                    <MenuItem
                        href={joinPath(
                            baseUrl,
                            'dhis-web-user-profile/#/aboutPage'
                        )}
                        label={i18n.t('About DHIS2')}
                        value="about"
                        icon={<IconInfo24 color={colors.grey700} />}
                    />
                    <MenuItem
                        href={joinPath(
                            baseUrl,
                            'dhis-web-commons-security/logout.action'
                        )}
                        // NB: By MenuItem implementation, this callback
                        // overwrites default navigation behavior but maintains
                        // the href attribute
                        onClick={async () => {
                            setLoading(true)
                            await clearSensitiveCaches()
                            setLoading(false)
                            window.location.assign(
                                joinPath(
                                    baseUrl,
                                    'dhis-web-commons-security/logout.action'
                                )
                            )
                        }}
                        label={i18n.t('Logout')}
                        value="logout"
                        icon={<IconLogOut24 color={colors.grey700} />}
                    />
                    <MenuDivider dense />
                    <DebugInfoMenuItem
                        hideProfileMenu={hideProfileMenu}
                        showDebugInfoModal={showDebugInfoModal}
                    />
                    <UpdateNotification hideProfileMenu={hideProfileMenu} />
                </ul>
            </div>

            {loading && <LoadingMask />}

            <style jsx>{`
                div {
                    width: 100%;
                    padding: 0;
                }

                ul {
                    padding: 0;
                    margin: 0;
                }

                a,
                a:hover,
                a:focus,
                a:active,
                a:visited {
                    text-decoration: none;
                    display: block;
                }
            `}</style>
        </Card>
    )
}

ProfileContents.propTypes = {
    hideProfileMenu: PropTypes.func.isRequired,
    showDebugInfoModal: PropTypes.func.isRequired,
    avatarId: PropTypes.string,
    email: PropTypes.string,
    helpUrl: PropTypes.string,
    name: PropTypes.string,
}

export const ProfileMenu = ({ ...props }) => (
    <div data-test="headerbar-profile-menu">
        <ProfileContents {...props} />
        <style jsx>{`
            div {
                z-index: 10000;
                position: absolute;
                inset-inline-end: 4px;
                width: 320px;
            }
        `}</style>
    </div>
)

ProfileMenu.propTypes = {
    hideProfileMenu: PropTypes.func.isRequired,
    showDebugInfoModal: PropTypes.func.isRequired,
    avatarId: PropTypes.string,
    email: PropTypes.string,
    helpUrl: PropTypes.string,
    name: PropTypes.string,
}
