import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

export const NoticeBoxTitle = ({ title, dataTest, dense = false }) => {
    if (!title) {
        return null
    }

    return (
        <h6 data-test={dataTest}>
            {title}
            <style jsx>{`
                h6 {
                    color: ${colors.grey900};
                    font-size: ${dense ? '13px' : '14px'};
                    font-weight: 500;
                    line-height: ${dense ? '18px' : '19px'};
                    margin: 0;
                }
            `}</style>
        </h6>
    )
}

NoticeBoxTitle.propTypes = {
    dataTest: PropTypes.string.isRequired,
    dense: PropTypes.bool,
    title: PropTypes.string,
}
