import { storiesOf } from '@storybook/react'
import React from 'react'
import { Button } from '../index.js'
import { ButtonStrip } from './index.js'

storiesOf('ButtonStrip', module).add('With children', () => (
    <ButtonStrip>
        <Button>I am a child</Button>
        <Button>I am a child</Button>
        <Button>I am a child</Button>
    </ButtonStrip>
))
