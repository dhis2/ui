import React from 'react'

import ButtonBase from './ButtonBase.js'

export default {
    title: 'Components/Base/ButtonBase',
    component: ButtonBase,
}

export const Default = () => <ButtonBase>Default button</ButtonBase>
export const Primary = () => <ButtonBase primary>Default button</ButtonBase>
export const Secondary = () => <ButtonBase secondary>Default button</ButtonBase>
export const Destructive = () => (
    <ButtonBase destructive>Default button</ButtonBase>
)
export const Small = () => <ButtonBase small>Default button</ButtonBase>
export const Large = () => <ButtonBase large>Default button</ButtonBase>
export const Disabled = () => <ButtonBase disabled>Default button</ButtonBase>
