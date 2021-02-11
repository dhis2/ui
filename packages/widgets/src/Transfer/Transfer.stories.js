import propTypes from '@dhis2/prop-types'
import { SingleSelectOption, Tab, TabBar } from '@dhis2/ui-core'
import React, { useEffect, useState } from 'react'
import { SingleSelectField, Transfer, TransferOption } from '../index.js'
import { defaultRenderOption, defaultFilterCallback } from './Transfer/index.js'

const subtitle = 'Allows users to select options from a list'

const description = `
#### Usage

Use a transfer component wherever a user needs to make a complex selection. Simple selections can be achieved with checkboxes, radio buttons or a select.

There are use-cases that are particularly suitable for a transfer component:

- when a user needs to select some options from several different groups at the same time
- if the selection needs to have a defined order
- when the user will be interacting with and editing the selection often
- if a user needs to easily compare non-selected and selected options
- if a user is making selections as part of a complex flow, especially where there are many options to choose from

#### Terminology

This component has to differentiate between different types of options,
here's an explanation of their meaning:

- source options: These are options listed on the left and are available for selection
- picked options: These options have been selected by the user and are on the right side
- highlighted option: These are visually highlighted options than can be on either side and are ready for transferral with the action buttons to the other side  
- filtered options: These are the displayed source options filtered by a search term or a custom search algorithm. The api surface uses "selected" for "picked" to be consistent with the rest of the library

#### More details

See more about the options available for Transfers at [Design System: Transfer](https://github.com/dhis2/design-system/blob/master/organisms/transfer.md#transfer).

\`\`\`js
import { Transfer, TransferOption } from '@dhis2/ui'
\`\`\`
`

const options = [
    {
        label: 'ANC 1st visit',
        value: 'anc_1st_visit',
    },
    {
        label: 'ANC 2nd visit',
        value: 'anc_2nd_visit',
    },
    {
        label: 'ANC 3rd visit',
        value: 'anc_3rd_visit',
    },
    {
        label: 'ANC 4th or more visits',
        value: 'anc_4th_or_more_visits',
    },
    {
        label: 'ARI treated with antibiotics (pneumonia) follow-up',
        value: 'ari_treated_with_antibiotics_(pneumonia)_follow-up',
    },
    {
        label: 'ARI treated with antibiotics (pneumonia) new',
        value: 'ari_treated_with_antibiotics_(pneumonia)_new',
    },
    {
        label: 'ARI treated with antibiotics (pneumonia) referrals',
        value: 'ari_treated_with_antibiotics_(pneumonia)_referrals',
    },
    {
        label: 'ARI treated without antibiotics (cough) follow-up',
        value: 'ari_treated_without_antibiotics_(cough)_follow-up',
    },
    {
        label: 'ARI treated without antibiotics (cough) new',
        value: 'ari_treated_without_antibiotics_(cough)_new',
    },
    {
        label: 'ARI treated without antibiotics (cough) referrals',
        value: 'ari_treated_without_antibiotics_(cough)_referrals',
    },
    {
        label: 'ART No clients who stopped TRT due to TRT failure',
        value: 'art_no_clients_who_stopped_trt_due_to_trt_failure',
    },
    {
        label:
            'ART No clients who stopped TRT due to adverse clinical status/event',
        value:
            'art_no_clients_who_stopped_trt_due_to_adverse_clinical_status/event',
    },
    {
        label: 'ART No clients with change of regimen due to drug toxicity',
        value: 'art_no_clients_with_change_of_regimen_due_to_drug_toxicity',
    },
    {
        label: 'ART No clients with new adverse drug reaction',
        value: 'art_no_clients_with_new_adverse_drug_reaction',
    },
    {
        label: 'ART No started Opportunist Infection prophylaxis',
        value: 'art_no_started_opportunist_infection_prophylaxis',
    },
    {
        label: 'ART clients with new adverse clinical event',
        value: 'art_clients_with_new_adverse_clinical_event',
    },
    {
        label: 'ART defaulters',
        value: 'art_defaulters',
    },
    {
        label: 'ART enrollment stage 1',
        value: 'art_enrollment_stage_1',
    },
    {
        label: 'ART enrollment stage 2',
        value: 'art_enrollment_stage_2',
    },
    {
        label: 'ART enrollment stage 3',
        value: 'art_enrollment_stage_3',
    },
    {
        label: 'ART enrollment stage 4',
        value: 'art_enrollment_stage_4',
    },
    {
        label: 'ART entry point: No PMTCT',
        value: 'art_entry_point:_no_pmtct',
    },
]

