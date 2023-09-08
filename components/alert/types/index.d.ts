import * as React from 'react'

export interface ActionsAction {
    label: string
    onClick: React.MouseEventHandler<HTMLSpanElement>
}

type ActionActionTuple = [ActionsAction?, ActionsAction?]

export interface AlertBarProps {
    /**
     * An array of 0-2 action objects
     */
    actions?: ActionActionTuple
    /**
     * The message string for the alert
     */
    children?: string
    className?: string
    /**
     * Alert bars with `critical` will not autohide
     */
    critical?: boolean
    dataTest?: string
    duration?: number
    hidden?: boolean
    /**
     * A specific icon to override the default icon in the bar.
     * If `false` is provided, no icon will be shown.
     */
    icon?: Element | boolean
    permanent?: boolean
    success?: boolean
    /**
     * Alert bars with `warning` will not autohide
     */
    warning?: boolean
    onHidden?: (arg0: {}, argv1: null) => void
}

export const AlertBar: React.FC<AlertBarProps>

export interface AlertStackProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

export const AlertStack: React.FC<AlertStackProps>
