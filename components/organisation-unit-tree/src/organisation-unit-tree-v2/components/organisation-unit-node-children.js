import { Button } from '@dhis2-ui/button'
import i18n from '@dhis2/d2-i18n'
import { colors } from '@dhis2/ui-constants'
import React from 'react'
import { orgUnitIdPropType } from '../../prop-types.js'
import {
    useOrganisationUnitNodeChildren,
    useOrganisationUnitTreeComponents,
} from '../hooks/index.js'

export const OrganisationUnitNodeChildren = ({ id }) => {
    const { OrganisationUnitNode } = useOrganisationUnitTreeComponents()
    const { visibleChildrenIds, error, hasMoreChildren, loadAllChildren } =
        useOrganisationUnitNodeChildren(id)

    if (visibleChildrenIds.length === 0) {
        return null
    }

    return (
        <ul>
            {error && (
                <li>
                    <span className="error">
                        {i18n.t('Could not load children')}
                    </span>
                </li>
            )}
            {!error &&
                visibleChildrenIds.map((id) => (
                    <OrganisationUnitNode key={id} id={id} />
                ))}
            {!error && hasMoreChildren && (
                <li className="load-all-children">
                    <Button small secondary onClick={loadAllChildren}>
                        {i18n.t('Load more')}
                    </Button>
                </li>
            )}
            <style jsx>{`
                ul {
                    margin: 0 0 0 11px;
                    padding: 0 0 0 12px;
                    background-image: linear-gradient(
                            ${colors.grey400},
                            ${colors.grey400}
                        ),
                        linear-gradient(transparent, transparent);
                    background-repeat: no-repeat;
                    background-size: 1px calc(100% - 12px), 12px 100%;
                    background-position: left top, 1px 0;
                }
                li.load-all-children {
                    list-style: none;
                    padding-inline-start: 24px;
                }
                li.load-all-children > :global(button) {
                    color: ${colors.grey700};
                    font-size: 12px;
                    line-height: 14px;
                    padding: 4px;
                    height: 18px;
                }
            `}</style>
        </ul>
    )
}

OrganisationUnitNodeChildren.propTypes = {
    id: orgUnitIdPropType,
}
