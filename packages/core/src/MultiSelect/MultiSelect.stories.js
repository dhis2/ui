import propTypes from '@dhis2/prop-types'
import { sharedPropTypes } from '@dhis2/ui-constants'
import React from 'react'
import { MultiSelect, MultiSelectOption } from '../index.js'

const description = `
_**Note:** Due to demo limitations, only one representative example is rendered here. For more (interactive) examples, see individual stories in the 'Canvas' tab._

Multiple selection allows the user to select more than one option from the list. Checkboxes are used to highlight the possibility of making more than one selection. Selected options are displayed as chips inside the input. Make sure to communicate clearly to the user if there is a limit to the number of selectable elements.

Use multiple selection wherever the user needs to make more than one selection. If the multiple selection is complex, requires a defined order or needs to made from different groups, consider using a transfer component instead.

Read more about using \`Select\` components at [Design System: Select](https://github.com/dhis2/design-system/blob/master/molecules/select.md).

\`\`\`js
import { MultiSelect, MultiSelectOption } from '@dhis2/ui'
\`\`\`
`

const eventHandler = handlerName => (payload, event) => {
    console.log(`${handlerName} payload`, payload)
    console.log(`${handlerName} event`, event)
}

const onChange = eventHandler('onChange')
const onFocus = eventHandler('onFocus')
const onBlur = eventHandler('onBlur')

const CustomMultiSelectOption = ({ label, onClick }) => (
    <div onClick={e => onClick({}, e)}>{label}</div>
)

CustomMultiSelectOption.propTypes = {
    label: propTypes.string,
    onClick: propTypes.func,
}

const requiredIfArgType = {
    table: { type: { summary: 'string' }, control: { type: 'string' } },
}

export default {
    title: 'Forms/Multi Select/Multi Select',
    component: MultiSelect,
    parameters: {
        docs: {
            description: { component: description },
            // Disable stories in docs page by default, then use one representative examples
            disable: true,
            // Use iframe to keep dropdown menu inside story for docs page
            inlineStories: false,
            iframeHeight: '300px',
        },
    },
    // Use 'onChange' as a default arg, otherwise components throw an error when interacted with
    // (Maybe this could be handled in the component - as a required prop)
    args: { className: 'select', onChange },
    argTypes: {
        valid: { ...sharedPropTypes.statusArgType },
        warning: { ...sharedPropTypes.statusArgType },
        error: { ...sharedPropTypes.statusArgType },
        clearText: { ...requiredIfArgType },
        noMatchText: { ...requiredIfArgType },
    },
}

const WithOptionsTemplate = args => (
    <MultiSelect {...args}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)

const EmptyTemplate = args => <MultiSelect {...args} />

export const WithOptionsAndOnChange = WithOptionsTemplate.bind({})
WithOptionsAndOnChange.storyName = 'With options and onChange'

export const WithOptionsAndSelection = WithOptionsTemplate.bind({})
WithOptionsAndSelection.args = { selected: ['1'] }
WithOptionsAndSelection.storyName = 'With options and a selection'

export const WithOnFocus = WithOptionsTemplate.bind({})
WithOnFocus.args = { onFocus }
WithOnFocus.storyName = 'With onFocus'

export const WithOnBlur = WithOptionsTemplate.bind({})
WithOnBlur.args = { onBlur }
WithOnBlur.storyName = 'With onBlur'

