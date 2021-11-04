import { UserAvatar } from '@dhis2-ui/user-avatar'
import PropTypes from 'prop-types'
import React from 'react'
import { ProfileMenu } from './profile/profile-menu.js'

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

    onDocClick = (evt) => {
        if (this.elContainer && !this.elContainer.contains(evt.target)) {
            this.setState({ show: false })
        }
    }

    handleToggle = () => this.setState({ show: !this.state.show })

    render() {
        const { name, email, avatarId, helpUrl } = this.props

        return (
            <div
                ref={(c) => (this.elContainer = c)}
                data-test="headerbar-profile"
                className="headerbar-profile"
            >
                <button
                    className="headerbar-profile-btn"
                    onClick={this.handleToggle}
                >
                    <UserAvatar
                        avatarId={avatarId}
                        name={name}
                        dataTest="headerbar-profile-icon"
                    />
                </button>

                {this.state.show ? (
                    <ProfileMenu
                        avatarId={avatarId}
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
                        min-width: 36px;
                        min-height: 36px;
                        margin: 2px 12px 0 24px;
                    }

                    .headerbar-profile-btn {
                        background: transparent;
                        padding: 0;
                        border: 0;
                        cursor: pointer;
                        width: 100%;
                        height: 100%;
                    }
                    .headerbar-profile-btn:focus {
                        outline: 1px dotted white;
                    }
                `}</style>
            </div>
        )
    }
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    avatarId: PropTypes.string,
    email: PropTypes.string,
    helpUrl: PropTypes.string,
}