/**
 * Default args are needed because storybook currently struggles with
 * functions as default props: they are sent to the component as strings when
 * `{...args}` is spread into the component in the Template, which causes an
 * error that looks like 'renderOption is not a function'
 *
 * https://github.com/storybookjs/storybook/issues/12455#issuecomment-702763930
 */
export default {
    title: 'Forms/Transfer',
    component: Transfer,
    parameters: {
        componentSubtitle: subtitle,
        docs: {
            description: { component: description },
            source: { type: 'code' },
        },
    },
    // Default args:
    args: {
        renderOption: defaultRenderOption,
        filterCallback: defaultFilterCallback,
        filterCallbackPicked: defaultFilterCallback,
        options: options,
    },
}

const StatefulTemplate = ({ initiallySelected, ...args }) => {
    const [selected, setSelected] = useState(initiallySelected)
    const onChange = payload => setSelected(payload.selected)

    return <Transfer {...args} selected={selected} onChange={onChange} />
}
StatefulTemplate.defaultProps = { initiallySelected: [] }
StatefulTemplate.propTypes = { initiallySelected: propTypes.array }

export const SingleSelection = StatefulTemplate.bind({})
SingleSelection.args = { maxSelections: 1 }

export const Multiple = StatefulTemplate.bind({})
Multiple.args = { options: options.slice(0, 3) }

export const Header = StatefulTemplate.bind({})
Header.args = {
    leftHeader: <h3>Header on the left side</h3>,
    rightHeader: <h4>Header on the right side</h4>,
}

export const OptionsFooter = StatefulTemplate.bind({})
OptionsFooter.args = {
    leftFooter: (
        <a
            href="#"
            style={{
                color: 'grey',
                padding: '8px 0',
                display: 'block',
            }}
        >
            Reload list
        </a>
    ),
}

export const Filtered = StatefulTemplate.bind({})
Filtered.args = {
    filterable: true,
    initialSearchTerm: 'ANC',
}

export const FilteredPicked = StatefulTemplate.bind({})
FilteredPicked.args = {
    filterablePicked: true,
    initialSearchTermPicked: 'ANC',
    initiallySelected: options.map(({ value }) => value),
}

export const FilteredPlaceholder = StatefulTemplate.bind({})
FilteredPlaceholder.args = {
    filterable: true,
    filterLabel: 'Filter with placeholder',
    filterPlaceholder: 'Search',
}

const renderOption = ({ label, value, onClick, highlighted, selected }) => (
    <p
        onClick={event => onClick({ label, value }, event)}
        style={{
            background: highlighted ? 'green' : 'blue',
            color: selected ? 'orange' : 'white',
        }}
    >
        Custom: {label} (label), {value} (value)
    </p>
)

const RenderOptionCode = () => (
    <>
        <strong>Custom option code:</strong>
        <code>
            <pre>{`const renderOption = ({ label, value, onClick, highlighted, selected }) => (
                <p
                    onClick={event => onClick({ label, value }, event)}
                    style={{
                        background: highlighted ? 'green' : 'blue',
                        color: selected ? 'orange' : 'white',
                    }}
                >
                    Custom: {label} (label), {value} (value)
                </p>
            )`}</pre>
        </code>
    </>
)

