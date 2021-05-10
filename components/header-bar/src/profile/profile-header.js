import { Box } from '@dhis2-ui/box'
import { useConfig } from '@dhis2/app-runtime'
import propTypes from '@dhis2/prop-types'
import React from 'react'
import { joinPath } from '../join-path.js'
import i18n from '../locales/index.js'
import { UserIcon } from '../user-icon/user-icon.js'

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
    children: propTypes.string,
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
    children: propTypes.string,
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
    children: propTypes.string,
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
                margin-left: 20px;
                color: #000;
                font-size: 14px;
                font-weight: 400;
            }
        `}</style>
    </div>
)

ProfileDetails.propTypes = {
    email: propTypes.string,
    name: propTypes.string,
}

export const ProfileHeader = ({ name, email, avatarUrl }) => (
    <div>
        <Box width="48px" height="48px">
            <UserIcon
                avatarUrl={avatarUrl}
                name={name}
                dataTest="headerbar-profile-menu-icon"
            />
        </Box>
        <ProfileDetails name={name} email={email} />

        <style jsx>{`
            div {
                display: flex;
                flex-direction: row;
                margin-left: 24px;
                padding-top: 20px;
            }
        `}</style>
    </div>
)

ProfileHeader.propTypes = {
    avatarUrl: propTypes.string,
    email: propTypes.string,
    name: propTypes.string,
}
