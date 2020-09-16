import React, { useEffect, useRef } from 'react'
import { PropTypes } from '@dhis2/prop-types'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 *
 * @param {IntersectionDetector.PropTypes} props
 * @returns {React.Component}
 */
export const IntersectionDetector = ({
    threshold,
    onChange,
    children,
    className,
    dataTest,
    rootRef,
}) => {
    // Use useRef instead of useState to prevent unnecessary re-render:
    //   The state changes won't be reflected in what this component renders,
    //   so there's no need for re-rendering the (potentially computational
    //   heavy) children.  Also: If the parent re-renders (e. g. due to a state
    //   change), then this component will re-render as well.

    // @var {Object}
    // @prop {bool} current
    const isIntersecting = useRef()

    // @var {Object}
    // @prop {HTMLElement} current
    const intersectionRef = useRef()

    useEffect(() => {
        const rootEl = rootRef.current
        const intersectionEl = intersectionRef.current

        if (rootEl && intersectionEl) {
            const onIntersection = entries => {
                // Currently there's no way to supply multiple thresholds,
                // so a single entry can be assumed safely
                const [entry] = entries

                // Make sure the callback is not called multiple times
                // if there is no change
                const intersectionChange =
                    entry.isIntersecting !== isIntersecting.current

                if (intersectionChange) {
                    isIntersecting.current = entry.isIntersecting
                    onChange({
                        isIntersecting: entry.isIntersecting,
                    })
                }
            }

            const observerOptions = { root: rootEl, threshold }
            const intersectionObserver = new IntersectionObserver(
                onIntersection,
                observerOptions
            )

            intersectionObserver.observe(intersectionEl)

            // Make sure to clean up everything when un-mounting.
            // Using an arrow function instead of just returning
            // the disconnect function for better readability.
            return () => intersectionObserver.disconnect()
        }
    }, [rootRef.current, intersectionRef.current])

    return (
        <div ref={intersectionRef} className={className} data-test={dataTest}>
            {children}

            <style jsx>{`
                // Enables compatibility with "position: absolute;" containers.
                // If the parent does not have a height, this will have no
                // effect, which makes it work with standard containers.
                div {
                    height: 100%;
                }
            `}</style>
        </div>
    )
}

IntersectionDetector.defaultProps = {
    threshold: 0,
    dataTest: 'dhis2-uicore-intersectiondetector',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {Object} rootRef
 * @prop {HTMLElement} [rootRef.current]
 * @prop {Function} onChange
 * @prop {any} [children]
 * @prop {string} [className]
 * @prop {number} [threshold]
 */
IntersectionDetector.propTypes = {
    rootRef: PropTypes.shape({
        // not required so `current` can be `null`
        current: PropTypes.instanceOf(HTMLElement),
    }).isRequired,
    onChange: PropTypes.func.isRequired,

    children: PropTypes.any,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    threshold: PropTypes.number,
}
