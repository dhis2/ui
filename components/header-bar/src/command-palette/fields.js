import { clearSensitiveCaches, useConfig } from '@dhis2/app-runtime'
import { colors, spacers, theme } from '@dhis2/ui-constants'
import {
    IconApps16,
    IconTerminalWindow16,
    IconLogOut16,
    IconArrowLeft16,
    IconSearch16,
} from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React, { useState, useRef, useEffect } from 'react'
import { InputField } from '../../../input/src/input-field/input-field.js'
import { joinPath } from '../join-path.js'
import i18n from '../locales/index.js'

export function Search({ value, onChange }) {
    return (
        <>
            <InputField
                value={value}
                name="filter"
                placeholder={i18n.t('Search apps, shortcuts, commands')}
                onChange={onChange}
                initialFocus
                className="input"
                autoComplete={'off'}
                prefixIcon={<IconSearch16 />}
                clearable
            />
            <style>{`
                .input {
                    max-width: 100%;
                    border: none;
                    border-bottom: 1px solid grey;
                    height: 40px;
                }
                .input input {
                    border: none;
                }
                .input input::placeholder {
                    color: ${colors.grey600};
                }
                .input input:focus {
                    outline: 2px solid ${theme.focus};
                    outline-offset: -2px;
                }
            `}</style>
        </>
    )
}

Search.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export function AppItem({ name, path, img }) {
    return (
        <a href={path}>
            <img src={img} alt="app logo" className="app-icon" />
            <div className="app-name">{name}</div>
            <style jsx>{`
                a {
                    display: flex;
                    flex-direction: column;
                    gap: ${spacers.dp12};
                    align-items: center;
                    padding: ${spacers.dp16} ${spacers.dp4};
                    background: ${colors.white};
                    border-radius: 1px;
                    text-decoration: none;
                    color: ${colors.grey900};
                    transition: all 0.1s ease;
                }
                a:hover,
                a:focus {
                    background: ${colors.grey200};
                    cursor: pointer;
                    outline: none;
                }
                a:active {
                    background: ${colors.grey300};
                }

                .app-icon {
                    width: 48px;
                    height: 48px;
                }

                .app-name {
                    font-size: 13px;
                    text-align: center;
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

export function ListItem({
    title,
    path,
    icon,
    image,
    description,
    type,
    onClickHandler,
}) {
    const showDescription = type === 'commands'
    return (
        <a href={path ? path : undefined} onClick={onClickHandler}>
            {icon && <span className="icon">{icon}</span>}
            {image && <img src={image} alt="logo" />}
            <div className="title">{title}</div>
            {showDescription && (
                <div className="description">{description}</div>
            )}
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
                        background-color: ${colors.grey200};
                        cursor: pointer;
                        outline: none;
                    }
    
                    img {
                        width: 20px;
                        height: 20px;
                        cursor: pointer;
                        // align-self: stretch
                    }
    
                    div {
                        overflow-wrap: anywhere;
                        color: rgba(0, 0, 0, 0.87);
                        font-size: 13px;
                        letter-spacing: 0.01em;
                        line-height: 14px;
                        cursor: pointer;
                    }

                    .title {
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
    icon: PropTypes.node,
    image: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    onClickHandler: PropTypes.func,
}

export function List({ filteredItems, type }) {
    const divRef = useRef(null)
    const [activeItem, setActiveItem] = useState(-1)
    const lastIndex = filteredItems.length - 1

    const handleKeyDown = (event) => {
        switch (event.key) {
            case 'ArrowDown':
                setActiveItem(activeItem >= lastIndex ? 0 : activeItem + 1)
                break
            case 'ArrowUp':
                setActiveItem(activeItem > 0 ? activeItem - 1 : lastIndex)
                break
            case 'Enter':
                event.preventDefault()
                event.target?.click()
                break
        }
    }

    useEffect(() => {
        if (divRef) {
            if (filteredItems.length && activeItem > -1) {
                divRef.current.children[activeItem].focus()
            }
        }
    }, [activeItem, filteredItems])

    // useEffect(() => {
    //     if (!divRef && !divRef.current) {return}
    //         const div = divRef.current
    //         div.addEventListener('keydown', handleKeyDown)
    //     return () => {
    //         div.removeEventListener('keydown', handleKeyDown)
    //     }
    // }, [])
    return (
        <div
            data-test="headerbar-apps-menu-list"
            onKeyDown={handleKeyDown}
            ref={divRef}
            tabIndex={-1}
        >
            {filteredItems.map(
                (
                    { displayName, name, defaultAction, icon, description },
                    idx
                ) => (
                    <ListItem
                        type={type}
                        key={`app-${name}-${idx}`}
                        title={displayName || name}
                        href={defaultAction}
                        image={icon}
                        description={description}
                    />
                )
            )}

            {/* // todo: use list with type/view filter to render correct item component */}

            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
                    overflow-x: hidden;
                }
            `}</style>
        </div>
    )
}
List.propTypes = {
    filteredItems: PropTypes.array,
    type: PropTypes.string,
}

