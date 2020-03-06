import { storiesOf } from '@storybook/react'
import React from 'react'

import { InputField } from '../index.js'

const logger = ({ name, value }) => console.info(`${name}: ${value}`)

createStory('InputField', {
    label: 'Default label',
    name: 'Default',
    onChange: logger,
})

function createStory(name, props) {
    return storiesOf(`Component/Widget/${name}`, module)
        .add('Default', () => <InputField name="nolabel" onChange={logger} />)

        .add('No placeholder, no value', () => <InputField {...props} />)

        .add('Placeholder, no value', () => (
            <InputField {...props} placeholder="Hold the place" />
        ))

        .add('With Help text', () => (
            <InputField
                {...props}
                placeholder="Hold the place"
                helpText="With some helping text to guide the user along"
            />
        ))

        .add('With value', () => (
            <InputField
                {...props}
                value="This is set through the value prop, which means the component is controlled."
            />
        ))

        .add('Focus', () => <InputField {...props} initialFocus />)

        .add('Status: Valid', () => (
            <InputField {...props} value="This value is valid" valid />
        ))

        .add('Status: Warning', () => (
            <InputField
                {...props}
                value="This value produces a warning"
                warning
            />
        ))

        .add('Status: Error', () => (
            <InputField
                {...props}
                error
                value="This value produces an error"
                helpText="This is some help text to advice what this input actually is."
                validationText="This describes the error, if a message is supplied."
            />
        ))

        .add('Status: Loading', () => (
            <InputField
                {...props}
                value="This value produces a loading state"
                loading
            />
        ))

        .add('Disabled', () => (
            <InputField {...props} value="This field is disabled" disabled />
        ))

        .add('Read only', () => (
            <InputField {...props} value="This field is disabled" readOnly />
        ))

        .add('Dense', () => (
            <InputField {...props} value="This field is dense" dense />
        ))

        .add('Input width', () => (
            <>
                <InputField
                    name="input1"
                    label="My textarea has a width of 100px"
                    inputWidth="100px"
                    onChange={logger}
                />
                <InputField
                    name="input2"
                    label="My textarea has a width of 220px"
                    inputWidth="220px"
                    onChange={logger}
                />
            </>
        ))

        .add('Label text overflow', () => (
            <InputField
                {...props}
                label="This label is too long to show on a single line of the input field's label. We just let it flow to the next line so the user can still read it. However, we should always aim to keep it shorter than this!"
                dense
                warning
            />
        ))

        .add('Value text overflow', () => (
            <InputField
                {...props}
                value="This value is too long in order to show on a single line of the input field. It should stay on one line, not in an extra line and which wouldn't look like a standard input"
                dense
                warning
            />
        ))

        .add('Required', () => <InputField {...props} required />)
}
