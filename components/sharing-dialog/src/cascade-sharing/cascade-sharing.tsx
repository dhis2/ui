import React from 'react'
import i18n from '../locales/index.js'
import { Title } from '../text/index.ts'
import { Controls } from './controls.tsx'
import { StaticInfo } from './static-info.tsx'

export interface CascadeSharingProps {
    id: string
    entityAmount: number
}

export const CascadeSharing = ({ id, entityAmount }: CascadeSharingProps) => {
    return (
        <>
            <Title>
                {i18n.t('Apply dashboard sharing settings to visualizations')}
            </Title>
            <StaticInfo />
            <Controls id={id} entityAmount={entityAmount} />
        </>
    )
}
