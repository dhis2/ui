import React from 'react'
import { Divider } from './Divider.js'

export default {
    title: 'Divider',
    component: Divider,
}

export const Default = () => <Divider />

export const Dense = () => <Divider dense />

export const Margin = () => <Divider margin="20px 20px 20px 20px" />
