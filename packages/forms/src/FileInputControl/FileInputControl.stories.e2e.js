/* eslint-disable react/prop-types */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { formDecorator } from '../formDecorator.js'

import {
    CheckboxControl,
    FileInputControl,
    InputControl,
    MultiSelectControl,
    RadioControl,
    SingleSelectControl,
    SwitchControl,
    TextAreaControl,
    GroupControl,
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
                initialValue={true}
                type="checkbox"
                label="I want to receive updated and notifications about the latest changes?"
                component={SwitchControl}
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

            <GroupControl
                name="food"
                label="Food"
                required
                helpText="If we ever gather for food, what meal type would you like to eat"
            >
                <Field
                    type="radio"
                    name="food"
                    required
                    component={RadioControl}
                    value="anything"
                    label="Don't care"
                    validate={hasValue}
                />

                <Field
                    type="radio"
                    name="food"
                    component={RadioControl}
                    required
                    value="vegan"
                    label="Vegan"
                    validate={hasValue}
                />

                <Field
                    type="radio"
                    name="food"
                    component={RadioControl}
                    required
                    value="vegetarian"
                    label="Vegetarian"
                    validate={hasValue}
                />

                <Field
                    type="radio"
                    name="food"
                    component={RadioControl}
                    required
                    value="fish"
                    label="Fish"
                    validate={hasValue}
                />

                <Field
                    type="radio"
                    name="food"
                    required
                    component={RadioControl}
                    value="Halal"
                    label="halal"
                    validate={hasValue}
                />
            </GroupControl>

            <GroupControl
                name="pizzaToppings"
                label="Pizza toppings"
                helpText="If we ever order pizza, what ingredients would you like on top"
            >
                <Field
                    type="checkbox"
                    name="pizzaToppings"
                    component={CheckboxControl}
                    label="Everything"
                    value="everything"
                />

                <Field
                    type="checkbox"
                    name="pizzaToppings"
                    component={CheckboxControl}
                    label="Ham"
                    value="ham"
                />

                <Field
                    type="checkbox"
                    name="pizzaToppings"
                    component={CheckboxControl}
                    label="Salami"
                    value="salami"
                />

                <Field
                    type="checkbox"
                    name="pizzaToppings"
                    component={CheckboxControl}
                    label="Pineapple"
                    value="pineapple"
                />

                <Field
                    type="checkbox"
                    name="pizzaToppings"
                    component={CheckboxControl}
                    label="Bellpepper"
                    value="bellpepper"
                />
            </GroupControl>

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
                label="I accept the terms and conditions"
                validate={hasValue}
                component={CheckboxControl}
                type="checkbox"
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
