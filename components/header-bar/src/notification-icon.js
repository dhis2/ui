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
    <a href={href} className={kind} data-test={dataTestId}>
        {icon(kind)}

        {count > 0 && <span data-test={`${dataTestId}-count`}>{count}</span>}

        <style jsx>{`
            a {
                position: relative;
                margin: 0;
                cursor: pointer;
                padding: 0 ${spacers.dp8};
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
                background: #104f7e;
            }
            a:active {
                background: #0d4168;
            }
            span {
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;
                position: absolute;
                top: 3px;
                right: 2px;
                min-width: 16px;
                min-height: 16px;
                border-radius: ${spacers.dp12};
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
                    0 1px 2px 0 rgba(0, 0, 0, 0.06);
                background-color: ${theme.secondary500};
                border: 1px solid ${theme.secondary700};
                color: ${colors.white};
                text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
                font-size: 12px;
                font-weight: 500;
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
