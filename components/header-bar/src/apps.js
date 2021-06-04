import { Card } from '@dhis2-ui/card'
import { InputField } from '@dhis2-ui/input'
import { useConfig } from '@dhis2/app-runtime'
import propTypes from '@dhis2/prop-types'
import { colors, theme } from '@dhis2/ui-constants'
import React, { useState, useEffect, useCallback, useRef } from 'react'
import css from 'styled-jsx/css'
import { joinPath } from './join-path.js'
import i18n from './locales/index.js'

// TODO: ui-icons
function AppsIcon({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M8 16h8V8H8v8zm12 24h8v-8h-8v8zM8 40h8v-8H8v8zm0-12h8v-8H8v8zm12 0h8v-8h-8v8zM32 8v8h8V8h-8zm-12 8h8V8h-8v8zm12 12h8v-8h-8v8zm0 12h8v-8h-8v8z" />
            <path d="M0 0h48v48H0z" fill="none" />
        </svg>
    )
}
AppsIcon.propTypes = {
    className: propTypes.string,
}
function Settings({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M0 0h48v48H0z" fill="none" />
            <path d="M38.86 25.95c.08-.64.14-1.29.14-1.95s-.06-1.31-.14-1.95l4.23-3.31c.38-.3.49-.84.24-1.28l-4-6.93c-.25-.43-.77-.61-1.22-.43l-4.98 2.01c-1.03-.79-2.16-1.46-3.38-1.97L29 4.84c-.09-.47-.5-.84-1-.84h-8c-.5 0-.91.37-.99.84l-.75 5.3c-1.22.51-2.35 1.17-3.38 1.97L9.9 10.1c-.45-.17-.97 0-1.22.43l-4 6.93c-.25.43-.14.97.24 1.28l4.22 3.31C9.06 22.69 9 23.34 9 24s.06 1.31.14 1.95l-4.22 3.31c-.38.3-.49.84-.24 1.28l4 6.93c.25.43.77.61 1.22.43l4.98-2.01c1.03.79 2.16 1.46 3.38 1.97l.75 5.3c.08.47.49.84.99.84h8c.5 0 .91-.37.99-.84l.75-5.3c1.22-.51 2.35-1.17 3.38-1.97l4.98 2.01c.45.17.97 0 1.22-.43l4-6.93c.25-.43.14-.97-.24-1.28l-4.22-3.31zM24 31c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
        </svg>
    )
}
Settings.propTypes = {
    className: propTypes.string,
}
const appIcon = css.resolve`
    svg {
        fill: ${colors.white};
        cursor: pointer;
        height: 24px;
        width: 24px;
    }
`

const settingsIcon = css.resolve`
    svg {
        margin: 8px 8px 0 16px;
        color: ${colors.grey900};
        height: 24px;
        width: 24px;
        cursor: pointer;
    }
`

/**
 * Copied from here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
 */
function escapeRegExpCharacters(text) {
    return text.replace(/[/.*+?^${}()|[\]\\]/g, '\\$&')
}

function Search({ value, onChange }) {
    const { baseUrl } = useConfig()

    return (
        <div>
            <span>
                <InputField
                    value={value}
                    name="filter"
                    placeholder={i18n.t('Search apps')}
                    onChange={onChange}
                    initialFocus
                />
            </span>

            <span>
                <a href={joinPath(baseUrl, 'dhis-web-menu-management')}>
                    <Settings className={settingsIcon.className} />
                </a>
            </span>

            {settingsIcon.styles}
            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    height: 52px;
                    margin: 8px;
                }

                span {
                    flex: 1 100%;
                }

                span:last-child {
                    flex: 1 auto;
                }
            `}</style>
        </div>
    )
}

Search.propTypes = {
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
}

function Item({ name, path, img }) {
    return (
        <a href={path}>
            <img src={img} alt="app logo" />

            <div>{name}</div>

            <style jsx>{`
                a {
                    display: inline-block;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 96px;
                    margin: 8px;
                    padding: 8px;
                    border-radius: 12px;
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
                    cursor: pointer;
                }

                div {
                    margin-top: 14px;
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

Item.propTypes = {
    img: propTypes.string,
    name: propTypes.string,
    path: propTypes.string,
}

function List({ apps, filter }) {
    return (
        <div data-test="headerbar-apps-menu-list">
            {apps
                .filter(({ displayName, name }) => {
                    const appName = displayName || name
                    const formattedAppName = appName.toLowerCase()
                    const formattedFilter = escapeRegExpCharacters(
                        filter
                    ).toLowerCase()

                    return filter.length > 0
                        ? formattedAppName.match(formattedFilter)
                        : true
                })
                .map(({ displayName, name, defaultAction, icon }, idx) => (
                    <Item
                        key={`app-${name}-${idx}`}
                        name={displayName || name}
                        path={defaultAction}
                        img={icon}
                    />
                ))}

            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-content: flex-start;
                    align-items: flex-start;
                    justify-content: flex-start;
                    width: 30vw;
                    min-width: 300px;
                    max-width: 560px;

                    min-height: 200px;
                    max-height: 465px;
                    margin: 0 8px 8px 8px;

                    overflow: auto;
                    overflow-x: hidden;
                }
            `}</style>
        </div>
    )
}
List.propTypes = {
    apps: propTypes.array,
    filter: propTypes.string,
}

const AppMenu = ({ apps, filter, onFilterChange }) => (
    <div data-test="headerbar-apps-menu">
        <Card>
            <Search value={filter} onChange={onFilterChange} />
            <List apps={apps} filter={filter} />
        </Card>

        <style jsx>{`
            div {
                z-index: 10000;
                position: absolute;
                top: 28px;
                right: -6px;
                border-top: 4px solid transparent;
            }
        `}</style>
    </div>
)

AppMenu.propTypes = {
    apps: propTypes.array.isRequired,
    onFilterChange: propTypes.func.isRequired,
    filter: propTypes.string,
}

const Apps = ({ apps }) => {
    const [show, setShow] = useState(false)
    const [filter, setFilter] = useState('')

    const handleVisibilityToggle = useCallback(() => setShow(!show), [show])
    const handleFilterChange = useCallback(({ value }) => setFilter(value), [])

    const containerEl = useRef(null)
    const onDocClick = useCallback(evt => {
        if (containerEl.current && !containerEl.current.contains(evt.target)) {
            setShow(false)
        }
    }, [])
    useEffect(() => {
        document.addEventListener('click', onDocClick)
        return () => document.removeEventListener('click', onDocClick)
    }, [])

    return (
        <div ref={containerEl} data-test="headerbar-apps">
            <button
                onClick={handleVisibilityToggle}
                data-test="headerbar-apps-icon"
            >
                <AppsIcon className={appIcon.className} />
            </button>

            {show ? (
                <AppMenu
                    apps={apps}
                    filter={filter}
                    onFilterChange={handleFilterChange}
                />
            ) : null}

            {appIcon.styles}
            <style jsx>{`
                button {
                    display: block;
                    background: transparent;
                    padding: 0;
                    border: 0;
                }
                button:focus {
                    outline: 1px dotted white;
                }

                div {
                    position: relative;
                    width: 24px;
                    height: 30px;
                    margin: 8px 0 0 0;
                }
            `}</style>
        </div>
    )
}

Apps.propTypes = {
    apps: propTypes.array.isRequired,
}

export default Apps
