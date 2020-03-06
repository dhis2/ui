import React from 'react'
import { storiesOf } from '@storybook/react'
import { ModalActions } from '../index.js'

storiesOf('ModalActions', module).add('With children', () => (
    <ModalActions>I am a child</ModalActions>
))
