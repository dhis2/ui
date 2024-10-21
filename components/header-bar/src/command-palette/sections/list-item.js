import { colors, spacers } from '@dhis2/ui-constants'
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
}) {
    const showDescription = type === 'commands'
    return (
        <a
            href={path ? path : undefined}
            onClick={onClickHandler}
            className="item"
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
                .item:hover, .item:focus {
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
                    width: 100%;
                    align-items: baseline;
                    gap: 4px;
                }
                .text-content {
                    flex-direction: column;
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
    description: PropTypes.string,
    icon: PropTypes.node,
    image: PropTypes.string,
    path: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    onClickHandler: PropTypes.func,
}

export default ListItem
