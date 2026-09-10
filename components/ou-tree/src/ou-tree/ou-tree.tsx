import i18n from '@dhis2/d2-i18n'
import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

export interface OuTreeProps {
    className?: string
    dataTest?: string
}

export const OuTree = ({
    className,
    dataTest = 'dhis2-uicore-outree',
}: OuTreeProps) => (
    <div className={cx('container', className)} data-test={dataTest}>
        <h1>{i18n.t('ouTree - coming soon')}</h1>
        <style jsx>
            {`
                .container {
                    padding: 16px;
                    border: 1px dashed ${colors.grey400};
                    border-radius: 3px;
                }
                h1 {
                    margin: 0;
                    color: ${colors.grey700};
                    font-size: 16px;
                    font-weight: 400;
                }
            `}
        </style>
    </div>
)
