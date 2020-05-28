import { useConfig } from '@dhis2/app-runtime'
import React from 'react'
import propTypes from '@dhis2/prop-types'

import { NotificationIcon } from './NotificationIcon.js'
import { joinPath } from './joinPath.js'

export const Notifications = ({ interpretations, messages }) => {
    const { baseUrl } = useConfig()

    return (
        <div data-test="headerbar-notifications">
            <NotificationIcon
                count={interpretations}
                href={joinPath(baseUrl, 'dhis-web-interpretation')}
                kind="message"
                dataTestId="headerbar-interpretations"
            />

            <NotificationIcon
                message="email"
                count={messages}
                href={joinPath(baseUrl, 'dhis-web-messaging')}
                kind="interpretation"
                dataTestId="headerbar-messages"
            />

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
}
