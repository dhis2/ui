import { colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

function ListItem({
    title,
    path,
    icon,
    image,
    description,
    type,
    onClickHandler,
    highlighted,
    dataTest = 'headerbar-list-item',
}) {
    const showDescription = type === 'commands'
    return (
        <a
            href={path ? path : undefined}
            onClick={onClickHandler}
            className={cx('item', { highlighted })}
            data-test={dataTest}
            tabIndex={-1}
        >
            <div className="icon">
                {icon && <span className="icon-content">{icon}</span>}
                {image && (
                    <img className="icon-content" src={image} alt="img" />
                )}
            </div>
            <div className="text-content">
                <span className="title">{title}</span>
                {showDescription && (
                    <span className="description">{description}</span>
                )}
            </div>
            <style>
                {`
                .item {
                    display: flex;
                    align-items: center;
                    padding: ${spacers.dp8};
                    margin: 0 ${spacers.dp4};
                    background: ${colors.white};
                    border-left: 4px solid transparent;
                    border-radius: 1px;
                    text-decoration: none;
                    color: ${colors.grey900};
                    transition: all 0.1s ease;
                }
                .item:last-of-type {
                    margin-bottom: ${spacers.dp4};
                }
                .item:hover, .highlighted {
                    background: ${colors.grey200};
                    cursor: pointer;
                    outline: none;
                }
                .item:active {
                    background: ${colors.grey300};
                }
                .icon {
                    width: 20px;
                    height: 20px;
                    position: relative;
                    margin-right: ${spacers.dp8};
                }
                .icon-content {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .text-content {
                    display: flex;
                    flex-direction: column;
                    align-items: baseline;
                    width: 100%;
                    gap: ${spacers.dp8};
                    padding-top: 2px;
                }
                .description {
                    font-size: 14px;
                    color: ${colors.grey600};
                }
                .title {
                    font-size: 14px;
                    margin-right: ${spacers.dp4};
                }
            `}
            </style>
        </a>
    )
}

ListItem.propTypes = {
    dataTest: PropTypes.string,
    description: PropTypes.string,
    highlighted: PropTypes.bool,
    icon: PropTypes.node,
    image: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    onClickHandler: PropTypes.func,
}

export default ListItem
