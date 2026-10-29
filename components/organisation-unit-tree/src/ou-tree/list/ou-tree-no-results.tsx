import i18n from '@dhis2/d2-i18n'
import { colors, spacers } from '@dhis2/ui-constants'
import React from 'react'

export interface OuTreeNoResultsProps {
    dataTest?: string
}

/** The line shown instead of the rows when a search found nothing. */
export const OuTreeNoResults = ({ dataTest }: OuTreeNoResultsProps) => (
    <div data-test={dataTest}>
        {i18n.t('No results found')}
        <style jsx>{`
            div {
                color: ${colors.grey700};
                font-size: 13px;
                font-style: italic;
                line-height: 16px;
                padding-block: ${spacers.dp8};
                padding-inline: ${spacers.dp24};
            }
        `}</style>
    </div>
)
