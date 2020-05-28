import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'
import { colors, spacers } from '@dhis2/ui-constants'

import { Divider } from '../Divider/Divider.js'

/**
 * @module
 * @param {MenuSectionHeader.PropTypes}
 * @returns {React.Component}
 *
 * @example import { MenuSectionHeader } from '@dhis2/ui
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/menu.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/components-core-menusectionheader--default|Storybook}
 */
const MenuSectionHeader = ({
    className,
    dataTest,
    dense,
    hideDivider,
    label,
}) => (
    <li data-test={dataTest} className={cx(className, { dense })}>
        {!hideDivider && <Divider dense={dense} />}

        <h6>{label}</h6>

        <style jsx>{`
            li {
                list-style: none;
                background-color: ${colors.white};
                user-select: none;
                padding: 0;
                line-height: 0;
            }
            h6 {
                margin: 0;
                padding: ${spacers.dp8} ${spacers.dp24} ${spacers.dp12}
                    ${spacers.dp24};
                font-size: 15px;
                line-height: 16px;
                font-weight: 500;
                color: ${colors.grey600};
            }
            li.dense h6 {
                font-size: 14px;
                line-height: 16px;
                padding: ${spacers.dp8} ${spacers.dp12} 6px ${spacers.dp12};
            }
        `}</style>
    </li>
)

MenuSectionHeader.defaultProps = {
    dataTest: 'dhis2-uicore-menusectionheader',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [className]
 * @prop {string} [dataTest='dhis2-uicore-menusectionheader']
 * @prop {boolean} [dense]
 * @prop {boolean} [hideDivider]
 * @prop {Node} [label]
 */
MenuSectionHeader.propTypes = {
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    hideDivider: propTypes.bool,
    label: propTypes.node,
}

export { MenuSectionHeader }
