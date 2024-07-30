import { colors, spacers } from '@dhis2/ui-constants'
import { Checkbox } from '@dhis2-ui/checkbox'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { resolve } from 'styled-jsx/css'

// Padding has to be set on the label, so that the entire area is clickable
const { styles, className: checkboxClassname } = resolve`
    padding: ${spacers.dp8} ${spacers.dp12};
`

const MultiSelectOption = ({
    label,
    active,
    disabled,
    onClick,
    className,
    dataTest,
    value,
}) => (
    <div
        className={cx(className, { disabled })}
        data-test={dataTest}
        data-value={value}
        data-label={label}
    >
        <Checkbox
            name={label}
            className={checkboxClassname}
            checked={active}
            label={label}
            onChange={onClick}
            disabled={disabled}
            dense
        />

        {styles}

        <style jsx>{`
            div:hover {
                background-color: ${colors.grey200};
            }

            div.disabled:hover {
                background-color: initial;
            }
        `}</style>
    </div>
)

MultiSelectOption.defaultProps = {
    dataTest: 'dhis2-uicore-multiselectoption',
}

MultiSelectOption.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    active: PropTypes.bool,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export { MultiSelectOption }
