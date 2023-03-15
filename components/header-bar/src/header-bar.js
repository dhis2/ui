import { useDataQuery, useConfig } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import Apps from './apps.js'
import { HeaderBarContextProvider } from './header-bar-context.js'
import { joinPath } from './join-path.js'
import i18n from './locales/index.js'
import { Logo } from './logo.js'
import { Notifications } from './notifications.js'
import { OnlineStatus } from './online-status.js'
import Profile from './profile.js'
import { Title } from './title.js'

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

export const HeaderBar = ({
    appName,
    className,
    updateAvailable,
    onApplyAvailableUpdate,
}) => {
    const { appName: configAppName, baseUrl, pwaEnabled } = useConfig()
    const { loading, error, data } = useDataQuery(query)

    const apps = useMemo(() => {
        const getPath = (path) =>
            path.startsWith('http:') || path.startsWith('https:')
                ? path
                : joinPath(baseUrl, 'api', path)

        return data?.apps.modules.map((app) => ({
            ...app,
            icon: getPath(app.icon),
            defaultAction: getPath(app.defaultAction),
        }))
    }, [data, baseUrl])

    // See https://jira.dhis2.org/browse/LIBS-180
    if (!loading && !error) {
        // TODO: This will run every render which is probably wrong!
        // Also, setting the global locale shouldn't be done in the headerbar
        const locale = data.user.settings.keyUiLocale || 'en'
        i18n.setDefaultNamespace('default')
        i18n.changeLanguage(locale)
    }

    return (
        <HeaderBarContextProvider
            updateAvailable={updateAvailable}
            onApplyAvailableUpdate={onApplyAvailableUpdate}
        >
            <header className={className}>
                <div className="main">
                    {!loading && !error && (
                        <>
                            <Logo />

                            <Title
                                app={appName || configAppName}
                                instance={data.title.applicationTitle}
                            />

                            <div className="right-control-spacer" />

                            {pwaEnabled && <OnlineStatus />}

                            <Notifications
                                interpretations={
                                    data.notifications.unreadInterpretations
                                }
                                messages={
                                    data.notifications
                                        .unreadMessageConversations
                                }
                                userAuthorities={data.user.authorities}
                            />
                            <Apps apps={apps} />

                            <Profile
                                name={data.user.name}
                                email={data.user.email}
                                avatarId={data.user.avatar?.id}
                                helpUrl={data.help.helpPageLink}
                            />
                        </>
                    )}
                </div>

                {pwaEnabled && !loading && !error && <OnlineStatus dense />}

                <style jsx>{`
                    .main {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        background-color: #2c6693;
                        border-bottom: 1px solid rgba(32, 32, 32, 0.15);
                        color: ${colors.white};
                        height: 48px;
                    }
                    .right-control-spacer {
                        margin-left: auto;
                    }
                `}</style>
            </header>
        </HeaderBarContextProvider>
    )
}

HeaderBar.propTypes = {
    appName: PropTypes.string,
    className: PropTypes.string,
    updateAvailable: PropTypes.bool,
    onApplyAvailableUpdate: PropTypes.func,
}
