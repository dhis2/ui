import PropTypes from 'prop-types'
import React from 'react'
import { ScrollBar } from './scroll-bar.js'
import { Tabs } from './tabs.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {TabBar.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { TabBar } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/tab.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/tabs--default-fluid|Storybook}
 */
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

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Tab|Array.<Tab>} [children]
 * @prop {string} [className]
 * @prop {boolean} [fixed]
 * @prop {boolean} [scrollable]
 * @prop {string} [dataTest]
 * @prop {string} [dataTest]
 */
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
