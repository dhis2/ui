import { spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../../locales/index.js'
import AppItem from '../sections/app-item.js'
import Heading from '../sections/heading.js'
import ListItem from '../sections/list-item.js'

const HomeView = ({ grid, gridColumnCount, gridRowCount, currentItem }) => {
    return (
        <>
            {gridRowCount > 0 && (
                <>
                    <Heading heading={i18n.t('Top apps')} />
                    <div
                        data-test="headerbar-top-apps-list"
                        className="headerbar-top-apps"
                    >
                        {grid.slice(0, gridRowCount).map((arr) => {
                            return arr.map((item, idx) => {
                                const {
                                    displayName,
                                    name,
                                    defaultAction,
                                    icon,
                                } = item
                                return (
                                    <AppItem
                                        key={`app-${name}-${idx}`}
                                        name={displayName || name}
                                        path={defaultAction}
                                        img={icon}
                                        highlighted={item === currentItem}
                                    />
                                )
                            })
                        })}
                        <style jsx>{`
                            .headerbar-top-apps {
                                display: grid;
                                grid-template-columns: repeat(
                                    ${gridColumnCount},
                                    1fr
                                );
                                padding: 0 ${spacers.dp4};
                            }
                        `}</style>
                    </div>
                </>
            )}

            {/* actions menu */}
            <Heading heading={i18n.t('Actions')} />
            <div
                role="menu"
                className="actions-menu"
                data-test="headerbar-actions-menu"
            >
                {grid.slice(gridRowCount).map((actions) => {
                    return actions.map((item, index) => {
                        const {
                            dataTest,
                            icon,
                            title,
                            name,
                            type,
                            href,
                            action,
                        } = item

                        return (
                            <ListItem
                                key={`action-${type}-${index}`}
                                title={title || name}
                                icon={icon}
                                dataTest={dataTest}
                                href={href}
                                onClickHandler={action}
                                highlighted={item === currentItem}
                            />
                        )
                    })
                })}
            </div>
        </>
    )
}

HomeView.propTypes = {
    currentItem: PropTypes.object,
    grid: PropTypes.array,
    gridColumnCount: PropTypes.number,
    gridRowCount: PropTypes.number,
}

export default HomeView
