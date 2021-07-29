import { Card } from '@dhis2-ui/card'
import { Divider } from '@dhis2-ui/divider'
import { MenuItem } from '@dhis2-ui/menu'
import { useConfig } from '@dhis2/app-runtime'
import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import {
    IconSettings24,
    IconInfo24,
    IconLogOut24,
    IconUser24,
    IconQuestion24,
} from '@dhis2/ui-icons'
import React from 'react'
import { joinPath } from '../join-path.js'
import i18n from '../locales/index.js'
import { ProfileHeader } from './profile-header.js'

const ProfileContents = ({ name, email, avatarUrl, helpUrl }) => {
    const { baseUrl } = useConfig()

    return (
        <Card>
            <div>
                <ProfileHeader
                    name={name}
                    email={email}
                    avatarUrl={avatarUrl}
                />
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
                        label={i18n.t('Logout')}
                        value="logout"
                        icon={<IconLogOut24 color={colors.grey700} />}
                    />
                </ul>
            </div>

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
    avatarUrl: propTypes.string,
    email: propTypes.string,
    helpUrl: propTypes.string,
    name: propTypes.string,
}

export const ProfileMenu = ({ avatarUrl, name, email, helpUrl }) => (
    <div data-test="headerbar-profile-menu">
        <ProfileContents
            name={name}
            email={email}
            avatarUrl={avatarUrl}
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
    avatarUrl: propTypes.string,
    email: propTypes.string,
    helpUrl: propTypes.string,
    name: propTypes.string,
}
