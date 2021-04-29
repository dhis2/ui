import Button from '@dhis2/ui-button'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { ButtonStrip } from './button-strip.js'

storiesOf('ButtonStrip', module).add('With children', () => (
    <ButtonStrip>
        <Button>I am a child</Button>
        <Button>I am a child</Button>
        <Button>I am a child</Button>
    </ButtonStrip>
))
