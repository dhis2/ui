import { UserAvatar } from '@dhis2-ui/user-avatar'
import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import { ProfileMenu } from './profile-menu/index.js'
import { useOnDocClick } from './profile/use-on-doc-click.js'

const Profile = ({
    name,
    email,
    avatarId,
    helpUrl,
}) => {
    const [show, setShow] = useState(false)
    const hideProfileMenu = () => setShow(false)
    const toggleProfileMenu = () => setShow(!show)
    const containerRef = useRef(null)
    useOnDocClick(containerRef, hideProfileMenu)

    return (
        <div
            ref={containerRef}
            data-test="headerbar-profile"
            className="headerbar-profile"
        >
            <button className="headerbar-profile-btn" onClick={toggleProfileMenu}>
                <UserAvatar
                    avatarUrl={avatarId}
                    name={name}
                    dataTest="headerbar-profile-icon"
                />
            </button>

            {show && (
                <ProfileMenu
                    avatarId={avatarId}
                    name={name}
                    email={email}
                    helpUrl={helpUrl}
                    hideProfileMenu={hideProfileMenu}
                />
            )}

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

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    avatarId: PropTypes.string,
    email: PropTypes.string,
    helpUrl: PropTypes.string,
}

export default Profile
