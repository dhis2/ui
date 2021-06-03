import React, { useState } from 'react'
import { AttachFile } from '../Icons/index.js'
import { AlertBar } from './AlertBar.js'

const subtitle = `
A floating alert that informs the user about temporary information 
in the context of the current screen.
`

const description = `
Alert bars notify a user of some information. There are different types of 
alert bar for displaying different types of content. Use the alert bar type 
that matches your content type and importance. Note that alert bar can be 
ignored by the user, so they shouldn't be used for content that needs to 
block an app flow, use a modal instead.

Alert bars are always displayed at centered and fixed at the bottom of the 
screen. Some types of alert bar dismiss after a set time, others must be 
dismissed by the user.

See specification: [Design System](https://github.com/dhis2/design-system/blob/master/molecules/alertbar.md)

\`\`\`js
import { AlertBar } from '@dhis2/ui'
\`\`\`
`

const Wrapper = fn => (
    <div style={{ height: '260px' }}>
        <div
            className="alert-bars"
            style={{
                width: '100%',
                position: 'fixed',
                bottom: 0,
                left: 0,
                paddingLeft: 16,
            }}
        >
            {fn()}
        </div>
    </div>
)

const alertTypeArgType = {
    table: {
        type: {
            summary: 'bool',
            detail:
                "'success', 'warning', and 'critical' are mutually exclusive props",
        },
    },
    control: {
        type: 'boolean',
    },
}
const iconArgType = {
    table: {
        type: {
            summary: 'bool | element',
        },
    },
}
const actionsArgType = {
    table: {
        type: {
            summary: '[{ label: string, onClick: func }]',
        },
    },
}

export default {
    title: 'Feedback/Alerts/Alert Bar',
    component: AlertBar,
    decorators: [Wrapper],
    parameters: {
        componentSubtitle: subtitle,
        docs: {
            description: {
                component: description,
            },
        },
    },
    argTypes: {
        actions: { ...actionsArgType },
        critical: { ...alertTypeArgType },
        success: { ...alertTypeArgType },
        warning: { ...alertTypeArgType },
        icon: { ...iconArgType },
    },
}

export const Default = args => (
    <AlertBar {...args}>Default - I will autohide</AlertBar>
)

export const States = () => (
    <React.Fragment>
        <AlertBar permanent>Default (info)</AlertBar>
        <AlertBar permanent success>
            Success
        </AlertBar>
        <AlertBar permanent warning>
            Warning
        </AlertBar>
        <AlertBar permanent critical>
            Critical
        </AlertBar>
    </React.Fragment>
)

export const AutoHiding = () => (
    <React.Fragment>
        <AlertBar permanent>Permanent never auto-hides</AlertBar>
        <AlertBar warning>Warning never auto-hides</AlertBar>
        <AlertBar critical>Critial never auto-hides</AlertBar>
        <AlertBar
            duration={2000}
            onHidden={(payload, event) => {
                console.log('onHidden payload', payload)
                console.log('onHidden event', event)
            }}
        >
            Custom duration, hides after 2s
        </AlertBar>
        <AlertBar
            onHidden={(payload, event) => {
                console.log('onHidden payload', payload)
                console.log('onHidden event', event)
            }}
        >
            Default auto-hides after 8s
        </AlertBar>
    </React.Fragment>
)
AutoHiding.storyName = 'Auto hiding'

export const WithActions = () => (
    <AlertBar
        permanent
        actions={[
            { label: 'Save', onClick: () => {} },
            { label: 'Cancel', onClick: () => {} },
        ]}
    >
        With Actions
    </AlertBar>
)
WithActions.storyName = 'With actions'

export const Icons = () => (
    <React.Fragment>
        <AlertBar permanent>Default icon</AlertBar>
        <AlertBar permanent icon={false}>
            No icon
        </AlertBar>
        <AlertBar permanent icon={<AttachFile />}>
            Custom icon
        </AlertBar>
    </React.Fragment>
)

export const TextOverflow = () => (
    <React.Fragment>
        <AlertBar permanent>Short text</AlertBar>
        <AlertBar permanent>
            If the alert bar gets a ver long text, it will grow to a maximum of
            600px and the text will overflow across several lines. If there are
            multiple AlertBars in a stack, they will all grow to the size of the
            widest sibling.
        </AlertBar>
    </React.Fragment>
)
TextOverflow.storyName = 'Text overflow'

export const HiddenProp = () => {
    const [hidden, setHidden] = useState(true)
    const toggleVisibility = () => setHidden(prevHidden => !prevHidden)
    return (
        <React.Fragment>
            <button
                style={{
                    display: 'block',
                    position: 'fixed',
                    bottom: 150,
                    left: 10,
                }}
                onClick={toggleVisibility}
            >
                {hidden ? 'Show' : 'Hide'}
            </button>
            <AlertBar permanent hidden={hidden}>
                Short text
            </AlertBar>
        </React.Fragment>
    )
}
HiddenProp.storyName = 'Hidden prop'
