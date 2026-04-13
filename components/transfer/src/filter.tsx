import { spacers } from '@dhis2/ui-constants'
import { Field } from '@dhis2-ui/field'
import { Input } from '@dhis2-ui/input'
import React from 'react'

export interface FilterProps {
    dataTest: string
    filter: string
    onChange: (payload: { value: string }) => void
    label?: string
    placeholder?: string
}

export const Filter = ({ dataTest, filter, onChange, label, placeholder }: FilterProps) => (
    <div data-test={dataTest}>
        <Field label={label} name={dataTest} dataTest={`${dataTest}-field`}>
            <Input
                dense
                dataTest={`${dataTest}-input`}
                type="search"
                placeholder={placeholder}
                value={filter}
                onChange={onChange as (payload: { value: string | undefined; name: string | undefined }, event: React.ChangeEvent<HTMLInputElement>) => void}
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
