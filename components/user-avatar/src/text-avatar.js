import PropTypes from 'prop-types'
import React from 'react'

export const getInitials = (name) =>
    name
        .split(' ')
        .slice(0, 2)
        .map((n) => n[0])
        .join('')

export const TextAvatar = ({ name, dataTest }) => (
    <div className="text-avatar" data-test={dataTest}>
        <div className="text-avatar-initials">{getInitials(name)}</div>

        <style jsx>{`
            .text-avatar {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                overflow: hidden;
                border-radius: 50%;
                background-color: rgba(0, 0, 0, 0.3);
                color: #fff;
                cursor: pointer;
            }

            .text-avatar-initials {
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 1px;
                text-align: center;
                text-transform: uppercase;
            }
        `}</style>
    </div>
)

TextAvatar.propTypes = {
    name: PropTypes.string.isRequired,
    dataTest: PropTypes.string,
}
