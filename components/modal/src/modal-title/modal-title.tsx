import { colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

export interface ModalTitleProps {
    children?: React.ReactNode
    dataTest?: string
}

export const ModalTitle = ({
    children,
    dataTest = 'dhis2-uicore-modaltitle',
}: ModalTitleProps) => (
    <h1 className={cx('title')} data-test={dataTest}>
        {children}

        <style jsx>{`
            h1 {
                order: 1;
                align-self: flex-start;
                color: ${colors.grey900};
                font-size: 20px;
                font-weight: 500;
                line-height: 24px;
                margin: 0 0 ${spacers.dp12};
            }
        `}</style>
    </h1>
)
