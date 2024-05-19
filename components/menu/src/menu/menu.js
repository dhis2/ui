import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { Children, cloneElement, isValidElement } from 'react'

const Menu = ({ children, className, dataTest, dense, isFocused }) => (
    <ul
        className={`${className} ${isFocused ? 'focused' : ''}`}
        data-test={dataTest}
        tabIndex="0"
    >
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
            ul.focused {
                border: 2px solid ${colors.blue600};
            }
        `}</style>
    </ul>
)

Menu.defaultProps = {
    dataTest: 'dhis2-uicore-menulist',
    isFocused: false,
}

Menu.propTypes = {
    /** Typically `MenuItem`, `MenuDivider`, and `MenuSectionHeader` */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Applies `dense` property to all child components unless already specified */
    dense: PropTypes.bool,
    isFocused: PropTypes.bool,
}

export { Menu }
