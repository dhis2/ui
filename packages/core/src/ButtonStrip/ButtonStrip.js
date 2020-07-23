import React, { Children } from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { spacers } from '@dhis2/ui-constants'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {ButtonStrip.PropTypes} props
 * @returns {React.Component}
 * @example import { ButtonStrip } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/buttonstrip--default|Storybook}
 */
const ButtonStrip = ({ className, children, middle, end, dataTest }) => (
    <div
        className={cx(className, { start: !middle && !end, middle, end })}
        data-test={dataTest}
    >
        {Children.map(children, child => (
            <div className="box">{child}</div>
        ))}

        <style jsx>{`
            div {
                display: flex;
            }

            div.middle {
                justify-content: center;
            }

            div.end {
                justify-content: flex-end;
            }

            .box {
                margin-left: ${spacers.dp16};
            }

            .box:first-child {
                margin-left: 0;
            }
        `}</style>
    </div>
)

const alignmentPropType = propTypes.mutuallyExclusive(
    ['middle', 'end'],
    propTypes.bool
)

ButtonStrip.defaultProps = {
    dataTest: 'dhis2-uicore-buttonstrip',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [className]
 * @prop {Node} [children]
 * @prop {boolean} [middle] - The props `middle`, and `end` are
 * mutually exlusive
 * @prop {boolean} [end]
 * @prop {string} [dataTest]
 */
ButtonStrip.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    end: alignmentPropType,
    middle: alignmentPropType,
}

export { ButtonStrip }
