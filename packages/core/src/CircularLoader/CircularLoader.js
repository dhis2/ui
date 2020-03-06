import cx from 'classnames'
import propTypes from '@dhis2/prop-types'
import React from 'react'

import { sizePropType } from '../common-prop-types.js'
import { theme, spacers } from '@dhis2/ui-constants'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {CircularLoader.PropTypes} props
 * @returns {React.Component}
 * @example import { CircularLoader } from @dhis2/ui-core
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/loading.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/circularloader--default|Storybook}
 */
const CircularLoader = ({ small, large, className, dataTest }) => (
    <div
        role="progressbar"
        className={cx(className, {
            small,
            large,
        })}
        data-test={dataTest}
    >
        <svg viewBox="22 22 44 44">
            <circle
                className="circle"
                cx="44"
                cy="44"
                r="20.2"
                fill="none"
                strokeWidth="3.6"
            />
        </svg>
        <style jsx>{`
            div {
                display: inline-block;
                margin: ${spacers.dp16};
                color: ${theme.primary600};
                animation: anim-rotate 1.4s linear infinite;

                width: 50px;
                height: 50px;
            }

            .small {
                width: 24px;
                height: 24px;
            }

            .large {
                width: 80px;
                height: 80px;
            }

            svg {
                max-height: 100%;
                max-width: 100%;
            }

            .circle {
                stroke: currentColor;
                stroke-dasharray: 80px, 200px;
                stroke-dashoffset: 0;
                animation: anim-dash 1.4s ease-in-out infinite;
            }

            @keyframes anim-rotate {
                100% {
                    transform: rotate(360deg);
                }
            }

            @keyframes anim-dash {
                0% {
                    stroke-dasharray: 1px, 200px;
                    stroke-dashoffset: 0;
                }
                50% {
                    stroke-dasharray: 100px, 200px;
                    stroke-dashoffset: -15px;
                }
                100% {
                    stroke-dasharray: 100px, 200px;
                    stroke-dashoffset: -120px;
                }
            }
        `}</style>
    </div>
)

CircularLoader.defaultProps = {
    dataTest: 'dhis2-uicore-circularloader',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {boolean} [small] - `small` and `large` are mutually exclusive.
 * @prop {boolean} [large]
 * @prop {string} [dataTest]
 */
CircularLoader.propTypes = {
    className: propTypes.string,
    dataTest: propTypes.string,
    large: sizePropType,
    small: sizePropType,
}

export { CircularLoader }
