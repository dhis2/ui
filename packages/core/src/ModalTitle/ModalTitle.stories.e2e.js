import { storiesOf } from '@storybook/react'
import React from 'react'
import { ModalTitle } from './ModalTitle.js'

storiesOf('ModalTitle', module).add('With children', () => (
    <ModalTitle>I am a child</ModalTitle>
))
