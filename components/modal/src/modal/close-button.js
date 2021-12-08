import { colors, theme } from '@dhis2/ui-constants'
import { IconCross16 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'

const createClickHandler = (onClick) => (event) => {
    onClick({}, event)
}

export const CloseButton = ({ onClick }) => (
    <button
        data-test="dhis2-modal-close-button"
        onClick={createClickHandler(onClick)}
    >
        <IconCross16 color={colors.grey800} />
        <style jsx>{`
            button {
                background-color: transparent;
                border: none;
                padding: 4px 4px 0px;
                outline: none;
                position: absolute;
                top: 8px;
                right: 8px;
                border-radius: 3px;
            }
            button:hover {
                background-color: ${colors.grey200};
            }
            button:focus {
                background-color: ${colors.grey200};
                outline: 3px solid ${theme.focus};
            }
        `}</style>
    </button>
)
CloseButton.propTypes = {
    onClick: PropTypes.func,
}
