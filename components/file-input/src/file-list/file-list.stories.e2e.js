import { storiesOf } from '@storybook/react'
import React from 'react'
import { FileList } from './file-list.js'

storiesOf('FileList', module).add('With children', () => (
    <FileList>I am a child</FileList>
))
