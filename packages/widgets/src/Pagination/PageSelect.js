import React from 'react'
import propTypes from '@dhis2/prop-types'
import { SingleSelect, SingleSelectOption } from '@dhis2/ui-core'
import { spacers } from '@dhis2/ui-constants'

import translate from '../translate'

const createAvailablePages = length =>
    Array.from({ length }, (_x, i) => (i + 1).toString())

const PageSelect = ({
    dataTest,
    pageSelectText,
    onChange,
    page,
    pageCount,
}) => (
    <div data-test={`${dataTest}-gotopage`}>
        <SingleSelect
            dense
            selected={page.toString()}
            onChange={({ selected }) => onChange(parseInt(selected, 10))}
            className="select"
            dataTest={`${dataTest}-page-select`}
            prefix={translate(pageSelectText)}
        >
            {createAvailablePages(pageCount).map(availablePage => (
                <SingleSelectOption
                    key={availablePage}
                    value={availablePage}
                    label={availablePage}
                />
            ))}
        </SingleSelect>
        <style jsx>{`
            div {
                margin-right: ${spacers.dp12};
            }
        `}</style>
    </div>
)

PageSelect.propTypes = {
    dataTest: propTypes.string.isRequired,
    page: propTypes.number.isRequired,
    pageCount: propTypes.number.isRequired,
    pageSelectText: propTypes.oneOfType([propTypes.string, propTypes.func])
        .isRequired,
    onChange: propTypes.func.isRequired,
}

export { PageSelect, createAvailablePages }
