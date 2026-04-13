import { spacers } from '@dhis2/ui-constants'
import React from 'react'
import { NoticeBoxMessage } from './notice-box-message.tsx'
import { NoticeBoxTitle } from './notice-box-title.tsx'

export interface NoticeBoxContentProps {
    children?: React.ReactNode
    dataTest?: string
    title?: string
}

export const NoticeBoxContent = ({
    children,
    dataTest = 'dhis2-uicore-noticebox-content',
    title,
}: NoticeBoxContentProps) => {
    return (
        <div data-test={dataTest}>
            <NoticeBoxTitle title={title} dataTest={`${dataTest}-title`} />
            <NoticeBoxMessage dataTest={`${dataTest}-message`}>
                {children}
            </NoticeBoxMessage>
            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
                    gap: ${spacers.dp8};
                    padding-block-start: 3px;
                }
            `}</style>
        </div>
    )
}
