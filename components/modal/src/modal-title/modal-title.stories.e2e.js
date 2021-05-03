import { storiesOf } from '@storybook/react'
import React from 'react'
import { ModalTitle } from './modal-title.js'

storiesOf('ModalTitle', module).add('With children', () => (
    <ModalTitle>I am a child</ModalTitle>
))
