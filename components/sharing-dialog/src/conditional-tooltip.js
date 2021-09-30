import { Tooltip } from '@dhis2-ui/tooltip'
import PropTypes from 'prop-types'
import React from 'react'

export const ConditionalTooltip = ({ show, content, children }) => {
    if (!show) {
        return children
    }

    return <Tooltip content={content}>{children}</Tooltip>
}

ConditionalTooltip.propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
}
