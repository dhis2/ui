import React from 'react'
import propTypes from '@dhis2/prop-types'

import { Action } from './Action.js'
import { spacers } from '@dhis2/ui-constants'

const Actions = ({ actions, hide, dataTest }) => {
    if (!actions) {
        return null
    }

    return (
        <div>
            {actions.map(action => (
                <Action
                    key={action.label}
                    {...action}
                    hide={hide}
                    dataTest={`${dataTest}-action`}
                />
            ))}
            <style jsx>{`
                div {
                    margin-left: ${spacers.dp48};
                    margin-right: -${spacers.dp12};
                }
            `}</style>
        </div>
    )
}

const actionsPropType = propTypes.arrayWithLength(
    0,
    2,
    propTypes.shape({
        label: propTypes.string.isRequired,
        onClick: propTypes.func.isRequired,
    })
)

Actions.propTypes = {
    dataTest: propTypes.string.isRequired,
    hide: propTypes.func.isRequired,
    actions: actionsPropType,
}

export { Actions, actionsPropType }
