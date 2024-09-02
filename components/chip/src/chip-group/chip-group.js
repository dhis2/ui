import { theme } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { useRef, useEffect, useState } from 'react'

const ChipGroup = ({ className, dataTest, children }) => {
    const chipContainer = useRef(null)
    const [childrenToFocus, setChildrenToFocus] = useState([])

    useEffect(() => {
        if (chipContainer.current) {
            const chips = chipContainer.current.querySelectorAll(
                '[role="option"]'
            )
            if (chips.length > 0) {
                const childrenToFocus = Array.from(chips)
                setChildrenToFocus(childrenToFocus)
            }
        }
    }, [children])

    const handleKeyDown = (event) => {
        if (!childrenToFocus.length) {
            return
        }

        const currentFocus = document.activeElement

        const currentIndex = childrenToFocus.findIndex(
            (element) => element === currentFocus
        )

        if (currentIndex === -1) {
            return
        }

        if (event.key === 'ArrowRight') {
            event.preventDefault()
            const nextIndex = (currentIndex + 1) % childrenToFocus.length
            childrenToFocus[nextIndex].focus()
        }

        if (event.key === 'ArrowLeft') {
            event.preventDefault()
            const prevIndex =
                (currentIndex - 1 + childrenToFocus.length) %
                childrenToFocus.length
            childrenToFocus[prevIndex].focus()
        }

        if (event.key === 'Backspace' || event.key === 'Delete') {
            event.preventDefault()
            event.stopPropagation()
            const nextIndex = (currentIndex + 1) % childrenToFocus.length
            childrenToFocus[nextIndex].focus()
        }
    }

    const handleFocus = (event) => {
        if (!childrenToFocus.length) {
            return
        }
        if (event.target === chipContainer.current) {
            const selectedChild = childrenToFocus.find(
                (child) => child.getAttribute('aria-selected') === 'true'
            )
            if (!selectedChild) {
                childrenToFocus[0].focus()
            }
            selectedChild.focus()
        }
    }

    return (
        <div
            className={className}
            data-test={dataTest}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            ref={chipContainer}
            tabIndex={0}
            role="listbox"
        >
            {children}
            <style jsx>{`
                div {
                    display: flex;
                    gap: 4px;
                }
                div:focus {
                    outline: 1px solid ${theme.focus};
                }
            `}</style>
        </div>
    )
}

ChipGroup.defaultProps = {
    dataTest: 'dhis2-uicore-chipgroup',
}

ChipGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
}

export { ChipGroup }
