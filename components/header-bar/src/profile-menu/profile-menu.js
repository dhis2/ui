import { Card } from '@dhis2-ui/card'
import { Center } from '@dhis2-ui/center'
import { Divider } from '@dhis2-ui/divider'
import { Layer } from '@dhis2-ui/layer'
import { CircularLoader } from '@dhis2-ui/loader'
import { MenuItem } from '@dhis2-ui/menu'
import { clearSensitiveCaches, useConfig } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import {
    IconSettings24,
    IconInfo24,
    IconLogOut24,
    IconUser24,
    IconQuestion24,
} from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { joinPath } from '../join-path.js'
import i18n from '../locales/index.js'
import { InstanceAndAppInfo } from './instance-and-app-info.js'
import { ProfileHeader } from './profile-header.js'

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
    appName,
    appVersion,
    name,
    email,
    avatarId,
    helpUrl,
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
                    <InstanceAndAppInfo
                        appName={appName}
                        appVersion={appVersion}
                    />
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
    appName: PropTypes.string,
    appVersion: PropTypes.string,
    avatarId: PropTypes.string,
    email: PropTypes.string,
    helpUrl: PropTypes.string,
    name: PropTypes.string,
}

export const ProfileMenu = ({
    appName,
    appVersion,
    avatarId,
    name,
    email,
    helpUrl,
}) => (
    <div data-test="headerbar-profile-menu">
        <ProfileContents
            appName={appName}
            appVersion={appVersion}
            name={name}
            email={email}
            avatarId={avatarId}
            helpUrl={helpUrl}
        />
        <style jsx>{`
            div {
                z-index: 10000;
                position: absolute;
                top: 34px;
                right: -6px;
                width: 310px;
                border-top: 4px solid transparent;
            }
        `}</style>
    </div>
)

ProfileMenu.propTypes = {
    appName: PropTypes.string,
    appVersion: PropTypes.string,
    avatarId: PropTypes.string,
    email: PropTypes.string,
    helpUrl: PropTypes.string,
    name: PropTypes.string,
}
