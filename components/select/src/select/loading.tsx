import { colors, spacers, theme } from '@dhis2/ui-constants'
import { CircularLoader } from '@dhis2-ui/loader'
import cx from 'classnames'
import React from 'react'

export interface LoadingProps {
    dataTest: string
    className?: string
    message?: string
}

export const Loading = ({ message, className, dataTest }: LoadingProps) => (
    <div className={cx(className, 'container')} data-test={dataTest}>
        <div>
            <CircularLoader small />
        </div>
        {message}
        <style jsx>{`
            .container {
                display: flex;
                gap: ${spacers.dp16};
                align-items: center;
                justify-content: center;
                color: ${colors.grey700};
                font-family: ${theme.fonts};
                font-size: 13px;
                padding-block: ${spacers.dp8};
                padding-inline: ${spacers.dp24};
            }
        `}</style>
    </div>
)
