import { arrayWithLength } from '@dhis2/prop-types'
import { spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { Action } from './action.js'

const Actions = ({ actions, hide, dataTest }) => {
    if (!actions) {
        return null
    }

    return (
        <div>
            {actions.map((action) => (
                <Action
                    key={action.label}
                    {...action}
                    hide={hide}
                    dataTest={`${dataTest}-action`}
                />
            ))}
            <style jsx>{`
                div {
                    margin-inline-start: ${spacers.dp48};
                    margin-inline-end: -${spacers.dp12};
                }
            `}</style>
        </div>
    )
}

const actionsPropType = arrayWithLength(
    0,
    2,
    PropTypes.shape({
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    })
)

Actions.propTypes = {
    dataTest: PropTypes.string.isRequired,
    hide: PropTypes.func.isRequired,
    actions: actionsPropType,
}

export { Actions, actionsPropType }
