import React from 'react'
import { AlertBar } from '../alert-bar/index.js'
import { AlertStack } from './alert-stack.js'

export default { title: 'AlertStack' }

export const Default = () => (
    <AlertStack>
        <AlertBar permanent>Message</AlertBar>
        <AlertBar permanent>Message</AlertBar>
        <AlertBar permanent>Message</AlertBar>
    </AlertStack>
)
