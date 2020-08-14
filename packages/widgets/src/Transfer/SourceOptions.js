import { spacers } from '@dhis2/ui-constants'
import React from 'react'
import propTypes from '@dhis2/prop-types'

import { EndIntersectionDetector } from './EndIntersectionDetector.js'

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
    dataTest: propTypes.string.isRequired,
    children: propTypes.node,
    sourceEmptyPlaceholder: propTypes.node,
    sourceOptionsRef: propTypes.shape({
        current: propTypes.instanceOf(HTMLElement),
    }),
    onSourceEndReached: propTypes.func,
}
