import { CheckboxRegular } from '@dhis2/ui-icons'
import { defineFeature, loadFeature } from 'jest-cucumber'
import { mount } from 'enzyme'
import React from 'react'
import path from 'path'

import { Checkbox } from '../Checkbox'

const featurePath = path.join(
    __dirname,
    '..',
    'features/has_indeterminate_prop.feature'
)
const feature = loadFeature(featurePath)

defineFeature(feature, test => {
    let checkbox

    afterEach(() => {
        checkbox = null
    })

    test('The checkbox has the indeterminate prop', ({ given, then }) => {
        given('the checkbox is marked as indeterminate', () => {
            checkbox = mount(
                <Checkbox
                    name="Ex"
                    label="The label"
                    value="default"
                    indeterminate
                />
            )
        })

        then("its input-element's indeterminate prop is true", () => {
            const hasIndeterminateProp = checkbox
                .find(CheckboxRegular)
                .find('svg')
                .hasClass('indeterminate')

            expect(hasIndeterminateProp).toBe(true)
        })
    })

    test('The checkbox does not have the indeterminate prop', ({
        given,
        then,
    }) => {
        given('the checkbox is not marked as indeterminate', () => {
            checkbox = mount(
                <Checkbox name="Ex" label="The label" value="default" />
            )
        })

        then("its input-element's indeterminate prop is false", () => {
            const hasIndeterminateProp = checkbox
                .find(CheckboxRegular)
                .find('svg')
                .hasClass('indeterminate')

            console.log('hasIndeterminateProp', hasIndeterminateProp)
            expect(hasIndeterminateProp).toBe(false)
        })
    })
})
