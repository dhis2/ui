import React from 'react'

interface TagTextProps {
    dataTest: string
    children?: React.ReactNode
}

export const TagText = ({ children, dataTest }: TagTextProps) => (
    <span data-test={dataTest}>
        {children}
        <style jsx>{`
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        `}</style>
    </span>
)
