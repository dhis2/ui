import { colors, theme, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const Progress = ({ amount, invert, className }) => {
    return (
        <div className={cx(className, { invert })}>
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
                .invert {
                    background-color: ${colors.white};
                }
            `}</style>
        </div>
    )
}

Progress.propTypes = {
    amount: PropTypes.number.isRequired,
    className: PropTypes.string,
    invert: PropTypes.bool,
}

const LinearLoader = ({
    amount,
    width,
    margin,
    invert,
    className,
    dataTest,
    ariaLabel,
}) => {
    return (
        <div
            role="progressbar"
            aria-valuenow={amount}
            aria-label={ariaLabel}
            className={cx(className, { invert })}
            data-test={dataTest}
        >
            <Progress amount={amount} invert={invert} />

            <style jsx>{`
                div {
                    display: block;
                    overflow: hidden;
                    overflow-x: hidden;
                    overflow-y: hidden;
                    background-color: rgba(110, 122, 138, 0.15);
                }
                .invert {
                    background-color: rgba(33, 41, 52, 0.5);
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

LinearLoader.propTypes = {
    /** The progression in percent without the '%' sign */
    amount: PropTypes.number.isRequired,
    ariaLabel: PropTypes.string,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Use inverted color scheme */
    invert: PropTypes.bool,
    /** The margin around the loader, can be a full shorthand */
    margin: PropTypes.string,
    /** The width of the entire indicator */
    width: PropTypes.string,
}

export { LinearLoader }
