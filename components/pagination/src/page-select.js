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

const createAvailablePages = (length) =>
    Array.from({ length }, (_x, i) => (i + 1).toString())

const PageSelect = ({
    dataTest,
    pageSelectText,
    onChange,
    page,
    pageCount,
    small,
}) => (
    <div
        data-test={`${dataTest}-gotopage`}
        className={cx('page-select', { small })}
    >
        <SingleSelect
            dense
            selected={page.toString()}
            onChange={({ selected }) => onChange(parseInt(selected, 10))}
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
            .page-select {
                margin-right: ${spacers.dp12};
            }
            .page-select.small :global(.select) :global(.root) {
                min-height: 20px;
            }
        `}</style>
    </div>
)

PageSelect.propTypes = {
    dataTest: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
    pageSelectText: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
        .isRequired,
    onChange: PropTypes.func.isRequired,
    small: PropTypes.bool,
}

export { PageSelect, createAvailablePages }
