import propTypes from '@dhis2/prop-types'
import { spacers } from '@dhis2/ui-constants'
import { SingleSelect, SingleSelectOption } from '@dhis2/ui-core'
import React from 'react'
import translate from '../translate'

const PageSizeSelect = ({
    dataTest,
    pageSizeSelectText,
    pageSize,
    pageSizes,
    onChange,
}) => (
    <div data-test={`${dataTest}-pagesize`}>
        <SingleSelect
            dense
            selected={pageSize.toString()}
            onChange={({ selected }) => onChange(parseInt(selected, 10))}
            className="select"
            dataTest={`${dataTest}-pagesize-select`}
            prefix={translate(pageSizeSelectText)}
        >
            {pageSizes.map(length => (
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
                margin-right: ${spacers.dp12};
                flex-grow: 1;
            }
        `}</style>
    </div>
)

PageSizeSelect.propTypes = {
    dataTest: propTypes.string.isRequired,
    pageSize: propTypes.number.isRequired,
    pageSizeSelectText: propTypes.oneOfType([propTypes.string, propTypes.func])
        .isRequired,
    pageSizes: propTypes.arrayOf(propTypes.string).isRequired,
    onChange: propTypes.func.isRequired,
}

export { PageSizeSelect }
