import { colors } from '@dhis2/ui-constants'
import React from 'react'

export interface NoticeBoxMessageProps {
    dataTest: string
    children?: React.ReactNode
}

export const NoticeBoxMessage = ({
    children,
    dataTest,
}: NoticeBoxMessageProps) => {
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
                    line-height: 19px;
                }
            `}</style>
        </div>
    )
}
