import React from 'react'
import { storiesOf } from '@storybook/react'
import { Constrictor } from '../index.js'

storiesOf('Constrictor', module).add('With children', () => (
    <Constrictor>I am a child</Constrictor>
))
