import { colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const SingleSelectOption = ({
    label,
    active,
    disabled,
    onClick,
    className,
    dataTest = 'dhis2-uicore-singleselectoption',
    value,
}) => (
    <div
        className={cx(className, {
            disabled,
            active,
        })}
        onClick={(e) => onClick({}, e)}
        data-test={dataTest}
        data-value={value}
        data-label={label}
    >
        <span className="checkmark" aria-hidden="true"></span>
        <span className="content">{label}</span>
        <style jsx>{`
            div {
                display: flex;
                align-items: center;
                cursor: pointer;
                font-size: 14px;
                text-decoration: none;
                color: ${colors.grey900};
                padding-block: ${spacers.dp8};
                padding-inline: 6px ${spacers.dp12};
            }

            div:hover {
                background-color: ${colors.grey200};
            }

            div:active,
            div.active {
                background-color: ${colors.teal050};
                cursor: auto;
            }

            div.disabled {
                color: ${colors.grey500};
                cursor: not-allowed;
                user-select: none;
            }

            div.disabled:hover {
                background-color: initial;
            }

            div .checkmark {
                width: 16px;
                height: 16px;
                margin-inline-end: 6px;
                flex-shrink: 0;
                background-size: contain;
                background-repeat: no-repeat;
                background-image: ${active
                    ? `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuNjMyMDkgNy44MzIxNEMzLjI3MjA5IDcuNDcyMTQgMi43MjAwOSA3LjQ3MjE0IDIuMzYwMDkgNy44MzIxNEMyLjAwMDA5IDguMTkyMTQgMi4wMDAwOSA4Ljc0NDE0IDIuMzYwMDkgOS4xMDQxNEw1LjYyNDA5IDEyLjM2ODFDNS45ODQwOSAxMi43MjgxIDYuNTM2MDkgMTIuNzI4MSA2Ljg5NjA5IDEyLjM2ODFMMTQuNjQ4MSA0LjY0MDE0QzE1LjAwODEgNC4yODAxNCAxNS4wMDgxIDMuNzI4MTQgMTQuNjQ4MSAzLjM2ODE0QzE0LjI4ODEgMy4wMDgxNCAxMy43MzYxIDMuMDA4MTQgMTMuMzUyMSAzLjM2ODE0TDYuMjcyMDkgMTAuNDcyMUwzLjYzMjA5IDcuODMyMTRaIiBmaWxsPSIjMDA2OTVDIi8+Cjwvc3ZnPgo=')`
                    : 'none'};
            }
        `}</style>
    </div>
)

SingleSelectOption.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    active: PropTypes.bool,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export { SingleSelectOption }
