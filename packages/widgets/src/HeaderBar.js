import React, { useEffect } from 'react'
import propTypes from '@dhis2/prop-types'

import { colors } from '@dhis2/ui-constants'

import Apps from './HeaderBar/Apps.js'
import Profile from './HeaderBar/Profile.js'

import { useDataQuery } from '@dhis2/app-runtime'

import { Logo } from './HeaderBar/Logo.js'
import { Title } from './HeaderBar/Title.js'

import { Notifications } from './HeaderBar/Notifications.js'

import './locales'
import i18n from '@dhis2/d2-i18n'

const query = {
    systemInfo: {
        resource: 'system/info',
    },
    user: {
        resource: 'me',
    },
    apps: {
        resource: 'action::menu/getModules',
    },
    notifications: {
        resource: 'me/dashboard',
    },
}

export const HeaderBar = ({ appName, className }) => {
    const { loading, error, data } = useDataQuery(query)

    useEffect(() => {
        const getPath = path =>
            path.startsWith('http:') || path.startsWith('https:')
                ? path
                : `${data.systemInfo.contextPath}/api/${path}`

        if (!loading && !error)
            data.apps.modules.forEach(app => {
                app.icon = getPath(app.icon)
                app.defaultAction = getPath(app.defaultAction)
            })
    }, [data])

    if (!loading && !error) {
        // TODO: This will run every render which is probably wrong!  Also, setting the global locale shouldn't be done in the headerbar
        const locale = data.user.settings.keyUiLocale || 'en'
        i18n.changeLanguage(locale)
    }

    return (
        <header className={className}>
            {!loading && !error && (
                <>
                    <Logo baseUrl={data.systemInfo.contextPath} />
                    <Title
                        app={appName}
                        instance={data.systemInfo.systemName}
                    />
                    <div className="right-control-spacer" />
                    <Notifications
                        interpretations={
                            data.notifications.unreadInterpretations
                        }
                        messages={data.notifications.unreadMessageConversations}
                        contextPath={data.systemInfo.contextPath}
                    />
                    <Apps
                        apps={data.apps.modules}
                        contextPath={data.systemInfo.contextPath}
                    />
                    <Profile
                        user={data.user}
                        contextPath={data.systemInfo.contextPath}
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
    appName: propTypes.string,
    className: propTypes.string,
}
