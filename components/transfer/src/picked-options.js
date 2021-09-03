import propTypes from '@dhis2/prop-types'
import { spacers } from '@dhis2/ui-constants'
import React from 'react'
import { EndIntersectionDetector } from './end-intersection-detector.js'

export const PickedOptions = ({
    children,
    dataTest,
    selectedEmptyComponent,
    pickedOptionsRef,
    onPickedEndReached,
}) => (
    <div className="container" data-test={dataTest} ref={pickedOptionsRef}>
        <div className="content-container">
            {!React.Children.count(children) && selectedEmptyComponent}
            {children}

            {onPickedEndReached && (
                <EndIntersectionDetector
                    rootRef={pickedOptionsRef}
                    onEndReached={onPickedEndReached}
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

PickedOptions.propTypes = {
    children: propTypes.node.isRequired,
    dataTest: propTypes.string.isRequired,
    pickedOptionsRef: propTypes.shape({
        current: propTypes.instanceOf(HTMLElement),
    }),
    selectedEmptyComponent: propTypes.node,
    onPickedEndReached: propTypes.func,
}
