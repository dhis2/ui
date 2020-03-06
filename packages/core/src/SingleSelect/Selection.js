import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'
import { singleSelectedPropType } from '../common-prop-types.js'
import { spacers } from '@dhis2/ui-constants'
import { findOptionChild } from '../Select/option-helpers.js'

const Selection = ({ options, selected, className }) => {
    const selectedOption = findOptionChild(selected, options)

    if (!selectedOption) {
        const message =
            'The selected option could not be found as a child of the select. ' +
            'Make sure that the value and label passed to the `selected` prop ' +
            'match an existing option.'
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
    className: propTypes.string,
    options: propTypes.node,
    selected: singleSelectedPropType,
}

export { Selection }
