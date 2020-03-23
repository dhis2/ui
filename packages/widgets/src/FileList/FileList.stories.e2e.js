import React from 'react'
import { storiesOf } from '@storybook/react'
import { FileList } from './FileList.js'

storiesOf('FileList', module).add('With children', () => (
    <FileList>I am a child</FileList>
))
