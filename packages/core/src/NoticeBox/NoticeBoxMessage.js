import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import React from 'react'

export const NoticeBoxMessage = ({ children, dataTest }) => {
    if (!children) {
        return null
    }

    return (
        <div data-test={dataTest}>
            {children}

            <style jsx>{`
                div {
                    color: ${colors.grey900};
                    font-size: 14px;
                    line-height: 20px;
                }
            `}</style>
        </div>
    )
}

NoticeBoxMessage.propTypes = {
    dataTest: propTypes.string.isRequired,
    children: propTypes.node,
}
