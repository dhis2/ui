import { useConfig } from '@dhis2/app-runtime'
import React from 'react'
import { joinPath } from './join-path.ts'
import i18n from './locales/index.js'
import { NotificationIcon } from './notification-icon.tsx'

const hasAuthority = (userAuthorities: string[], authId: string): boolean =>
    Array.isArray(userAuthorities) &&
    userAuthorities.some(
        (userAuthId) => userAuthId === 'ALL' || userAuthId === authId
    )

export interface NotificationsProps {
    interpretations?: number
    messages?: number
    userAuthorities?: string[]
}

export const Notifications = ({
    interpretations,
    messages,
    userAuthorities,
}: NotificationsProps) => {
    const { baseUrl } = useConfig()

    return (
        <div data-test="headerbar-notifications">
            {hasAuthority(
                userAuthorities || [],
                'M_dhis-web-interpretation'
            ) && (
                <NotificationIcon
                    count={interpretations}
                    href={joinPath(baseUrl, 'dhis-web-interpretation')}
                    kind="message"
                    dataTestId="headerbar-interpretations"
                    title={i18n.t('Interpretations')}
                    aria-label={i18n.t('Interpretations')}
                />
            )}

            {hasAuthority(
                userAuthorities || [],
                'M_dhis-web-messaging'
            ) && (
                <NotificationIcon
                    count={messages}
                    href={joinPath(baseUrl, 'dhis-web-messaging')}
                    kind="interpretation"
                    dataTestId="headerbar-messages"
                    title={i18n.t('Messages')}
                    aria-label={i18n.t('Messages')}
                />
            )}

            <style jsx>{`
                div {
                    user-select: none;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    height: 100%;
                }
            `}</style>
        </div>
    )
}
