import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { getArrowPosition } from './get-arrow-position.js'

const ARROW_SIZE = 8

const Arrow = forwardRef(({ hidden, popperPlacement, styles }, ref) => (
    <div
        data-test="dhis2-uicore-popoverarrow"
        className={cx(getArrowPosition(popperPlacement), { hidden })}
        style={styles}
        ref={ref}
    >
        <style jsx>{`
            div {
                width: ${ARROW_SIZE}px;
                height: ${ARROW_SIZE}px;
                position: absolute;
            }

            div.top {
                top: -${ARROW_SIZE / 2}px;
            }

            div.right {
                right: -${ARROW_SIZE / 2}px;
            }

            div.bottom {
                bottom: -${ARROW_SIZE / 2}px;
            }

            div.left {
                left: -${ARROW_SIZE / 2}px;
            }

            div.hidden {
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

            div.bottom::after {
                transform: rotate(-45deg);
            }

            div.top::after {
                transform: rotate(135deg);
            }

            div.right::after {
                transform: rotate(-135deg);
            }

            div.left::after {
                transform: rotate(45deg);
            }
        `}</style>
    </div>
))
Arrow.displayName = 'Arrow'

Arrow.propTypes = {
    hidden: PropTypes.bool,
    popperPlacement: PropTypes.string,
    styles: PropTypes.shape({
        left: PropTypes.string,
        position: PropTypes.string,
        top: PropTypes.string,
        transform: PropTypes.string,
    }),
}

export { Arrow, ARROW_SIZE }
