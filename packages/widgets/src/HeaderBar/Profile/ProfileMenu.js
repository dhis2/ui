import React from 'react'
import propTypes from '@dhis2/prop-types'
import css from 'styled-jsx/css'

import i18n from '@dhis2/d2-i18n'
import { Card, Divider, MenuItem } from '@dhis2/ui-core'
import { colors } from '@dhis2/ui-constants'

import { Settings } from '../../icons/Settings.js'
import { Info } from '../../icons/Info.js'
import { Help } from '../../icons/Help.js'
import { Exit } from '../../icons/Exit.js'
import { Account } from '../../icons/Account.js'

import { ProfileHeader } from './ProfileHeader.js'

const iconStyle = css.resolve`
    svg {
        fill: ${colors.grey700};
        cursor: pointer;
        height: 24px;
        width: 24px;
    }
`

const list = [
    {
        icon: <Settings className={iconStyle.className} />,
        label: i18n.t('Settings'),
        value: 'settings',
        link: `/dhis-web-user-profile/#/settings`,
    },
    {
        icon: <Account className={iconStyle.className} />,
        label: i18n.t('Account'),
        value: 'account',
        link: `/dhis-web-user-profile/#/account`,
    },
    {
        icon: <Help className={iconStyle.className} />,
        label: i18n.t('Help'),
        value: 'help',
        link:
            'https://docs.dhis2.org/master/en/user/html/dhis2_user_manual_en.html',
        nobase: true,
    },
    {
        icon: <Info className={iconStyle.className} />,
        label: i18n.t('About DHIS2'),
        value: 'about',
        link: `/dhis-web-user-profile/#/aboutPage`,
    },
    {
        icon: <Exit className={iconStyle.className} />,
        label: i18n.t('Logout'),
        value: 'logout',
        link: `/dhis-web-commons-security/logout.action`,
    },
]

const ProfileContents = ({ name, email, avatar, contextPath }) => (
    <Card>
        <div>
            <ProfileHeader
                name={name}
                email={email}
                img={avatar}
                contextPath={contextPath}
            />
            <Divider margin="13px 0 7px 0" />
            <ul data-test="headerbar-profile-menu">
                {list.map(({ label, value, icon, link, nobase }) => (
                    <MenuItem
                        href={nobase ? link : `${contextPath}${link}`}
                        key={`h-mi-${value}`}
                        label={label}
                        value={value}
                        icon={icon}
                    />
                ))}
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
ProfileContents.propTypes = {
    avatar: propTypes.element,
    contextPath: propTypes.string,
    email: propTypes.string,
    name: propTypes.string,
}

export const ProfileMenu = ({ avatar, name, email, contextPath }) => (
    <div data-test="headerbar-profile-menu">
        <ProfileContents
            name={name}
            email={email}
            avatar={avatar}
            contextPath={contextPath}
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
    avatar: propTypes.element,
    contextPath: propTypes.string,
    email: propTypes.string,
    name: propTypes.string,
}
