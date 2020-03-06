import React from 'react'
import propTypes from '@dhis2/prop-types'
import { singleSelectedPropType } from '../common-prop-types.js'
import { FilterableMenu as CommonFilterableMenu } from '../Select/FilterableMenu.js'
import { Menu } from './Menu.js'

const FilterableMenu = ({
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
    dataTest: propTypes.string.isRequired,
    noMatchText: propTypes.string.isRequired,
    empty: propTypes.node,
    handleClose: propTypes.func,
    handleFocusInput: propTypes.func,
    options: propTypes.node,
    placeholder: propTypes.string,
    selected: singleSelectedPropType,
    onChange: propTypes.func,
}

export { FilterableMenu }
