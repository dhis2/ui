import { colors, spacers } from '@dhis2/ui-constants'
import { UserAvatar } from '@dhis2-ui/user-avatar'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'

const ProfileName = ({ children }) => (
    <div data-test="headerbar-profile-username">
        <span>
            {i18n.t('Logged in as ')}
            <strong>{children}</strong>
        </span>
        <style jsx>{`
            div {
                font-size: 13px;
                line-height: 15px;
                color: ${colors.grey900};
            }
            span {
                word-break: break-all;
            }
            strong {
                font-weight: 700;
            }
        `}</style>
    </div>
)
ProfileName.propTypes = {
    children: PropTypes.string,
}

const ProfileSubtitle = ({ children }) => (
    <div data-test="headerbar-profile-user-subtitle">
        {children}

        <style jsx>{`
            div {
                font-size: 13px;
                line-height: 15px;
                color: ${colors.grey600};
                word-break: break-all;
            }
        `}</style>
    </div>
)
ProfileSubtitle.propTypes = {
    children: PropTypes.string,
}

const ProfileDetails = ({ name, username }) => (
    <div>
        <ProfileName>{name}</ProfileName>
        <ProfileSubtitle>{username}</ProfileSubtitle>

        <style jsx>{`
            div {
                display: flex;
                flex-direction: column;
                gap: ${spacers.dp4};
                padding-block-start: 1px;
                font-size: 13px;
                font-weight: 400;
            }
        `}</style>
    </div>
)

ProfileDetails.propTypes = {
    name: PropTypes.string,
    username: PropTypes.string,
}

export const ProfileHeader = ({ name, avatarId, username }) => (
    <div>
        <span className="user-avatar">
            <UserAvatar
                avatarId={avatarId}
                name={name}
                dataTest="headerbar-profile-menu-icon"
                medium
            />
        </span>
        <ProfileDetails name={name} username={username} />

        <style jsx>{`
            div {
                display: flex;
                flex-direction: row;
                overflow: hidden;
                align-items: flex-start;
                gap: ${spacers.dp8};
                padding: ${spacers.dp12} ${spacers.dp8};
                margin-block-end: ${spacers.dp4};
                background: ${colors.grey100};
                border-block-end: 1px solid ${colors.grey300};
            }
            span.user-avatar {
                flex-shrink: 0;
            }
        `}</style>
    </div>
)

ProfileHeader.propTypes = {
    avatarId: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string,
}
