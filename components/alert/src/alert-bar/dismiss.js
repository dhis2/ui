import { spacers, theme } from '@dhis2/ui-constants'
import { IconCross24 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'

const Dismiss = ({ onClick, dataTest }) => (
    <button
        type="button"
        onClick={onClick}
        data-test={dataTest}
        aria-label={i18n.t('Dismiss')}
    >
        <IconCross24 />
        <style jsx>{`
            button {
                margin-inline-start: ${spacers.dp16};
                min-height: 32px;
                min-width: 32px;
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                border-radius: 5px;
                background: transparent;
                color: inherit;
            }
            button:hover {
                cursor: pointer;
                background: rgba(0, 0, 0, 0.15);
            }
            button:active {
                background: rgba(0, 0, 0, 0.25);
            }
            button:focus {
                outline: 3px solid ${theme.focus};
            }
            button:focus:not(:focus-visible) {
                outline: none;
            }
            button :global(svg) {
                width: 18px;
                height: 18px;
            }
        `}</style>
    </button>
)

Dismiss.propTypes = {
    dataTest: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export { Dismiss }
