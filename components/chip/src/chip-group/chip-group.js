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
