import { colors, spacers } from '@dhis2/ui-constants'
import { IconApps24 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React, { useState, useCallback, useRef, useEffect } from 'react'
import i18n from '../locales/index.js'
import { useCommandPaletteContext } from './context/command-palette-context.js'
import { useAvailableActions } from './hooks/use-actions.js'
import { useFilter } from './hooks/use-filter.js'
import { useNavigation } from './hooks/use-navigation.js'
import BackButton from './sections/back-button.js'
import ModalContainer from './sections/container.js'
import Search from './sections/search-field.js'
import HomeView from './views/home-view.js'
import {
    BrowseApps,
    BrowseCommands,
    BrowseShortcuts,
} from './views/list-view.js'

const CommandPalette = ({ apps, commands, shortcuts }) => {
    const containerEl = useRef(null)
    const [openModal, setOpenModal] = useState(false)
    const { currentView, filter, setFilter } = useCommandPaletteContext()

    const handleVisibilityToggle = useCallback(
        () => setOpenModal(!openModal),
        [openModal]
    )
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

    const { handleKeyDown, goToDefaultView, modalRef } = useNavigation({
        setOpenModal,
        itemsArray: currentViewItemsArray,
        showGrid: apps?.length > 0,
        actionsLength: actionsArray?.length,
    })

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
                setOpenModal((open) => !open)
                goToDefaultView()
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [goToDefaultView])

    return (
        <div ref={containerEl} data-test="headerbar" className="headerbar">
            <button
                onClick={handleVisibilityToggle}
                data-test="headerbar-apps-icon"
            >
                <IconApps24 color={colors.white} />
            </button>
            {openModal ? (
                <ModalContainer setShow={setOpenModal} show={openModal}>
                    <div
                        data-test="headerbar-menu"
                        className="headerbar-menu"
                        ref={modalRef}
                        tabIndex={0}
                        onFocus={handleFocus}
                        onKeyDown={handleKeyDown}
                    >
                        <Search
                            value={filter}
                            onChange={handleFilterChange}
                            placeholder={
                                currentView === 'apps'
                                    ? i18n.t('Search apps')
                                    : currentView === 'commands'
                                    ? i18n.t('Search commands')
                                    : currentView === 'shortcuts'
                                    ? i18n.t('Search shortcuts')
                                    : i18n.t('Search apps, shortcuts, commands')
                            }
                        />
                        <div className="headerbar-menu-content">
                            {currentView !== 'home' && !filter ? (
                                <BackButton onClickHandler={goToDefaultView} />
                            ) : null}
                            {/* switch views */}
                            {currentView === 'home' && (
                                <HomeView
                                    apps={filteredApps}
                                    commands={filteredCommands}
                                    shortcuts={filteredShortcuts}
                                    actions={actionsArray}
                                />
                            )}
                            {currentView === 'apps' && (
                                <BrowseApps apps={filteredApps} />
                            )}
                            {currentView === 'commands' && (
                                <BrowseCommands commands={filteredCommands} />
                            )}
                            {currentView === 'shortcuts' && (
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
