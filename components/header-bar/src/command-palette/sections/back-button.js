import { colors, spacers } from '@dhis2/ui-constants'
import { IconArrowLeft16 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'

function BackButton({ setView, handleClearSearch }) {
    const handleClick = () => {
        setView('home')
        handleClearSearch()
    }
    return (
        <>
            <button
                onClick={handleClick}
                aria-label="Back Button"
                name="Back"
                value="back"
                className="back-btn"
            >
                <IconArrowLeft16 color={colors.grey900} />
            </button>
            <style jsx>{`
                button {
                    display: block;
                    border: 0;
                    cursor: pointer;
                    width: 100%;
                    padding: ${spacers.dp4};
                    height: 25px;
                    background-color: ${colors.grey100};
                    text-align: start;
                    margin-bottom: 1px;
                }
                button:focus {
                    outline: 2px solid blue;
                    outline-offset: -2px;
                }
                button:focus:not(:focus-visible) {
                    outline: none;
                }
                button:hover,
                button:active {
                    cursor: pointer;
                    background-color: ${colors.grey200};
                }
            `}</style>
        </>
    )
}

BackButton.propTypes = {
    handleClearSearch: PropTypes.func,
    setView: PropTypes.func,
}

export default BackButton
