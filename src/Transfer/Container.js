import React from 'react'
import propTypes from '@dhis2/prop-types'

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
    height: propTypes.string.isRequired,
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}
