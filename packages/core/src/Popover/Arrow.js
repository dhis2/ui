import React from 'react'
import propTypes from '@dhis2/prop-types'
import { colors } from '../theme.js'

const ARROW_SIZE = 8

/**
 * Note: the `data-popper-placement` attribute is automatically updated
 * by popper.js in case of flipping etc. So be aware that the value of
 * the `placement` prop that was initially passed to the Popper component
 * and the value of `data-popper-placement` do not always match
 */

const Arrow = ({ className }) => (
    <div data-popper-arrow className={className}>
        <style jsx>{`
            div {
                pointer-events: none;
                width: ${ARROW_SIZE}px;
                height: ${ARROW_SIZE}px;
            }

            :global([data-popper-placement^='top']) div {
                bottom: -${ARROW_SIZE / 2}px;
            }

            :global([data-popper-placement^='bottom']) div {
                top: -${ARROW_SIZE / 2}px;
            }

            :global([data-popper-placement^='left']) div {
                right: -${ARROW_SIZE / 2}px;
            }

            :global([data-popper-placement^='right']) div {
                left: -${ARROW_SIZE / 2}px;
            }

            :global([data-popper-arrow-displaced]) div {
                visibility: hidden;
            }

            div::after {
                content: '';
                position: absolute;
                pointer-events: none;
                box-sizing: border-box;
                border-style: solid;
                border-width: ${ARROW_SIZE / 2}px;
                border-color: transparent transparent ${colors.white}
                    ${colors.white};
                box-shadow: -1px 1px 1px 0 rgba(64, 75, 90, 0.08),
                    -3px 3px 8px -6px rgba(64, 75, 90, 0.15);
            }

            :global([data-popper-placement^='top']) div::after {
                transform: rotate(-45deg);
            }

            :global([data-popper-placement^='bottom']) div::after {
                transform: rotate(135deg);
            }

            :global([data-popper-placement^='left']) div::after {
                transform: rotate(-135deg);
            }

            :global([data-popper-placement^='right']) div::after {
                transform: rotate(45deg);
            }
        `}</style>
    </div>
)

Arrow.propTypes = {
    className: propTypes.string,
}

export { Arrow, ARROW_SIZE }
