import React, { useEffect, useState, useRef } from 'react'
import { AlertBar } from '../alert-bar/index.js'
import { AlertStack } from './alert-stack.js'

const VARIANTS = ['info', 'success', 'warning', 'critical']

const description = `
A container for Alert Bars.

_**Note:** The demos on this page may be slow._

\`\`\`js
import { AlertStack } from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Alert Stack',
    component: AlertStack,
    // Use an iframe in docs to contain 'portal'
    parameters: {
        docs: {
            inlineStories: false,
            iframeHeight: '300px',
            description: { component: description },
        },
    },
}

export const Default = (args) => (
    <AlertStack {...args}>
        <AlertBar permanent>First notification - I am at the bottom</AlertBar>
        <AlertBar permanent critical>
            Second notification
        </AlertBar>
        <AlertBar permanent warning>
            Third notification
        </AlertBar>
        <AlertBar permanent success>
            Fourth notification - I am at the top
        </AlertBar>
    </AlertStack>
)

export const Interactive = (args) => {
    const [alerts, setAlerts] = useState([])
    const nextId = useRef(0)
    const addAlert = () => {
        const id = nextId.current++
        const variant = VARIANTS[id % VARIANTS.length]
        setAlerts((current) => [
            ...current,
            { id, variant, message: `Alert #${id} (${variant})` },
        ])
    }
    const removeAlert = (id) => {
        setAlerts((current) => current.filter((a) => a.id !== id))
    }
    return (
        <>
            <button
                onClick={addAlert}
                style={{
                    padding: '8px 16px',
                    fontSize: '14px',
                    cursor: 'pointer',
                }}
            >
                Add alert
            </button>
            <AlertStack {...args}>
                {alerts.map(({ id, variant, message }) => (
                    <AlertBar
                        key={id}
                        {...{ [variant]: true }}
                        onHidden={() => removeAlert(id)}
                    >
                        {message}
                    </AlertBar>
                ))}
            </AlertStack>
        </>
    )
}

export const RTL = (args) => {
    useEffect(() => {
        document.body.dir = 'rtl'
        return () => {
            document.body.dir = 'ltr'
        }
    }, [])
    return (
        <div dir="rtl">
            <AlertStack {...args}>
                <AlertBar permanent>
                    First notification - I am at the bottom
                </AlertBar>
                <AlertBar permanent critical>
                    Second notification
                </AlertBar>
                <AlertBar permanent warning>
                    Third notification
                </AlertBar>
                <AlertBar permanent success>
                    Fourth notification - I am at the top
                </AlertBar>
            </AlertStack>
        </div>
    )
}
