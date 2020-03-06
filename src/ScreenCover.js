import React from 'react'
import propTypes from '@dhis2/prop-types'

import { Backdrop } from './Backdrop.js'
import { insideAlignmentPropType } from './common-prop-types.js'
import { layers, spacers } from './theme.js'

const Content = ({ children, position }) => (
    <div className={position}>
        {children}
        <style jsx>{`
            div {
                position: absolute;
                left: 50%;
                width: auto;
                height: auto;
            }

            .top {
                top: ${spacers.dp64};
            }

            .middle {
                top: 50%;
                transform: translate(-50%, -50%);
            }

            .bottom {
                top: auto;
                bottom: ${spacers.dp64};
            }
        `}</style>
    </div>
)

Content.propTypes = {
    children: propTypes.node,
    position: insideAlignmentPropType,
}

/**
 * @module
 *
 * @param {ScreenCover.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { ScreenCover } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/principles/spacing-alignment.md#stacking|Design system}
 * @see Live demo: {@link /demo/?path=/story/screencover--default|Storybook}
 */
const ScreenCover = ({ children, onClick, className, dataTest, position }) => {
    return (
        <Backdrop
            onClick={onClick}
            zIndex={layers.blocking}
            className={className}
            dataTest={dataTest}
        >
            <Content position={position}>{children}</Content>
        </Backdrop>
    )
}

ScreenCover.defaultProps = {
    dataTest: 'dhis2-uicore-screencover',
    position: 'middle',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {function} [onClick]
 * @prop {string} [className]
 * @prop {Node} [children]
 * @prop {string} [dataTest]
 */
ScreenCover.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    position: insideAlignmentPropType,
    onClick: propTypes.func,
}

export { ScreenCover }
