import { useConfig } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React from 'react'
import { joinPath } from './join-path.js'
import { NotificationIcon } from './notification-icon.js'

/*
 AUTHORITIES:
 - ALL: superuser
 - M_dhis-web-interpretation: access to interpretations app
 - M_dhis-web-messaging: access to messaging app
 */

const hasAuthority = (userAuthorities, authId) =>
    Array.isArray(userAuthorities) &&
    userAuthorities.some(
        (userAuthId) => userAuthId === 'ALL' || userAuthId === authId
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
    interpretations: PropTypes.number,
    messages: PropTypes.number,
    userAuthorities: PropTypes.arrayOf(PropTypes.string),
}
