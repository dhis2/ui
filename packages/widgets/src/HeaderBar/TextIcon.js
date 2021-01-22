import propTypes from '@dhis2/prop-types'
import React from 'react'

export const getInitials = name =>
    name
        .split(' ')
        .slice(0, 2)
        .map(n => n[0])
        .join('')

export const TextIcon = ({ name, dataTestId }) => {
    return (
        <div className="text-icon" data-test={dataTestId}>
            <div className="text-icon-initials">{getInitials(name)}</div>

            <style jsx>{`
                .text-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    overflow: hidden;
                    border-radius: 50%;
                    background-color: rgba(0, 0, 0, 0.3);
                    color: #fff;
                    cursor: pointer;
                }

                .text-icon-initials {
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 1px;
                    text-align: center;
                    text-transform: uppercase;
                }
            `}</style>
        </div>
    )
}

TextIcon.propTypes = {
    name: propTypes.string.isRequired,
    dataTestId: propTypes.string,
}
