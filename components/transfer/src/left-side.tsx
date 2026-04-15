import { colors } from '@dhis2/ui-constants'
import React from 'react'

export interface LeftSideProps {
    width: string
    children?: React.ReactNode
    dataTest?: string
}

export const LeftSide = ({ children, dataTest, width }: LeftSideProps) => (
    <div data-test={dataTest}>
        {children}

        {
            /**
             * Flex basis 0px to make sure right and left side
             * always have the same width
             */ ''
        }
        <style jsx>{`
            div {
                display: flex;
                flex-direction: column;
                background-color: ${colors.white};
                border-radius: 3px;
                border: 1px solid ${colors.grey400};
                min-height: 240px;
                max-width: 100%;
                width: ${width};
            }
        `}</style>
    </div>
)
