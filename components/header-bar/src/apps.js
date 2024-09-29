import { clearSensitiveCaches, useConfig } from '@dhis2/app-runtime'
import { colors, spacers, theme } from '@dhis2/ui-constants'
import {
    IconApps24,
    IconApps16,
    IconTerminalWindow16,
    IconLogOut16,
    IconArrowLeft16,
} from '@dhis2/ui-icons'
import { Button } from '@dhis2-ui/button'
import { InputField } from '@dhis2-ui/input'
import { MenuItem } from '@dhis2-ui/menu'
import { Modal, ModalContent } from '@dhis2-ui/modal'
import PropTypes from 'prop-types'
import React, { useState, useCallback, useRef, useEffect } from 'react'
import { joinPath } from './join-path.js'
import i18n from './locales/index.js'

/**
 * Copied from here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
 */
function escapeRegExpCharacters(text) {
    return text.replace(/[/.*+?^${}()|[\]\\]/g, '\\$&')
}

function Search({ value, onChange }) {
    return (
        <div>
            <span>
                <InputField
                    value={value}
                    name="filter"
                    placeholder={i18n.t('Search apps, shortcuts, commands')}
                    onChange={onChange}
                    initialFocus
                    // style={{
                    //     width: '100%',
                    //     border: 'none',
                    // }}
                />
            </span>
            <style jsx>{`
                // span > #filter{
                //     // width: '100%';
                //     border: 'none';
                // }
            `}</style>
        </div>
    )
}

Search.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

function AppItem({ name, path, img }) {
    return (
        <a href={path}>
            <img src={img} alt="app logo" />

            <div>{name}</div>

            <style jsx>{`
                a {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: minmax(100px, auto);
                    padding: 0.8em;
                    text-decoration: none;
                    cursor: pointer;
                }

                a:hover,
                a:focus {
                    background-color: ${theme.primary050};
                    cursor: pointer;
                }

                a:hover > div {
                    font-weight: 500;
                    cursor: pointer;
                }

                img {
                    width: 48px;
                    height: 48px;
                    margin: 0.35em;
                    cursor: pointer;
                    align-items: center;
                }

                div {
                    overflow-wrap: anywhere;
                    margin-top: 0.35em;
                    color: rgba(0, 0, 0, 0.87);
                    font-size: 12px;
                    letter-spacing: 0.01em;
                    line-height: 14px;
                    text-align: center;
                    cursor: pointer;
                }
            `}</style>
        </a>
    )
}

AppItem.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    path: PropTypes.string,
}

function ListItem({ name, path, image, description }) {
    return (
        <a href={path}>
            <img src={image} alt="logo" />
            <div className="name">{name}</div>
            {description && <div className="description">{description}</div>}
            <style jsx>{`
                    a {
                            width: 100%;
                            display:grid;
                            grid-template-columns: 7% 90%;
                            grid-auto-rows: 30px;
                            grid-gap: 0.05em;
                            text-decoration: none;
                            cursor: pointer;
                            margin-bottom: 0.3em;
                            font-size: 100%
                            font-weight: 500;
                            padding: 0.3em;
                    }
    
                    a:hover,
                    a:focus {
                        background-color: ${theme.primary050};
                        cursor: pointer;
                    }
    
                    a:hover > div {
                        font-weight: 500;
                        cursor: pointer;
                    }
    
                    img {
                        width: 20px;
                        height: 20px;
                        cursor: pointer;
                        align-self: stretch
                    }
    
                    div {
                        overflow-wrap: anywhere;
                        color: rgba(0, 0, 0, 0.87);
                        font-size: 13px;
                        letter-spacing: 0.01em;
                        line-height: 14px;
                        cursor: pointer;
                    }

                    .name {
                        align-self: start;
                    }
                    .description {
                        grid-column: 2
                    }
                `}</style>
        </a>
    )
}

ListItem.propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    path: PropTypes.string,
}

