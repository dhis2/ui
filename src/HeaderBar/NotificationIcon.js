import React from 'react'
import propTypes from '@dhis2/prop-types'
import css from 'styled-jsx/css'

import { colors, theme } from '@dhis2/ui-core'

import { Email } from '../icons/Email.js'
import { Message } from '../icons/Message.js'

const messageIcon = css.resolve`
    svg {
        fill: ${colors.white};
        cursor: pointer;
        height: 24px;
        width: 24px;
    }
`

const interpretationIcon = css.resolve`
    svg {
        fill: ${colors.white};
        cursor: pointer;
        height: 24px;
        width: 24px;
    }
`

function icon(kind) {
    if (kind === 'message') {
        return (
            <Message className={messageIcon.className}>
                {messageIcon.styles}
            </Message>
        )
    } else {
        return (
            <Email className={interpretationIcon.className}>
                {interpretationIcon.styles}
            </Email>
        )
    }
}

export const NotificationIcon = ({ count, href, kind, dataTestId }) => (
    <a href={href} className={kind} data-test={dataTestId}>
        {icon(kind)}

        {count > 0 && <span data-test={`${dataTestId}-count`}>{count}</span>}

        <style jsx>{`
            a {
                position: relative;
                margin: 8px 24px 0 0;
                cursor: pointer;
            }

            span {
                z-index: 1;
                position: absolute;
                top: -6px;
                right: -10px;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: ${theme.secondary300};
                color: #fff;
                font-size: 9px;
                font-weight: 500;
                line-height: 16px;
                text-align: center;
                cursor: inherit;
            }
        `}</style>
    </a>
)

NotificationIcon.defaultProps = {
    count: 0,
}

NotificationIcon.propTypes = {
    href: propTypes.string.isRequired,
    count: propTypes.number,
    dataTestId: propTypes.string,
    kind: propTypes.oneOf(['interpretation', 'message']),
}
