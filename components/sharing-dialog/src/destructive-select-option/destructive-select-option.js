import { colors, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * This option is not seen as a valid select option by our select component. Which
 * is fine, what that means is that the select won't add a click handler and active
 * prop to it and that's what we want. Normally when invalid options are clicked
 * they won't close the select, but in this case it will remove the select entirely,
 * so that's not a problem either. It is slightly hacky, but should be stable.
 */

export const DestructiveSelectOption = ({ label, onClick }) => {
    return (
        <div onClick={onClick}>
            {label}
            <style jsx>{`
                div {
                    cursor: pointer;
                    font-size: 14px;
                    text-decoration: none;
                    color: ${colors.red700};
                    padding: ${spacers.dp8} ${spacers.dp12};
                }

                div:hover {
                    background-color: ${colors.red050};
                }
            `}</style>
        </div>
    )
}

DestructiveSelectOption.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
