import { spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { EndIntersectionDetector } from './end-intersection-detector.js'

export const SourceOptions = ({
    children,
    dataTest,
    sourceEmptyPlaceholder,
    sourceOptionsRef,
    onSourceEndReached,
}) => (
    <div className="container" data-test={dataTest} ref={sourceOptionsRef}>
        <div className="content-container">
            {children}
            {!React.Children.count(children) && sourceEmptyPlaceholder}

            {onSourceEndReached && (
                <EndIntersectionDetector
                    rootRef={sourceOptionsRef}
                    onEndReached={onSourceEndReached}
                />
            )}
        </div>

        <style jsx>{`
            .container {
                padding: ${spacers.dp4} 0;
                flex-grow: 1;
                overflow-y: auto;
            }

            .content-container {
                position: relative;
            }
        `}</style>
    </div>
)

SourceOptions.propTypes = {
    dataTest: PropTypes.string.isRequired,
    children: PropTypes.node,
    sourceEmptyPlaceholder: PropTypes.node,
    sourceOptionsRef: PropTypes.shape({
        current: PropTypes.instanceOf(HTMLElement),
    }),
    onSourceEndReached: PropTypes.func,
}
