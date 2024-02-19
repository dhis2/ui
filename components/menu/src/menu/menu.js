import PropTypes from 'prop-types'
import React, { Children, cloneElement, isValidElement, useState } from 'react'

const Menu = ({ children, className, dataTest, dense }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleActionKeys = () => {
        console.log('Action keys: Space and Enter')
    }

    const handleDirectionKeys = (key) => {
        if (key === 'ArrowUp') {
            setSelectedIndex((index) =>
                index !== 0 ? index - 1 : children.length - 1
            )
        }
        if (key === 'ArrowDown') {
            setSelectedIndex((index) =>
                index !== children.length - 1 ? index + 1 : 0
            )
        }
    }

    const handleKeyDown = (event) => {
        event.preventDefault()
        if (event.key === ' ' || event.key === 'Enter') {
            handleActionKeys(event.key)
        }
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            handleDirectionKeys(event.key)
        }
    }

    return (
        <ul
            className={className}
            data-test={dataTest}
            tabIndex={0}
            role="menu"
            onKeyDown={handleKeyDown}
        >
            {Children.map(
                children,
                (child, index) =>
                    isValidElement(child)
                        ? cloneElement(child, {
                              dense:
                                  typeof child.props.dense === 'boolean'
                                      ? child.props.dense
                                      : dense,
                              hideDivider:
                                  typeof child.props.hideDivider !==
                                      'boolean' && index === 0
                                      ? true
                                      : child.props.hideDivider,
                              active: index === selectedIndex,
                              handleRef: (ref) => {
                                  if (index === selectedIndex && ref) {
                                      console.log(ref)
                                      ref.focus()
                                  }
                              },
                          })
                        : child // to do: role = menuitem
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
}

Menu.defaultProps = {
    dataTest: 'dhis2-uicore-menulist',
}

Menu.propTypes = {
    /** Typically `MenuItem`, `MenuDivider`, and `MenuSectionHeader` */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Applies `dense` property to all child components unless already specified */
    dense: PropTypes.bool,
}

export { Menu }
