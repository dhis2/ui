import { sharedPropTypes } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { SingleSelectOption } from '../index.js'
import { SingleSelect } from './index.js'

const description = `
Use a select component wherever the user needs to make a selection of one or more options from a list of 6 or more options. If there are less than 6 options to choose from and space permits, use checkboxes for multiple selection and radio buttons for single selection. If the user needs to make a complex selection with a specific ordering, use a transfer instead.

Learn more about using Selects at [Design System: Select](https://github.com/dhis2/design-system/blob/master/molecules/select.md).

\`\`\`js
import { SingleSelect, SingleSelectOption } from '@dhis2/ui'
\`\`\`

_**Note:** Due to demo limitations on this page, only one representative example is rendered here. For more (interactive) examples, see individual stories in the 'Canvas' tab._
`

const eventHandler = (handlerName) => (payload, event) => {
    console.log(`${handlerName} payload`, payload)
    console.log(`${handlerName} event`, event)
}

const onChange = eventHandler('onChange')
const onFocus = eventHandler('onFocus')
const onBlur = eventHandler('onBlur')

const CustomSingleSelectOption = ({ label, onClick }) => (
    <div onClick={(e) => onClick({}, e)}>{label}</div>
)

CustomSingleSelectOption.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
}

const requiredIfArgType = {
    table: { type: { summary: 'string' }, control: { type: 'string' } },
}

