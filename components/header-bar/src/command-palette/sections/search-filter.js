import { colors, spacers, theme } from '@dhis2/ui-constants'
import { IconSearch16 } from '@dhis2/ui-icons'
import { InputField } from '@dhis2-ui/input'
import React, { useCallback, useMemo } from 'react'
import i18n from '../../locales/index.js'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import {
    ALL_APPS_VIEW,
    ALL_COMMANDS_VIEW,
    ALL_SHORTCUTS_VIEW,
} from '../utils/constants.js'

function SearchFilter() {
    const { currentView, filter, setFilter } = useCommandPaletteContext()

    const handleFilterChange = useCallback(
        ({ value }) => setFilter(value),
        [setFilter]
    )

    const placeholder = useMemo(() => {
        if (currentView === ALL_APPS_VIEW) {
            return i18n.t('Search apps')
        } else if (currentView === ALL_COMMANDS_VIEW) {
            return i18n.t('Search commands')
        } else if (currentView === ALL_SHORTCUTS_VIEW) {
            return i18n.t('Search shortcuts')
        }
        return i18n.t('Search apps, shortcuts, commands')
    }, [currentView])

    return (
        <>
            <InputField
                value={filter}
                name="filter"
                placeholder={placeholder}
                onChange={handleFilterChange}
                initialFocus
                className="search"
                autoComplete={'off'}
                prefixIcon={<IconSearch16 />}
                clearable
                dataTest="headerbar-search"
            />
            <style>{`
                .search {
                    border-bottom: 1px solid ${colors.grey300};
                }
                .search input {
                    font-size: 14px;
                    color: ${colors.grey900};
                    padding: ${spacers.dp12};
                    margin: 0;
                    border: none;
                    width: 100%;
                    height: 40px;
                    border-radius: 3px 3px 0px 0px;
                }
                .search input::placeholder {
                    color: ${colors.grey600};
                }
                .search input:focus {
                    outline: 2px solid ${theme.focus};
                    outline-offset: -2px;
                }
            `}</style>
        </>
    )
}

export default SearchFilter
