import React from 'react'
import { ScrollBar } from './scroll-bar.tsx'
import { Tabs } from './tabs.tsx'

export interface TabBarProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /** Fixed tabs fill the width of their container. If false (i.e. fluid), tabs take up an amount of space defined by the tab name. Fluid tabs should be used most of the time. */
    fixed?: boolean
    /** Enables horizontal scrolling for many tabs that don't fit the width of the container */
    scrollable?: boolean
}

const TabBar = ({
    fixed,
    children,
    className,
    scrollable,
    dataTest = 'dhis2-uicore-tabbar',
}: TabBarProps) => {
    if (scrollable) {
        return (
            <div className={className} data-test={dataTest}>
                <ScrollBar dataTest={`${dataTest}-scrollbar`}>
                    <Tabs fixed={fixed} dataTest={`${dataTest}-tabs`}>
                        {children}
                    </Tabs>
                </ScrollBar>
            </div>
        )
    }

    return (
        <div className={className} data-test={dataTest}>
            <Tabs fixed={fixed} dataTest={`${dataTest}-tabs`}>
                {children}
            </Tabs>
        </div>
    )
}

export { TabBar }
