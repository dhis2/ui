import { colors } from '@dhis2/ui-constants'
import { Required } from '@dhis2-ui/required'
import React from 'react'

export interface LegendProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /** Indicates the associated field set is required */
    required?: boolean
}

const Legend = ({
    className,
    children,
    required,
    dataTest = 'dhis2-uicore-legend',
}: LegendProps) => (
    <legend className={className} data-test={dataTest}>
        {children}

        {required && <Required dataTest={`${dataTest}-required`} />}

        <style jsx>{`
            legend {
                font-size: 14px;
                line-height: 16px;
                color: ${colors.grey900};
            }
        `}</style>
    </legend>
)

export { Legend }
