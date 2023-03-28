import i18n from '@dhis2/d2-i18n'
import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

export const OrganisationUnitNodeSiblingsLoader = ({
    loadAllSiblings,
    hiddenSiblingsCount,
}) => (
    <li>
        {i18n.t('{{count}} units hidden by filter.', {
            count: hiddenSiblingsCount,
        })}{' '}
        <button onClick={loadAllSiblings}>{i18n.t('Show')}</button>
        <style jsx>{`
            li {
                list-style: none;
                padding-inline-start: 24px;
                color: ${colors.grey600};
                font-size: 13px;
                font-weight: 400;
                line-height: 16px;
            }
            li > button {
                all: unset;
                text-decoration: underline;
            }
            li > button:hover {
                cursor: pointer;
            }
        `}</style>
    </li>
)

OrganisationUnitNodeSiblingsLoader.propTypes = {
    hiddenSiblingsCount: PropTypes.number.isRequired,
    loadAllSiblings: PropTypes.func.isRequired,
}
