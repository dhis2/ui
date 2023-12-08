import * as React from 'react'

export interface TabProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    disabled?: boolean
    icon?: React.ReactElement<any>
    /**
     * Indicates this tab is selected
     */
    selected?: boolean
    /**
     * Called with the signature `({}, event)`
     */
    onClick?: (arg0: {}, event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Tab: React.FC<TabProps>

export interface TabBarProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * Fixed tabs fill the width of their container. If false (i.e. fluid), tabs take up an amount of space defined by the tab name. Fluid tabs should be used most of the time.
     */
    fixed?: boolean
    /**
     * Enables horizontal scrolling for many tabs that don't fit the width of the container
     */
    scrollable?: boolean
}

export const TabBar: React.FC<TabBarProps>

export interface TabsProps {
    dataTest: string
    children?: React.ReactNode
    fixed?: boolean
}

export const Tabs: React.FC<TabsProps>
