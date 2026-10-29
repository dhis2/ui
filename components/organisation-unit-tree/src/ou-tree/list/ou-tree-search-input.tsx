import i18n from '@dhis2/d2-i18n'
import { InputField } from '@dhis2-ui/input'
import React from 'react'
import { useOuTreeSearch } from '../tree/index'

export interface OuTreeSearchInputProps {
    placeholder?: string
    className?: string
    dataTest?: string
}

/**
 * An InputField wired to the tree's search: clearable, dense, with the
 * help text while the term is too short and the loading indicator while
 * page one is in flight. Must be inside an OuTreeProvider.
 */
export const OuTreeSearchInput = ({
    placeholder,
    className,
    dataTest = 'dhis2-uicore-outree',
}: OuTreeSearchInputProps) => {
    const { term, setTerm, helpText, status } = useOuTreeSearch()
    return (
        <InputField
            name="search"
            type="search"
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
