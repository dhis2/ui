import PropTypes from '@dhis2/prop-types'
import React from 'react'
import { avatarStyles } from '../SharingDialog.styles'

export const Avatar = ({ name } = { name: 'USER' }) => {
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

Avatar.propTypes = {
    name: PropTypes.string,
}
