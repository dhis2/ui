import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

export const ConditionalScrollBox = forwardRef(
    ({ children, className, dataTest, scrollHeight, scrollWidth }, ref) =>
        scrollHeight || scrollWidth ? (
            <div className={className} data-test={dataTest} ref={ref}>
                {children}
                <style jsx>{`
                    div {
                        border: 1px solid ${colors.grey300};
                        border-top: none;
                        box-sizing: border-box;
                        max-height: ${scrollHeight || 'auto'};
                        max-width: ${scrollWidth || 'auto'};
                        overflow: auto;
                    }
                `}</style>
            </div>
        ) : (
            children
        )
)

ConditionalScrollBox.displayName = 'ConditionalScrollBox'

ConditionalScrollBox.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    scrollHeight: PropTypes.string,
    scrollWidth: PropTypes.string,
}
