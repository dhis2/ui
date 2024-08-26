import { mutuallyExclusive } from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { TagIcon } from './tag-icon.js'
import { TagText } from './tag-text.js'

export const Tag = ({
    maxWidth,
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
                    padding: 5px 6px;
                    border-radius: 3px;
                    background-color: ${colors.grey300};
                    fill: ${colors.grey700};
                    color: ${colors.grey900};
                    max-width: ${maxWidth};
                    display: inline-flex;
                    align-items: center;
                    font-size: 13px;
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

const tagVariantPropType = mutuallyExclusive(
    ['neutral', 'positive', 'negative'],
    PropTypes.bool
)

Tag.defaultProps = {
    dataTest: 'dhis2-uicore-tag',
    maxWidth: '240px',
}

Tag.propTypes = {
    /** Use bold tags where it is important that the tag is seen by the user in an information dense interface. Bold tags should be reserved for edge cases and not overused. */
    bold: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Tags can contain icons. Use icons where they will help users easily identify the content of the tag. Tags must have a text label and cannot display only an icon. */
    icon: PropTypes.node,
    maxWidth: PropTypes.string,
    /** Red 'negative' tags imply an error or a problem. `neutral`, `positive`, and `negative` are mutually exclusive props */
    negative: tagVariantPropType,
    /** Blue 'neutral' tags are used when a tag _could_ have valid or error status but is currently neutral. `neutral`, `positive`, and `negative` are mutually exclusive props */
    neutral: tagVariantPropType,
    /** Green 'valid' tags should be used to indicate validity or success. `neutral`, `positive`, and `negative` are mutually exclusive props */
    positive: tagVariantPropType,
}
