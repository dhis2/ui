import { CircularLoader } from '@dhis2-ui/loader'
import React from 'react'

export interface OuTreeLoaderProps {
    dataTest?: string
}

export const OuTreeLoader = ({ dataTest }: OuTreeLoaderProps) => (
    <div data-test={dataTest}>
        <CircularLoader extrasmall />
        <style jsx>{`
            div {
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }
        `}</style>
    </div>
)
