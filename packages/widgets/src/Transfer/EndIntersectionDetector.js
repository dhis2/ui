import propTypes from '@dhis2/prop-types'
import { IntersectionDetector } from '@dhis2/ui-core'
import React from 'react'

export const EndIntersectionDetector = ({
    rootRef,
    onEndReached,
    dataTest,
}) => (
    <div data-test={dataTest}>
        <IntersectionDetector
            rootRef={rootRef}
            onChange={({ isIntersecting }) => isIntersecting && onEndReached()}
        />

        <style jsx>{`
            div {
                width: 100%;
                height: 50px;
                position: absolute;
                z-index: -1;
                bottom: 0;
                left: 0;
            }
        `}</style>
    </div>
)

EndIntersectionDetector.propTypes = {
    rootRef: propTypes.shape({
        current: propTypes.instanceOf(HTMLElement),
    }).isRequired,
    onEndReached: propTypes.func.isRequired,
    dataTest: propTypes.string,
}
