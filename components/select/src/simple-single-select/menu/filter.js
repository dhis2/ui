import { colors, spacers } from '@dhis2/ui-constants'
import { Input } from '@dhis2-ui/input'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../../locales/index.js'

export function Filter({
    ariaControls,
    dataTest,
    label,
    placeholder,
    tabIndex,
    value,
    onChange,
    onKeyDown,
}) {
    return (
        <div data-test={dataTest}>
            <Input
                dense
                tabIndex={tabIndex}
                ariaControls={ariaControls}
                ariaHaspopup="listbox"
                ariaLabel={label || i18n.t('Search options')}
                dataTest={`${dataTest}-input`}
                value={value}
                onChange={({ value }) => onChange(value)}
                type="text"
                name="filter"
                placeholder={placeholder}
                onKeyDown={(_, e) => onKeyDown(e)}
            />

            <style jsx>{`
                div {
                    height: 100%;
                    inset-block-start: 0;
                    background: ${colors.white};
                    // padding-block-start: ${spacers.dp8};
                    // padding-inline-end: ${spacers.dp8};
                    // padding-block-end: ${spacers.dp4};
                    // padding-inline-start: ${spacers.dp8};
                }
            `}</style>
        </div>
    )
}

Filter.propTypes = {
    ariaControls: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    dataTest: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    tabIndex: PropTypes.string,
    onKeyDown: PropTypes.func,
}
