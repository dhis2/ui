import React from 'react'
import { Tab } from '../tab/index.js'
import { TabBar } from './index.js'

export default { title: 'TabBar' }
export const WithChildren = () => <TabBar>I am a child</TabBar>
export const ScrollableWithChildren = () => (
    <TabBar scrollable>I am a child</TabBar>
)
export const ScrollableWithSomeTabs = () => {
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
}
