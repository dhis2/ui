import { Required } from '@dhis2-ui/required'
import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

const Legend = ({ className, children, required, dataTest }) => (
    <legend className={className} data-test={dataTest}>
        {children}

        {required && <Required dataTest={`${dataTest}-required`} />}

        <style jsx>{`
            legend {
                font-size: 14px;
                line-height: 16px;
                color: ${colors.grey900};
            }
        `}</style>
    </legend>
)

Legend.defaultProps = {
    dataTest: 'dhis2-uicore-legend',
}

Legend.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Indicates the associated field set is required */
    required: PropTypes.bool,
}

export { Legend }