export function Actions({ setView, showApps, showCommands }) {
    const { baseUrl } = useConfig()
    console.log(showApps, showCommands)

    return (
        <>
            <Heading filter={''} filteredItems={[]} heading={'Actions'} />

            {showApps ? (
                <ListItem
                    title={i18n.t('Browse apps')}
                    icon={<IconApps16 color={colors.grey700} />}
                    onClickHandler={() => setView('apps')}
                />
            ) : null}
            {showCommands ? (
                <ListItem
                    title={i18n.t('Browse commands')}
                    icon={<IconTerminalWindow16 color={colors.grey700} />}
                    onClickHandler={() => setView('commands')}
                />
            ) : null}
            <ListItem
                title={i18n.t('Logout')}
                icon={<IconLogOut16 color={colors.grey700} />}
                onClickHandler={async () => {
                    await clearSensitiveCaches()
                    window.location.assign(
                        joinPath(
                            baseUrl,
                            'dhis-web-commons-security/logout.action'
                        )
                    )
                }}
                href={joinPath(
                    baseUrl,
                    'dhis-web-commons-security/logout.action'
                )}
            />
        </>
    )
}

Actions.propTypes = {
    setView: PropTypes.func,
    showApps: PropTypes.bool,
    showCommands: PropTypes.bool,
}

export function Heading({ filter, filteredItems, heading }) {
    return (
        <div className="section-header">
            <span>
                {filter
                    ? filteredItems.length > 0
                        ? i18n.t(`Results for ${filter}`)
                        : i18n.t(`Nothing found for ${filter}`)
                    : i18n.t(`${heading}`)}
            </span>
            <style>{`
          .section-header {
              font-size: 14px;
              font-weight: 400;
              color: ${colors.grey800};
              padding:  ${spacers.dp8};
              margin: 2px ${spacers.dp4};
          }
          .section-header:first-of-type {
              margin-top: ${spacers.dp4};
          }
          `}</style>
        </div>
    )
}

Heading.propTypes = {
    filter: PropTypes.string,
    filteredItems: PropTypes.array,
    heading: PropTypes.string,
}

export function BackButton({ setView, handleClearSearch }) {
    const handleClick = () => {
        setView('home')
        handleClearSearch()
    }
    return (
        <>
            <button
                onClick={handleClick}
                aria-label="Back Button"
                name="Back"
                value="back"
                className="back-btn"
            >
                <IconArrowLeft16 color={colors.grey900} />
            </button>
            <style jsx>{`
                button {
                    display: block;
                    border: 0;
                    cursor: pointer;
                    width: 100%;
                    padding: ${spacers.dp4};
                    height: 25px;
                    background-color: ${colors.grey100};
                    text-align: start;
                    margin-bottom: 1px;
                }
                button:focus {
                    outline: 2px solid blue;
                    outline-offset: -2px;
                }
                button:focus:not(:focus-visible) {
                    outline: none;
                }
                button:hover,
                button:active {
                    cursor: pointer;
                    background-color: ${colors.grey200};
                }
            `}</style>
        </>
    )
}

BackButton.propTypes = {
    handleClearSearch: PropTypes.func,
    setView: PropTypes.func,
}
