import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'

const Tabs = ({ children, fixed, dataTest }) => {
    const tabContainer = useRef(null)

    const handleKeyDown = (event) => {
        const currentFocus = document.activeElement
        if (
            !tabContainer.current ||
            !tabContainer.current.contains(currentFocus)
        ) {
            return
        }

        const role = currentFocus.getAttribute('role')
        if (role !== 'tab') {
            return
        }
        const tabs = Array.from(
            tabContainer.current.querySelectorAll('[role="tab"]')
        )
        const currentIndex = tabs.indexOf(currentFocus)

        if (event.key === 'ArrowRight') {
            event.preventDefault()
            const nextIndex = (currentIndex + 1) % tabs.length
            tabs[nextIndex].focus()
        }
        if (event.key === 'ArrowLeft') {
            event.preventDefault()
            const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length
            tabs[prevIndex].focus()
        }
    }

    return (
        <div
            className={cx({ fixed })}
            ref={tabContainer}
            data-test={dataTest}
            role="tablist"
            onKeyDown={handleKeyDown}
        >
            {children}

            <style jsx>{`
                div {
                    display: flex;
                    align-items: flex-start;
                    position: relative;
                    overflow: hidden;
                    box-shadow: inset 0 -1px 0 0 ${colors.grey400};
                    flex-wrap: nowrap;
                    flex-grow: 1;
                    background: ${colors.white};
                }
            `}</style>
        </div>
    )
}

Tabs.propTypes = {
    dataTest: PropTypes.string.isRequired,
    children: PropTypes.node,
    fixed: PropTypes.bool,
}

export { Tabs }
