import React from 'react'
import { storiesOf } from '@storybook/react'
import { ModalContent } from '../index.js'

storiesOf('ModalContent', module).add('With children', () => (
    <ModalContent>I am a child</ModalContent>
))
