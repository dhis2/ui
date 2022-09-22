import PropTypes from 'prop-types'
import React from 'react'

export const ModalContent = ({ children, className, dataTest }) => (
    <div className={className} data-test={dataTest}>
        {children}

        <style jsx>{`
            div {
                order: 2;
                flex-grow: 2;
                overflow-y: auto;
            }
        `}</style>
    </div>
)

ModalContent.defaultProps = {
    dataTest: 'dhis2-uicore-modalcontent',
}

ModalContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
}
