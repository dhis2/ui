import React from 'react'
import propTypes from '@dhis2/prop-types'
import { Input } from '../Input.js'
import { spacers, colors } from '@dhis2/ui-constants'

const FilterInput = ({ value, onChange, placeholder, className, dataTest }) => (
    <div className={className}>
        <Input
            dense
            dataTest={dataTest}
            value={value}
            onChange={onChange}
            type="text"
            name="filter"
            placeholder={placeholder}
            initialFocus
        />

        <style jsx>{`
            div {
                position: sticky;
                top: 0;
                background: ${colors.white};
                padding: ${spacers.dp8} ${spacers.dp8} ${spacers.dp4}
                    ${spacers.dp8};
            }
        `}</style>
    </div>
)

FilterInput.propTypes = {
    dataTest: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    className: propTypes.string,
    placeholder: propTypes.string,
    onChange: propTypes.func,
}

export { FilterInput }
