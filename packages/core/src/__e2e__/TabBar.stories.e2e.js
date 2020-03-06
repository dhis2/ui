import React from 'react'

import { storiesOf } from '@storybook/react'
import { TabBar } from '../index.js'

storiesOf('TabBar', module)
    .add('With children', () => <TabBar>I am a child</TabBar>)
    .add('Scrollable with children', () => (
        <TabBar scrollable>I am a child</TabBar>
    ))
