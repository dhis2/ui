import React from 'react'
import { storiesOf } from '@storybook/react'
import { Help } from './Help.js'

storiesOf('Help', module).add('With children', () => <Help>I am a child</Help>)
