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
        {label}

        <style jsx>{`
            div {
                cursor: pointer;
                font-size: 14px;
                text-decoration: none;
                color: ${colors.grey900};
                padding-block: ${spacers.dp8};
                padding-inline: ${spacers.dp12};
            }

            div:hover {
                background-color: ${colors.grey200};
            }

            div:active,
            div.active {
                background-color: ${colors.teal700};
                color: ${colors.white};
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
