import PropTypes from 'prop-types'
import React from 'react'

const OrganisationUnitRootContainer = ({ children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
                position: relative;
                display: inline-flex;
                align-items: flex-start;
                min-height: 100px;
                min-width: 200px;
            }
        `}</style>
    </div>
)

OrganisationUnitRootContainer.propTypes = {
    children: PropTypes.node,
}

export { OrganisationUnitRootContainer }
