import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from './Box.js'

storiesOf('Box', module)
    .add('With children', () => <Box>I am a child</Box>)
    .add('Multiple', () => (
        <Box marginTop="16px" maxWidth="400px">
            I am a child in a Box.
        </Box>
    ))
