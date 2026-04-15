import cx from 'classnames'
import React from 'react'
import { Leaves } from './leaves.tsx'
import { Spacer } from './spacer.tsx'
import { Toggle } from './toggle.tsx'

export interface NodeProps {
    /** Content below this level of the hierarchy; children are revealed when this leaf is 'open' */
    children?: React.ReactNode
    className?: string
    /** Content/label for this leaf, for example a checkbox */
    component?: React.ReactElement
    dataTest?: string
    /** A custom icon to use instead of a toggle arrow */
    icon?: React.ReactNode
    open?: boolean
    onClose?: (
        payload: { open: boolean },
        event: React.MouseEvent<HTMLDivElement>
    ) => void
    onOpen?: (
        payload: { open: boolean },
        event: React.MouseEvent<HTMLDivElement>
    ) => void
}

export const Node = ({
    open,
    className,
    component: label,
    children,
    icon,
    onOpen,
    onClose,
    dataTest = 'dhis2-uicore-node',
}: NodeProps) => {
    const hasLeaves = !!React.Children.toArray(children).filter((i) => i).length
    const showArrow = !icon && hasLeaves
    const showSpacer = !icon && !hasLeaves

    return (
        <div className={cx('node', className)} data-test={dataTest}>
            {icon && <div data-test={`${dataTest}-icon`}>{icon}</div>}

            {showArrow && (
                <Toggle
                    open={open}
                    onOpen={onOpen}
                    onClose={onClose}
                    dataTest={`${dataTest}-toggle`}
                />
            )}

            {showSpacer && <Spacer />}

            <div data-test={`${dataTest}-content`}>
                <div data-test={`${dataTest}-label`}>{label}</div>

                <Leaves open={open} dataTest={`${dataTest}-leaves`}>
                    {children}
                </Leaves>
            </div>

            <style jsx>{`
                .node {
                    display: flex;
                }
            `}</style>
        </div>
    )
}
