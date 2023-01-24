import { UserAvatar } from '@dhis2-ui/user-avatar'
import PropTypes from 'prop-types'
import React, { useCallback, useRef, useState } from 'react'
import { DebugInfoModal } from './debug-info/debug-info-modal.js'
import { ProfileMenu } from './profile-menu/index.js'
import { useOnDocClick } from './profile/use-on-doc-click.js'

const Profile = ({ name, email, avatarId, helpUrl }) => {
    const [showProfileMenu, setShowProfileMenu] = useState(false)
    const [showDebugInfoModal, setShowDebugInfoModal] = useState(false)
    const hideProfileMenu = useCallback(
        () => setShowProfileMenu(false),
        [setShowProfileMenu]
    )
    const toggleProfileMenu = useCallback(
        () => setShowProfileMenu((show) => !show),
        [setShowProfileMenu]
    )
    const containerRef = useRef(null)

    useOnDocClick(containerRef, hideProfileMenu)

    return (
        <div
            ref={containerRef}
            data-test="headerbar-profile"
            className="headerbar-profile"
        >
            <button
                className="headerbar-profile-btn"
                onClick={toggleProfileMenu}
            >
                <UserAvatar
                    avatarId={avatarId}
                    name={name}
                    dataTest="headerbar-profile-icon"
                    medium
                />
            </button>

            {showProfileMenu && (
                <ProfileMenu
                    avatarId={avatarId}
                    name={name}
                    email={email}
                    helpUrl={helpUrl}
                    hideProfileMenu={hideProfileMenu}
                    showDebugInfoModal={() => {
                        setShowDebugInfoModal(true)
                    }}
                />
            )}
            {showDebugInfoModal && (
                <DebugInfoModal
                    onClose={() => {
                        setShowDebugInfoModal(false)
                    }}
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
