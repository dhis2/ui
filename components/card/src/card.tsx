import { colors, elevations } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

export interface CardProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

const Card = ({
    className,
    children,
    dataTest = 'dhis2-uicore-card',
}: CardProps) => (
    <div className={cx(className)} data-test={dataTest}>
        {children}

        <style jsx>{`
            div {
                display: inline-block;
                position: relative;

                width: 100%;
                height: 100%;

                border-radius: 3px;
                background: ${colors.white};
                box-shadow: ${elevations.e100};
            }
        `}</style>
    </div>
)

export { Card }
