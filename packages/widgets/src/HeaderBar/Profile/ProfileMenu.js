import { Account } from '@dhis2/ui-icons'
import { Card, Divider, MenuItem } from '@dhis2/ui-core'
import { Exit } from '@dhis2/ui-icons'
import { Help } from '@dhis2/ui-icons'
import { Info } from '@dhis2/ui-icons'
import { Settings } from '@dhis2/ui-icons'
import { colors } from '@dhis2/ui-constants'
import { useConfig } from '@dhis2/app-runtime'
import React from 'react'
import css from 'styled-jsx/css'
import i18n from '@dhis2/d2-i18n'
import propTypes from '@dhis2/prop-types'

import { ProfileHeader } from './ProfileHeader.js'
import { joinPath } from '../joinPath.js'

const iconStyle = css.resolve`
    svg {
        fill: ${colors.grey700};
        cursor: pointer;
        height: 24px;
        width: 24px;
    }
`

const ProfileContents = ({ name, email, avatar, helpUrl }) => {
    const { baseUrl } = useConfig()

    const help = helpUrl ? helpUrl : 'https://docs.dhis2.org/master/en/user/html/dhis2_user_manual_en.html'

    return (
        <Card>
            <div>
                <ProfileHeader name={name} email={email} img={avatar} />
                <Divider margin="13px 0 7px 0" />
                <ul data-test="headerbar-profile-menu">
                    <MenuItem
                        href={joinPath(baseUrl, 'dhis-web-user-profile/#/settings')}
                        label={i18n.t('Settings')}
                        value='settings'
                        icon={<Settings className={iconStyle.className} />}
                    />
                    <MenuItem
                        href={joinPath(baseUrl, 'dhis-web-user-profile/#/account')}
                        label={i18n.t('Account')}
                        value='account'
                        icon={<Account className={iconStyle.className} />}
                    />
                    <MenuItem
                        href={help}
                        label={i18n.t('Help')}
                        value='help'
                        icon={<Help className={iconStyle.className} />}
                    />
                    <MenuItem
                        href={joinPath(baseUrl, 'dhis-web-user-profile/#/aboutPage')}
                        label={i18n.t('About DHIS2')}
                        value='about'
                        icon={<Info className={iconStyle.className} />}
                    />
                    <MenuItem
                        href={joinPath(baseUrl, 'dhis-web-commons-security/logout.action')}
                        label={i18n.t('Logout')}
                        value='logout'
                        icon={<Exit className={iconStyle.className} />}
                    />
                </ul>
            </div>

            {iconStyle.styles}
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
    avatar: propTypes.element,
    email: propTypes.string,
    name: propTypes.string,
    helpUrl: propTypes.string,
}

export const ProfileMenu = ({ avatar, name, email, helpUrl }) => (
    <div data-test="headerbar-profile-menu">
        <ProfileContents name={name} email={email} avatar={avatar} helpUrl={helpUrl} />
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
    avatar: propTypes.element,
    email: propTypes.string,
    name: propTypes.string,
    helpUrl: propTypes.string,
}
