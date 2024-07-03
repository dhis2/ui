import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef, useMemo } from 'react'

const Tabs = ({ children, fixed, dataTest }) => {
    const tabContainer = useRef(null)

    const childrenRefs = useMemo(
        () => React.Children.map(children, () => React.createRef()),
        [children]
    )

    const handleKeyDown = (event) => {
        const currentFocus = document.activeElement

        if (tabContainer.current && tabContainer.current === currentFocus) {
            if (childrenRefs.length > 0 && childrenRefs[0].current) {
                childrenRefs[0].current.focus()
            }
            return
        }

        const currentIndex = childrenRefs.findIndex(
            (ref) => ref.current === currentFocus
        )

        if (currentIndex === -1) {
            return
        }

        if (event.key === 'ArrowRight') {
            event.preventDefault()
            const nextIndex = (currentIndex + 1) % childrenRefs.length
            childrenRefs[nextIndex].current.focus()
        }

        if (event.key === 'ArrowLeft') {
            event.preventDefault()
            const prevIndex =
                (currentIndex - 1 + childrenRefs.length) % childrenRefs.length
            childrenRefs[prevIndex].current.focus()
        }
    }

    return (
        <div
            className={cx({ fixed })}
            ref={tabContainer}
            data-test={dataTest}
            role="tablist"
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        ref: childrenRefs[index],
                    })
                }
                // Wrap non-element children e.g string in a <span>
                return (
                    <span ref={childrenRefs[index]} tabIndex={-1}>
                        {child}
                    </span>
                )
            })}

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
