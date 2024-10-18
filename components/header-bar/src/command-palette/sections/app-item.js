import { colors, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

function AppItem({ name, path, img }) {
    return (
        <a href={path}>
            <img src={img} alt="app" className="app-icon" />
            <span className="app-name">{name}</span>
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
                a:hover {
                    background: ${colors.grey200};
                    cursor: pointer;
                }
                a:active {
                    background: ${colors.grey300};
                }
                a:focus {
                    background: ${colors.grey200};
                    outline: none;
                }
                // .grid-item-highlighted {
                //     background: var(--colors-grey200);
                // }

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

export default AppItem
