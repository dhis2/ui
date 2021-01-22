import propTypes from '@dhis2/prop-types'
import React from 'react'
import { ImageIcon } from './ImageIcon.js'
import { joinPath } from './joinPath.js'
import { ProfileMenu } from './Profile/ProfileMenu.js'
import { TextIcon } from './TextIcon.js'

const avatarUrl = (avatar, baseUrl) =>
    avatar ? joinPath(baseUrl, 'api/fileResources', avatar.id, 'data') : null

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

    renderUserIcon({ avatar, name, baseUrl }) {
        if (avatar) {
            return (
                <ImageIcon
                    src={avatarUrl(avatar, baseUrl)}
                    onClick={this.onToggle}
                    dataTestId="headerbar-profile-icon-image"
                />
            )
        }

        return (
            <TextIcon
                name={name}
                onClick={this.onToggle}
                dataTestId="headerbar-profile-icon-text"
            />
        )
    }

    render() {
        const { name, email, avatar, baseUrl, helpUrl } = this.props

        return (
            <div
                ref={c => (this.elContainer = c)}
                data-test="headerbar-profile"
                className="headerbar-profile"
            >
                {this.renderUserIcon({ avatar, name, baseUrl })}

                {this.state.show ? (
                    <ProfileMenu
                        avatarUrl={avatarUrl(avatar, baseUrl)}
                        name={name}
                        email={email}
                        helpUrl={helpUrl}
                    />
                ) : null}

                <style jsx>{`
                    .headerbar-profile {
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
    email: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    avatar: propTypes.string,
    helpUrl: propTypes.string,
}
