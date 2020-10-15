import { storiesOf } from '@storybook/react'
import React from 'react'
import { ModalContent } from './ModalContent.js'

storiesOf('ModalContent', module).add('With children', () => (
    <ModalContent>I am a child</ModalContent>
))
