import { Card } from '@dhis2/ui-card'
import { spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { Children, cloneElement, isValidElement, useState } from 'react'
import { resolve } from 'styled-jsx/css'
import { Menu } from '@dhis2/ui-menu'
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
    /** Typically, but not limited to, `MenuItem` components */
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Menu uses smaller dimensions */
    dense: PropTypes.bool,
    maxHeight: PropTypes.string,
    maxWidth: PropTypes.string,
}

export { FlyoutMenu }
