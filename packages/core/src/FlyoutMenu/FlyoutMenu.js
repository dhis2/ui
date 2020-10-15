import propTypes from '@dhis2/prop-types'
import { spacers } from '@dhis2/ui-constants'
import React, { Children, cloneElement, isValidElement, useState } from 'react'
import { resolve } from 'styled-jsx/css'
import { Card } from '../Card/Card.js'
import { Menu } from '../Menu/Menu.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {FlyoutMenu.PropTypes}
 * @returns {React.Component}
 *
 * @example import { FlyoutMenu } from '@dhis2/ui'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/menu.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/components-core-menu--default|Storybook}
 */
const FlyoutMenu = ({
    children,
    className,
    dataTest,
    dense,
    maxHeight,
    maxWidth,
}) => {
    const [openedSubMenu, setOpenedSubMenu] = useState(null)
    const toggleSubMenu = index => {
        const toggleValue = index === openedSubMenu ? null : index
        setOpenedSubMenu(toggleValue)
    }

    const cardCSS = resolve`
        padding: ${spacers.dp4} 0;
        max-height: ${maxHeight};
        overflow-y: auto;
    `

    return (
        <div className={className} data-test={dataTest}>
            <Card className={cardCSS.className}>
                <Menu dense={dense}>
                    {Children.map(children, (child, index) =>
                        isValidElement(child)
                            ? cloneElement(child, {
                                  showSubMenu: openedSubMenu === index,
                                  toggleSubMenu: toggleSubMenu.bind(
                                      this,
                                      index
                                  ),
                              })
                            : child
                    )}
                </Menu>
            </Card>

            <style jsx>{`
                div {
                    display: inline-block;
                    min-width: ${dense ? '128' : '180'}px;
                    max-width: ${maxWidth};
                    max-height: ${maxHeight};
                }
            `}</style>
            {cardCSS.styles}
        </div>
    )
}

FlyoutMenu.defaultProps = {
    dataTest: 'dhis2-uicore-menu',
    maxWidth: '380px',
    maxHeight: 'auto',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {Element} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest='dhis2-uicore-menu']
 * @prop {boolean} [dense]
 * @prop {string} [maxWidth='380px']
 * @prop {string} [maxHeight='auto']
 */
FlyoutMenu.propTypes = {
    children: Menu.propTypes.children,
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    maxHeight: propTypes.string,
    maxWidth: propTypes.string,
}

export { FlyoutMenu }
