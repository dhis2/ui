import { colors, theme, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Content } from './Content.js'
import { Icon } from './Icon.js'
import { Remove } from './Remove.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {Chip.PropTypes} props
 * @returns {React.Component}
 * @example import { Chip } from @dhis2/ui-core
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/atoms/chip.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/chip--default|Storybook}
 */
const Chip = ({
    selected,
    dense,
    disabled,
    dragging,
    overflow,
    className,
    children,
    onRemove,
    onClick,
    icon,
    dataTest,
}) => (
    <span
        onClick={e => {
            if (!disabled && onClick) {
                onClick({}, e)
            }
        }}
        className={cx(className, {
            selected,
            dense,
            disabled,
            dragging,
        })}
        data-test={dataTest}
    >
        <Icon icon={icon} dataTest={`${dataTest}-icon`} />
        <Content overflow={overflow}>{children}</Content>
        <Remove onRemove={onRemove} dataTest={`${dataTest}-remove`} />

        <style jsx>{`
            span {
                display: inline-flex;
                align-items: center;
                height: 32px;
                margin: ${spacers.dp4};
                border-radius: 16px;
                background-color: ${colors.grey200};
                font-size: 14px;
                line-height: 16px;
                cursor: pointer;
                user-select: none;
                color: ${colors.grey900};
            }

            .dense {
                height: 24px;
                font-size: 13px;
                line-height: 15px;
            }

            span:hover {
                background-color: ${colors.grey300};
            }

            .selected {
                background-color: ${theme.secondary600};
                font-weight: 500;
            }

            .selected:hover {
                background-color: #00695c;
            }

            .selected,
            .selected .icon,
            .selected .remove-icon {
                color: ${colors.white};
            }

            .disabled {
                cursor: not-allowed;
                opacity: 0.3;
            }

            .disabled .remove-icon {
                pointer-events: none;
            }

            .dragging {
                box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                    0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12);
            }
        `}</style>
    </span>
)

Chip.defaultProps = {
    dataTest: 'dhis2-uicore-chip',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [children]
 * @prop {string} [className]
 * @prop {Element} [icon]
 * @prop {function} [onClick]
 * @prop {function} [onRemove]
 * @prop {boolean} [selected]
 * @prop {boolean} [dense]
 * @prop {boolean} [disabled]
 * @prop {boolean} [dragging]
 * @prop {boolean} [overflow]
 * @prop {string} [dataTest]
 */
Chip.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    dense: PropTypes.bool,
    disabled: PropTypes.bool,
    dragging: PropTypes.bool,
    icon: PropTypes.element,
    overflow: PropTypes.bool,
    selected: PropTypes.bool,
    onClick: PropTypes.func,
    onRemove: PropTypes.func,
}

export { Chip }
export default Chip
