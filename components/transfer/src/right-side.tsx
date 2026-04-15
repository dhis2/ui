import { colors } from '@dhis2/ui-constants'
import React from 'react'

export interface RightSideProps {
    width: string
    children?: React.ReactNode
    dataTest?: string
}

export const RightSide = ({ children, dataTest, width }: RightSideProps) => (
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
                background-color: ${colors.white};
                border: 1px solid ${colors.grey400};
                border-radius: 3px;
                display: flex;
                flex-direction: column;
                max-width: 100%;
                width: ${width};
            }
        `}</style>
    </div>
)
