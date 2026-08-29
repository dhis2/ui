import { spacers } from '@dhis2/ui-constants'
import React from 'react'
import { NoticeBoxMessage } from './notice-box-message.tsx'
import { NoticeBoxTitle } from './notice-box-title.tsx'

export interface NoticeBoxContentProps {
    children?: React.ReactNode
    dataTest?: string
    dense?: boolean
    title?: string
}

export const NoticeBoxContent = ({
    children,
    dataTest = 'dhis2-uicore-noticebox-content',
    title,
    dense = false,
}: NoticeBoxContentProps) => {
    return (
        <div data-test={dataTest}>
            <NoticeBoxTitle
                title={title}
                dense={dense}
                dataTest={`${dataTest}-title`}
            />
            <NoticeBoxMessage dense={dense} dataTest={`${dataTest}-message`}>
                {children}
            </NoticeBoxMessage>
            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
                    gap: ${dense ? '2px' : spacers.dp8};
                    padding-block-start: ${dense ? '0' : '3px'};
                }
            `}</style>
        </div>
    )
}
