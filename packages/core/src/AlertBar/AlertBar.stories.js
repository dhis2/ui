import React from 'react'
import { AttachFile } from '../Icons/index.js'
import { AlertBar } from './AlertBar.js'

const Wrapper = fn => (
    <div style={{ height: '300px' }}>
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

export default {
    title: 'Feedback/Alerts/Alert Bar',
    component: AlertBar,
    decorators: [Wrapper],
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

AutoHiding.story = {
    name: 'Auto hiding',
}

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

WithActions.story = {
    name: 'With actions',
}

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

TextOverflow.story = {
    name: 'Text overflow',
}
