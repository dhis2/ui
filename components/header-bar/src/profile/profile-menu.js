import { Card } from '@dhis2-ui/card'
import { Center } from '@dhis2-ui/center'
import { Layer } from '@dhis2-ui/layer'
import { CircularLoader } from '@dhis2-ui/loader'
import { MenuItem, MenuSectionHeader } from '@dhis2-ui/menu'
import { useConfig, clearSensitiveCaches } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import {
    IconSettings16,
    IconMore16,
    IconLock16,
    IconLaunch16,
    IconLogOut16,
    IconUser16,
    IconInfoFilled16,
} from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { resolve } from 'styled-jsx/css'
import { joinPath } from '../join-path.js'
import i18n from '../locales/index.js'
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

const infoItemStyles = resolve`
    li {
        color: ${colors.grey700};
        font-size: 14px;
        font-style: italic;
        user-select: auto;
    }
    li:hover {
        background-color: ${colors.white};
        cursor: default;
    }
`

const ProfileInfoItem = ({ children }) => (
    <>
        <MenuItem
            dense
            className={infoItemStyles.className}
            label={children}
            dataTest=""
        />

        {infoItemStyles.styles}
    </>
)
ProfileInfoItem.propTypes = {
    children: PropTypes.string,
}

const ProfileContents = ({ name, email, avatarId, helpUrl }) => {
    const { baseUrl } = useConfig()
    const [loading, setLoading] = useState(false)

    return (
        <Card>
            <div>
                <ProfileHeader name={name} email={email} avatarId={avatarId} />
                {/* <Divider margin="13px 0 7px 0" /> */}
                <ul data-test="headerbar-profile-menu">
                    <MenuItem
                        dense
                        href={joinPath(
                            baseUrl,
                            'dhis-web-user-profile/#/profile'
                        )}
                        label={i18n.t('Profile')}
                        value="profile"
                        icon={<IconUser16 color={colors.grey600} />}
                    />
                    <MenuItem
                        dense
                        href={joinPath(
                            baseUrl,
                            'dhis-web-user-profile/#/settings'
                        )}
                        label={i18n.t('Settings')}
                        value="settings"
                        icon={<IconSettings16 color={colors.grey600} />}
                    />
                    <MenuItem
                        dense
                        href={joinPath(
                            baseUrl,
                            'dhis-web-user-profile/#/account'
                        )}
                        label={i18n.t('Account security')}
                        value="account"
                        icon={<IconLock16 color={colors.grey600} />}
                    />
                    <MenuItem
                        dense
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
                        label={i18n.t('Log out')}
                        value="logout"
                        icon={<IconLogOut16 color={colors.grey600} />}
                    />
                    <MenuSectionHeader label="About" dense />
                    {helpUrl && (
                        <MenuItem
                            dense
                            href={helpUrl}
                            label={i18n.t('DHIS2 documentation')}
                            value="help"
                            icon={<IconLaunch16 color={colors.grey600} />}
                        />
                    )}
                    <MenuItem
                        dense
                        href={joinPath(
                            baseUrl,
                            'dhis-web-user-profile/#/aboutPage'
                        )}
                        label={i18n.t('About DHIS2')}
                        value="about"
                        icon={<IconMore16 color={colors.grey600} />}
                    />
                    <ProfileInfoItem>
                        DHIS2 2.38, Build AAA00011
                    </ProfileInfoItem>
                    <MenuSectionHeader label="App" dense />
                    <MenuItem
                        dense
                        href={helpUrl}
                        label={i18n.t('App documentation')}
                        value="app-help"
                        icon={<IconLaunch16 color={colors.grey600} />}
                    />
                    <ProfileInfoItem>
                        Data Visualizer 001.10101.AA
                    </ProfileInfoItem>
                    <MenuItem
                        dense
                        label="New app version available – Reload"
                        value="new-version"
                        icon={<IconInfoFilled16 color={colors.blue600} />}
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
            `}</style>
        </Card>
    )
}

ProfileContents.propTypes = {
    avatarId: PropTypes.string,
    email: PropTypes.string,
    helpUrl: PropTypes.string,
    name: PropTypes.string,
}

export const ProfileMenu = ({ avatarId, name, email, helpUrl }) => (
    <div data-test="headerbar-profile-menu">
        <ProfileContents
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
    avatarId: PropTypes.string,
    email: PropTypes.string,
    helpUrl: PropTypes.string,
    name: PropTypes.string,
}
