import PropTypes from 'prop-types'
import React, {
    Children,
    cloneElement,
    isValidElement,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'

const getMenu = (menuitem) => {
    let menu = menuitem
    let role = menuitem.getAttribute('role')

    while (menu && role !== 'menu' && role !== 'menubar') {
        menu = menu.parentNode
        if (menu) {
            role = menu.getAttribute('role')
        }
    }

    return menu
}

const Menu = ({ children, className, dataTest, dense }) => {
    const [focusedIndex, setFocusedIndex] = useState(0)
    const menuRef = useRef(null)
    const [showSubMenu, setShowSubMenu] = useState(false)
    // track last parent menu item
    // const [parentMenuItem, setParentMenuItem] = useState()

    const handleFocus = (e) => {
        if (menuRef.current === e.target) {
            menuRef.current?.firstChild?.childNodes[0]?.focus()
        }
    }

    const setNextIndex = ({ arrayLength, index }) => {
        const newIndex = index === arrayLength - 1 ? 0 : index + 1

        return newIndex
    }

    const setPrevIndex = ({ arrayLength, index }) => {
        const newIndex = index === 0 ? arrayLength - 1 : index - 1

        return newIndex
    }

    const handleKeyDown = useCallback(
        (event) => {
            const childrenArray = Children.toArray(children)
            const childrenLength = childrenArray.length

            const activeEl = document.activeElement

            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault()
                    setFocusedIndex((prevIndex) =>
                        setPrevIndex({
                            arrayLength: childrenLength,
                            index: prevIndex,
                        })
                    )
                    break
                case 'ArrowDown':
                    event.preventDefault()
                    setFocusedIndex((prevIndex) =>
                        setNextIndex({
                            arrayLength: childrenLength,
                            index: prevIndex,
                        })
                    )
                    break
                case 'ArrowRight':
                    event.preventDefault()
                    if (activeEl.getAttribute('aria-haspopup')) {
                        setShowSubMenu(true)
                        activeEl.setAttribute('aria-expanded', true)
                    }

                    break
                case 'ArrowLeft':
                    event.preventDefault()
                    setShowSubMenu(false)
                    // popper
                    getMenu(activeEl).parentNode.parentNode.style.display = ''
                    // activeEl.setAttribute('aria-expanded', false)

                    break
                case 'Enter':
                case ' ':
                    event.preventDefault()

                    if (activeEl.onclick) {
                        activeEl.click()
                    }

                    // link
                    if (activeEl.href) {
                        window.open(
                            activeEl.href,
                            activeEl.target ? activeEl.target : '_blank'
                        )
                    }

                    break
                default:
                    return
            }
        },
        [children]
    )

    useEffect(() => {
        if (!menuRef && !menuRef.current) {
            return
        }
        const menu = menuRef.current

        menu.addEventListener('focus', handleFocus)
        menu.addEventListener('keydown', handleKeyDown)

        return () => {
            menu.removeEventListener('keydown', handleKeyDown)
            menu.removeEventListener('focus', handleFocus)
        }
    }, [handleKeyDown])

    return (
        <>
            <ul
                className={className}
                data-test={dataTest}
                ref={menuRef}
                role={'menu'}
                tabIndex={0}
            >
                {Children.map(children, (child, index) => {
                    return isValidElement(child) ? (
                        cloneElement(child, {
                            dense:
                                typeof child.props.dense === 'boolean'
                                    ? child.props.dense
                                    : dense,
                            hideDivider:
                                typeof child.props.hideDivider !== 'boolean' &&
                                index === 0
                                    ? true
                                    : child.props.hideDivider,
                            active: focusedIndex === index,
                            tabIndex: focusedIndex === index ? 0 : -1,
                            showSubMenu: child.props.children
                                ? showSubMenu
                                : null,
                        })
                    ) : (
                        <li tabIndex={focusedIndex === index ? 0 : -1}>
                            {child}
                        </li>
                    )
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
        </>
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
