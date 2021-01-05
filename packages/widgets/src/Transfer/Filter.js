import propTypes from '@dhis2/prop-types'
import { spacers } from '@dhis2/ui-constants'
import { Input, Field } from '@dhis2/ui-core'
import React from 'react'

export const Filter = ({ dataTest, filter, onChange, label, placeholder }) => (
    <div data-test={dataTest}>
        <Field label={label} name={dataTest} dataTest={`${dataTest}-field`}>
            <Input
                dataTest={`${dataTest}-input`}
                type="search"
                placeholder={placeholder}
                name={dataTest}
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
    dataTest: propTypes.string.isRequired,
    filter: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    label: propTypes.string,
    placeholder: propTypes.string,
}
