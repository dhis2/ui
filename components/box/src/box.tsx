import React from 'react'

export interface BoxProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    height?: string
    marginTop?: string
    maxHeight?: string
    maxWidth?: string
    minHeight?: string
    minWidth?: string
    overflow?: string
    width?: string
}

export const Box = ({
    overflow,
    height,
    minHeight,
    maxHeight,
    width,
    minWidth,
    maxWidth,
    marginTop,
    children,
    dataTest = 'dhis2-uicore-box',
    className,
}: BoxProps) => (
    <div data-test={dataTest} className={className}>
        {children}
        <style jsx>{`
            div {
                ${marginTop ? `margin-top: ${marginTop};` : ''}
                ${height ? `height: ${height};` : ''}
                ${minHeight ? `min-height: ${minHeight};` : ''}
                ${maxHeight ? `max-height: ${maxHeight};` : ''}
                ${width ? `width: ${width};` : ''}
                ${minWidth ? `min-width: ${minWidth};` : ''}
                ${maxWidth ? `max-width: ${maxWidth};` : ''}
                ${overflow ? `overflow: ${overflow};` : ''}
            }
        `}</style>
    </div>
)
