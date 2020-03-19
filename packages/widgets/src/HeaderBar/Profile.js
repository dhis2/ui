import React from 'react'
import propTypes from '@dhis2/prop-types'

import { ProfileMenu } from './Profile/ProfileMenu.js'

import { TextIcon } from './TextIcon.js'
import { ImageIcon } from './ImageIcon.js'

function avatarPath(avatar, contextPath) {
    if (!avatar) {
        return null
    }

    return `${contextPath}/api/fileResources/${avatar.id}/data`
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

    userIcon(me, contextPath) {
        const avatar = avatarPath(me.avatar, contextPath)

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
        const { user, contextPath } = this.props

        return (
            <div
                ref={c => (this.elContainer = c)}
                data-test="headerbar-profile"
            >
                {this.userIcon(user, contextPath)}

                {this.state.show ? (
                    <ProfileMenu
                        avatar={avatarPath(user.avatar, contextPath)}
                        name={user.name}
                        email={user.email}
                        contextPath={contextPath}
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
    contextPath: propTypes.string.isRequired,
    user: propTypes.object.isRequired,
}
