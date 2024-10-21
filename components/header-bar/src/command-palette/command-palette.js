import { colors, spacers } from '@dhis2/ui-constants'
import { IconApps24 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React, { useState, useCallback, useRef, useEffect } from 'react'
import ActionsMenu from './sections/actions-menu.js'
import BackButton from './sections/back-button.js'
import Container from './sections/container.js'
import Search from './sections/search-field.js'
import { filterItemsArray } from './utils/filterItemsArray.js'
import BrowseApps from './views/browse-apps.js'
import BrowseCommands from './views/browse-commands.js'
import BrowseShortcuts from './views/browse-shortcuts.js'
import HomeView from './views/home-view.js'

const MIN_APPS_NUM = 8

const CommandPalette = ({ apps, commands, shortcuts }) => {
    const containerEl = useRef(null)
    const [show, setShow] = useState(false)
    const [filter, setFilter] = useState('')

    const [currentView, setCurrentView] = useState('home')

    const showActions = filter.length <= 0 && currentView === 'home'

    const handleVisibilityToggle = useCallback(() => setShow(!show), [show])
    const handleFilterChange = useCallback(({ value }) => setFilter(value), [])

    const goToDefaultView = () => {
        setFilter('')
        setCurrentView('home')
    }

    const filteredApps = filterItemsArray(apps, filter)
    const filteredCommands = filterItemsArray(commands, filter)
    const filteredShortcuts = filterItemsArray(shortcuts, filter)

    const handleKeyDown = useCallback(
        (event) => {
            switch (event.key) {
                case 'Escape':
                    event.preventDefault()
                    if (currentView === 'home') {
                        setShow(false)
                    } else {
                        goToDefaultView()
                    }
                    break
            }

            if ((event.metaKey || event.ctrlKey) && event.key === '/') {
                setShow(!show)
            }
        },
        [currentView, show]
    )

    const handleFocus = (e) => {
        // this is about the focus of the element
        // on launch: focus entire element
        console.log(e.target, 'e.target')
        console.log(document.activeElement, 'active element')
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('focus', handleFocus)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('focus', handleFocus)
        }
    }, [handleKeyDown])

    return (
        <div ref={containerEl} data-test="headerbar" className="headerbar">
            <button
                onClick={handleVisibilityToggle}
                data-test="headerbar-apps-icon"
            >
                <IconApps24 color={colors.white} />
            </button>
            {show ? (
                <Container setShow={setShow} show={show}>
                    <div data-test="headerbar-menu" className="headerbar-menu">
                        <Search value={filter} onChange={handleFilterChange} />
                        <div className="headerbar-menu-content">
                            {currentView !== 'home' && !filter ? (
                                <BackButton onClickHandler={goToDefaultView} />
                            ) : null}
                            {/* switch views */}
                            {currentView === 'apps' && (
                                <BrowseApps
                                    apps={filteredApps}
                                    filter={filter}
                                />
                            )}
                            {currentView === 'commands' && (
                                <BrowseCommands
                                    commands={filteredCommands}
                                    filter={filter}
                                    type={'commands'}
                                />
                            )}
                            {currentView === 'shortcuts' && (
                                <BrowseShortcuts
                                    shortcuts={filteredShortcuts}
                                    filter={filter}
                                />
                            )}
                            {currentView === 'home' && (
                                <HomeView
                                    apps={filteredApps}
                                    commands={filteredCommands}
                                    shortcuts={filteredShortcuts}
                                    filter={filter}
                                />
                            )}
                            {/* actions sections */}
                            {showActions && (
                                <ActionsMenu
                                    showAppsList={apps?.length > MIN_APPS_NUM}
                                    showCommandsList={commands?.length > 0}
                                    showShortcutsList={shortcuts?.length > 0}
                                    setCurrentView={setCurrentView}
                                />
                            )}
                        </div>
                    </div>
                </Container>
            ) : null}

            <style jsx>{`
                button {
                    display: block;
                    background: transparent;
                    padding-block-start: ${spacers.dp4};
                    padding-block-end: 0;
                    padding-inline: ${spacers.dp12};
                    border: 0;
                    cursor: pointer;
                    height: 100%;
                }
                button:focus {
                    outline: 2px solid white;
                    outline-offset: -2px;
                }
                button:focus:not(:focus-visible) {
                    outline: none;
                }
                button:hover {
                    background: #1a557f;
                }
                button:active {
                    background: #104067;
                }
                .headerbar {
                    position: relative;
                    height: 100%;
                }
                .headerbar-menu-content {
                    display: flex;
                    flex-direction: column;
                    overflow-y: auto;
                }
            `}</style>
        </div>
    )
}

CommandPalette.propTypes = {
    apps: PropTypes.array,
    commands: PropTypes.array,
    shortcuts: PropTypes.array,
}

export default CommandPalette
