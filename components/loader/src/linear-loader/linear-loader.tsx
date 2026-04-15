import { colors, theme, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

interface ProgressProps {
    amount: number
    invert?: boolean
    className?: string
}

const Progress = ({ amount, invert, className }: ProgressProps) => {
    return (
        <div className={cx(className, { invert })}>
            <style jsx>{`
                div {
                    width: ${amount}%;
                }
            `}</style>
            <style jsx>{`
                div {
                    background-color: ${theme.primary600};
                    transition: width 0.3s linear;
                    height: 4px;
                }
                .invert {
                    background-color: ${colors.white};
                }
            `}</style>
        </div>
    )
}

export interface LinearLoaderProps {
    /** The progression in percent without the '%' sign */
    amount: number
    'aria-label'?: string
    className?: string
    dataTest?: string
    /** Use inverted color scheme */
    invert?: boolean
    /** The margin around the loader, can be a full shorthand */
    margin?: string
    /** The width of the entire indicator */
    width?: string
}

const LinearLoader = ({
    amount,
    width = '300px',
    margin = spacers.dp12,
    invert,
    className,
    dataTest = 'dhis2-uicore-linearloader',
    'aria-label': ariaLabel,
}: LinearLoaderProps) => {
    return (
        <div
            role="progressbar"
            aria-valuenow={amount}
            aria-label={ariaLabel}
            className={cx(className, { invert })}
            data-test={dataTest}
        >
            <Progress amount={amount} invert={invert} />

            <style jsx>{`
                div {
                    display: block;
                    overflow: hidden;
                    overflow-x: hidden;
                    overflow-y: hidden;
                    background-color: rgba(110, 122, 138, 0.15);
                }
                .invert {
                    background-color: rgba(33, 41, 52, 0.5);
                }
            `}</style>
            <style jsx>{`
                div {
                    width: ${width};
                    margin: ${margin};
                }
            `}</style>
        </div>
    )
}

export { LinearLoader }
