import React from 'react'
import propTypes from '@dhis2/prop-types'
import { theme, spacers } from '@dhis2/ui-constants'

const Progress = ({ amount }) => {
    return (
        <div>
            <style jsx>{`
                div {
                    width: ${amount}%;
                }
            `}</style>
            <style jsx>{`
                div {
                    background-color: ${theme.primary600};
                    transition: width 0.3s linear;
                    height: 4px;
                }
            `}</style>
        </div>
    )
}

Progress.propTypes = {
    amount: propTypes.number.isRequired,
}

/**
 * @module
 * @param {LinearLoader.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { LinearLoader } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/loading.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/linearloader--determinate|Storybook}
 */
const LinearLoader = ({ amount, width, margin, className, dataTest }) => {
    return (
        <div role="progressbar" className={className} data-test={dataTest}>
            <Progress amount={amount} />

            <style jsx>{`
                div {
                    display: block;
                    overflow: hidden;
                    overflow-x: hidden;
                    overflow-y: hidden;
                    background-color: rgba(110, 122, 138, 0.2);
                }
            `}</style>
            <style jsx>{`
                div {
                    width: ${width};
                    margin: ${margin};
                }
            `}</style>
        </div>
    )
}

LinearLoader.defaultProps = {
    margin: spacers.dp12,
    width: '300px',
    dataTest: 'dhis2-uicore-linearloader',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [className]
 * @prop {number} [amount] - The progression in percent without the '%' sign
 * @prop {string} [margin=spacers.dp12] - The margin around the loader, can be a full shorthand
 * @prop {string} [width=300px] - The width of the entire indicator, e.g. '100%' or '300px'
 * @prop {string} [dataTest]
 */
LinearLoader.propTypes = {
    amount: propTypes.number.isRequired,
    className: propTypes.string,
    dataTest: propTypes.string,
    margin: propTypes.string,
    width: propTypes.string,
}

export { LinearLoader }
