import { spacers } from '../../constants/index.js'
import { SingleSelect, SingleSelectOption } from '../select/index.js'
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
    disabled,
    pageSelectText,
    onChange,
    page,
    pageCount,
}) => (
    <div data-test={`${dataTest}-gotopage`}>
        <SingleSelect
            dense
            disabled={disabled}
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
            div {
                margin-inline-end: ${spacers.dp12};
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
    disabled: PropTypes.bool,
}

export { PageSelect, createAvailablePages }
