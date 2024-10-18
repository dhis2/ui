import { colors, spacers, theme } from '@dhis2/ui-constants'
import { IconArrowLeft16 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'

function BackButton({ onClickHandler }) {
    return (
        <>
            <button
                onClick={onClickHandler}
                aria-label="Back Button"
                name="Back"
                value="back"
                className="back-btn"
            >
                <IconArrowLeft16 />
            </button>
            <style jsx>{`
                button {
                    display: block;
                    border: 0;
                    cursor: pointer;
                    width: 100%;
                    padding: ${spacers.dp4};
                    height: 24px;
                    background-color: ${colors.grey100};
                    text-align: start;
                    color: ${colors.grey700};
                }
                button:focus {
                    outline: 2px solid ${theme.focus};
                    outline-offset: -2px;
                }
                button:focus:not(:focus-visible) {
                    outline: none;
                }
                button:hover,
                button:active {
                    cursor: pointer;
                    background-color: ${colors.grey200};
                    color: ${colors.grey900};
                }
            `}</style>
        </>
    )
}

BackButton.propTypes = {
    onClickHandler: PropTypes.func,
}

export default BackButton
