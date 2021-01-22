import propTypes from '@dhis2/prop-types'
import React from 'react'
import { ImageIcon } from './ImageIcon.js'
import { ProfileMenu } from './Profile/ProfileMenu.js'
import { TextIcon } from './TextIcon.js'

const UserIcon = ({ avatarUrl, name, onClick }) => (
    <button onClick={onClick}>
        {avatarUrl ? (
            <ImageIcon
                src={avatarUrl}
                dataTestId="headerbar-profile-icon-image"
            />
        ) : (
            <TextIcon name={name} dataTestId="headerbar-profile-icon-text" />
        )}

        <style jsx>{`
            button {
                background: transparent;
                padding: 0;
                border: 0;
                cursor: pointer;
                width: 100%;
                height: 100%;
            }
            button:focus {
                outline: 1px dotted white;
            }
        `}</style>
    </button>
)

UserIcon.propTypes = {
    name: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    avatarUrl: propTypes.string,
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

    handleToggle = () => this.setState({ show: !this.state.show })

    render() {
        const { name, email, avatarUrl, helpUrl } = this.props

        return (
            <div
                ref={c => (this.elContainer = c)}
                data-test="headerbar-profile"
                className="headerbar-profile"
            >
                <UserIcon
                    avatarUrl={avatarUrl}
                    name={name}
                    onClick={this.handleToggle}
                />

                {this.state.show ? (
                    <ProfileMenu
                        avatarUrl={avatarUrl}
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
    email: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    avatarUrl: propTypes.string,
    helpUrl: propTypes.string,
}
