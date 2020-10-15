import propTypes from '@dhis2/prop-types'
import React from 'react'
import { ImageIcon } from './ImageIcon.js'
import { joinPath } from './joinPath.js'
import { ProfileMenu } from './Profile/ProfileMenu.js'
import { TextIcon } from './TextIcon.js'

function avatarPath(avatar, baseUrl) {
    if (!avatar) {
        return null
    }

    return joinPath(baseUrl, 'api/fileResources', avatar.id, 'data')
}

export default class Profile extends React.Component {
    state = {
        show: false,
    }

    componentDidMount() {
        document.addEventListener('click', this.onDocClick)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocClick)
    }

    onDocClick = evt => {
        if (this.elContainer && !this.elContainer.contains(evt.target)) {
            this.setState({ show: false })
        }
    }

    onToggle = () => this.setState({ show: !this.state.show })

    userIcon(me, baseUrl) {
        const avatar = avatarPath(me.avatar, baseUrl)

        if (avatar) {
            return (
                <ImageIcon
                    src={avatar}
                    onClick={this.onToggle}
                    dataTestId="headerbar-profile-icon-image"
                />
            )
        }

        return (
            <TextIcon
                name={me.name}
                onClick={this.onToggle}
                dataTestId="headerbar-profile-icon-text"
            />
        )
    }

    render() {
        const { user, baseUrl } = this.props

        return (
            <div
                ref={c => (this.elContainer = c)}
                data-test="headerbar-profile"
            >
                {this.userIcon(user, baseUrl)}

                {this.state.show ? (
                    <ProfileMenu
                        avatar={avatarPath(user.avatar, baseUrl)}
                        name={user.name}
                        email={user.email}
                    />
                ) : null}

                <style jsx>{`
                    div {
                        position: relative;
                        width: 36px;
                        height: 36px;
                        margin: 2px 12px 0 24px;
                    }
                `}</style>
            </div>
        )
    }
}

Profile.propTypes = {
    baseUrl: propTypes.string.isRequired,
    user: propTypes.object.isRequired,
}
