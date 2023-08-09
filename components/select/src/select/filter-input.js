import { Input } from '@dhis2-ui/input'
import { spacers, colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

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
                inset-block-start: 0;
                background: ${colors.white};
                padding-block-start: ${spacers.dp8};
                padding-inline-end: ${spacers.dp8};
                padding-block-end: ${spacers.dp4};
                padding-inline-start: ${spacers.dp8};
                z-index: 1;
            }
        `}</style>
    </div>
)

FilterInput.propTypes = {
    dataTest: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
}

export { FilterInput }
