import { colors, spacers } from '@dhis2/ui-constants'
import { IconDimensionOrgUnit16 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'

const OrganisationUnitNodeSelectedDescendantCount = ({
    selectedDescendantsCount,
}) => (
    <span>
        <IconDimensionOrgUnit16 />
        {selectedDescendantsCount}
        <style jsx>{`
            span {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                height: 18px;
                font-size: 11px;
                font-weight: 500px;
                margin-inline-start: ${spacers.dp8};
                color: ${colors.grey800};
                background-color: ${colors.grey300};
                border: 1px solid ${colors.grey500};
                border-radius: 8px;
                padding: 0 ${spacers.dp4};
            }
            span > :global(svg) {
                height: 13px;
            }
        `}</style>
    </span>
)

OrganisationUnitNodeSelectedDescendantCount.propTypes = {
    selectedDescendantsCount: PropTypes.number.isRequired,
}

export { OrganisationUnitNodeSelectedDescendantCount }
