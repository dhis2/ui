import i18n from '@dhis2/d2-i18n'
import { InputField } from '@dhis2-ui/input'
import React from 'react'
import { useOuTreeFocusTarget, useOuTreeSearch } from '../tree'

export interface OuTreeSearchInputProps {
    placeholder?: string
    className?: string
    dataTest?: string
}

/**
 * An InputField wired to the tree's search: a searchbox, clearable, dense,
 * with the help text while the term is too short and the loading
 * indicator while page one is in flight. Down moves focus to the tree and
 * Escape clears the search. Must be inside an OuTreeProvider. A text
 * input, not type="search": Chromium draws its own clear cross for that
 * next to the clearable button.
 */
export const OuTreeSearchInput = ({
    placeholder,
    className,
    dataTest = 'dhis2-uicore-outree',
}: OuTreeSearchInputProps) => {
    const { term, setTerm, helpText, status } = useOuTreeSearch()
    const focusTarget = useOuTreeFocusTarget()
    return (
        <InputField
            name="search"
            type="text"
            role="searchbox"
            onKeyDown={(_, event) => {
                if (event.key === 'ArrowDown') {
                    event.preventDefault()
                    focusTarget.current?.focus()
                } else if (event.key === 'Escape') {
                    setTerm('')
                }
            }}
            dense
            clearable
            value={term}
            onChange={({ value }) => setTerm(value ?? '')}
            helpText={helpText}
            loading={status.status === 'loading'}
            placeholder={placeholder ?? i18n.t('Search')}
            className={className}
            dataTest={`${dataTest}-search`}
        />
    )
}