export const WithCustomOptionsAndOnChange = args => (
    <MultiSelect {...args}>
        <CustomMultiSelectOption value="1" label="option one" />
        <CustomMultiSelectOption value="2" label="option two" />
        <CustomMultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
WithCustomOptionsAndOnChange.storyName = 'With custom options and onChange'

export const WithInvalidOptions = args => (
    <MultiSelect {...args}>
        <div>invalid one</div>
        <MultiSelectOption value="1" label="option one" />
        <div>invalid two</div>
        <MultiSelectOption value="2" label="option two" />
        <div>invalid three</div>
        <MultiSelectOption value="3" label="option three" />
        {null}
        {undefined}
        {false}
    </MultiSelect>
)

export const WithInvalidFilterableOptions = args => (
    <MultiSelect {...args}>
        <div>invalid one</div>
        <MultiSelectOption value="1" label="option one" />
        <div>invalid two</div>
        <MultiSelectOption value="2" label="option two" />
        <div>invalid three</div>
        <MultiSelectOption value="3" label="option three" />
    </MultiSelect>
)
WithInvalidFilterableOptions.args = {
    filterable: true,
    noMatchText: 'No match found',
}

export const WithInitialFocus = EmptyTemplate.bind({})
WithInitialFocus.args = { initialFocus: true }
WithInitialFocus.storyName = 'With initialFocus'

export const Empty = EmptyTemplate.bind({})

export const EmptyWithEmptyText = EmptyTemplate.bind({})
EmptyWithEmptyText.args = { empty: 'Custom empty text' }

export const EmptyWithEmptyComponent = EmptyTemplate.bind({})
EmptyWithEmptyComponent.args = {
    empty: <div className="custom-empty">Custom empty component</div>,
}

export const WithOptionsAndLoading = WithOptionsTemplate.bind({})
WithOptionsAndLoading.args = { loading: true }

export const WithOptionsLoadingAndLoadingText = WithOptionsTemplate.bind({})
WithOptionsLoadingAndLoadingText.args = {
    ...WithOptionsAndLoading.args,
    loadingText: 'Loading options',
}
WithOptionsLoadingAndLoadingText.storyName =
    'With options, loading and loading text'

export const WithMoreThanTenOptions = args => (
    <MultiSelect {...args}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
        <MultiSelectOption value="4" label="option four" />
        <MultiSelectOption value="5" label="option five" />
        <MultiSelectOption value="6" label="option six" />
        <MultiSelectOption value="7" label="option seven" />
        <MultiSelectOption value="8" label="option eight" />
        <MultiSelectOption value="9" label="option nine" />
        <MultiSelectOption value="10" label="option ten" />
        <MultiSelectOption value="11" label="option eleven" />
        <MultiSelectOption value="12" label="option twelve" />
    </MultiSelect>
)

export const WithMoreThanThreeOptionsAndA100PxMaxHeight = args => (
    <MultiSelect {...args}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
        <MultiSelectOption value="4" label="option four" />
        <MultiSelectOption value="5" label="option five" />
        <MultiSelectOption value="6" label="option six" />
        <MultiSelectOption value="7" label="option seven" />
        <MultiSelectOption value="8" label="option eight" />
        <MultiSelectOption value="9" label="option nine" />
        <MultiSelectOption value="10" label="option ten" />
        <MultiSelectOption value="11" label="option eleven" />
        <MultiSelectOption value="12" label="option twelve" />
    </MultiSelect>
)
WithMoreThanThreeOptionsAndA100PxMaxHeight.args = { maxHeight: '100px' }
WithMoreThanThreeOptionsAndA100PxMaxHeight.storyName =
    'With more than three options and a 100px max-height'

export const WithOptionsAndDisabled = WithOptionsTemplate.bind({})
WithOptionsAndDisabled.args = { disabled: true }
WithOptionsAndDisabled.storyName = 'With options and disabled'

export const WithOptionsASelectionAndDisabled = WithOptionsTemplate.bind({})
WithOptionsASelectionAndDisabled.args = {
    ...WithOptionsAndDisabled.args,
    ...WithOptionsAndSelection.args,
}
WithOptionsASelectionAndDisabled.storyName =
    'With options, a selection and disabled'

export const WithPrefix = WithOptionsTemplate.bind({})
WithPrefix.args = { prefix: 'Prefix text' }

export const WithPrefixAndSelection = WithOptionsTemplate.bind({})
WithPrefixAndSelection.args = {
    ...WithPrefix.args,
    ...WithOptionsAndSelection.args,
}

export const WithPlaceholder = WithOptionsTemplate.bind({})
WithPlaceholder.args = { placeholder: 'Placeholder text' }

export const WithPlaceholderAndSelection = WithOptionsTemplate.bind({})
WithPlaceholderAndSelection.args = {
    ...WithPlaceholder.args,
    ...WithOptionsAndSelection.args,
}

export const WithDisabledOptionAndOnChange = args => (
    <MultiSelect {...args}>
        <MultiSelectOption value="1" label="option one" />
        <MultiSelectOption value="2" label="option two" />
        <MultiSelectOption value="3" label="option three" />
        <MultiSelectOption value="4" label="disabled option" disabled />
    </MultiSelect>
)
WithDisabledOptionAndOnChange.storyName = 'With disabled option and onChange'

export const WithOptionsAndMultipleSelections = WithOptionsTemplate.bind({})
WithOptionsAndMultipleSelections.args = { selected: ['1', '2'] }

export const WithClearButtonSelectionAndOnChange = WithOptionsTemplate.bind({})
WithClearButtonSelectionAndOnChange.args = {
    ...WithOptionsAndSelection.args,
    clearable: true,
    clearText: 'Clear',
}
WithClearButtonSelectionAndOnChange.storyName =
    'With clear button, selection and onChange'

export const WithFilterField = WithOptionsTemplate.bind({})
WithFilterField.args = { ...WithInvalidFilterableOptions.args }

export const DefaultPosition = args => (
    <>
        <MultiSelect {...args}>
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
            <MultiSelectOption value="4" label="option four" />
            <MultiSelectOption value="5" label="option five" />
            <MultiSelectOption value="6" label="option six" />
            <MultiSelectOption value="7" label="option seven" />
            <MultiSelectOption value="8" label="option eight" />
            <MultiSelectOption value="9" label="option nine" />
            <MultiSelectOption value="10" label="option ten" />
            <MultiSelectOption value="11" label="option eleven" />
            <MultiSelectOption value="12" label="option twelve" />
        </MultiSelect>
        <style jsx>{`
            :global(#root) {
                margin-bottom: 2000px;
            }
        `}</style>
    </>
)

export const FlippedPosition = args => (
    <>
        <MultiSelect {...args}>
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
            <MultiSelectOption value="4" label="option four" />
            <MultiSelectOption value="5" label="option five" />
            <MultiSelectOption value="6" label="option six" />
            <MultiSelectOption value="7" label="option seven" />
            <MultiSelectOption value="8" label="option eight" />
            <MultiSelectOption value="9" label="option nine" />
            <MultiSelectOption value="10" label="option ten" />
            <MultiSelectOption value="11" label="option eleven" />
            <MultiSelectOption value="12" label="option twelve" />
        </MultiSelect>
        <style jsx>{`
            :global(html),
            :global(body),
            :global(#root) {
                position: relative;
                height: 500px;
                max-height: 500px;
            }
            :global(#root) {
                padding-top: 400px !important;
            }
        `}</style>
    </>
)

export const ShiftedIntoView = args => (
    <>
        <MultiSelect {...args}>
            <MultiSelectOption value="1" label="option one" />
            <MultiSelectOption value="2" label="option two" />
            <MultiSelectOption value="3" label="option three" />
            <MultiSelectOption value="4" label="option four" />
            <MultiSelectOption value="5" label="option five" />
            <MultiSelectOption value="6" label="option six" />
            <MultiSelectOption value="7" label="option seven" />
            <MultiSelectOption value="8" label="option eight" />
            <MultiSelectOption value="9" label="option nine" />
            <MultiSelectOption value="10" label="option ten" />
            <MultiSelectOption value="11" label="option eleven" />
            <MultiSelectOption value="12" label="option twelve" />
        </MultiSelect>
        <style jsx>{`
            :global(html),
            :global(body),
            :global(#root) {
                position: relative;
                height: 300px !important;
                max-height: 300px;
            }
            :global(#root) {
                padding-top: 130px !important;
            }
        `}</style>
    </>
)
