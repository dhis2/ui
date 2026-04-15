import React from 'react'

export interface ContainerProps {
    height: string
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

export const Container = ({
    children,
    dataTest,
    className,
    height,
}: ContainerProps) => (
    <div data-test={dataTest} className={className}>
        {children}

        <style jsx>{`
            div {
                display: flex;
                width: 100%;
                height: ${height};
            }
        `}</style>
    </div>
)
