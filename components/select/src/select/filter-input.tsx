import { spacers, colors } from '@dhis2/ui-constants'
import { Input as InputComponent } from '@dhis2-ui/input'
import React from 'react'

export interface FilterInputProps {
    dataTest: string
    value: string
    className?: string
    placeholder?: string
    onChange?: (payload: { value: string; name?: string }) => void
}

const FilterInput = ({
    value,
    onChange,
    placeholder,
    className,
    dataTest,
}: FilterInputProps) => (
    <div className={className}>
        <InputComponent
            dense
            dataTest={dataTest}
            value={value}
            onChange={onChange as never}
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

export { FilterInput }
