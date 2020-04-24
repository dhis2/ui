/* eslint-disable react/prop-types */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import {
    CheckboxGroupControl,
    FileInputControl,
    InputControl,
    MultiSelectControl,
    RadioGroupControl,
    SingleSelectControl,
    SwitchGroupControl,
    TextAreaControl,
    composeValidators,
    email,
    hasValue,
    ReactFinalForm,
} from '../index.js'

const { Field } = ReactFinalForm

const StandardForm = ({ values }) => {
    return (
        <div style={{ maxWidth: 830 }}>
            <Field
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

            <Field
                required
                label="First name"
                name="fname"
                validate={hasValue}
                component={InputControl}
                helpText="Please enter your first name, excluding middle names"
            />

            <Field
                required
                label="Last name"
                name="lname"
                validate={hasValue}
                component={InputControl}
                helpText="Please enter your first name, excluding middle names"
            />

            <Field
                name="subscribe"
                options={[
                    {
                        label:
                            'I want to receive updated and notifications about the latest changes?',
                        value: 'yes',
                    },
                ]}
                initialValue="yes"
                component={SwitchGroupControl}
            />

            {values.subscribe && (
                <Field
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
                <Field
                    disabled={!values.subscribe}
                    required={values.subscribe}
                    label="E-mail address confirmation"
                    name="email2"
                    validate={composeValidators(email, hasValue)}
                    component={InputControl}
                    helpText="Please confirm your e-mail address"
                />
            )}

            <Field
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

            <Field
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

            <Field
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

            <Field
                name="message"
                label="If you want to tell us anything, just add your message here"
                component={TextAreaControl}
            />

            <Field
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

            <Field
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

            <Field
                required
                name="tnc"
                label=""
                validate={hasValue}
                component={CheckboxGroupControl}
                options={[
                    {
                        label: 'I accept the terms and conditions',
                        value: 'accepted',
                    },
                ]}
                initialValue="accepted"
                className="checkbox"
            />
        </div>
    )
}

storiesOf('Testing:FileInput', module)
    .addDecorator(formDecorator)
    .addParameters({ options: { showPanel: false } })
    .add('Standard form', ({ formRenderProps }) => (
        <StandardForm {...formRenderProps} />
    ))
