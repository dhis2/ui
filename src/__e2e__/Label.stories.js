import React from 'react'
import { storiesOf } from '@storybook/react'
import { Label } from '../index.js'

storiesOf('Label', module)
    .add('With children', () => <Label>I am a child</Label>)
    .add('With required', () => <Label required>Content</Label>)
