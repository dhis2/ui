import { spacers } from '../constants/index.js'
import { Field } from '../field/index.js'
import { Input } from '../input/index.js'
import PropTypes from 'prop-types'
import React from 'react'

export const Filter = ({ dataTest, filter, onChange, label, placeholder }) => (
    <div data-test={dataTest}>
        <Field label={label} name={dataTest} dataTest={`${dataTest}-field`}>
            <Input
                dataTest={`${dataTest}-input`}
                type="search"
                placeholder={placeholder}
                value={filter}
                onChange={onChange}
            />
        </Field>

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

Filter.propTypes = {
    dataTest: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
}
