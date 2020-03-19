import React from 'react'
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
    <div className={cx(className, { middle, end })} data-test={dataTest}>
        {children}

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
            div > :global(button) {
                margin-left: ${spacers.dp16};
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
 * @prop {Array.<Button>} [children]
 * @prop {boolean} [middle] - The props `middle`, and `end` are
 * mutually exlusive
 * @prop {boolean} [end]
 * @prop {string} [dataTest]
 */
ButtonStrip.propTypes = {
    children: propTypes.arrayOf(propTypes.element),
    className: propTypes.string,
    dataTest: propTypes.string,
    end: alignmentPropType,
    middle: alignmentPropType,
}

export { ButtonStrip }
