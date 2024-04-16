import React from 'react'
import { Box } from './box.js'

export default { title: 'Box' }
export const Withchildren = () => <Box>I am a child</Box>
export const Multiple = () => (
    <Box marginTop="16px" maxWidth="400px">
        I am a child in a Box.
    </Box>
)
