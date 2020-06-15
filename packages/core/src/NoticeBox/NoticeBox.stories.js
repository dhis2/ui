import React from 'react'
import { NoticeBox } from './NoticeBox.js'

export default {
    title: 'NoticeBox',
    component: NoticeBox,
}

export const Default = () => (
    <NoticeBox title="Your database was updated in the last 24 hours">
        Data shown in this dashboard may take a few hours to update. Scheduled
        dashboard updates can be managed in the scheduler app.
    </NoticeBox>
)

export const Warning = () => (
    <NoticeBox title="This program has no assigned Organisation Units" warning>
        No one will be able to access this program. Add some Organisation Units
        to the access list.
    </NoticeBox>
)

export const Error = () => (
    <NoticeBox title="Access rules for this instance are set to 'Public'" error>
        Data could be accessed from outside this instance. Update access rules
        immediately.
    </NoticeBox>
)

const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    'Ut semper interdum scelerisque. Suspendisse ut velit sed' +
    'lacus pretium convallis vitae sit amet purus. Nam ut' +
    'libero rhoncus, consectetur sem a, sollicitudin lectus.'

export const WithALongTitle = () => (
    <NoticeBox title={text} error>
        The title text will wrap
    </NoticeBox>
)
