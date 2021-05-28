import { storiesOf } from '@storybook/react'
import React from 'react'
import { Help } from './help.js'

storiesOf('Help', module).add('With children', () => <Help>I am a child</Help>)
