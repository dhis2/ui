import { colors, spacers } from '@dhis2/ui-constants'
import { Input } from '@dhis2-ui/input'
import PropTypes from 'prop-types'
import React from 'react'

export function MenuFilter({
    value,
    onChange,
    placeholder,
}) {
    return (
        <div>
            <Input
                dense
                value={value}
                onChange={({ value }) => onChange(value)}
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
}

MenuFilter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
}
