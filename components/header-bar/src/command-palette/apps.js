import { colors, elevations, spacers } from '@dhis2/ui-constants'
import { IconApps24 } from '@dhis2/ui-icons'
import { Layer } from '@dhis2-ui/layer'
import PropTypes from 'prop-types'
import React, { useState, useCallback, useRef, useEffect } from 'react'
import { Actions, BackButton, Search } from './fields.js'
import { ViewSwitcher } from './views.js'

const MIN_APPS_NUM = 8

export const Container = ({ children, setShow, show }) => {
    return (
        <Layer onBackdropClick={() => setShow(false)} translucent={show}>
            <div role="dialog" aria-modal="true">
                {children}
            </div>
            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
                    border-radius: 1px;
                    padding: 1px;
                    width: 572px;
                    max-height: 544px;
                    margin: 0 auto;
                    border-radius: 3px;
                    background: ${colors.white};
                    box-shadow: ${elevations.e100};
                    margin-top: 92px;
                }
            `}</style>
        </Layer>
    )
}

Container.propTypes = {
    children: PropTypes.node,
    setShow: PropTypes.func,
    show: PropTypes.bool,
}

const CommandPalette = ({ apps, commands }) => {
    const [show, setShow] = useState(false)
    const [filter, setFilter] = useState('')

    const [currentView, setCurrentView] = useState('home')

    const showActions = filter.length <= 0 && currentView === 'home'
    const showBackButton = currentView !== 'home'

    const handleVisibilityToggle = useCallback(() => setShow(!show), [show])
    const handleFilterChange = useCallback(({ value }) => setFilter(value), [])

    const handleClearSearch = () => setFilter('')

    const containerEl = useRef(null)

    const handleKeyDown = useCallback(
        (event) => {
            switch (event.key) {
                case 'Escape':
                    event.preventDefault()
                    if (currentView === 'home') {
                        setShow(false)
                    } else {
                        setCurrentView('home')
                    }
                    break
            }

            if ((event.metaKey || event.ctrlKey) && event.key === '/') {
                setShow(!show)
            }
        },
        [currentView, show]
    )

    const handleFocus = () => {
        // this is about the focus of the element
        // on launch: focus entire element
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
        <div ref={containerEl} data-test="headerbar-apps">
            <button
                onClick={handleVisibilityToggle}
                data-test="headerbar-apps-icon"
            >
                <IconApps24 color={colors.white} />
            </button>

            {show ? (
                <Container setShow={setShow} show={show}>
                    <div data-test="headerbar-apps-menu">
                        <Search
                            value={filter}
                            onChange={handleFilterChange}
                            clearSearch={handleClearSearch}
                        />

                        <div className="content">
                            {showBackButton ? (
                                <BackButton
                                    setView={setCurrentView}
                                    handleClearSearch={handleClearSearch}
                                />
                            ) : null}
                            <ViewSwitcher
                                apps={apps}
                                filter={filter}
                                view={currentView}
                                commands={commands}
                            />
                            {showActions ? (
                                <Actions
                                    setView={setCurrentView}
                                    showApps={apps?.length > MIN_APPS_NUM}
                                    showCommands={commands?.length > 0}
                                />
                            ) : null}
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
                .content {
                    overflow-y: auto;
                    max-height: calc(544px - 50px);
                }

                div {
                    position: relative;
                    height: 100%;
                }
            `}</style>
        </div>
    )
}

CommandPalette.propTypes = {
    apps: PropTypes.array,
    commands: PropTypes.array,
}

export default CommandPalette
