import { MenuDivider, MenuItem } from '@dhis2-ui/menu'
import PropTypes from 'prop-types'
import React from 'react'

export const CustomSingleSelectOption = ({
    label,
    value,
    active,
    destructive,
    onClick,
}) => (
    <>
        {destructive && <MenuDivider dense />}
        <MenuItem
            label={label}
            value={value}
            active={active}
            destructive={destructive}
            onClick={(_, e) => onClick({ selected: value }, e)}
            dense
        />
    </>
)

CustomSingleSelectOption.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    active: PropTypes.bool,
    destructive: PropTypes.bool,
    onClick: PropTypes.func,
}
