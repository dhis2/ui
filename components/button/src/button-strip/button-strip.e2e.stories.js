import React from 'react'
import { Button } from '../index.ts'
import { ButtonStrip } from './index.ts'

export default { title: 'ButtonStrip' }

export const WithChildren = () => (
    <ButtonStrip>
        <Button>I am a child</Button>
        <Button>I am a child</Button>
        <Button>I am a child</Button>
    </ButtonStrip>
)
