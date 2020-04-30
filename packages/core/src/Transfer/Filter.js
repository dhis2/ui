import React from 'react'
import propTypes from '@dhis2/prop-types'

import { spacers } from '@dhis2/ui-constants'

import { Input } from '../Input/Input.js'
import { Field } from '../Field/Field.js'

export const Filter = ({ dataTest, filter, onChange, label }) => {
    return (
        <div data-test={dataTest}>
            <Field label={label} name={dataTest} dataTest={`${dataTest}-field`}>
                <Input
                    dataTest={`${dataTest}-input`}
                    type="search"
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
}

Filter.propTypes = {
    dataTest: propTypes.string.isRequired,
    filter: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    label: propTypes.string,
}
