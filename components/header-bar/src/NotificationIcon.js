import propTypes from '@dhis2/prop-types'
import { colors, theme } from '@dhis2/ui-constants'
import React from 'react'
import css from 'styled-jsx/css'

// TODO: ui-icons
function Message({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M40 4H8C5.79 4 4.02 5.79 4.02 8L4 44l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-4 24H12v-4h24v4zm0-6H12v-4h24v4zm0-6H12v-4h24v4z" />
            <path d="M0 0h48v48H0z" fill="none" />
        </svg>
    )
}
Message.propTypes = {
    className: propTypes.string,
}
function Email({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 8L24 26 8 16v-4l16 10 16-10v4z" />
            <path d="M0 0h48v48H0z" fill="none" />
        </svg>
    )
}
Email.propTypes = {
    className: propTypes.string,
}
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
            a:focus {
                outline: 1px dotted white;
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
