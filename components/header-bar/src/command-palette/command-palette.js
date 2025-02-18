import { colors, spacers } from '@dhis2/ui-constants'
import { IconApps24 } from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React, { useCallback, useRef, useEffect } from 'react'
import { useCommandPaletteContext } from './context/command-palette-context.js'
import { useAvailableActions } from './hooks/use-actions.js'
import { useFilter } from './hooks/use-filter.js'
import { useGridLayout } from './hooks/use-grid-layout.js'
import { useNavigation } from './hooks/use-navigation.js'
import ModalContainer from './sections/modal-container.js'
import NavigationKeysLegend from './sections/navigation-keys-legend.js'
import SearchFilter from './sections/search-field.js'
import {
    FILTERABLE_ACTION,
    GRID_COLUMNS_DESKTOP,
    GRID_COLUMNS_MOBILE,
    HOME_VIEW,
} from './utils/constants.js'
import HomeView from './views/home-view.js'
import ListView from './views/list-view.js'

const CommandPalette = ({ apps, commands, shortcuts }) => {
    const containerEl = useRef(null)
    const { currentView, goToDefaultView } = useCommandPaletteContext()

    const { isMobile, gridLayout } = useGridLayout(apps)

    const actionsArray = useAvailableActions({ apps, shortcuts, commands })
    const searchableActions = actionsArray.filter(
        (action) => action.type === FILTERABLE_ACTION
    )

    const { filteredApps, currentViewItemsArray } = useFilter({
        apps,
        commands,
        shortcuts,
        actions: searchableActions,
    })

    const { handleKeyDown, modalRef, setModalOpen, showModal } = useNavigation({
        itemsArray: currentViewItemsArray,
        actionsArray,
        gridLayout,
    })

    const handleVisibilityToggle = useCallback(() => {
        setModalOpen((open) => !open)
        goToDefaultView()
    }, [setModalOpen, goToDefaultView])

    const handleModalClick = useCallback(
        (event) => {
            if (event.target === modalRef?.current) {
                setModalOpen(false)
            } else {
                modalRef?.current?.querySelector('input').focus()
            }
        },
        [modalRef, setModalOpen]
    )

    useEffect(() => {
        const handleKeyDown = (event) => {
            if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
                event.preventDefault()
                handleVisibilityToggle()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleVisibilityToggle])

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
                    onKeyDown={handleKeyDown}
                    onClick={handleModalClick}
                >
                    <div data-test="headerbar-menu" className="headerbar-menu">
                        <SearchFilter />
                        <div className="headerbar-menu-content">
                            {currentView === HOME_VIEW ? (
                                <HomeView
                                    actions={actionsArray}
                                    filteredItems={currentViewItemsArray}
                                    apps={filteredApps}
                                    gridColumns={
                                        isMobile
                                            ? GRID_COLUMNS_MOBILE
                                            : GRID_COLUMNS_DESKTOP
                                    }
                                />
                            ) : (
                                <ListView
                                    filteredItems={currentViewItemsArray}
                                    actions={actionsArray}
                                />
                            )}
                        </div>
                        <NavigationKeysLegend />
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
                    max-height: calc(544px - 100px);
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
