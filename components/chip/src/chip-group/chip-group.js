import { theme } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'

const ChipGroup = ({ className, dataTest, children }) => {
    const chipContainer = useRef(null)

    const handleKeyDown = (event) => {
        const currentFocus = document.activeElement

        if (chipContainer.current && chipContainer.current === currentFocus) {
            const chips = Array.from(
                chipContainer.current.querySelectorAll('[role="option"]')
            )

            chips[0].focus()
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
    }
    return (
        <div
            className={className}
            data-test={dataTest}
            onKeyDown={handleKeyDown}
            ref={chipContainer}
            tabIndex={0}
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
