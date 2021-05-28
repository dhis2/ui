import { Divider } from '@dhis2-ui/divider'
import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * @module
 * @param {MenuDivider.PropTypes}
 * @returns {React.Component}
 *
 * @example import { MenuDivider } from '@dhis2/ui
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/menu.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/components-core-menudivider--default|Storybook}
 */
const MenuDivider = ({ className, dataTest, dense }) => (
    <li className={className} data-test={dataTest}>
        <Divider dense={dense} />

        <style jsx>{`
            li {
                list-style: none;
                background-color: ${colors.white};
                user-select: none;
                padding: 0;
                line-height: 0;
            }
        `}</style>
    </li>
)

MenuDivider.defaultProps = {
    dataTest: 'dhis2-uicore-menudivider',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [className]
 * @prop {string} [dataTest='dhis2-uicore-menudivider']
 * @prop {boolean} [dense]
 */
MenuDivider.propTypes = {
    className: PropTypes.string,
    dataTest: PropTypes.string,
    dense: PropTypes.bool,
}

export { MenuDivider }
