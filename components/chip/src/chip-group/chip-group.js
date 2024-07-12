import { theme } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { useRef, useEffect, useState } from 'react'

const ChipGroup = ({ className, dataTest, children }) => {
    const chipContainer = useRef(null)
    const [childrenToFocus, setChildrenToFocus] = useState([])

    useEffect(() => {
        if (chipContainer.current) {
            const controlsDiv = chipContainer.current.querySelectorAll(
                '[role="option"]'
            )
            if (controlsDiv) {
                const childElements = Array.from(controlsDiv)
                childElements.forEach((child) => {
                    child.tabIndex = -1
                    child.role = 'option'
                })
                setChildrenToFocus(childElements)
            }
        }
    }, [children])

    const handleKeyDown = (event) => {
        const currentFocus = document.activeElement

        if (chipContainer.current && chipContainer.current === currentFocus) {
            if (childrenToFocus.length > 0 && childrenToFocus[0]) {
                childrenToFocus[0].focus()
            }
            return
        }
        if (!childrenToFocus.length) {
            return
        }

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
    }

    /*     const handleKeyDown = (event) => {
        const currentFocus = document.activeElement

        if (chipContainer.current && chipContainer.current === currentFocus) {
            const chips = Array.from(
                chipContainer.current.querySelectorAll('[role="option"]')
            )
            if (chips.length > 0) {
                chips[0].focus()
            }
            return
        }

        const role = currentFocus.getAttribute('role')

        if (role !== 'option') {
            return
        }

        const chips = Array.from(
            chipContainer.current.querySelectorAll('[role="option"]')
        )

        const currentIndex = chips.indexOf(currentFocus)

        if (event.key === 'ArrowRight') {
            event.preventDefault()
            const nextIndex = (currentIndex + 1) % chips.length
            chips[nextIndex].focus()
        }
        if (event.key === 'ArrowLeft') {
            event.preventDefault()
            const prevIndex = (currentIndex - 1 + chips.length) % chips.length
            chips[prevIndex].focus()
        }
        if (event.key === 'Backspace' || event.key === 'Delete') {
            const nextIndex = (currentIndex + 1) % chips.length
            chips[nextIndex].focus()
        }
    } */
    return (
        <div
            className={className}
            data-test={dataTest}
            onKeyDown={handleKeyDown}
            ref={chipContainer}
            tabIndex={0}
        >
            <div role="listbox">{children}</div>

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
