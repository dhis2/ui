import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { TagIcon } from './TagIcon.js'
import { TagText } from './TagText.js'
import { colors } from '@dhis2/ui-constants'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {Tag.PropTypes} props
 * @returns {React.Component}
 * @example import { Tag } from @dhis2/ui-core
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/tag.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/tag--default|Storybook}
 */
export const Tag = ({
    neutral,
    negative,
    positive,
    icon,
    bold,
    className,
    dataTest,
    children,
}) => (
    <div
        data-test={dataTest}
        className={cx(className, {
            neutral,
            positive,
            negative,
            bold,
        })}
    >
        {icon && <TagIcon dataTest={`${dataTest}-icon`}>{icon}</TagIcon>}
        <TagText dataTest={`${dataTest}-text`}>{children}</TagText>
        <style jsx>
            {`
                div {
                    padding: 5px 6px 3px;
                    border-radius: 3px;
                    background-color: ${colors.grey300};
                    fill: ${colors.grey700};
                    color: ${colors.grey900};
                    max-width: 240px;
                    display: inline-flex;
                    font-size: 13px;
                    line-height: 12px;
                    height: 23px;
                }
                .negative {
                    background-color: ${colors.red100};
                    fill: ${colors.red800};
                    color: ${colors.red900};
                }

                .neutral {
                    background-color: ${colors.blue100};
                    fill: ${colors.blue800};
                    color: ${colors.blue900};
                }

                .positive {
                    background-color: ${colors.green100};
                    fill: ${colors.green800};
                    color: ${colors.green900};
                }

                .bold {
                    font-weight: 700;
                    background-color: ${colors.grey700};
                    color: ${colors.white};
                    fill: ${colors.white};
                }

                .bold.neutral {
                    background-color: ${colors.blue800};
                    color: ${colors.blue050};
                    fill: ${colors.white};
                }

                .bold.positive {
                    background-color: ${colors.green700};
                    color: ${colors.green050};
                    fill: ${colors.white};
                }

                .bold.negative {
                    background-color: ${colors.red700};
                    color: ${colors.red050};
                    fill: ${colors.white};
                }
            `}
        </style>
    </div>
)

const tagVariantPropType = propTypes.mutuallyExclusive(
    ['neutral', 'positive', 'negative'],
    propTypes.bool
)

Tag.defaultProps = {
    dataTest: 'dhis2-uicore-tag',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {boolean} [bold]
 * @prop {Node} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest]
 * @prop {Node} [icon]
 * @prop {boolean} [neutral] - `neutral`, `positive`, and
 * `negative` are mutually exclusive boolean props
 * @prop {boolean} [positive]
 * @prop {boolean} [negative]
 */

Tag.propTypes = {
    bold: propTypes.bool,
    children: propTypes.string,
    className: propTypes.string,
    dataTest: propTypes.string,
    icon: propTypes.node,
    negative: tagVariantPropType,
    neutral: tagVariantPropType,
    positive: tagVariantPropType,
}
