import { spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { findOptionChild } from '../select/index.js'

const Selection = ({ options, selected, className }) => {
    const isProduction = process.env.NODE_ENV === 'production'
    const selectedOption = findOptionChild(selected, options)

    if (!selectedOption) {
        const message =
            `There is no option with the value: "${selected}". ` +
            'Make sure that the value passed to the selected ' +
            'prop matches the value of an existing option.'

        if (isProduction) {
            // Don't crash the app if in production
            console.error(message)
        } else {
            // Throw error if not in production for maximum visibility
            throw new Error(message)
        }
    }

    const icon = selectedOption && selectedOption.props.icon
    // Use the selected value if we do not have a label
    const label = selectedOption ? selectedOption.props.label : selected

    return (
        <div className={cx(className, 'root')}>
            {icon && <div className="root-icon">{icon}</div>}
            {label}

            <style jsx>{`
                .root {
                    display: flex;
                    align-items: center;
                    user-select: none;
                }

                .root-icon {
                    margin-right: ${spacers.dp8};
                    width: ${spacers.dp16};
                    height: ${spacers.dp16};
                    overflow: hidden;
                    flex-shrink: 0;
                }
            `}</style>
        </div>
    )
}

Selection.propTypes = {
    className: PropTypes.string,
    options: PropTypes.node,
    selected: PropTypes.string,
}

export { Selection }
