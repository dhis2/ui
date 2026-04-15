import { colors, theme } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'
import { Content } from './content.tsx'
import { Icon } from './icon.tsx'
import { Remove } from './remove.tsx'

const DEFAULT_INLINE_MARGIN = '4'

export interface ChipProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    dense?: boolean
    disabled?: boolean
    dragging?: boolean
    icon?: React.ReactElement
    /** `margin-bottom` value, applied in `px` */
    marginBottom?: number
    /** `margin-inline-end` value, applied in `px` */
    marginInlineEnd?: number
    /** `margin-inline-start` value, applied in `px` */
    marginInlineStart?: number
    /** `margin-inline-start` value, applied in `px` */
    marginLeft?: number
    /** `margin-inline-end` value, applied in `px` */
    marginRight?: number
    /** `margin-top` value, applied in `px` */
    marginTop?: number
    overflow?: boolean
    selected?: boolean
    onClick?: (
        payload: Record<string, never>,
        event: React.MouseEvent<HTMLSpanElement>
    ) => void
    onRemove?: (
        payload: Record<string, never>,
        event: React.MouseEvent<HTMLSpanElement>
    ) => void
}

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
    dataTest = 'dhis2-uicore-chip',
    marginBottom = 4,
    marginLeft,
    marginRight,
    marginTop = 4,
    marginInlineStart,
    marginInlineEnd,
}: ChipProps) => (
    <span
        onClick={(e) => {
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
        <style jsx>{`
            span {
                ${marginBottom && `margin-bottom: ${marginBottom}px;`}
                margin-inline-start: ${marginInlineStart ??
                marginLeft ??
                DEFAULT_INLINE_MARGIN}px;
                margin-inline-end: ${marginInlineEnd ??
                marginRight ??
                DEFAULT_INLINE_MARGIN}px;
                ${marginTop && `margin-top: ${marginTop}px`}
            }
        `}</style>
    </span>
)

export { Chip }
