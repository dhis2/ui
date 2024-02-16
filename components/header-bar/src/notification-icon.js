import { colors, theme, spacers } from '@dhis2/ui-constants'
import { IconMessages24, IconMail24 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'

function icon(kind) {
    if (kind === 'message') {
        return <IconMessages24 color={colors.white} />
    } else {
        return <IconMail24 color={colors.white} />
    }
}

export const NotificationIcon = ({ count, href, kind, dataTestId }) => (
    <a dir="ltr" href={href} className={kind} data-test={dataTestId}>
        {icon(kind)}

        {count > 0 && <span data-test={`${dataTestId}-count`}>{count}</span>}

        <style jsx>{`
            a {
                position: relative;
                margin: 0;
                cursor: pointer;
                padding: 0 ${spacers.dp12};
                height: 100%;
                display: flex;
                align-items: center;
            }
            a:focus {
                outline: 2px solid white;
                outline-offset: -2px;
            }
            a:focus:not(:focus-visible) {
                outline: none;
            }
            a:hover {
                background: #1a557f;
            }
            a:active {
                background: #104067;
            }
            span {
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;
                position: absolute;
                top: 3px;
                inset-inline-end: 2px;
                min-width: 18px;
                min-height: 18px;
                border-radius: ${spacers.dp12};
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
                    0 1px 2px 0 rgba(0, 0, 0, 0.06);
                background-color: ${theme.secondary500};
                color: ${colors.white};
                font-size: 13px;
                font-weight: 600;
                line-height: 15px;
                text-align: center;
                cursor: inherit;
                padding: 0 ${spacers.dp4};
            }
        `}</style>
    </a>
)

NotificationIcon.defaultProps = {
    count: 0,
}

NotificationIcon.propTypes = {
    href: PropTypes.string.isRequired,
    count: PropTypes.number,
    dataTestId: PropTypes.string,
    kind: PropTypes.oneOf(['interpretation', 'message']),
}
