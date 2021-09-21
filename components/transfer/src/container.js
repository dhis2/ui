import PropTypes from 'prop-types'
import React from 'react'

export const Container = ({ children, dataTest, className, height }) => (
    <div data-test={dataTest} className={className}>
        {children}

        <style jsx>{`
            div {
                display: flex;
                width: 100%;
                height: ${height};
            }
        `}</style>
    </div>
)

Container.propTypes = {
    height: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
}
