import PropTypes from 'prop-types'
import React, {
    Children,
    cloneElement,
    isValidElement,
    useEffect,
    useState,
    useRef,
} from 'react'

const Menu = ({ children, className, dataTest, dense }) => {
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const menuRef = useRef(null)

    useEffect(() => {
        if (!menuRef.current) {
            return
        }
        const menu = menuRef.current
        const childrenArray = Children.toArray(children)

        const handleIndex = (index, action) => {
            let current_position = index
            if (current_position === -1) {
                return current_position
            }
            const current_element = childrenArray[current_position]
            if (
                ['MenuSectionHeader', 'MenuDivider'].includes(
                    current_element.type?.name
                ) ||
                current_element.props.disabled
            ) {
                current_position = action === 'up' ? index - 1 : index + 1
            }

            if (current_position > childrenArray.length - 1) {
                current_position = 0
            } else if (current_position < 0) {
                current_position = childrenArray.length - 1
            }

            return current_position
        }

        const handleDirection = (event) => {
            let active = selectedIndex
            const { key } = event

            if (key === 'ArrowUp') {
                if (active > 0) {
                    active = active - 1
                    active = handleIndex(active, 'up')
                    setSelectedIndex(active)
                }
            }
            if (key === 'ArrowDown') {
                if (active < childrenArray.length - 1) {
                    active = active + 1
                    active = handleIndex(active, 'down')
                    setSelectedIndex(active)
                }
            }
        }

        const handleActionKeys = (event) => {
            if (selectedIndex > -1) {
                const { target } = event
                const child = target.children[selectedIndex]
                if (child.onclick) {
                    child.click()
                } else if (child.childNodes[0].onclick) {
                    child.childNodes[0].click()
                }
            }
        }

        const handleKeyDown = (event) => {
            event.preventDefault()

            if (event.key === ' ' || event.key === 'Enter') {
                handleActionKeys(event)
            }
            if (event.key.startsWith('Arrow')) {
                handleDirection(event)
            }
        }

        menu.addEventListener('keydown', handleKeyDown)

        return () => {
            menu.removeEventListener('keydown', handleKeyDown)
        }
    }, [children, selectedIndex])

    return (
        <ul
            className={className}
            data-test={dataTest}
            role="menu"
            tabIndex={0}
            ref={menuRef}
        >
            {Children.map(children, (child, index) => {
                return isValidElement(child)
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
                          selected:
                              index === selectedIndex && !child.props.disabled,
                      })
                    : child
            })}

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
