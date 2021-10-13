import { SingleSelect, SingleSelectOption } from '@dhis2-ui/select'
import { spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

// TODO: i18n translate
const translate = (prop, interpolationObject) => {
    if (typeof prop === 'function') {
        return prop(interpolationObject)
    }

    return prop
}

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
                margin-right: ${spacers.dp12};
                flex-grow: 1;
            }
        `}</style>
    </div>
)

PageSizeSelect.propTypes = {
    dataTest: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    pageSizeSelectText: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
        .isRequired,
    pageSizes: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
}

export { PageSizeSelect }