function List({ filteredItems }) {
    return (
        <div data-test="headerbar-apps-menu-list">
            {filteredItems.map(
                (
                    { displayName, name, defaultAction, icon, description },
                    idx
                ) => (
                    <ListItem
                        key={`app-${name}-${idx}`}
                        name={displayName || name}
                        path={defaultAction}
                        img={icon}
                        description={description}
                    />
                )
            )}

            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
                    // min-width: 300px;
                    // max-width: 560px;

                    // min-height: 200px;
                    // max-height: 465px;

                    overflow: auto;
                    overflow-x: hidden;
                }
            `}</style>
        </div>
    )
}
List.propTypes = {
    filteredItems: PropTypes.array,
}

function Actions({ setView }) {
    const actions = [
        {
            icon: IconApps16,
            type: 'apps',
            action: 'Browse apps',
        },
        {
            icon: IconTerminalWindow16,
            type: 'commands',
            action: 'Browse commands',
        },
    ]

    const { baseUrl } = useConfig()

    return (
        <>
            <h5 style={{ color: colors.grey600 }}>{i18n.t('Actions')}</h5>
            {actions.map((action, index) => (
                <MenuItem
                    key={`${index}-${action.type}`}
                    onClick={(payload, event) => {
                        console.log(payload.value, event.target)
                        setView(action.type)
                    }}
                    label={i18n.t(`${action.action}`)}
                    value={action.action}
                    icon={<action.icon color={colors.grey700} />}
                />
            ))}
            {/* got from profile-menu: https://github.com/dhis2/ui/blob/4902126ef0a6163961286a29f8df44b8fd3a0604/components/header-bar/src/profile-menu/profile-menu.js#L88 */}
            <MenuItem
                href={joinPath(
                    baseUrl,
                    'dhis-web-commons-security/logout.action'
                )}
                // NB: By MenuItem implementation, this callback
                // overwrites default navigation behavior but maintains
                // the href attribute
                onClick={async () => {
                    // setLoading(true)
                    await clearSensitiveCaches()
                    // setLoading(false)
                    window.location.assign(
                        joinPath(
                            baseUrl,
                            'dhis-web-commons-security/logout.action'
                        )
                    )
                }}
                label={i18n.t('Logout')}
                value="logout"
                icon={<IconLogOut16 color={colors.grey700} />}
            />
        </>
    )
}

Actions.propTypes = {
    setView: PropTypes.func,
}

function SearchResults({ filter, filteredItems, heading }) {
    return (
        <div>
            {filter ? (
                filteredItems.length > 0 ? (
                    <p style={{ color: colors.grey600 }}>
                        Results for {filter}
                    </p>
                ) : (
                    <p style={{ color: colors.grey600 }}>
                        Nothing found for {filter}
                    </p>
                )
            ) : (
                <h5 style={{ color: colors.grey600 }}>
                    {i18n.t(`${heading}`)}
                </h5>
            )}
        </div>
    )
}

SearchResults.propTypes = {
    filter: PropTypes.string,
    filteredItems: PropTypes.array,
    heading: PropTypes.string,
}

function ActionsView({ heading, itemsArray, filter, setView }) {
    const filteredItems = itemsArray.filter(({ displayName, name }) => {
        const itemName = displayName || name
        const formattedItemName = itemName.toLowerCase()
        const formattedFilter = escapeRegExpCharacters(filter).toLowerCase()

        return filter.length > 0
            ? formattedItemName.match(formattedFilter)
            : true
    })

    const handleClick = () => {
        setView('home')
    }
    return (
        <>
            <Button
                aria-label="Back Button"
                icon={<IconArrowLeft16 />}
                name="Back"
                onClick={handleClick}
                title="Back Button"
                value="back"
                style={{
                    width: '100%',
                    border: 'none',
                    justifyContent: 'flex-start',
                }}
            />
            <SearchResults
                filter={filter}
                filteredItems={filteredItems}
                heading={heading}
            />
            <List filteredItems={filteredItems} />
        </>
    )
}

ActionsView.propTypes = {
    filter: PropTypes.string,
    heading: PropTypes.string,
    itemsArray: PropTypes.array,
    setView: PropTypes.func,
}

function HomeView({ apps, filter }) {
    const filteredApps = apps.filter(({ displayName, name }) => {
        const appName = displayName || name
        const formattedAppName = appName.toLowerCase()
        const formattedFilter = escapeRegExpCharacters(filter).toLowerCase()

        return filter.length > 0
            ? formattedAppName.match(formattedFilter)
            : true
    })
    return (
        <>
            <div>
                <SearchResults
                    filter={filter}
                    filteredItems={filteredApps}
                    heading={'Top Apps'}
                />
            </div>
            <div data-test="headerbar-apps-menu-list">
                {filteredApps.length > 0 &&
                    filteredApps
                        .slice(0, 8)
                        .map(
                            (
                                { displayName, name, defaultAction, icon },
                                idx
                            ) => (
                                <AppItem
                                    key={`app-${name}-${idx}`}
                                    name={displayName || name}
                                    path={defaultAction}
                                    img={icon}
                                />
                            )
                        )}

                <style jsx>{`
                    div {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        grid-template-rows: repeat(2, auto);
                        grid-gap: 1em;
                        align-items: stretch;

                        // min-height: 200px;
                        // max-height: 465px;
                        // margin-block-start: 0;
                        // margin-block-end: 8px;
                        // margin-inline: 8px;

                        overflow: auto;
                        overflow-x: hidden;
                    }

                    @media (max-width: 768px) {
                        div {
                            grid-template-columns: repeat(2, 1fr);
                            grid-template-rows: repeat(4, auto);
                        }
                    }
                `}</style>
            </div>
        </>
    )
}

HomeView.propTypes = {
    apps: PropTypes.array,
    filter: PropTypes.string,
}

function ViewSwitcher({ apps, commands, filter, view, setView }) {
    switch (view) {
        case 'apps':
            return (
                <ActionsView
                    heading={'All Apps'}
                    itemsArray={apps}
                    filter={filter}
                    setView={setView}
                />
            )
        case 'commands':
            return (
                <ActionsView
                    heading={'All commands'}
                    itemsArray={commands}
                    filter={filter}
                    setView={setView}
                />
            )
        case 'home':
        default:
            return <HomeView apps={apps} filter={filter} />
    }
}

ViewSwitcher.propTypes = {
    apps: PropTypes.array,
    commands: PropTypes.array,
    filter: PropTypes.string,
    setView: PropTypes.func,
    view: PropTypes.string,
}

const CommandPalette = ({ apps, commands }) => {
    const [show, setShow] = useState(false)
    const [filter, setFilter] = useState('')

    const [currentView, setCurrentView] = useState('home')
    const showActions = filter.length <= 0 && currentView === 'home'

    const handleVisibilityToggle = useCallback(() => setShow(!show), [show])
    const handleFilterChange = useCallback(({ value }) => setFilter(value), [])

    const containerEl = useRef(null)
    const onDocClick = useCallback((evt) => {
        if (containerEl.current && !containerEl.current.contains(evt.target)) {
            // setShow(false)
        }
    }, [])
    useEffect(() => {
        document.addEventListener('click', onDocClick)
        return () => document.removeEventListener('click', onDocClick)
    }, [onDocClick])

    // QN: what should trigger the closing now?
    // Case: user can check out different views in the modal so clicking on it should not necessarily close it as before.
    // If a link is clicked, then it does not matter. The user will be redirected to another page
    // pending/to do: keyboard navigation

    return (
        <div ref={containerEl} data-test="headerbar-apps">
            <button
                onClick={handleVisibilityToggle}
                data-test="headerbar-apps-icon"
            >
                <IconApps24 color={colors.white} />
            </button>

            {show ? (
                <Modal hide={!show}>
                    <ModalContent>
                        <div data-test="headerbar-apps-menu">
                            <Search
                                value={filter}
                                onChange={handleFilterChange}
                            />
                            <ViewSwitcher
                                apps={apps}
                                filter={filter}
                                view={currentView}
                                setView={setCurrentView}
                                commands={commands}
                            />
                            {showActions ? (
                                <Actions setView={setCurrentView} />
                            ) : null}
                        </div>
                    </ModalContent>
                </Modal>
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
