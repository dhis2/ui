import React from 'react'
import { LinearLoader } from './LinearLoader.js'
import { ScreenCover, ComponentCover } from '../index.js'

export default {
    title: 'Component/Core/LinearLoader',
    component: LinearLoader,
}

export const Determinate = () => <LinearLoader amount={60} />

export const OverlayPage = () => (
    <ScreenCover>
        <LinearLoader amount={30} />
    </ScreenCover>
)

export const OverlayComponent = () => (
    <div style={{ width: '400px', height: '400px' }}>
        <ComponentCover>
            <LinearLoader amount={80} />
        </ComponentCover>
    </div>
)
