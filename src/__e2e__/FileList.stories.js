import React from 'react'
import { storiesOf } from '@storybook/react'
import { FileList } from '../index.js'

storiesOf('FileList', module).add('With children', () => (
    <FileList>I am a child</FileList>
))
