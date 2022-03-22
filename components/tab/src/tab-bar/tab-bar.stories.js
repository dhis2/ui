import PropTypes from 'prop-types'
import React from 'react'
import { Tab } from '../tab/index.js'
import { TabBar } from './index.js'

function AttachFile({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M33 12v23c0 4.42-3.58 8-8 8s-8-3.58-8-8V10c0-2.76 2.24-5 5-5s5 2.24 5 5v21c0 1.1-.89 2-2 2-1.11 0-2-.9-2-2V12h-3v19c0 2.76 2.24 5 5 5s5-2.24 5-5V10c0-4.42-3.58-8-8-8s-8 3.58-8 8v25c0 6.08 4.93 11 11 11s11-4.92 11-11V12h-3z" />
            <style jsx>{`
                svg {
                    fill: inherit;
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                }
            `}</style>
        </svg>
    )
}

AttachFile.propTypes = {
    className: PropTypes.string,
}

const subtitle = 'Ssed to divide content into categories and/or sections'

const description = `
Use tabs to split related content into separate sections.

- Each tab should contain content that relates to one another, but the content should not overlap.
- Tabs are especially useful for splitting up content that may be relevant to different user groups, instead of displaying overwhelming amounts of information on a single page.
- Do not use tabs to compare content.
- Do not use tabs for sequential content that needs to be done in order.
- Do not use tabs for content that needs to be viewed at the same time.
- The number of tabs is less important than splitting content into understandable, predictable groups. Do not group together unrelated content in order to reduce tab count. Users struggle more with unpredictable tabs than too many tabs.

#### Naming

Give tabs short, understandable names. Try to find a word or very short phrase that summarizes the content. If you cannot find a suitable word this may mean you are trying to fit too much content under a single tab. The content of a tab should be obvious from its name.

For example: Do use "Legends" instead of "Set up legends", Do use "Data analysis" instead of "Options for analysis of data",

Do not repeat a term across tabs. If tabs are used inside a 'Options' modal, it is enough to use tab names "Data", "Legend", "Style". Do not repeat 'options' for all, e.g. "Data options", "Legend options" etc.

\`\`\`js
import { TabBar, Tab } from '@dhis2/ui'
\`\`\`
`

const Wrapper = (fn) => (
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

export default {
    title: 'Tab Bar',
    component: TabBar,
    subcomponents: { Tab },
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
    decorators: [Wrapper],
}

export const DefaultFluid = (args) => (
    <TabBar {...args}>
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
)
DefaultFluid.storyName = 'Default (fluid)'

export const FixedTabsFillContent = (args) => (
    <TabBar {...args}>
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
)
FixedTabsFillContent.args = { fixed: true }
FixedTabsFillContent.storyName = 'Fixed - tabs fill content'

export const TabsWithScroller = (args) => (
    <TabBar {...args}>
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
)
TabsWithScroller.args = { scrollable: true }
TabsWithScroller.storyName = 'Tabs with scroller'

export const TabsWithHiddenScrollButtons = (args) => (
    <TabBar {...args}>
        <Tab onClick={onClick}>Tab A</Tab>
        <Tab onClick={onClick}>Tab B</Tab>
        <Tab onClick={onClick}>Tab C</Tab>
    </TabBar>
)
TabsWithHiddenScrollButtons.args = { scrollable: true }
TabsWithHiddenScrollButtons.storyName = 'Tabs with hidden scroll buttons'

export const TabStates = (args) => (
    <TabBar {...args}>
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
)
TabStates.storyName = 'Tab states'

export const TabStatesWithIcon = (args) => (
    <TabBar {...args}>
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
)
TabStatesWithIcon.storyName = 'Tab states - with icon'
