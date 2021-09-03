import propTypes from '@dhis2/prop-types'
import { colors, theme, spacers } from '@dhis2/ui-constants'
import { IconMessages24, IconMail24 } from '@dhis2/ui-icons'
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
                margin: 4px 24px 0 0;
                cursor: pointer;
            }
            a:focus {
                outline: 1px dotted white;
            }

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;
                position: absolute;
                top: -9px;
                right: -6px;
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
    href: propTypes.string.isRequired,
    count: propTypes.number,
    dataTestId: propTypes.string,
    kind: propTypes.oneOf(['interpretation', 'message']),
}
