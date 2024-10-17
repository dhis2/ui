import { colors, theme } from '@dhis2/ui-constants'
import { Tooltip } from '@dhis2-ui/tooltip'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'

export const ClearButton = ({ onClear, clearText, dataTest }) => (
    <button
        aria-label={i18n.t('{{clearText}}', { clearText })}
        data-test={dataTest}
        onClick={(e) => {
            e.stopPropagation()
            onClear(e)
        }}
    >
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm3.536-5.879a1 1 0 1 1-1.415 1.414l-2.12-2.12-2.122 2.121a1 1 0 1 1-1.415-1.414L6.586 8 4.464 5.878A1 1 0 1 1 5.88 4.464L8 6.586l2.121-2.121a1 1 0 1 1 1.415 1.414L9.415 8l2.12 2.121Z"
                fill="none"
            />
        </svg>
        <style jsx>{`
            button {
                background: none;
                border: none;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                height: 24px;
                width: 24px;
                border-radius: 3px;
            }
            button svg path {
                fill: ${colors.grey500};
            }
            button:hover svg path {
                fill: ${colors.grey800};
            }
            button:hover {
                background: ${colors.grey200};
            }
            button:focus {
                outline: 2px solid ${theme.focus};
            }
        `}</style>
    </button>
)

ClearButton.propTypes = {
    clearText: PropTypes.string.isRequired,
    onClear: PropTypes.func.isRequired,
    dataTest: PropTypes.string,
}

export const SelectedValueClearButton = ({ onClear, clearText, dataTest }) => {
    const clearButton = (
        <ClearButton
            onClear={onClear}
            dataTest={dataTest}
            clearText={clearText}
        />
    )

    if (!clearText) {
        return clearButton
    }

    return (
        <Tooltip openDelay={500} content={clearText}>
            {clearButton}
        </Tooltip>
    )
}

SelectedValueClearButton.propTypes = {
    clearText: PropTypes.string.isRequired,
    onClear: PropTypes.func.isRequired,
    dataTest: PropTypes.string,
}
