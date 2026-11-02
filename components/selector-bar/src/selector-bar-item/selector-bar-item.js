import { colors, spacers } from '@dhis2/ui-constants'
import { IconChevronUp24, IconChevronDown24 } from '@dhis2/ui-icons'
import { Card } from '@dhis2-ui/card'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useRef } from 'react'
import { FOCUSABLE_SELECTOR, TOOLBAR_KEYS } from '../focus.js'

const offsetModifier = {
    name: 'offset',
    options: {
        offset: [0, 2],
    },
}

// Popup content can also hold custom widgets made focusable with tabindex
const TABBABLE_SELECTOR = `${FOCUSABLE_SELECTOR}, [tabindex]`

const getTabbables = (root) =>
    Array.from(root.querySelectorAll(TABBABLE_SELECTOR)).filter(
        (element) => !element.disabled && element.tabIndex >= 0
    )

// querySelectorAll returns tabbables in document order, so only the
// endpoints need to be compared
const isLastTabbable = (element, tabbables) => {
    const last = tabbables[tabbables.length - 1]
    return (
        !last ||
        !(
            element.compareDocumentPosition(last) &
            Node.DOCUMENT_POSITION_FOLLOWING
        )
    )
}

// Ancestors are skipped: focusing a container like Menu's <ul> sends focus
// straight back to its first item, so it can't serve as a way out.
const isFirstTabbable = (element, tabbables) => {
    const first = tabbables.find((other) => !other.contains(element))
    return (
        !first ||
        !(
            element.compareDocumentPosition(first) &
            Node.DOCUMENT_POSITION_PRECEDING
        )
    )
}

/**
 * The reason this component expects the "open" state and "setOpen" function is
 * because certain actions inside the props.children might have to set "open"
 * to false as well.
 * A good example is selecting a value (which is not a click outside) and this
 * component neither has any control over that component nor does it have a way
 * to "observe" that behavior. Especially for selection bar items that allow
 * "multiple" selections, this would be more or less impossible to predict
 * inside this component
 */
