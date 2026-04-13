import { useConfig } from '@dhis2/app-runtime'
import { UserAvatar } from '@dhis2-ui/user-avatar'
import React from 'react'
import { joinPath } from '../join-path.ts'
import i18n from '../locales/index.js'

interface ProfileNameProps {
    children?: string
}

const ProfileName = ({ children }: ProfileNameProps) => (
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

interface ProfileEmailProps {
    children?: string
}

const ProfileEmail = ({ children }: ProfileEmailProps) => (
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

interface ProfileEditProps {
    children?: string
}

const ProfileEdit = ({ children }: ProfileEditProps) => {
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

interface ProfileDetailsProps {
    name?: string
    email?: string
}

const ProfileDetails = ({ name, email }: ProfileDetailsProps) => (
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

export interface ProfileHeaderProps {
    avatarId?: string
    email?: string
    name?: string
}

export const ProfileHeader = ({
    name,
    email,
    avatarId,
}: ProfileHeaderProps) => (
    <div>
        <UserAvatar
            avatarId={avatarId}
            name={name || ''}
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
