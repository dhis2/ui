import { colors } from '@dhis2/ui-constants'
import React from 'react'
import { orgUnitIdPropType } from '../../prop-types.js'
import { useOrganisationUnitTreeComponents } from '../hooks/index.js'

export const OrganisationUnitNode = ({ id }) => {
    const { OrganisationUnitNodeChildren, OrganisationUnitNodeLabel } =
        useOrganisationUnitTreeComponents()

    return (
        <li>
            <OrganisationUnitNodeLabel id={id} />
            <ul>
                <OrganisationUnitNodeChildren id={id} />
            </ul>
            <style jsx>{`
                li {
                    list-style: none;
                }
                ul {
                    padding: 0 0 0 24px;
                    background: linear-gradient(transparent, transparent) left
                            top/11px calc(100% - 12px) no-repeat,
                        linear-gradient(${colors.grey400}, ${colors.grey400})
                            11px top/1px calc(100% - 12px) no-repeat,
                        linear-gradient(transparent, transparent) 12px top/12px
                            calc(100% - 12px) no-repeat;
                }
                ul:empty {
                    display: none;
                }
                li > :global(div:has(div.toggler:hover)) ~ ul {
                    background: linear-gradient(
                                ${colors.grey100},
                                ${colors.grey100}
                            )
                            left top/11px calc(100% - 12px) no-repeat,
                        linear-gradient(${colors.grey400}, ${colors.grey400})
                            11px top/1px calc(100% - 12px) no-repeat,
                        linear-gradient(${colors.grey100}, ${colors.grey100})
                            12px top/12px calc(100% - 12px) no-repeat;
                }
            `}</style>
        </li>
    )
}

OrganisationUnitNode.propTypes = {
    id: orgUnitIdPropType,
}
