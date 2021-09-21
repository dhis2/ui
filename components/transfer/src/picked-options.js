import { spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
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
    children: PropTypes.node.isRequired,
    dataTest: PropTypes.string.isRequired,
    pickedOptionsRef: PropTypes.shape({
        current: PropTypes.instanceOf(HTMLElement),
    }),
    selectedEmptyComponent: PropTypes.node,
    onPickedEndReached: PropTypes.func,
}
