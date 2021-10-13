import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { NoticeBox } from './notice-box.js'

const subtitle = `Highlights useful information that is directly relevant to the page the user is viewing`

const description = `
Use a notice box wherever there is important, temporary information about a page or situation that the user needs to be aware of.

Notice boxes are different from alert bars in several ways. Notice boxes cannot be dismissed, so they will always display until the situation is resolved. Notice boxes are for highlighting static information or information that is ongoing. Alert bars are suited to alerting a user about something that has just happened.

Another way to decide which component to use:

- a notice box will usually be displayed when a page loads, before a user takes action
- an alert bar will usually display in response to an action/event

Notice boxes cannot be dismissed, so it is important to provide guidance on how to fix the problem/condition that is causing the notice box to display.

Do not use a notice box to display permanent information. If there is information that always will be displayed on a page it should be designed as part of the page itself. Notice boxes are for temporary information.

Learn more about Notice Boxes at [Design System: Notice Box](https://github.com/dhis2/design-system/blob/master/molecules/notice-box.md).

\`\`\`js
import { NoticeBox } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Data Display/Notice Box',
    component: NoticeBox,
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
    argTypes: {
        error: { ...sharedPropTypes.statusArgType },
        warning: { ...sharedPropTypes.statusArgType },
    },
}

export const Default = (args) => (
    <NoticeBox {...args}>
        Data shown in this dashboard may take a few hours to update. Scheduled
        dashboard updates can be managed in the scheduler app.
    </NoticeBox>
)
Default.args = { title: 'Your database was updated in the last 24 hours' }

export const Warning = (args) => (
    <NoticeBox {...args}>
        No one will be able to access this program. Add some Organisation Units
        to the access list.
    </NoticeBox>
)
Warning.args = {
    warning: true,
    title: 'This program has no assigned Organisation Units',
}

export const Error = () => (
    <NoticeBox title="Access rules for this instance are set to 'Public'" error>
        Data could be accessed from outside this instance. Update access rules
        immediately.
    </NoticeBox>
)
Error.args = {
    error: true,
    title: "Access rules for this instance are set to 'Public'",
}

const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    'Ut semper interdum scelerisque. Suspendisse ut velit sed' +
    'lacus pretium convallis vitae sit amet purus. Nam ut' +
    'libero rhoncus, consectetur sem a, sollicitudin lectus.'

export const WithALongTitle = (args) => (
    <NoticeBox {...args}>The title text will wrap</NoticeBox>
)
WithALongTitle.args = { error: true, title: text }
