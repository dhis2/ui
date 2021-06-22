import { storiesOf } from '@storybook/react'
import React from 'react'
import { ModalActions } from './modal-actions.js'

storiesOf('ModalActions', module).add('With children', () => (
    <ModalActions>I am a child</ModalActions>
))
