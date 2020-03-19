/* eslint-disable react/prop-types */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import {
    CheckboxControl,
    CheckboxGroupControl,
    FieldControl,
    FileInputControl,
    InputControl,
    MultiSelectControl,
    RadioGroupControl,
    SingleSelectControl,
    SwitchControl,
    TextAreaControl,
    composeValidators,
    email,
    hasValue,
} from '../index.js'

const StandardForm = ({ values }) => {
    return (
        <div style={{ maxWidth: 830 }}>
            <FieldControl
                name="gender"
                label="Gender"
                component={SingleSelectControl}
                initialValue=""
                options={[
                    { value: '', label: 'Please choose' },
                    { value: 'mr', label: 'Mr.' },
                    { value: 'ms', label: 'Ms.' },
                    { value: 'other', label: 'Other' },
                    {
                        value: 'unknown',
                        label: "I'd rather not say",
                    },
                ]}
            />

            <FieldControl
                required
                label="First name"
                name="fname"
                validate={hasValue}
                component={InputControl}
                helpText="Please enter your first name, excluding middle names"
            />

            <FieldControl
                required
                label="Last name"
                name="lname"
                validate={hasValue}
                component={InputControl}
                helpText="Please enter your first name, excluding middle names"
            />

            <FieldControl
                name="subscribe"
                checkedValue="yes"
                label="I want to receive updated and notifications about the latest changes?"
                component={SwitchControl}
            />

            {values.subscribe && (
                <FieldControl
                    required={values.subscribe}
                    label="E-mail address"
                    name="email1"
                    validate={composeValidators(email, value => {
                        if (values.subscribe && !value) {
                            return 'You need to provide an e-mail address'
                        }
                    })}
                    component={InputControl}
                    helpText="Please enter the e-mail address you want us to send the updates to"
                />
            )}

            {values.subscribe && (
                <FieldControl
                    disabled={!values.subscribe}
                    required={values.subscribe}
                    label="E-mail address confirmation"
                    name="email2"
                    validate={composeValidators(email, hasValue)}
                    component={InputControl}
                    helpText="Please confirm your e-mail address"
                />
            )}

            <FieldControl
                name="food"
                label="Food"
                component={RadioGroupControl}
                options={[
                    { value: '', label: "Don't care" },
                    { value: 'vegan', label: 'Vegan' },
                    { value: 'veggie', label: 'Vegetarian' },
                    { value: 'fish', label: 'Fish' },
                    { value: 'halal', label: 'Halal' },
                ]}
                helpText="If we ever gather for food, what meal type would you like to eat"
            />

            <FieldControl
                label="Pizza toppings"
                name="pizzaToppings"
                component={CheckboxGroupControl}
                options={[
                    { value: '', label: 'All of the options' },
                    { value: 'ham', label: 'Ham' },
                    { value: 'salami', label: 'Salami' },
                    { value: 'pineapple', label: 'Pineapple' },
                    { value: 'bellpepper', label: 'Bellpepper' },
                ]}
                helpText="If we ever order pizza, what ingredients would you like on top"
            />

            <FieldControl
                label="Sandwich toppings"
                name="sandwhichToppings"
                component={MultiSelectControl}
                options={[
                    { value: '', label: 'All of the options' },
                    { value: 'ham', label: 'Ham' },
                    { value: 'salami', label: 'Salami' },
                    { value: 'pineapple', label: 'Pineapple' },
                    { value: 'bellpepper', label: 'Bellpepper' },
                ]}
                helpText="If we ever order sandwiches, what ingredients would you like on top"
            />

            <FieldControl
                name="message"
                label="If you want to tell us anything, just add your message here"
                component={TextAreaControl}
            />

            <FieldControl
                name="fileTxt"
                accept=".txt"
                label="If you want to send us a txt file, please attach it here"
                className="fileTxt"
                validate={files => {
                    if (!files) return undefined

                    const [file] = files
                    if (file.type !== 'text/plain') {
                        return `The file you provided is not a txt file, received "${file.type}"`
                    }
                }}
                component={FileInputControl}
            />

            <FieldControl
                multiple
                accept="image/jpg"
                name="fileJpgs"
                label="If you want to send us some picture file, please attach it here"
                validate={files => {
                    if (!files) return undefined

                    return files.reduce((error, file) => {
                        if (error) return error
                        if (file.type !== 'application/jpg') {
                            return `One of the files is not a jpg, received "${file.type}"`
                        }
                    }, undefined)
                }}
                component={FileInputControl}
            />

            <FieldControl
                required
                name="tnc"
                label="I accept the terms and conditions"
                validate={hasValue}
                component={CheckboxControl}
                className="checkbox"
            />
        </div>
    )
}

storiesOf('Testing:Forms', module)
    .addDecorator(formDecorator)
    .addParameters({ options: { showPanel: false } })
    .add('Standard form', ({ formRenderProps }) => (
        <StandardForm {...formRenderProps} />
    ))
