import { useDataQuery, useConfig } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import i18n from '../locales/index.js'
import Apps from './Apps.js'
import { joinPath } from './joinPath.js'
import { Logo } from './Logo.js'
import { Notifications } from './Notifications.js'
import Profile from './Profile.js'
import { Title } from './Title.js'

const query = {
    title: {
        resource: 'systemSettings/applicationTitle',
    },
    help: {
        resource: 'systemSettings/helpPageLink',
    },
    user: {
        resource: 'me',
        params: {
            fields: ['authorities', 'avatar', 'email', 'name', 'settings'],
        },
    },
    apps: {
        resource: 'action::menu/getModules',
    },
    notifications: {
        resource: 'me/dashboard',
    },
}

const avatarUrl = (avatar, baseUrl) =>
    avatar ? joinPath(baseUrl, 'api/fileResources', avatar.id, 'data') : null

export const HeaderBar = ({ appName, className }) => {
    const { baseUrl } = useConfig()
    const { loading, error, data } = useDataQuery(query)

    const apps = useMemo(() => {
        const getPath = path =>
            path.startsWith('http:') || path.startsWith('https:')
                ? path
                : joinPath(baseUrl, 'api', path)

        return data?.apps.modules.map(app => ({
            ...app,
            icon: getPath(app.icon),
            defaultAction: getPath(app.defaultAction),
        }))
    }, [data])

    if (!loading && !error) {
        // TODO: This will run every render which is probably wrong!  Also, setting the global locale shouldn't be done in the headerbar
        const locale = data.user.settings.keyUiLocale || 'en'
        i18n.setDefaultNamespace('default')
        i18n.changeLanguage(locale)
    }

    return (
        <header className={className}>
            {!loading && !error && (
                <>
                    <Logo />
                    <Title
                        app={appName}
                        instance={data.title.applicationTitle}
                    />
                    <div className="right-control-spacer" />
                    <Notifications
                        interpretations={
                            data.notifications.unreadInterpretations
                        }
                        messages={data.notifications.unreadMessageConversations}
                        userAuthorities={data.user.authorities}
                    />
                    <Apps apps={apps} />
                    <Profile
                        name={data.user.name}
                        email={data.user.email}
                        avatarUrl={avatarUrl(data.user.avatar, baseUrl)}
                        helpUrl={data.help.helpPageLink}
                    />
                </>
            )}

            <style jsx>{`
                header {
                    background-color: #2c6693;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    height: 48px;
                    border-bottom: 1px solid rgba(32, 32, 32, 0.15);
                    color: ${colors.white};
                }
                .right-control-spacer {
                    margin-left: auto;
                }
            `}</style>
        </header>
    )
}

HeaderBar.propTypes = {
    appName: PropTypes.string,
    className: PropTypes.string,
}