const StatefulTemplateCustomRenderOption = ({ initiallySelected, ...args }) => {
    const [selected, setSelected] = useState(initiallySelected)
    const onChange = payload => setSelected(payload.selected)

    return <Transfer {...args} selected={selected} onChange={onChange} />
}
StatefulTemplateCustomRenderOption.defaultProps = {
    initiallySelected: [],
}
StatefulTemplateCustomRenderOption.propTypes = {
    initiallySelected: propTypes.array,
}

export const CustomListOptions = args => (
    <>
        <RenderOptionCode />
        <StatefulTemplateCustomRenderOption {...args} />
    </>
)
CustomListOptions.args = {
    renderOption,
    options: options.slice(0, 2),
    initiallySelected: options.slice(0, 2).map(({ value }) => value),
}

export const IndividualCustomOption = StatefulTemplateCustomRenderOption.bind(
    {}
)
IndividualCustomOption.args = {
    addAllText: 'Add all',
    addIndividualText: 'Add individual',
    removeAllText: 'Remove all',
    removeIndividualText: 'Remove individual',
    // eslint-disable-next-line react/display-name
    renderOption: option => {
        if (option.value === options[0].value) {
            return renderOption(option)
        }

        return <TransferOption {...option} />
    },
}

export const CustomButtonText = StatefulTemplate.bind({})
CustomButtonText.args = {
    addAllText: 'Add all',
    addIndividualText: 'Add individual',
    removeAllText: 'Remove all',
    removeIndividualText: 'Remove individual',
}

export const SourceEmptyPlaceholder = StatefulTemplate.bind({})
SourceEmptyPlaceholder.args = {
    sourceEmptyPlaceholder: (
        <p style={{ textAlign: 'center' }}>
            No options found.
            <br />
            <a href="#" style={{ color: 'grey' }}>
                Add option
            </a>
        </p>
    ),
    options: [],
}

export const PickedEmptyComponent = StatefulTemplate.bind({})
PickedEmptyComponent.args = {
    selectedEmptyComponent: (
        <p style={{ textAlign: 'center' }}>
            You have not selected anything yet
            <br />
        </p>
    ),
}

export const Reordering = StatefulTemplate.bind({})
Reordering.args = {
    enableOrderChange: true,
    options: options.slice(0, 4),
    initiallySelected: options.slice(0, 4).map(({ value }) => value),
}

export const IncreasedOptionsHeight = StatefulTemplate.bind({})
IncreasedOptionsHeight.args = {
    maxSelections: Infinity,
    filterable: true,
    height: '400px',
}

export const DifferentWidths = StatefulTemplate.bind({})
DifferentWidths.args = {
    optionsWidth: '500px',
    selectedWidth: '240px',
}

