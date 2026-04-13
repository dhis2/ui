import { spacers } from '@dhis2/ui-constants'
import { SingleSelect, SingleSelectOption } from '@dhis2-ui/select'
import React from 'react'

const translate = (
    prop: string | ((interpolationObject?: Record<string, unknown>) => string),
    interpolationObject?: Record<string, unknown>
): string => {
    if (typeof prop === 'function') {
        return prop(interpolationObject)
    }

    return prop
}

export interface PageSizeSelectProps {
    dataTest: string
    pageSize: number
    pageSizeSelectText: string | ((interpolationObject?: Record<string, unknown>) => string)
    pageSizes: string[]
    onChange: (pageSize: number) => void
    disabled?: boolean
}

const PageSizeSelect = ({
    dataTest,
    disabled,
    pageSizeSelectText,
    pageSize,
    pageSizes,
    onChange,
}: PageSizeSelectProps) => (
    <div data-test={`${dataTest}-pagesize`}>
        <SingleSelect
            dense
            disabled={disabled}
            selected={pageSize.toString()}
            onChange={({ selected }: { selected: string }) =>
                onChange(parseInt(selected, 10))
            }
            className="select"
            dataTest={`${dataTest}-pagesize-select`}
            prefix={translate(pageSizeSelectText)}
        >
            {pageSizes.map((length) => (
                <SingleSelectOption
                    key={length}
                    value={length}
                    label={length}
                />
            ))}
        </SingleSelect>
        <style jsx>{`
            div {
                display: flex;
                align-items: center;
                flex-shrink: 0;
                min-height: 32px;
                margin-inline-end: ${spacers.dp12};
                flex-grow: 1;
            }
        `}</style>
    </div>
)

export { PageSizeSelect }
