import React from 'react'
import { FilterableMenu as CommonFilterableMenu } from '../select/index.ts'
import { Menu } from './menu.tsx'

export interface SingleSelectFilterableMenuProps {
    dataTest: string
    noMatchText: string
    empty?: React.ReactNode
    handleClose?: () => void
    handleFocusInput?: () => void
    options?: React.ReactNode
    placeholder?: string
    selected?: string
    onChange?: (data: { selected: string }, e: React.SyntheticEvent) => void
}

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
}: SingleSelectFilterableMenuProps) => (
    <CommonFilterableMenu
        dataTest={dataTest}
        options={options}
        onChange={onChange as never}
        selected={selected || ''}
        empty={empty}
        handleClose={handleClose}
        handleFocusInput={handleFocusInput}
        placeholder={placeholder}
        noMatchText={noMatchText}
        Menu={Menu}
    />
)
