import React from 'react'
import { NativeButton } from './native-button.js'

export default {
    title: 'Native Button',
    component: NativeButton,
}

const Template = (args) => <NativeButton {...args} />

export const Basic = Template.bind({})
Basic.args = {
    name: 'Basic button',
    children: 'Label me!',
}
