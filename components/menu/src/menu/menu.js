import PropTypes from 'prop-types'
import React, {
    Children,
    cloneElement,
    isValidElement,
    useRef,
    useState,
    useEffect,
    useCallback,
} from 'react'

function setNextIndex({ arrayLength, index }) {
    return index === arrayLength - 1 ? 0 : index + 1
}

function setPrevIndex({ arrayLength, index }) {
    return index === 0 ? arrayLength - 1 : index - 1
}

const Menu = ({ children, className, dataTest, dense }) => {
    const [focusedIndex, setFocusedIndex] = useState(-1)
    const menuRef = useRef(null)
    const itemsRefs = useRef([])

    const findFocusableItems = () => {
        const obj = {}

        if (itemsRefs.current?.length) {
            itemsRefs.current.map((ref, index) => {
                return (obj[index] = ref)
            })
        }
        return obj
    }

    const focusFirstFocusableItem = useCallback(
        (e) => {
            const focusableItems = findFocusableItems()

            if (e.target === menuRef.current) {
                if (focusedIndex === -1) {
                    setFocusedIndex(~~Object.keys(focusableItems)[0])
                    // Object.values(focusableItems)[0].focus()
                }
            }
        },
        [focusedIndex]
    )

    const setNextFocusableIndex = useCallback(({ elemIndex, action }) => {
        const focusableItems = findFocusableItems()
        const focusableIndicesArray = Object.keys(focusableItems).map(
            (i) => ~~i
        )
        const position = focusableIndicesArray.indexOf(elemIndex)

        if (position != -1) {
            if (action === 'next') {
                return focusableIndicesArray[
                    setNextIndex({
                        arrayLength: focusableIndicesArray.length,
                        index: position,
                    })
                ]
            } else {
                return focusableIndicesArray[
                    setPrevIndex({
                        arrayLength: focusableIndicesArray.length,
                        index: position,
                    })
                ]
            }
        } else {
            return focusableIndicesArray[0]
        }
    }, [])

    const handleKeyDown = useCallback(
        (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault()
                    setFocusedIndex((prevIndex) =>
                        setNextFocusableIndex({
                            elemIndex: prevIndex,
                            action: 'previous',
                        })
                    )
                    break
                case 'ArrowDown':
                    event.preventDefault()
                    setFocusedIndex((prevIndex) =>
                        setNextFocusableIndex({
                            elemIndex: prevIndex,
                            action: 'next',
                        })
                    )
                    break
                case 'ArrowRight':
                    event.preventDefault()
                    if (event.target.hasAttribute('aria-haspopup')) {
                        event.target.click()
                    }
                    break
                case 'ArrowLeft':
                    event.preventDefault()
                    document
                        .querySelector(
                            `[aria-owns='${event.target.parentNode.parentNode.parentNode.parentNode.getAttribute(
                                'id'
                            )}']`
                        )
                        .focus()
                    document
                        .querySelector(
                            `[aria-owns='${event.target.parentNode.parentNode.parentNode.parentNode.getAttribute(
                                'id'
                            )}']`
                        )
                        .click()
                    break
                case ' ':
                case 'Enter':
                    event.preventDefault()
                    event.target.click()
                    break
                default:
                    return
            }
        },
        [setNextFocusableIndex]
    )

    useEffect(() => {
        if (!itemsRefs.current?.length) {
            return
        }
        itemsRefs.current[focusedIndex]?.focus()
    }, [focusedIndex])

    useEffect(() => {
        if (!menuRef && !menuRef.current) {
            return
        }
        const menu = menuRef.current

        menu.addEventListener('focus', focusFirstFocusableItem)
        menu.addEventListener('keydown', handleKeyDown)

        return () => {
            menu.removeEventListener('keydown', handleKeyDown)
            menu.removeEventListener('focus', focusFirstFocusableItem)
        }
    }, [focusFirstFocusableItem, handleKeyDown])

    return (
        <ul
            className={className}
            data-test={dataTest}
            tabIndex={0}
            ref={menuRef}
            role="menu"
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
                          tabIndex: focusedIndex === index ? 0 : -1,
                          active: focusedIndex === index,
                          showSubMenu: child.props.children
                              ? child.props.showSubMenu
                              : null,
                          ref: (node) => {
                              const role = node?.getAttribute('role')
                              if (
                                  [
                                      'menuitem',
                                      'menuitemradio',
                                      'menuitemcheckbox',
                                  ].includes(role)
                              ) {
                                  return (itemsRefs.current[index] = node)
                              } else {
                                  return null
                              }
                          },
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
