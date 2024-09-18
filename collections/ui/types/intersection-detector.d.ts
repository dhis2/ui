import * as React from 'react'

export interface IntersectionDetectorProps {
    /**
     * React ref on other component to detect intersections with
     */
    rootRef: React.MutableRefObject<HTMLElement>
    /**
     * Called with signature `({ isIntersecting: bool })`
     */
    onChange: ({ isIntersecting }: { isIntersecting: boolean }) => void
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * The [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) value: a value from 0.0 to 1.0 that controls the point at which an intersecting component is considered 'intersected' or 'visible' and the onChange callback triggers
     */
    threshold?: number
}

export const IntersectionDetector: React.FC<IntersectionDetectorProps>
