import React from 'react'
import { SegmentedControl } from './segmented-control.js'

const logger = ({ value }) => console.log(`Selected value: ${value}`)

export default {
    title: 'Segmented Control',
    component: SegmentedControl,
    parameters: {
        componentSubtitle: 'Allows selection between related options',
    },
    args: {
        options: [
            { label: 'Dog', value: 'DOG' },
            { label: 'Cat', value: 'CAT' },
            { label: 'Giraffe', value: 'GIRAFFE' },
        ],
        selected: 'DOG',
        onChange: logger,
        ariaLabel: 'Segmented control label',
    },
}

const Template = (args) => <SegmentedControl {...args} />

export const Default = Template.bind({})

export const DisabledOption = Template.bind({})
DisabledOption.args = {
    options: [
        { label: 'One', value: 'ONE' },
        { label: 'Two', value: 'TWO', disabled: true },
        { label: 'Three', value: 'THREE' },
    ],
    selected: 'THREE',
}

export const LongLabels = Template.bind({})
LongLabels.args = {
    options: [
        {
            label: 'Program configuration, security, and distribution',
            value: 'PROGRAM',
        },
        { label: 'Two', value: 'TWO' },
        { label: 'Three', value: 'THREE' },
    ],
    selected: 'PROGRAM',
}
