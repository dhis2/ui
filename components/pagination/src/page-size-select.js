import { SingleSelect, SingleSelectOption } from '@dhis2-ui/select'
import { spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
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
    small,
}) => (
    <div
        data-test={`${dataTest}-pagesize`}
        className={cx('page-size-select', { small })}
    >
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
            .page-size-select {
                display: flex;
                align-items: center;
                flex-shrink: 0;
                min-height: 32px;
                margin-right: ${spacers.dp12};
                flex-grow: 1;
            }
            .page-size-select.small,
            .page-size-select.small :global(.select) :global(.root) {
                min-height: 24px;
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
    small: PropTypes.bool,
}

export { PageSizeSelect }
