import { resolve } from 'styled-jsx/css'
import React from 'react'
import propTypes from '@dhis2/prop-types'

import { InputField } from '../InputField.js'
import { spacers } from '../theme.js'

// "div" is required for specificity
const filterStyles = resolve`
    div {
        margin: 0;
    }
`

export const Filter = ({ dataTest, filter, onChange, label }) => {
    return (
        <div data-test={dataTest}>
            <InputField
                className={filterStyles.className}
                label={label}
                type="search"
                name={dataTest}
                value={filter}
                onChange={onChange}
            />

            {filterStyles.styles}
            <style jsx>{`
                div {
                    padding-bottom: ${spacers.dp8};
                }

                div:first-child {
                    padding-top: ${spacers.dp8};
                }
            `}</style>
        </div>
    )
}

Filter.propTypes = {
    dataTest: propTypes.string.isRequired,
    filter: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    label: propTypes.string,
}
