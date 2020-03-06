import React from 'react'
import { storiesOf } from '@storybook/react'
import { ButtonStrip, Button } from '../index.js'

storiesOf('ButtonStrip', module).add('With children', () => (
    <ButtonStrip>
        <Button>I am a child</Button>
        <Button>I am a child</Button>
        <Button>I am a child</Button>
    </ButtonStrip>
))
