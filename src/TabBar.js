import React from 'react'
import propTypes from '@dhis2/prop-types'

import { ScrollBar } from './TabBar/ScrollBar.js'
import { Tabs } from './TabBar/Tabs.js'
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
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    fixed: propTypes.bool,
    scrollable: propTypes.bool,
}

export { TabBar }
