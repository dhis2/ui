import { colors } from '@dhis2/ui-constants'
import React from 'react'

export interface NoticeBoxMessageProps {
    dataTest: string
    children?: React.ReactNode
    dense?: boolean
}

export const NoticeBoxMessage = ({
    children,
    dataTest,
    dense = false,
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
                    font-size: ${dense ? '13px' : '14px'};
                    line-height: ${dense ? '18px' : '19px'};
                }
            `}</style>
        </div>
    )
}
