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

const createAvailablePages = (length: number): string[] =>
    Array.from({ length }, (_x, i) => (i + 1).toString())

export interface PageSelectProps {
    dataTest: string
    page: number
    pageCount: number
    pageSelectText:
        | string
        | ((interpolationObject?: Record<string, unknown>) => string)
    onChange: (page: number) => void
    disabled?: boolean
}

const PageSelect = ({
    dataTest,
    disabled,
    pageSelectText,
    onChange,
    page,
    pageCount,
}: PageSelectProps) => (
    <div data-test={`${dataTest}-gotopage`}>
        <SingleSelect
            dense
            disabled={disabled}
            selected={page.toString()}
            onChange={({ selected }: { selected: string }) =>
                onChange(parseInt(selected, 10))
            }
            className="select"
            dataTest={`${dataTest}-page-select`}
            prefix={translate(pageSelectText)}
        >
            {createAvailablePages(pageCount).map((availablePage) => (
                <SingleSelectOption
                    key={availablePage}
                    value={availablePage}
                    label={availablePage}
                />
            ))}
        </SingleSelect>
        <style jsx>{`
            div {
                margin-inline-end: ${spacers.dp12};
            }
        `}</style>
    </div>
)

export { PageSelect, createAvailablePages }
