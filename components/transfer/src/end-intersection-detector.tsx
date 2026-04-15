import { IntersectionDetector } from '@dhis2-ui/intersection-detector'
import React from 'react'

export const INTERSECTION_DETECTOR_HEIGHT = 50

export interface EndIntersectionDetectorProps {
    rootRef: React.RefObject<HTMLElement>
    onEndReached: () => void
    dataTest?: string
}

export const EndIntersectionDetector = ({
    rootRef,
    onEndReached,
    dataTest,
}: EndIntersectionDetectorProps) => (
    <div data-test={dataTest}>
        <IntersectionDetector
            rootRef={rootRef as React.MutableRefObject<HTMLElement>}
            onChange={({ isIntersecting }: { isIntersecting: boolean }) =>
                isIntersecting && onEndReached()
            }
        />

        <style jsx>{`
            div {
                width: 100%;
                height: ${INTERSECTION_DETECTOR_HEIGHT}px;
                position: absolute;
                z-index: -1;
                bottom: 0;
                inset-inline-start: 0;
            }
        `}</style>
    </div>
)
