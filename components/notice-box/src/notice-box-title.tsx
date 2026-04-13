import { colors } from '@dhis2/ui-constants'
import React from 'react'

export interface NoticeBoxTitleProps {
    dataTest: string
    title?: string
}

export const NoticeBoxTitle = ({ title, dataTest }: NoticeBoxTitleProps) => {
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
                    line-height: 19px;
                    margin: 0;
                }
            `}</style>
        </h6>
    )
}
