import { useDataQuery, useConfig } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import React, { useEffect, useMemo } from 'react'
import Apps from './apps.tsx'
import { HeaderBarContextProvider } from './header-bar-context.tsx'
import { joinPath } from './join-path.ts'
import i18n from './locales/index.js'
import { Logo } from './logo.tsx'
import { Notifications } from './notifications.tsx'
import { OnlineStatus } from './online-status.tsx'
import Profile from './profile.tsx'
import { Title } from './title.tsx'

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

export interface HeaderBarProps {
    appName?: string
    className?: string
    /**
     * `skipI18n` skips initalising internationalisation in the UI component
     * This is useful for app-platform apps, as the platform already sets i18n, so it can skip i18n (and avoid race conditions).
     * For non-platform apps, they can continue relying on this logic running for backwards compatibility.
     * */
    skipI18n?: boolean
    updateAvailable?: boolean
    onApplyAvailableUpdate?: () => void
}

interface QueryData {
    title: { applicationTitle: string }
    help: { helpPageLink: string }
    user: {
        authorities: string[]
        avatar?: { id: string }
        email: string
        name: string
        settings: { keyUiLocale?: string }
    }
    apps: {
        modules: Array<{
            displayName?: string
            name: string
            defaultAction: string
            icon: string
        }>
    }
    notifications: {
        unreadInterpretations: number
        unreadMessageConversations: number
    }
}

export const HeaderBar = ({
    appName,
    className,
    updateAvailable,
    onApplyAvailableUpdate,
    skipI18n,
}: HeaderBarProps) => {
    const {
        appName: configAppName,
        baseUrl,
        pwaEnabled,
    } = useConfig() as ReturnType<typeof useConfig> & { pwaEnabled?: boolean }
    const { loading, error, data } = useDataQuery(query)

    const typedData = data as unknown as QueryData | undefined

    const apps = useMemo(() => {
        const getPath = (path: string) =>
            path.startsWith('http:') || path.startsWith('https:')
                ? path
                : joinPath(baseUrl, 'api', path)

        return typedData?.apps.modules.map((app) => ({
            ...app,
            icon: getPath(app.icon),
            defaultAction: getPath(app.defaultAction),
        }))
    }, [typedData, baseUrl])

    useEffect(() => {
        if (!loading && !error && !skipI18n) {
            // This is the "legacy" way of localising the header bar, which is necesasry for external (non-platform) apps
            // For platform apps, setting i18n is handled by the app-shell so this logic is redundant (and running it twice caused issues)
            // For external apps, this logic is kept for backwards compatibility, but they also have the option of passing `skipI18n`
            // and initialising i18n in the consumer
            const locale = typedData?.user?.settings?.keyUiLocale || 'en'
            i18n.setDefaultNamespace('default')
            i18n.changeLanguage(locale)
        }
    }, [typedData?.user?.settings?.keyUiLocale, error, loading, skipI18n])

    return (
        <HeaderBarContextProvider
            updateAvailable={updateAvailable}
            onApplyAvailableUpdate={onApplyAvailableUpdate}
        >
            <header className={className}>
                <div className="main">
                    {!loading && !error && typedData && (
                        <>
                            <Logo />

                            <Title
                                app={appName || configAppName}
                                instance={typedData.title.applicationTitle}
                            />

                            <div className="right-control-spacer" />

                            {pwaEnabled && <OnlineStatus />}

                            <Notifications
                                interpretations={
                                    typedData.notifications
                                        .unreadInterpretations
                                }
                                messages={
                                    typedData.notifications
                                        .unreadMessageConversations
                                }
                                userAuthorities={typedData.user.authorities}
                            />
                            <Apps apps={apps!} />

                            <Profile
                                name={typedData.user.name}
                                email={typedData.user.email}
                                avatarId={typedData.user.avatar?.id}
                                helpUrl={typedData.help.helpPageLink}
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
                        color: ${colors.white};
                        height: 48px;
                    }
                    .right-control-spacer {
                        margin-inline-start: auto;
                    }
                `}</style>
            </header>
        </HeaderBarContextProvider>
    )
}
