import { useConfig } from '@dhis2/app-runtime'
import propTypes from '@dhis2/prop-types'
import React from 'react'
import { joinPath } from './joinPath.js'
import { NotificationIcon } from './NotificationIcon.js'

/*
 AUTHORITIES:
 - ALL: superuser
 - M_dhis-web-interpretation: access to interpretations app
 - M_dhis-web-messaging: access to messaging app
 */

const hasAuthority = (userAuthorities, authId) =>
    Array.isArray(userAuthorities) &&
    userAuthorities.some(
        userAuthId => userAuthId === 'ALL' || userAuthId === authId
    )

export const Notifications = ({
    interpretations,
    messages,
    userAuthorities,
}) => {
    const { baseUrl } = useConfig()

    return (
        <div data-test="headerbar-notifications">
            {hasAuthority(userAuthorities, 'M_dhis-web-interpretation') && (
                <NotificationIcon
                    count={interpretations}
                    href={joinPath(baseUrl, 'dhis-web-interpretation')}
                    kind="message"
                    dataTestId="headerbar-interpretations"
                />
            )}

            {hasAuthority(userAuthorities, 'M_dhis-web-messaging') && (
                <NotificationIcon
                    message="email"
                    count={messages}
                    href={joinPath(baseUrl, 'dhis-web-messaging')}
                    kind="interpretation"
                    dataTestId="headerbar-messages"
                />
            )}

            <style jsx>{`
                div {
                    user-select: none;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}

Notifications.propTypes = {
    interpretations: propTypes.number,
    messages: propTypes.number,
    userAuthorities: propTypes.arrayOf(propTypes.string),
}
