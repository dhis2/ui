import { UserAvatar } from '@dhis2-ui/user-avatar'
import { colors, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

const ProfileName = ({ children }) => (
    <div data-test="headerbar-profile-username">
        {children}

        <style jsx>{`
            div {
                font-size: 14px;
                line-height: 19px;
            }
        `}</style>
    </div>
)
ProfileName.propTypes = {
    children: PropTypes.string,
}

const ProfileEmail = ({ children }) => (
    <div data-test="headerbar-profile-user-email">
        {children}

        <style jsx>{`
            div {
                font-size: 14px;
                line-height: 19px;
            }
        `}</style>
    </div>
)
ProfileEmail.propTypes = {
    children: PropTypes.string,
}

const ProfileDetails = ({ name, email }) => (
    <div>
        <ProfileName>{name}</ProfileName>
        <ProfileEmail>{email}</ProfileEmail>

        <style jsx>{`
            div {
                display: flex;
                flex-direction: column;
                color: ${colors.grey900};
            }
        `}</style>
    </div>
)

ProfileDetails.propTypes = {
    email: PropTypes.string,
    name: PropTypes.string,
}

const Avatar = ({ name, id }) => (
    <div>
        <UserAvatar
            avatarId={id}
            name={name}
            dataTest="headerbar-profile-menu-icon"
            medium
        />

        <style jsx>{`
            flex-shrink: 0;
        `}</style>
    </div>
)

Avatar.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
}

export const ProfileHeader = ({ name, email, avatarId }) => (
    <div>
        <Avatar name={name} avatarId={avatarId} />
        <ProfileDetails name={name} email={email} />
        <style jsx>{`
            div {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: ${spacers.dp12};
                margin-left: ${spacers.dp12};
                padding: ${spacers.dp12} 0 ${spacers.dp16} 0;
            }
        `}</style>
    </div>
)

ProfileHeader.propTypes = {
    avatarId: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
}
