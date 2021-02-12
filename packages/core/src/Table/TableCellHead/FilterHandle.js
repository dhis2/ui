import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import { IconSearch16 } from '@dhis2/ui-icons'
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
    active: propTypes.bool,
    name: propTypes.string,
    onFilterIconClick: propTypes.func,
}
