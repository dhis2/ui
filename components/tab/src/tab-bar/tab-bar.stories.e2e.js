import { storiesOf } from '@storybook/react'
import React from 'react'
import { Tab } from '../tab/index.js'
import { TabBar } from './index.js'

storiesOf('TabBar', module)
    .add('With children', () => <TabBar>I am a child</TabBar>)
    .add('Scrollable with children', () => (
        <TabBar scrollable>I am a child</TabBar>
    ))
    .add('Scrollable with some tabs', () => {
        const TabStaticWidth = () => (
            <Tab>
                <div
                    style={{
                        width: 100,
                        border: '1px solid black',
                    }}
                >
                    Foo
                </div>
            </Tab>
        )

        return (
            <TabBar scrollable>
                <TabStaticWidth />
                <TabStaticWidth />
                <TabStaticWidth />
            </TabBar>
        )
    })
