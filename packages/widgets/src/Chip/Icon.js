import React from 'react'
import propTypes from '@dhis2/prop-types'

import { spacers } from '@dhis2/ui-constants'

export const Icon = ({ icon, dataTest }) => {
    if (!icon) {
        return null
    }

    return (
        <span data-test={dataTest}>
            {icon}

            <style jsx>{`
                span {
                    width: 24px;
                    height: 24px;
                    margin-left: ${spacers.dp4};
                    margin-right: -6px;
                    border-radius: 50%;
                    overflow: hidden;
                }

                span > :global(*) {
                    max-height: 24px;
                    max-width: 24px;
                }
            `}</style>
        </span>
    )
}

Icon.propTypes = {
    dataTest: propTypes.string.isRequired,
    /** the slot for an icon is 24x24px, bigger elements will be clipped */
    icon: propTypes.element,
}
