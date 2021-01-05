import { storiesOf } from '@storybook/react'
import React from 'react'
import { NoticeBox } from './NoticeBox.js'

storiesOf('NoticeBox', module)
    .add('With children', () => <NoticeBox>The noticebox content</NoticeBox>)
    .add('With title', () => <NoticeBox title="The noticebox title" />)
