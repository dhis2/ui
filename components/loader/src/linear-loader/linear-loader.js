import { theme, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

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
    amount: PropTypes.number.isRequired,
}

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

LinearLoader.propTypes = {
    /** The progression in percent without the '%' sign */
    amount: PropTypes.number.isRequired,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** The margin around the loader, can be a full shorthand */
    margin: PropTypes.string,
    /** The width of the entire indicator */
    width: PropTypes.string,
}

export { LinearLoader }
