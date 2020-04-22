import React from 'react'
import propTypes from '@dhis2/prop-types'

/**
 * @module
 * @param {MenuList.PropTypes}
 * @returns {React.Component}
 *
 * @example import { MenuList } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/menu.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/menulist--default|Storybook}
 */
const MenuList = ({ children, className, dataTest }) => (
    <ul className={className} data-test={dataTest}>
        {children}

        <style jsx>{`
            ul {
                display: block;
                position: relative;
                width: 100%;
                margin: 0;

                padding: 0;
                user-select: none;
            }
        `}</style>
    </ul>
)

MenuList.defaultProps = {
    dataTest: 'dhis2-uicore-menulist',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {Node} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest]
 */
MenuList.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}

export { MenuList }
