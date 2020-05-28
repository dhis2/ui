import React from 'react'
import { layers } from '@dhis2/ui-constants'

import { LinearLoader } from './LinearLoader.js'
import { Layer, CenteredContent, ComponentCover } from '../index.js'

export default {
    title: 'Components/Core/LinearLoader',
    component: LinearLoader,
}

export const Determinate = () => <LinearLoader amount={60} />

export const OverlayPage = () => (
    <Layer level={layers.blocking} translucent>
        <CenteredContent>
            <LinearLoader amount={30} />
        </CenteredContent>
    </Layer>
)

export const OverlayComponent = () => (
    <div style={{ width: '400px', height: '400px' }}>
        <ComponentCover translucent>
            <CenteredContent>
                <LinearLoader amount={80} />
            </CenteredContent>
        </ComponentCover>
    </div>
)
