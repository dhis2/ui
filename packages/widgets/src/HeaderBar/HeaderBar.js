import { useDataQuery, useConfig } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import React, { useMemo } from 'react'
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
        resource: 'systemSettings/helpLink',
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
                        avatar={data.user.avatar}
                        baseUrl={baseUrl}
                        helpUrl={data.help.helpLink}
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
