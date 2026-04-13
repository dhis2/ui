import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React, { forwardRef } from 'react'

export interface TableBodyProps {
    /** Should be `<TableRow>` components */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    loading?: boolean
    role?: string
}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
    (
        {
            children,
            className,
            dataTest = 'dhis2-uicore-tablebody',
            role,
            loading,
            ...props
        },
        ref
    ) => (
        <tbody
            {...props}
            className={cx(className, {
                loading,
            })}
            data-test={dataTest}
            ref={ref}
            role={role}
        >
            {children}
            <style jsx>{`
                tbody {
                    position: relative;
                }
                .loading:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    inset-inline-start: 0;
                    inset-inline-end: 0;
                    background-color: rgba(255, 255, 255, 0.8);
                }
                .loading:after {
                    content: '';
                    position: absolute;
                    top: calc(50% - 24px);
                    inset-inline-start: calc(50% - 24px);
                    width: 48px;
                    height: 48px;
                    border: 6px solid rgba(110, 122, 138, 0.15);
                    border-bottom-color: ${colors.blue600};
                    border-radius: 50%;
                    animation: rotation 1s linear infinite;
                }
                @keyframes rotation {
                    0% {
                        transform: rotate(0);
                    }

                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </tbody>
    )
)
TableBody.displayName = 'TableBody'
