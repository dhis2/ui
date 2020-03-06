import React from 'react'
import propTypes from '@dhis2/prop-types'

import i18n from '@dhis2/d2-i18n'
import { Card, InputField, colors, theme } from '@dhis2/ui-core'

import { Settings } from '../icons/Settings.js'
import { Apps as AppsIcon } from '../icons/Apps.js'
import { Cancel } from '../icons/Cancel.js'

import css from 'styled-jsx/css'

const appIcon = css.resolve`
    svg {
        fill: ${colors.white};
        cursor: pointer;
        height: 24px;
        width: 24px;
    }
`

const trailIcon = css.resolve`
    svg {
        fill: ${colors.grey900};
        cursor: pointer;
        height: 24px;
        width: 24px;
        margin-right: 8px;
        margin-top: 4px;
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

function TrailIcon({ onClick }) {
    return (
        <a onClick={onClick}>
            <Cancel className={trailIcon.className} />
        </a>
    )
}
TrailIcon.propTypes = {
    onClick: propTypes.func,
}

function Search({ value, onChange, onIconClick, contextPath }) {
    return (
        <div>
            <span>
                <InputField
                    value={value}
                    name="filter"
                    placeholder={i18n.t('Search apps')}
                    onChange={onChange}
                    trailIcon={<TrailIcon onClick={onIconClick} />}
                    initialFocus
                />
            </span>

            <span>
                <a href={`${contextPath}/dhis-web-menu-management`}>
                    <Settings className={settingsIcon.className} />
                </a>
            </span>

            {trailIcon.styles}
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

Search.defaultProps = {
    onIconClick: null,
}

Search.propTypes = {
    contextPath: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    onIconClick: propTypes.func,
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
                    return filter.length > 0
                        ? appName.toLowerCase().match(filter.toLowerCase())
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

export default class Apps extends React.Component {
    state = {
        show: false,
        filter: '',
    }

    componentDidMount() {
        document.addEventListener('click', this.onDocClick)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocClick)
    }

    onDocClick = evt => {
        if (this.elContainer && !this.elContainer.contains(evt.target)) {
            this.setState({ show: false })
        }
    }

    onToggle = () => this.setState({ show: !this.state.show })

    onChange = ({ value }) => this.setState({ filter: value })

    onIconClick = () => this.setState({ filter: '' })

    AppMenu = apps => (
        <div data-test="headerbar-apps-menu">
            <Card>
                <Search
                    value={this.state.filter}
                    onChange={this.onChange}
                    onIconClick={this.onIconClick}
                    contextPath={this.props.contextPath}
                />
                <List apps={apps} filter={this.state.filter} />
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

    render() {
        const apps = this.props.apps
        return (
            <div ref={c => (this.elContainer = c)} data-test="headerbar-apps">
                <a onClick={this.onToggle} data-test="headerbar-apps-icon">
                    <AppsIcon className={appIcon.className} />
                </a>

                {this.state.show && this.AppMenu(apps)}

                {appIcon.styles}
                <style jsx>{`
                    a {
                        display: block;
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
}

Apps.propTypes = {
    apps: propTypes.array.isRequired,
    contextPath: propTypes.string.isRequired,
}
