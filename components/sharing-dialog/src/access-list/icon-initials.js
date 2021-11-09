import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { nameToInitials } from '../helpers/index.js'

export const IconInitials = ({ name }) => {
    return (
        <div>
            <span>{nameToInitials(name)}</span>
            <style jsx>{`
                div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 24px;
                    height: 24px;
                    overflow: hidden;
                    border-radius: 50%;
                    background-color: ${colors.grey600};
                }

                span {
                    margin-left: 1px;
                    font-size: 9px;
                    font-weight: 500;
                    letter-spacing: 1px;
                    text-align: center;
                    text-transform: uppercase;
                    color: ${colors.grey050};
                }
            `}</style>
        </div>
    )
}

IconInitials.defaultProps = {
    name: 'USER',
}

IconInitials.propTypes = {
    name: PropTypes.string,
}