const createCustomFilteringInHeader = hideFilterInput => {
    const relativePeriods = options.slice(0, 10).map((option, index) => ({
        ...option,
        relativePeriod: true,
        year: index < 5 ? '2020' : '2019',
    }))

    const fixedPeriods = options.slice(10, 20).map((option, index) => ({
        ...option,
        relativePeriod: false,
        year: index < 5 ? '2020' : '2019',
    }))

    const allOptions = [...relativePeriods, ...fixedPeriods]

    /* eslint-disable react/prop-types */
    const Header = ({
        onClick,
        relativePeriod,
        selectedYear,
        onSelectedYearChange,
    }) => (
        <>
            <TabBar>
                <Tab
                    selected={relativePeriod}
                    onClick={() => onClick({ relativePeriod: true })}
                >
                    Relative periods
                </Tab>

                <Tab
                    selected={!relativePeriod}
                    onClick={() => onClick({ relativePeriod: false })}
                >
                    Fixed periods
                </Tab>
            </TabBar>

            <p style={{ margin: 0, height: 10 }} />

            <SingleSelectField
                label="Year"
                selected={selectedYear}
                onChange={onSelectedYearChange}
            >
                <SingleSelectOption value="2020" label="2020" />
                <SingleSelectOption value="2019" label="2019" />
            </SingleSelectField>
        </>
    )
    /* eslint-enable react/prop-types */

    const CustomTransfer = props => {
        const [filter, setFilter] = useState('')
        const [relativePeriod, setRelativePeriod] = useState(true)
        const [year, setYear] = useState('2020')
        const filterCallback = (options, filter) => {
            const optionsWithYear = options.filter(
                option => option.year === year
            )

            const optionsWithPeriod = optionsWithYear.filter(
                option => option.relativePeriod === relativePeriod
            )

            if (filter === '') return optionsWithPeriod

            return optionsWithPeriod.filter(
                ({ label }) => label.indexOf(filter) !== -1
            )
        }

        const header = (
            <Header
                relativePeriod={relativePeriod}
                selectedYear={year}
                onSelectedYearChange={({ selected }) => setYear(selected)}
                onClick={({ relativePeriod: newRelativePeriod }) =>
                    setRelativePeriod(newRelativePeriod)
                }
            />
        )

        return (
            <Transfer
                {...props}
                options={allOptions}
                filterable
                hideFilterInput={hideFilterInput}
                searchTerm={filter}
                filterCallback={filterCallback}
                leftHeader={header}
                rightHeader={
                    <p>
                        <b>Selected Periods</b>
                    </p>
                }
                onFilterChange={({ value }) => setFilter(value)}
                height="400px"
                filterLabel="Filter options"
                filterPlaceholder="Search"
            />
        )
    }

    // eslint-disable-next-line react/display-name, react/prop-types
    return ({ initiallySelected, ...args }) => {
        const [selected, setSelected] = useState(initiallySelected)
        const onChange = payload => setSelected(payload.selected)

        return (
            <CustomTransfer {...args} selected={selected} onChange={onChange} />
        )
    }
}

export const CustomFilteringWithFilterInput = createCustomFilteringInHeader(
    false
)

export const CustomFilteringWithoutFilterInput = createCustomFilteringInHeader(
    true
)

const optionsPool = options
const pageSize = 5

/*
 * The page size is: 5
 * To keep the code as small as possible, handling selecting items is not
   included
 */
export const InfiniteLoading = args => {
    useEffect(() => {
        console.clear()
    }, [])

    // state for whether the next page's options are being loaded
    const [loading, setLoading] = useState(false)
    // captures the current page
    const [page, setPage] = useState(0)
    // all options (incl. available AND selected options)
    const [options, setOptions] = useState([])
    // selected options
    const [selected] = useState(
        // second page is already selected
        optionsPool.slice(pageSize, pageSize * 2).map(({ value }) => value)
    )

    const onEndReached = () => {
        // do nothing when loading already
        if (loading) return
        setPage(page + 1)
    }

    // fake fetch request
    const fetchOptions = nextPage =>
        new Promise(resolve =>
            setTimeout(() => {
                const nextOptions = optionsPool.slice(
                    options.length,
                    nextPage * pageSize
                )
                resolve(nextOptions)
            }, 2000)
        )

    const loadNextOptions = async () => {
        setLoading(true)

        const nextOptions = await fetchOptions(page)
        setOptions([...options, ...nextOptions])

        setLoading(false)

        const allAlreadySelected =
            nextOptions.length !== 0 &&
            nextOptions.every(nextOption => {
                const { value } = nextOption
                return selected.includes(value)
            })

        if (allAlreadySelected) {
            onEndReached()
        }
    }

    useEffect(() => {
        // prevent initial call
        if (page > 0) {
            loadNextOptions()
        }
    }, [page])

    return (
        <Transfer
            {...args}
            loading={loading}
            options={options}
            selected={selected}
            onChange={() => null /* noop */}
            onEndReached={onEndReached}
        />
    )
}

export const LoadingSource = StatefulTemplate.bind({})
LoadingSource.args = {
    loading: true,
    options: options.slice(0, 3),
}

export const LoadingPicked = StatefulTemplate.bind({})
LoadingPicked.args = {
    loadingPicked: true,
    options: options.slice(0, 3),
    initiallySelected: options.slice(0, 2).map(({ value }) => value),
}
