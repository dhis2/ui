import { spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { findOptionChild } from '../select/index.js'

const Selection = ({ options, selected, className }) => {
    const selectedOption = findOptionChild(selected, options)

    if (!selectedOption) {
        const message =
            `There is no option with the value: "${selected}". ` +
            'Make sure that the value passed to the selected ' +
            'prop matches the value of an existing option.'
        throw new Error(message)
    }

    const icon = selectedOption.props.icon
    const label = selectedOption.props.label

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
