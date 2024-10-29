import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../../locales/index.js'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import Heading from '../sections/heading.js'
import List from '../sections/list.js'
import { EmptySearchResults } from '../sections/search-results.js'

export function BrowseApps({ apps }) {
    return <ListView heading={i18n.t('All Apps')} filteredItems={apps} />
}

BrowseApps.propTypes = {
    apps: PropTypes.array,
}
export function BrowseCommands({ commands }) {
    return (
        <ListView
            heading={i18n.t('All Commands')}
            filteredItems={commands}
            type={'commands'}
        />
    )
}

BrowseCommands.propTypes = {
    commands: PropTypes.array,
}

export function BrowseShortcuts({ shortcuts }) {
    return (
        <ListView heading={i18n.t('All Shortcuts')} filteredItems={shortcuts} />
    )
}

BrowseShortcuts.propTypes = {
    shortcuts: PropTypes.array,
}

function ListView({ heading, filteredItems, type }) {
    const { filter } = useCommandPaletteContext()

    return filteredItems.length > 0 ? (
        <>
            <Heading
                heading={
                    filter.length > 0
                        ? i18n.t(`Results for "${filter}"`)
                        : heading
                }
            />
            <List filteredItems={filteredItems} type={type} />
        </>
    ) : filter ? (
        <EmptySearchResults />
    ) : null
}

ListView.propTypes = {
    filteredItems: PropTypes.array,
    heading: PropTypes.string,
    type: PropTypes.string,
}

export default ListView
