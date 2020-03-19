import React from 'react'
import { Box } from './Box.js'

export default {
    title: 'Component/Core/Box',
    component: Box,
}

export const Default = () => <Box>I am a child in a Box.</Box>

export const Height = () => <Box height="250px">I am a child in a Box.</Box>

export const MaxHeight = () => (
    <Box maxHeight="250px">
        <p style={{ height: '500px' }}>I am a tall child in a low Box.</p>
    </Box>
)

export const MinHeight = () => (
    <Box minHeight="50vh">I am a child in a Box.</Box>
)

export const Width = () => <Box width="250px">I am a child in a Box.</Box>

export const MinWidth = () => <Box minWidth="50vh">I am a child in a Box.</Box>

export const MaxWidth = () => <Box maxWidth="50vh">I am a child in a Box.</Box>

export const Overflow = () => (
    <Box maxHeight="250px" overflow="scroll">
        <p style={{ height: '500px' }}>
            I am a tall child in a low Box, and my parent clips me
        </p>
    </Box>
)
