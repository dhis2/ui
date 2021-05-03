import { storiesOf } from '@storybook/react'
import React from 'react'
import { TabBar } from './tab-bar.js'

storiesOf('TabBar', module)
    .add('With children', () => <TabBar>I am a child</TabBar>)
    .add('Scrollable with children', () => (
        <TabBar scrollable>I am a child</TabBar>
    ))
