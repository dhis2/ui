import { spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import React, { Children } from 'react'

export interface ButtonStripProps {
    /** Content to render inside the button strip */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /** Horizontal alignment for buttons. Mutually exclusive with `middle` prop */
    end?: boolean
    /** Horizontal alignment. Mutually exclusive with `end` prop */
    middle?: boolean
}

const ButtonStrip = ({
    className,
    children,
    middle,
    end,
    dataTest = 'dhis2-uicore-buttonstrip',
}: ButtonStripProps) => (
    <div
        className={cx(className, { start: !middle && !end, middle, end })}
        data-test={dataTest}
    >
        {Children.map(children, (child) => (
            <div className="box">{child}</div>
        ))}

        <style jsx>{`
            div {
                display: flex;
            }

            div.middle {
                justify-content: center;
            }

            div.end {
                justify-content: flex-end;
            }

            .box {
                margin-inline-start: ${spacers.dp8};
            }

            .box:first-child {
                margin-inline-start: 0;
            }
        `}</style>
    </div>
)

export { ButtonStrip }
