import * as React from 'react'

export interface CircularLoaderProps {
    className?: string
    dataTest?: string
    extrasmall?: boolean
    invert?: boolean
    large?: boolean
    small?: boolean
    ariaLabel?: string
}

export const CircularLoader: React.FC<CircularLoaderProps>

export interface LinearLoaderProps {
    /**
     * The progression in percent without the '%' sign
     */
    amount: number
    className?: string
    dataTest?: string
    /**
     * Use inverted color scheme
     */
    invert?: boolean
    /**
     * The margin around the loader, can be a full shorthand
     */
    margin?: string
    /**
     * The width of the entire indicator
     */
    width?: string
    ariaLabel?: string
}

export const LinearLoader: React.FC<LinearLoaderProps>
