import { storiesOf } from '@storybook/react'
import React from 'react'

import { ToggleGroup } from './ToggleGroup.js'
import { Checkbox, Radio, Switch } from '../index.js'

storiesOf('Components/Core/ToggleGroup', module)
    .add('With Checkbox', () => (
        <ToggleGroup>
            <Checkbox value="first" label="First" name="default" />
            <Checkbox value="second" label="Second" name="default" />
            <Checkbox value="third" label="Third" name="default" />
            <Checkbox value="fourth" label="Fourth" name="default" />
        </ToggleGroup>
    ))

    .add('With Radio', () => (
        <ToggleGroup>
            <Radio value="first" label="First" name="with-radio" />
            <Radio value="second" label="Second" name="with-radio" />
            <Radio value="third" label="Third" name="with-radio" />
            <Radio value="fourth" label="Fourth" name="with-radio" />
        </ToggleGroup>
    ))

    .add('With Switch', () => (
        <ToggleGroup>
            <Switch value="first" label="First" name="with-switch" />
            <Switch value="second" label="Second" name="with-switch" />
            <Switch value="third" label="Third" name="with-switch" />
            <Switch value="fourth" label="Fourth" name="with-switch" />
        </ToggleGroup>
    ))
