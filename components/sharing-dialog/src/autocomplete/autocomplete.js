import { useDhis2ConnectionStatus } from '@dhis2/app-runtime'
import { InputField } from '@dhis2-ui/input'
import { Menu, MenuItem } from '@dhis2-ui/menu'
import useSize from '@react-hook/size'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import i18n from '../locales/index.js'
import { MenuPopup } from './menu-popup.js'

export const Autocomplete = ({
    dataTest = 'dhis2-sharingdialog-autocomplete',
    inputWidth,
    label,
    loading,
    onClose,
    onSearch,
    onSelect,
    placeholder,
    search,
    searchResults,
}) => {
    const wrapper = useRef(null)
    const [menuWidth] = useSize(wrapper)
    const { isDisconnected: offline } = useDhis2ConnectionStatus()

    return (
        <>
            <div ref={wrapper}>
                <InputField
                    label={label}
                    loading={loading}
                    placeholder={placeholder}
                    onChange={({ value }) => onSearch(value)}
                    value={search}
                    inputWidth={inputWidth}
                    disabled={offline}
                    helpText={offline ? i18n.t('Not available offline') : ''}
                />
            </div>
            {searchResults.length > 0 && (
                <MenuPopup
                    onClick={onClose}
                    menuWidth={`${menuWidth}px`}
                    menuRef={wrapper}
                    dataTest={`${dataTest}-menu`}
                >
                    <Menu>
                        {searchResults.map((result) => (
                            <MenuItem
                                key={result.id}
                                label={result.displayName}
                                value={result.id}
                                onClick={({ value }) => onSelect(value)}
                            />
                        ))}
                    </Menu>
                </MenuPopup>
            )}
        </>
    )
}

Autocomplete.propTypes = {
    searchResults: PropTypes.arrayOf(
        PropTypes.shape({
            displayName: PropTypes.string,
            id: PropTypes.string,
        })
    ).isRequired,
    dataTest: PropTypes.string,
    inputWidth: PropTypes.string,
    label: PropTypes.string,
    loading: PropTypes.bool,
    placeholder: PropTypes.string,
    search: PropTypes.string,
    onClose: PropTypes.func,
    onSearch: PropTypes.func,
    onSelect: PropTypes.func,
}
