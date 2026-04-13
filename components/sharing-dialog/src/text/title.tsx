import { colors } from '@dhis2/ui-constants'
import React from 'react'

export interface TitleProps {
    children: React.ReactNode
}

export const Title = ({ children }: TitleProps) => {
    return (
        <>
            <h2>{children}</h2>
            <style jsx>{`
                h2 {
                    font-size: 16px;
                    color: ${colors.grey900};
                }
            `}</style>
        </>
    )
}
