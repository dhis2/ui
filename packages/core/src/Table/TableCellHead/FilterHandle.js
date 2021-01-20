import { colors } from '@dhis2/ui-constants'
import { IconSearch16 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'
import { Action } from './Action'

export const FilterHandle = ({ active, name, onFilterIconClick }) => {
    const filterIconColor = active ? colors.blue700 : colors.grey600
    const onClick = event => {
        onFilterIconClick({ name, show: !active }, event)
    }

    return (
        <Action onClick={onClick}>
            <IconSearch16 color={filterIconColor} />
        </Action>
    )
}

FilterHandle.propTypes = {
    active: PropTypes.bool,
    name: PropTypes.string,
    onFilterIconClick: PropTypes.func,
}
