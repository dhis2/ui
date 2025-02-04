import { colors, spacers } from '@dhis2/ui-constants'
import { IconApps24 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React, { useCallback, useRef, useEffect } from 'react'
import i18n from '../locales/index.js'
import { useCommandPaletteContext } from './context/command-palette-context.js'
import { useAvailableActions } from './hooks/use-actions.js'
import { useFilter } from './hooks/use-filter.js'
import { useNavigation } from './hooks/use-navigation.js'
import BackButton from './sections/back-button.js'
import ModalContainer from './sections/container.js'
import Search from './sections/search-field.js'
import {
    ALL_APPS_VIEW,
    ALL_COMMANDS_VIEW,
    ALL_SHORTCUTS_VIEW,
    HOME_VIEW,
} from './utils/constants.js'
import HomeView from './views/home-view.js'
import {
    BrowseApps,
    BrowseCommands,
    BrowseShortcuts,
} from './views/list-view.js'

const CommandPalette = ({ apps, commands, shortcuts }) => {
    const containerEl = useRef(null)
    const { currentView, filter, setFilter } = useCommandPaletteContext()

    const handleFilterChange = useCallback(
        ({ value }) => setFilter(value),
        [setFilter]
    )

    const actionsArray = useAvailableActions({ apps, shortcuts, commands })

    const {
        filteredApps,
        filteredCommands,
        filteredShortcuts,
        currentViewItemsArray,
    } = useFilter({ apps, commands, shortcuts })

    const {
        handleKeyDown,
        goToDefaultView,
        modalRef,
        setModalOpen,
        showModal,
    } = useNavigation({
        itemsArray: currentViewItemsArray,
        showGrid: apps?.length > 0,
        actionsLength: actionsArray?.length,
    })

    const handleVisibilityToggle = useCallback(
        () => setModalOpen((open) => !open),
        [setModalOpen]
    )

    useEffect(() => {
        const activeItem = document.querySelector('.highlighted')
        if (activeItem && typeof activeItem.scrollIntoView === 'function') {
            activeItem?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        }
    })

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current?.focus()
        }
    })

    const handleFocus = (event) => {
        if (event.target === modalRef?.current) {
            modalRef.current?.querySelector('input').focus()
        }
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if ((event.metaKey || event.ctrlKey) && event.key === '/') {
                setModalOpen((open) => !open)
                goToDefaultView()
            }
        }

        const onDocClick = (evt) => {
            if (containerEl.current && evt.target === modalRef.current) {
                setModalOpen(false)
                goToDefaultView()
            }
        }
        document.addEventListener('click', onDocClick)
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('click', onDocClick)
        }
    }, [goToDefaultView, setModalOpen, modalRef])

    return (
        <div ref={containerEl} data-test="headerbar" className="headerbar">
            <button
                onClick={handleVisibilityToggle}
                data-test="headerbar-apps-icon"
            >
                <IconApps24 color={colors.white} />
            </button>
            {showModal ? (
                <ModalContainer
                    ref={modalRef}
                    onFocus={handleFocus}
                    onKeyDown={handleKeyDown}
                >
                    <div data-test="headerbar-menu" className="headerbar-menu">
                        <Search
                            value={filter}
                            onChange={handleFilterChange}
                            placeholder={
                                currentView === ALL_APPS_VIEW
                                    ? i18n.t('Search apps')
                                    : currentView === ALL_COMMANDS_VIEW
                                    ? i18n.t('Search commands')
                                    : currentView === ALL_SHORTCUTS_VIEW
                                    ? i18n.t('Search shortcuts')
                                    : i18n.t('Search apps, shortcuts, commands')
                            }
                        />
                        <div className="headerbar-menu-content">
                            {currentView !== HOME_VIEW && !filter ? (
                                <BackButton onClickHandler={goToDefaultView} />
                            ) : null}
                            {/* switch views */}
                            {currentView === HOME_VIEW && (
                                <HomeView
                                    apps={filteredApps}
                                    commands={filteredCommands}
                                    shortcuts={filteredShortcuts}
                                    actions={actionsArray}
                                />
                            )}
                            {currentView === ALL_APPS_VIEW && (
                                <BrowseApps apps={filteredApps} />
                            )}
                            {currentView === ALL_COMMANDS_VIEW && (
                                <BrowseCommands commands={filteredCommands} />
                            )}
                            {currentView === ALL_SHORTCUTS_VIEW && (
                                <BrowseShortcuts
                                    shortcuts={filteredShortcuts}
                                />
                            )}
                        </div>
                    </div>
                </ModalContainer>
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
                .headerbar-menu {
                    width: 100%;
                }
                .headerbar-menu-content {
                    overflow-y: auto;
                    max-height: calc(544px - 50px);
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
