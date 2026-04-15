import React from 'react'
import { AlertBar } from '../alert-bar/index.ts'
import { AlertStack } from './alert-stack.tsx'

export default { title: 'AlertStack' }

export const Default = () => (
    <AlertStack>
        <AlertBar permanent>Message</AlertBar>
        <AlertBar permanent>Message</AlertBar>
        <AlertBar permanent>Message</AlertBar>
    </AlertStack>
)
