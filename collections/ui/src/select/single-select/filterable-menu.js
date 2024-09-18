import PropTypes from 'prop-types'
import React from 'react'
import { FilterableMenu as CommonFilterableMenu } from '../select/index.js'
import { Menu } from './menu.js'

export const FilterableMenu = ({
    dataTest,
    options,
    onChange,
    selected,
    empty,
    handleClose,
    handleFocusInput,
    placeholder,
    noMatchText,
}) => (
    <CommonFilterableMenu
        dataTest={dataTest}
        options={options}
        onChange={onChange}
        selected={selected}
        empty={empty}
        handleClose={handleClose}
        handleFocusInput={handleFocusInput}
        placeholder={placeholder}
        noMatchText={noMatchText}
        Menu={Menu}
    />
)

FilterableMenu.propTypes = {
    dataTest: PropTypes.string.isRequired,
    noMatchText: PropTypes.string.isRequired,
    empty: PropTypes.node,
    handleClose: PropTypes.func,
    handleFocusInput: PropTypes.func,
    options: PropTypes.node,
    placeholder: PropTypes.string,
    selected: PropTypes.string,
    onChange: PropTypes.func,
}
