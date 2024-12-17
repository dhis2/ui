import { colors } from '@dhis2/ui-constants'
import React from 'react'
import i18n from '../../locales/index.js'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import Heading from './heading.js'

export function EmptySearchResults() {
    const { filter } = useCommandPaletteContext()

    return (
        <>
            <div className="empty-results" data-test="headerbar-empty-search">
                <Heading heading={i18n.t(`Nothing found for "${filter}"`)} />
            </div>
            <style jsx>{`
                .empty-results {
                    min-height: 92px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    font-size: 14px;
                    line-height: 19px;
                    color: ${colors.grey700};
                }
            `}</style>
        </>
    )
}

export default EmptySearchResults