export const SelectorBarItem = ({
    children,
    className,
    dataTest = 'dhis2-ui-selectorbaritem',
    disabled,
    displayOnly,
    label,
    noValueMessage,
    open,
    setOpen,
    value,
    onClearSelectionClick,
}) => {
    const buttonRef = useRef()
    const popupRef = useRef(null)
    const prevOpenRef = useRef(open)
    // Rendering already open is not a user action, so focus is left alone
    const openOnMountRef = useRef(open)
    const Icon = open ? IconChevronUp24 : IconChevronDown24
    const clearable = !!(value && onClearSelectionClick)

    // The popup content mounts a render after `open` changes (Portal), so
    // focus is moved in from the content's ref rather than an effect on `open`.
    const setPopupNode = useCallback((node) => {
        popupRef.current = node
        if (!node || openOnMountRef.current) {
            return
        }
        // Wait a frame so Popper has positioned the popup before focusing
        requestAnimationFrame(() => {
            if (!node.contains(document.activeElement)) {
                getTabbables(node)[0]?.focus({ preventScroll: true })
            }
        })
    }, [])

    // Return focus to the trigger when it was lost with the closed popup,
    // whatever closed it (selection, backdrop click, the consumer).
    useEffect(() => {
        if (!open) {
            if (
                prevOpenRef.current &&
                document.activeElement === document.body
            ) {
                buttonRef.current?.focus()
            }
            openOnMountRef.current = false
        }
        prevOpenRef.current = open
    }, [open])

    // `deferred` lets a Tab keypress move focus on from the trigger before the
    // popup unmounts
    const closeToTrigger = ({ deferred = false } = {}) => {
        buttonRef.current?.focus()
        if (deferred) {
            requestAnimationFrame(() => setOpen(false))
        } else {
            setOpen(false)
        }
    }

    const handleKeyDown = (evt) => {
        // Events from the portaled popup bubble here as well
        const isTrigger = evt.target === buttonRef.current

        if (isTrigger && (evt.key === 'Delete' || evt.key === 'Backspace')) {
            if (clearable) {
                evt.preventDefault()
                onClearSelectionClick()
            }
            return
        }

        if (!open || !setOpen) {
            return
        }

        // Overlays opened from the popup (Modal, DropdownButton) are portaled
        // outside it and close themselves on Escape
        const fromPopup = popupRef.current?.contains(evt.target)
        if (
            evt.key === 'Escape' &&
            !evt.defaultPrevented &&
            (isTrigger || fromPopup)
        ) {
            evt.preventDefault()
            // Keep document-level Escape handlers (e.g. Modal) from closing too
            evt.stopPropagation()
            closeToTrigger()
            return
        }

        // The SelectorBar moves focus to another item on these keys; close
        // only once it has actually left the trigger
        if (isTrigger && TOOLBAR_KEYS.includes(evt.key)) {
            requestAnimationFrame(() => {
                if (document.activeElement !== buttonRef.current) {
                    setOpen(false)
                }
            })
        }
    }

    // Tab is handled in the capture phase, so popup content that stops
    // propagation of its keys (e.g. SimpleSingleSelect) can still be tabbed out of
    const handleKeyDownCapture = (evt) => {
        if (!open || !setOpen || evt.key !== 'Tab') {
            return
        }

        if (evt.target === buttonRef.current) {
            closeToTrigger({ deferred: true })
            return
        }

        const popup = popupRef.current
        if (!popup?.contains(evt.target)) {
            return
        }

        const tabbables = getTabbables(popup)

        if (evt.shiftKey && isFirstTabbable(evt.target, tabbables)) {
            evt.preventDefault()
            closeToTrigger()
        } else if (!evt.shiftKey && isLastTabbable(evt.target, tabbables)) {
            closeToTrigger({ deferred: true })
        }
    }

    const handleClick = (evt) => {
        if (!setOpen) {
            return
        }
        // Ignore clicks bubbling up from the portaled popup content.
        if (!buttonRef.current?.contains(evt.target)) {
            return
        }
        setOpen(!open)
    }

    return (
        <button
            ref={buttonRef}
            className={cx(
                'selector-bar-item',
                className,
                !displayOnly ? 'openable' : ''
            )}
            disabled={disabled}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onKeyDownCapture={handleKeyDownCapture}
            data-test={dataTest}
            aria-expanded={!displayOnly && setOpen ? !!open : undefined}
            aria-keyshortcuts={clearable ? 'Delete Backspace' : undefined}
        >
            <span className="label">{label}</span>

            {!disabled && (
                <>
                    <span className="value">{value || noValueMessage}</span>
                    {clearable && (
                        <span
                            className="clear-icon"
                            onClick={(evt) => {
                                evt.stopPropagation()
                                onClearSelectionClick()
                            }}
                            data-test={`${dataTest}-clear-icon`}
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L7 5.58579L8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289C10.0976 4.68342 10.0976 5.31658 9.70711 5.70711L8.41421 7L9.70711 8.29289C10.0976 8.68342 10.0976 9.31658 9.70711 9.70711C9.31658 10.0976 8.68342 10.0976 8.29289 9.70711L7 8.41421L5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289L5.58579 7L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" />
                            </svg>
                        </span>
                    )}
                </>
            )}

            {!displayOnly && (
                <span className="toggle-icon">
                    <Icon />
                </span>
            )}

            {open && (
                <Layer
                    onBackdropClick={(_, evt) => {
                        evt.stopPropagation()
                        setOpen(false)
                    }}
                >
                    <Popper
                        reference={buttonRef}
                        placement="bottom-start"
                        modifiers={[offsetModifier]}
                    >
                        <Card>
                            <div ref={setPopupNode}>{children}</div>
                        </Card>
                    </Popper>
                </Layer>
            )}

            <style jsx>{`
                .selector-bar-item {
                    display: flex;
                    background: none;
                    height: 40px;
                    align-items: center;
                    ${
                        /*
                         * The arrow icon has ~4px empty space on the sides,
                         * that's why the padding on the right is only 8px.
                         */ ''
                    }
                    padding-block: 0;
                    padding-inline-start: ${spacers.dp8};
                    padding-inline-end: ${spacers.dp12};
                    font-size: 14px;
                    line-height: 16px;
                    border: none;
                    box-shadow: 0px 0px 0px 1px ${colors.grey400};
                }

                .selector-bar-item.openable {
                    cursor: pointer;
                }

                .selector-bar-item:disabled {
                    cursor: not-allowed;
                }

                .label {
                    color: ${colors.grey600};
                }

                .value {
                    padding-inline-start: ${spacers.dp8};
                }

                .clear-icon {
                    display: flex;
                    align-items: center;
                    margin-inline-start: ${spacers.dp4};
                    padding: ${spacers.dp4};
                    cursor: pointer;
                }
                .clear-icon svg path {
                    fill: ${colors.grey500};
                }

                .clear-icon:hover svg path {
                    fill: ${colors.grey700};
                }

                .toggle-icon {
                    display: flex;
                    margin-inline-start: ${spacers.dp4};
                    height: 100%;
                    align-items: center;
                }
            `}</style>
        </button>
    )
}

SelectorBarItem.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.any,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    disabled: PropTypes.bool,
    displayOnly: PropTypes.bool,
    noValueMessage: PropTypes.string,
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    value: PropTypes.string,
    onClearSelectionClick: PropTypes.func,
}
