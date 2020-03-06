import React from 'react'
import { storiesOf } from '@storybook/react'
import { TabBar, Tab } from '../index.js'
import { AttachFile } from '../icons/AttachFile'

const Wrapper = fn => (
    <div
        style={{
            maxWidth: 700,
        }}
    >
        {fn()}
        <p>Max-width of this container is 700 px</p>
    </div>
)

window.onClick = (payload, event) => {
    console.log('onClick payload', payload)
    console.log('onClick event', event)
}

const onClick = (...args) => window.onClick(...args)

storiesOf('TabBar', module)
    .addDecorator(Wrapper)
    .add('Default (fluid)', () => (
        <TabBar>
            <Tab onClick={onClick}>Tab A</Tab>
            <Tab onClick={onClick}>Tab B</Tab>
            <Tab onClick={onClick} selected>
                Tab C
            </Tab>
            <Tab onClick={onClick}>Tab D</Tab>
            <Tab onClick={onClick}>Tab E</Tab>
            <Tab onClick={onClick}>Tab F</Tab>
            <Tab onClick={onClick}>Tab G</Tab>
        </TabBar>
    ))
    .add('Fixed - tabs fill content', () => (
        <TabBar fixed>
            <Tab onClick={onClick}>Tab A</Tab>
            <Tab onClick={onClick}>Tab B</Tab>
            <Tab onClick={onClick} selected>
                Tab C
            </Tab>
            <Tab onClick={onClick}>Tab D</Tab>
            <Tab onClick={onClick}>Tab E</Tab>
            <Tab onClick={onClick}>Tab F</Tab>
            <Tab onClick={onClick}>Tab G</Tab>
        </TabBar>
    ))
    .add('Tabs with scroller', () => (
        <TabBar scrollable>
            <Tab onClick={onClick}>Tab A</Tab>
            <Tab onClick={onClick}>Tab B</Tab>
            <Tab onClick={onClick}>Tab C</Tab>
            <Tab onClick={onClick}>Tab D</Tab>
            <Tab onClick={onClick}>Tab E</Tab>
            <Tab onClick={onClick}>Tab F</Tab>
            <Tab onClick={onClick}>Tab G</Tab>
            <Tab onClick={onClick}>Tab H</Tab>
            <Tab onClick={onClick}>Tab I</Tab>
            <Tab onClick={onClick}>Tab J</Tab>
            <Tab onClick={onClick}>Tab K</Tab>
            <Tab onClick={onClick}>Tab L</Tab>
            <Tab onClick={onClick} selected>
                Tab M
            </Tab>
            <Tab onClick={onClick}>Tab N</Tab>
            <Tab onClick={onClick}>Tab O</Tab>
            <Tab onClick={onClick}>Tab P</Tab>
            <Tab onClick={onClick}>Tab Q</Tab>
            <Tab onClick={onClick}>Tab R</Tab>
        </TabBar>
    ))
    .add('Tab states', () => (
        <TabBar>
            <Tab onClick={onClick}>Default</Tab>
            <Tab onClick={onClick} selected>
                Selected
            </Tab>
            <Tab disabled>Disabled</Tab>
            <Tab onClick={onClick}>
                Text overflow - This tab has a very long text and it exceeds the
                maximum width of 320px
            </Tab>
        </TabBar>
    ))
    .add('Tab states - with icon', () => (
        <TabBar>
            <Tab onClick={onClick} icon={<AttachFile />}>
                Default
            </Tab>
            <Tab onClick={onClick} icon={<AttachFile />} selected>
                Selected
            </Tab>
            <Tab icon={<AttachFile />} disabled>
                Disabled
            </Tab>
            <Tab onClick={onClick} icon={<AttachFile />}>
                Text overflow - This tab has a very long text and it exceeds the
                maximum width of 320px
            </Tab>
        </TabBar>
    ))
