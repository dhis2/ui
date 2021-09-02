import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

export const ScrollButton = ({ children, disabled, hidden, onClick }) => (
    <button
        onClick={disabled ? undefined : onClick}
        className={cx('scroll-button', { disabled, hidden })}
    >
        {children}

        <style jsx>{`
            .scroll-button {
                display: inline-flex;
                justify-content: center;
                align-items: center;

                color: inherit;
                background-color: ${colors.white};
                border: none;
                border-bottom: 1px solid ${colors.grey400};
                outline: none;
                padding: 16px 16px 11px 16px;

                cursor: pointer;
            }

            .scroll-button.hidden {
                display: none;
            }

            .scroll-button :global(svg) {
                width: 20px;
                height: 20px;
                fill: ${colors.grey600};
                transition: opacity 150ms ease-in-out;
                opacity: 1;
            }

            .scroll-button:hover {
                background-color: ${colors.grey100};
            }

            .scroll-button:active {
                /* Briefly highlight clicked button */
                background-color: ${colors.grey200};
            }

            .scroll-button.disabled {
                cursor: not-allowed;
            }

            .scroll-button.disabled:hover {
                background-color: transparent;
            }

            .scroll-button.disabled :global(svg) {
                fill: ${colors.grey500};
            }
        `}</style>
    </button>
)

ScrollButton.displayName = 'ScrollButton'

ScrollButton.propTypes = {
    children: propTypes.any.isRequired,
    disabled: propTypes.bool,
    hidden: propTypes.bool,
    onClick: propTypes.func,
}
