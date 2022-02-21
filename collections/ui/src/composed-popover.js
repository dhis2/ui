import { Layer } from '@dhis2-ui/layer'
import { Popover } from '@dhis2-ui/popover'
import PropTypes from 'prop-types'
import React from 'react'

export const ComposedPopover = ({ onClickOutside, ...rest }) => {
    return (
        <Layer onClick={onClickOutside}>
            <Popover {...rest} />
        </Layer>
    )
}
ComposedPopover.propTypes = {
    onClickOutside: PropTypes.func,
}
