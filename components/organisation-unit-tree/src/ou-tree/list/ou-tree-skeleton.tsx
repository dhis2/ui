import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

export interface OuTreeSkeletonProps {
    error?: boolean
    dataTest?: string
}

export const OuTreeSkeleton = ({ error, dataTest }: OuTreeSkeletonProps) => (
    <span className={cx('skeleton', { error })} data-test={dataTest}>
        <style jsx>{`
            .skeleton {
                display: block;
                width: 120px;
                height: 14px;
                margin: 5px 0;
                border-radius: 3px;
                flex-shrink: 0;
                background: linear-gradient(
                    90deg,
                    ${colors.grey200} 25%,
                    ${colors.grey100} 50%,
                    ${colors.grey200} 75%
                );
                background-size: 200% 100%;
                animation: shimmer 1.5s linear infinite;
            }
            .error {
                animation: none;
                background: ${colors.red100};
                border: 1px solid ${colors.red300};
                box-sizing: border-box;
            }
            @keyframes shimmer {
                from {
                    background-position: 200% 0;
                }
                to {
                    background-position: -200% 0;
                }
            }
        `}</style>
    </span>
)
