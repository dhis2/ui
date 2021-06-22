import PropTypes from 'prop-types'
import React from 'react'
import { ScrollBar } from './scroll-bar.js'
import { Tabs } from './tabs.js'

const TabBar = ({ fixed, children, className, scrollable, dataTest }) => {
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

TabBar.defaultProps = {
    dataTest: 'dhis2-uicore-tabbar',
}

TabBar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Fixed tabs fill the width of their container. If false (i.e. fluid), tabs take up an amount of space defined by the tab name. Fluid tabs should be used most of the time. */
    fixed: PropTypes.bool,
    /** Enables horizontal scrolling for many tabs that don't fit the width of the container */
    scrollable: PropTypes.bool,
}

export { TabBar }
