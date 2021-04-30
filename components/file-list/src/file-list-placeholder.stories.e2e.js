import { storiesOf } from '@storybook/react'
import React from 'react'
import { FileListPlaceholder } from './file-list-placeholder.js'

storiesOf('FileListPlaceholder', module).add('With children', () => (
    <FileListPlaceholder>I am a child</FileListPlaceholder>
))
