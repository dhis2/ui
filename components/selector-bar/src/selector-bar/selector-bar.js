import { colors, spacers } from '@dhis2/ui-constants'
import { Button } from '@dhis2-ui/button'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import { FOCUSABLE_SELECTOR, TOOLBAR_KEYS } from '../focus.js'
import i18n from '../locales/index.js'

// Roving tabindex: only the active control is reachable with Tab
const setTabStop = (elements, active) => {
    elements.forEach((element) => {
        element.tabIndex = element === active ? 0 : -1
    })
}

const ClearSelection = ({ disabled, onClick }) => {
    return (
        <div className="clear-selections">
            <Button small secondary disabled={disabled} onClick={onClick}>
                {i18n.t('Clear selections')}
            </Button>

            <style jsx>{`
                .clear-selections {
                    display: flex;
                    align-items: center;
                    height: 40px;
                    padding: 0 ${spacers.dp8};
                }
            `}</style>
        </div>
    )
}

ClearSelection.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export const SelectorBar = ({
    className,
    children,
    onClearSelectionClick,
    dataTest = 'dhis2-ui-selectorbar',
    disableClearSelections,
    additionalContent,
    ariaLabel,
}) => {
    const controls = useRef(null)
    const activeElement = useRef(null)
    const childrenToFocus = useRef([])

    // Items can be added or (dis)abled by their own state, without the
    // children of the SelectorBar changing, so the DOM is observed instead
    useEffect(() => {
        const controlsDiv = controls.current
        if (!controlsDiv) {
            return
        }

        const updateFocusable = () => {
            const focusable = Array.from(controlsDiv.children)
                .flatMap((child) =>
                    child.matches(FOCUSABLE_SELECTOR)
                        ? [child]
                        : Array.from(child.querySelectorAll(FOCUSABLE_SELECTOR))
                )
                .filter((element) => !element.disabled)

            if (!focusable.includes(activeElement.current)) {
                activeElement.current = focusable[0] || null
            }
            setTabStop(focusable, activeElement.current)
            childrenToFocus.current = focusable
        }

        updateFocusable()
        const observer = new MutationObserver(updateFocusable)
        observer.observe(controlsDiv, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['disabled'],
        })
        return () => observer.disconnect()
    }, [])

    const handleFocus = (event) => {
        if (!childrenToFocus.current.includes(event.target)) {
            return
        }
        activeElement.current = event.target
        setTabStop(childrenToFocus.current, event.target)
    }

    const handleKeyDown = (event) => {
        // Modified keys are left to browser and OS shortcuts
        if (
            !TOOLBAR_KEYS.includes(event.key) ||
            event.altKey ||
            event.ctrlKey ||
            event.metaKey
        ) {
            return
        }

        const focusable = childrenToFocus.current
        const currentIndex = focusable.indexOf(document.activeElement)
        if (currentIndex === -1) {
            return
        }

        const lastIndex = focusable.length - 1
        const nextIndex = {
            ArrowRight: currentIndex === lastIndex ? 0 : currentIndex + 1,
            ArrowLeft: currentIndex === 0 ? lastIndex : currentIndex - 1,
            Home: 0,
            End: lastIndex,
        }[event.key]

        event.preventDefault()
        focusable[nextIndex].focus()
    }

    return (
        <>
            <div
                className={cx(
                    'container',
                    { withRHSContents: additionalContent },
                    className
                )}
                data-test={dataTest}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                role="toolbar"
                aria-label={ariaLabel}
            >
                <div className="controls" ref={controls}>
                    {/*                     {React.Children.map(children, (child, index) =>
                        React.cloneElement(child, {
                            ref: childrenRefs[index],
                        })
                    )} */}
                    {children}
                    {onClearSelectionClick && (
                        <ClearSelection
                            disabled={disableClearSelections}
                            onClick={onClearSelectionClick}
                        />
                    )}
                </div>

                {additionalContent && (
                    <div className="additional-contents">
                        {additionalContent}
                    </div>
                )}

                <style jsx>{`
                    .container {
                        background: ${colors.white};
                        box-shadow: inset 0 -1px 0 0 ${colors.grey400};
                        padding-bottom: 1px;
                    }

                    .withRHSContents {
                        display: flex;
                    }

                    .controls {
                        display: flex;
                        flex-wrap: wrap;
                        flex-grow: 1;
                        gap: 1px;
                    }

                    .additional-contents {
                        ${
                            /*
                             * Specs define the space to be 12px.
                             * 8px already come from the clear selection component
                             */ ''
                        }
                        padding-inline-start: 4px;
                    }
                `}</style>
            </div>
        </>
    )
}

SelectorBar.propTypes = {
    children: PropTypes.any.isRequired,
    additionalContent: PropTypes.any,
    ariaLabel: PropTypes.string,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    disableClearSelections: PropTypes.bool,
    onClearSelectionClick: PropTypes.func,
}
