import { IntersectionDetector } from '@dhis2-ui/intersection-detector'
import PropTypes from 'prop-types'
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
                inset-inline-start: 0;
            }
        `}</style>
    </div>
)

EndIntersectionDetector.propTypes = {
    rootRef: PropTypes.shape({
        current: PropTypes.instanceOf(HTMLElement),
    }).isRequired,
    onEndReached: PropTypes.func.isRequired,
    dataTest: PropTypes.string,
}
