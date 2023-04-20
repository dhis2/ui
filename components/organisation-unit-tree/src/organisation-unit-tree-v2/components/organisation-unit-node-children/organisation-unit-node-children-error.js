import i18n from '@dhis2/d2-i18n'
import { colors } from '@dhis2/ui-constants'
import { IconErrorFilled16 } from '@dhis2/ui-icons'
import React from 'react'

export const OrganisationUnitNodeChildrenError = () => (
    <li>
        <IconErrorFilled16 />
        {i18n.t('Could not load children')}
        <style jsx>{`
            li {
                display: inline-flex;
                align-items: flex-end;
                justify-content: flex-start;
                list-style: none;
                color: ${colors.red700};
                font-size: 14px;
                line-height: 16px;
                padding-inline-start: 2px;
            }
        `}</style>
    </li>
)
