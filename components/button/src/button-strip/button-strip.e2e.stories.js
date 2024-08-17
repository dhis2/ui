import React from 'react'
import { Button } from '../index.js'
import { ButtonStrip } from './index.js'

export default { title: 'ButtonStrip' }

export const WithChildren = () => (
    <ButtonStrip>
        <Button>I am a child</Button>
        <Button>I am a child</Button>
        <Button>I am a child</Button>
    </ButtonStrip>
)
