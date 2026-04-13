import { colors, spacers } from '@dhis2/ui-constants'
import { Checkbox } from '@dhis2-ui/checkbox'
import cx from 'classnames'
import React from 'react'
import css from 'styled-jsx/css'

// Padding has to be set on the label, so that the entire area is clickable
const { styles, className: checkboxClassname } = css.resolve`
    padding: ${spacers.dp8} ${spacers.dp12};
`

export interface MultiSelectOptionProps {
    label: string
    value: string
    active?: boolean
    className?: string
    dataTest?: string
    disabled?: boolean
    onClick?: (payload: Record<string, never>, e: React.SyntheticEvent) => void
}

const MultiSelectOption = ({
    label,
    active,
    disabled,
    onClick,
    className,
    dataTest = 'dhis2-uicore-multiselectoption',
    value,
}: MultiSelectOptionProps) => (
    <div
        className={cx(className, { active, disabled })}
        data-test={dataTest}
        data-value={value}
        data-label={label}
    >
        <Checkbox
            name={label}
            className={checkboxClassname}
            checked={active}
            label={label}
            onChange={onClick as never}
            disabled={disabled}
            dense
        />

        {styles}

        <style jsx>{`
            div:hover {
                background-color: ${colors.grey200};
            }

            div.active {
                background-color: ${colors.teal050};
            }

            div.active:hover {
                background-color: #e6f4f4;
            }

            div.disabled:hover {
                background-color: initial;
            }
        `}</style>
    </div>
)

export { MultiSelectOption }
