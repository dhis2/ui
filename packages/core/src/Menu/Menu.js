import propTypes from '@dhis2/prop-types'
import React, { Children, cloneElement, isValidElement } from 'react'

/**
 * @module
 * @param {Menu.PropTypes}
 * @returns {React.Component}
 *
 * @example import { Menu } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/menu.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/components-core-menulist--default|Storybook}
 */
const Menu = ({ children, className, dataTest, dense }) => (
    <ul className={className} data-test={dataTest}>
        {Children.map(children, (child, index) =>
            isValidElement(child)
                ? cloneElement(child, {
                      dense:
                          typeof child.props.dense === 'boolean'
                              ? child.props.dense
                              : dense,
                      hideDivider:
                          typeof child.props.hideDivider !== 'boolean' &&
                          index === 0
                              ? true
                              : child.props.hideDivider,
                  })
                : child
        )}

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

Menu.defaultProps = {
    dataTest: 'dhis2-uicore-menulist',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {Node} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest='dhis2-uicore-menulist']
 * @prop {boolean} [dense]
 */
Menu.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
}

export { Menu }
