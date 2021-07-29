import PropTypes from 'prop-types'
import React from 'react'

const FieldSet = ({ className, children, dataTest }) => (
    <fieldset className={className} data-test={dataTest}>
        {children}
        <style jsx>{`
            fieldset {
                border: none;
                margin: 0;
                padding: 0;
            }
        `}</style>
    </fieldset>
)

FieldSet.defaultProps = {
    dataTest: 'dhis2-uicore-fieldset',
}

FieldSet.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
}

export { FieldSet }
