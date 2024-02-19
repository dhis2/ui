import { colors, theme } from '@dhis2/ui-constants'
import { IconCross16 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'

const createClickHandler = (onClick) => (event) => {
    onClick({}, event)
}

export const CloseButton = ({ onClick }) => (
    <button
        title="Close modal dialog"
        data-test="dhis2-modal-close-button"
        onClick={createClickHandler(onClick)}
        aria-label="Close modal dialog"
    >
        <IconCross16 />
        <style jsx>{`
            button {
                background-color: transparent;
                color: ${colors.grey700};
                border: none;
                outline: none;
                padding: 4px 4px 0px;
                border-radius: 3px;
                position: absolute;
                top: 0px;
                inset-inline-end: 0px;
            }
            button:hover {
                background-color: ${colors.grey200};
                color: ${colors.grey900};
            }
            button:focus {
                background-color: ${colors.grey200};
                outline: 3px solid ${theme.focus};
            }
            button:focus:not(:focus-visible) {
                outline: none;
            }
            button:active {
                background-color: ${colors.grey300};
            }
        `}</style>
    </button>
)
CloseButton.propTypes = {
    onClick: PropTypes.func,
}
