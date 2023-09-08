import * as React from 'react'

export interface CardProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

export const Card: React.FC<CardProps>