export default {
    title: 'Single Select',
    component: SingleSelect,
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

const WithOptionsTemplate = (args) => (
    <SingleSelect {...args}>
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)

const EmptyTemplate = (args) => <SingleSelect {...args} />

export const WithOptionsAndOnChange = WithOptionsTemplate.bind({})
WithOptionsAndOnChange.storyName = 'With options and onChange'

export const WithOptionsAndASelection = WithOptionsTemplate.bind({})
WithOptionsAndASelection.args = { selected: '1' }
// Enable this story as the primary for docs as a representative example
WithOptionsAndASelection.parameters = { docs: { disable: false } }
WithOptionsAndASelection.storyName = 'With options and a selection'

export const WithOnFocus = WithOptionsTemplate.bind({})
WithOnFocus.args = { onFocus }
WithOnFocus.storyName = 'With onFocus'

export const WithOnBlur = WithOptionsTemplate.bind({})
WithOnBlur.args = { onBlur }
WithOnBlur.storyName = 'With onBlur'

export const WithCustomOptionsAndOnChange = (args) => (
    <SingleSelect {...args}>
        <CustomSingleSelectOption value="1" label="option one" />
        <CustomSingleSelectOption value="2" label="option two" />
        <CustomSingleSelectOption value="3" label="option three" />
    </SingleSelect>
)
WithCustomOptionsAndOnChange.storyName = 'With custom options and onChange'

export const WithInvalidOptions = (args) => (
    <SingleSelect {...args}>
        <div>invalid one</div>
        <SingleSelectOption value="1" label="option one" />
        <div>invalid two</div>
        <SingleSelectOption value="2" label="option two" />
        <div>invalid three</div>
        <SingleSelectOption value="3" label="option three" />
        {null}
        {undefined}
        {false}
    </SingleSelect>
)

export const WithInvalidFilterableOptions = (args) => (
    <SingleSelect {...args}>
        <div>invalid one</div>
        <SingleSelectOption value="1" label="option one" />
        <div>invalid two</div>
        <SingleSelectOption value="2" label="option two" />
        <div>invalid three</div>
        <SingleSelectOption value="3" label="option three" />
    </SingleSelect>
)
WithInvalidFilterableOptions.args = {
    filterable: true,
    noMatchText: 'No match found',
}

export const WithInitialFocus = EmptyTemplate.bind({})
WithInitialFocus.args = { initialFocus: true }
WithInitialFocus.parameters = { docs: { disable: true } }
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

export const WithMoreThanTenOptions = (args) => (
    <SingleSelect {...args}>
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
        <SingleSelectOption value="4" label="option four" />
        <SingleSelectOption value="5" label="option five" />
        <SingleSelectOption value="6" label="option six" />
        <SingleSelectOption value="7" label="option seven" />
        <SingleSelectOption value="8" label="option eight" />
        <SingleSelectOption value="9" label="option nine" />
        <SingleSelectOption value="10" label="option ten" />
        <SingleSelectOption value="11" label="option eleven" />
        <SingleSelectOption value="12" label="option twelve" />
    </SingleSelect>
)

export const WithMoreThanThreeOptionsAndA100PxMaxHeight = (args) => (
    <SingleSelect {...args}>
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
        <SingleSelectOption value="4" label="option four" />
        <SingleSelectOption value="5" label="option five" />
        <SingleSelectOption value="6" label="option six" />
        <SingleSelectOption value="7" label="option seven" />
        <SingleSelectOption value="8" label="option eight" />
        <SingleSelectOption value="9" label="option nine" />
        <SingleSelectOption value="10" label="option ten" />
        <SingleSelectOption value="11" label="option eleven" />
        <SingleSelectOption value="12" label="option twelve" />
    </SingleSelect>
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
    ...WithOptionsAndASelection.args,
}
WithOptionsASelectionAndDisabled.storyName =
    'With options, a selection and disabled'

export const WithPrefix = WithOptionsTemplate.bind({})
WithPrefix.args = { prefix: 'Prefix text' }

export const WithPrefixAndSelection = WithOptionsTemplate.bind({})
WithPrefixAndSelection.args = {
    ...WithPrefix.args,
    ...WithOptionsAndASelection.args,
}

export const WithRTL = (args) => {
    // as options are rendered in Portal, the body dir (of the iframe) needs to be set to 'rtl'
    useEffect(() => {
        document.body.dir = 'rtl'
        return () => {
            document.body.dir = 'ltr'
        }
    }, [])

    return (
        <div dir="rtl">
            <SingleSelect {...args}>
                <SingleSelectOption value="1" label="الخيار 1" />
                <SingleSelectOption value="2" label="الخيار 2" />
                <SingleSelectOption value="3" label="الخيار 3" />
            </SingleSelect>
        </div>
    )
}
WithRTL.args = {
    prefix: 'نص البادئة',
    ...WithOptionsAndASelection.args,
}
WithRTL.storyName = 'RTL Text'

export const WithPlaceholder = WithOptionsTemplate.bind({})
WithPlaceholder.args = { placeholder: 'Placeholder text' }

export const WithPlaceholderAndSelection = WithOptionsTemplate.bind({})
WithPlaceholderAndSelection.args = {
    ...WithPlaceholder.args,
    ...WithOptionsAndASelection.args,
}

export const WithDisabledOptionAndOnChange = (args) => (
    <SingleSelect {...args}>
        <SingleSelectOption value="1" label="option one" />
        <SingleSelectOption value="2" label="option two" />
        <SingleSelectOption value="3" label="option three" />
        <SingleSelectOption value="4" label="disabled option" disabled />
    </SingleSelect>
)
WithDisabledOptionAndOnChange.storyName = 'With disabled option and onChange'

export const WithClearButtonSelectionAndOnChange = WithOptionsTemplate.bind({})
WithClearButtonSelectionAndOnChange.args = {
    ...WithOptionsAndASelection.args,
    clearable: true,
    clearText: 'Clear',
}
WithClearButtonSelectionAndOnChange.storyName =
    'With clear button, selection and onChange'

export const WithFilterField = WithOptionsTemplate.bind({})
WithFilterField.args = { ...WithInvalidFilterableOptions.args }

export const DefaultPosition = (args) => (
    <>
        <SingleSelect {...args}>
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
            <SingleSelectOption value="4" label="option four" />
            <SingleSelectOption value="5" label="option five" />
            <SingleSelectOption value="6" label="option six" />
            <SingleSelectOption value="7" label="option seven" />
            <SingleSelectOption value="8" label="option eight" />
            <SingleSelectOption value="9" label="option nine" />
            <SingleSelectOption value="10" label="option ten" />
            <SingleSelectOption value="11" label="option eleven" />
            <SingleSelectOption value="12" label="option twelve" />
        </SingleSelect>
        <style jsx>{`
            :global(#root) {
                margin-bottom: 2000px;
            }
        `}</style>
    </>
)

export const FlippedPosition = (args) => (
    <>
        <SingleSelect {...args}>
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
            <SingleSelectOption value="4" label="option four" />
            <SingleSelectOption value="5" label="option five" />
            <SingleSelectOption value="6" label="option six" />
            <SingleSelectOption value="7" label="option seven" />
            <SingleSelectOption value="8" label="option eight" />
            <SingleSelectOption value="9" label="option nine" />
            <SingleSelectOption value="10" label="option ten" />
            <SingleSelectOption value="11" label="option eleven" />
            <SingleSelectOption value="12" label="option twelve" />
        </SingleSelect>
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

export const ShiftedIntoView = (args) => (
    <>
        <SingleSelect {...args}>
            <SingleSelectOption value="1" label="option one" />
            <SingleSelectOption value="2" label="option two" />
            <SingleSelectOption value="3" label="option three" />
            <SingleSelectOption value="4" label="option four" />
            <SingleSelectOption value="5" label="option five" />
            <SingleSelectOption value="6" label="option six" />
            <SingleSelectOption value="7" label="option seven" />
            <SingleSelectOption value="8" label="option eight" />
            <SingleSelectOption value="9" label="option nine" />
            <SingleSelectOption value="10" label="option ten" />
            <SingleSelectOption value="11" label="option eleven" />
            <SingleSelectOption value="12" label="option twelve" />
        </SingleSelect>
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
