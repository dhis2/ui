import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'

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

IntersectionDetector.propTypes = {
    /** React ref on other component to detect intersections with */
    rootRef: PropTypes.shape({
        // not required so `current` can be `null`
        current: PropTypes.instanceOf(HTMLElement),
    }).isRequired,
    /** Called with signature `({ isIntersecting: bool })` */
    onChange: PropTypes.func.isRequired,

    children: PropTypes.any,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** The [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) value: a value from 0.0 to 1.0 that controls the point at which an intersecting component is considered 'intersected' or 'visible' and the onChange callback triggers */
    threshold: PropTypes.number,
}
