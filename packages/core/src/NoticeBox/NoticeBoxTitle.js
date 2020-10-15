import propTypes from '@dhis2/prop-types'
import { colors, spacers } from '@dhis2/ui-constants'
import React from 'react'

export const NoticeBoxTitle = ({ title, dataTest }) => {
    if (!title) {
        return null
    }

    return (
        <h6 data-test={dataTest}>
            {title}
            <style jsx>{`
                h6 {
                    color: ${colors.grey900};
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 20px;
                    margin: 0 0 ${spacers.dp12} 0;
                }
            `}</style>
        </h6>
    )
}

NoticeBoxTitle.propTypes = {
    dataTest: propTypes.string.isRequired,
    title: propTypes.string,
}
