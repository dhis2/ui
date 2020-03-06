import propTypes from '@dhis2/prop-types'
import React from 'react'

/**
 * @module
 *
 * @param {Constrictor.PropTypes} props
 * @returns {React.Component}
 *
 * @desc con·stric·tor | \kən-ˈstrik-tər\
 * 1: a muscle that contracts a cavity or orifice or compresses an organ
 * 2: a snake (such as a boa constrictor) that coils around and compresses prey
 * 3: one that constricts
 */
export const Constrictor = ({
    width,
    minWidth,
    maxWidth,
    children,
    dataTest,
}) => (
    <div data-test={dataTest}>
        {children}
        <style jsx>{`
            div {
                ${width ? `width: ${width};` : ''}
                ${minWidth ? `min-width: ${minWidth};` : ''}
                ${maxWidth ? `max-width: ${maxWidth};` : ''}
            }
        `}</style>
    </div>
)

Constrictor.defaultProps = {
    dataTest: 'dhis2-uicore-constrictor',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [width]
 * @prop {string} [minWidth]
 * @prop {string} [maxWidth]
 * @prop {string} [dataTest]
 */
Constrictor.propTypes = {
    children: propTypes.node,
    dataTest: propTypes.string,
    maxWidth: propTypes.string,
    minWidth: propTypes.string,
    width: propTypes.string,
}
