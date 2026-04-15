import { useDhis2ConnectionStatus } from '@dhis2/app-runtime'
import { InputField } from '@dhis2-ui/input'
import { Menu, MenuItem } from '@dhis2-ui/menu'
import useSize from '@react-hook/size'
import React, { useRef } from 'react'
import i18n from '../locales/index.js'
import { MenuPopup } from './menu-popup.tsx'

interface SearchResult {
    id: string
    displayName: string
}

export interface AutocompleteProps {
    searchResults: SearchResult[]
    dataTest?: string
    inputWidth?: string
    label?: string
    loading?: boolean
    placeholder?: string
    search?: string
    onClose?: () => void
    onSearch?: (value: string) => void
    onSelect?: (value: string) => void
}

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
}: AutocompleteProps) => {
    const wrapper = useRef<HTMLDivElement>(null)
    const [menuWidth] = useSize(wrapper)
    const { isDisconnected: offline } = useDhis2ConnectionStatus()

    return (
        <>
            <div ref={wrapper}>
                <InputField
                    label={label}
                    loading={loading}
                    placeholder={placeholder}
                    onChange={({ value }: { value?: string }) =>
                        onSearch?.(value ?? '')
                    }
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
                    menuRef={wrapper as React.RefObject<HTMLElement>}
                    dataTest={`${dataTest}-menu`}
                >
                    <Menu>
                        {searchResults.map((result) => (
                            <MenuItem
                                key={result.id}
                                label={result.displayName}
                                value={result.id}
                                onClick={({ value }: { value?: string }) =>
                                    onSelect?.(value ?? '')
                                }
                            />
                        ))}
                    </Menu>
                </MenuPopup>
            )}
        </>
    )
}
