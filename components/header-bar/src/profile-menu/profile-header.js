import { UserAvatar } from '@dhis2-ui/user-avatar'
import { useConfig } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React from 'react'
import { joinPath } from '../join-path.js'
import i18n from '../locales/index.js'

const ProfileName = ({ children }) => (
    <div data-test="headerbar-profile-username">
        {children}

        <style jsx>{`
            div {
                margin-bottom: 3px;
                font-size: 16px;
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
                margin-bottom: 6px;
                font-size: 14px;
                line-height: 16px;
            }
        `}</style>
    </div>
)
ProfileEmail.propTypes = {
    children: PropTypes.string,
}

const ProfileEdit = ({ children }) => {
    const { baseUrl } = useConfig()

    return (
        <a
            href={joinPath(baseUrl, 'dhis-web-user-profile/#/profile')}
            data-test="headerbar-profile-edit-profile-link"
        >
            {children}

            <style jsx>{`
                a {
                    color: rgba(0, 0, 0, 0.87);
                    font-size: 12px;
                    line-height: 14px;
                    text-decoration: underline;
                    cursor: pointer;
                }
            `}</style>
        </a>
    )
}

ProfileEdit.propTypes = {
    children: PropTypes.string,
}

const ProfileDetails = ({ name, email }) => (
    <div>
        <ProfileName>{name}</ProfileName>
        <ProfileEmail>{email}</ProfileEmail>
        <ProfileEdit>{i18n.t('Edit profile')}</ProfileEdit>

        <style jsx>{`
            div {
                display: flex;
                flex-direction: column;
                margin-inline-start: 20px;
                color: #000;
                font-size: 14px;
                font-weight: 400;
            }
        `}</style>
    </div>
)

ProfileDetails.propTypes = {
    email: PropTypes.string,
    name: PropTypes.string,
}

export const ProfileHeader = ({ name, email, avatarId }) => (
    <div>
        <UserAvatar
            avatarId={avatarId}
            name={name}
            dataTest="headerbar-profile-menu-icon"
            large
        />
        <ProfileDetails name={name} email={email} />

        <style jsx>{`
            div {
                display: flex;
                flex-direction: row;
                margin-inline-start: 24px;
                padding-top: 20px;
            }
        `}</style>
    </div>
)

ProfileHeader.propTypes = {
    avatarId: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
}
