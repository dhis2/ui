import { colors } from '@dhis2/ui-constants'
import React from 'react'

export interface OuTreeSkeletonProps {
    dataTest?: string
}

export const OuTreeSkeleton = ({ dataTest }: OuTreeSkeletonProps) => (
    <span className="skeleton" data-test={dataTest}>
        <style jsx>{`
            .skeleton {
                display: block;
                width: 120px;
                height: 20px;
                margin: 2px 0;
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
