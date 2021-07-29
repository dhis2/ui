import propTypes from '@dhis2/prop-types'
import { colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

const SingleSelectOption = ({
    label,
    active,
    disabled,
    onClick,
    className,
    dataTest,
    value,
}) => (
    <div
        className={cx(className, {
            disabled,
            active,
        })}
        onClick={e => onClick({}, e)}
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
                padding: ${spacers.dp8} ${spacers.dp12};
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

SingleSelectOption.defaultProps = {
    dataTest: 'dhis2-uicore-singleselectoption',
}

SingleSelectOption.propTypes = {
    label: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    active: propTypes.bool,
    className: propTypes.string,
    dataTest: propTypes.string,
    disabled: propTypes.bool,
    onClick: propTypes.func,
}

export { SingleSelectOption }
