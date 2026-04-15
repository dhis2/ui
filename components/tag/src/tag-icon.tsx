import React from 'react'

interface TagIconProps {
    dataTest: string
    children?: React.ReactNode
}

export const TagIcon = ({ children, dataTest }: TagIconProps) => (
    <div data-test={dataTest}>
        {children}
        <style jsx>{`
            display: flex;
            align-items: center;
            margin-inline-end: 4px;
            max-height: 16px;
            max-width: 16px;
        `}</style>
    </div>
)
