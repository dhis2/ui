import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { colors } from './theme.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {Card.PropTypes} props
 * @returns {React.Component}
 * @example import { Card } from '@dhis2/ui-core'
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/card.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/card--default|Storybook}
 */
const Card = ({ className, children, dataTest }) => (
    <div className={cx(className)} data-test={dataTest}>
        {children}

        <style jsx>{`
            div {
                display: inline-block;
                position: relative;

                width: 100%;
                height: 100%;

                border-radius: 3px;
                background: ${colors.white};
                box-shadow: 0 0 1px 0 rgba(64, 75, 90, 0.2),
                    0 2px 1px 0 rgba(64, 75, 90, 0.28);
            }
        `}</style>
    </div>
)

Card.defaultProps = {
    dataTest: 'dhis2-uicore-card',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [className]
 * @prop {Node} [children]
 * @prop {string} [dataTest]
 */
Card.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}

export { Card }
