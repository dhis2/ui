import PropTypes from 'prop-types'
import React from 'react'
import { avatarStyles } from '../sharing-dialog.styles.js'

export const Avatar = ({ name }) => {
    const nameParts = name.split(' ')

    let initials = nameParts.shift().charAt(0)

    if (nameParts.length) {
        initials += nameParts.pop().charAt(0)
    }

    return (
        <div className="share-details-avatar">
            <style jsx>{avatarStyles}</style>
            <p>{initials}</p>
        </div>
    )
}

Avatar.defaultProps = {
    name: 'USER',
}

Avatar.propTypes = {
    name: PropTypes.string.isRequired,
}
