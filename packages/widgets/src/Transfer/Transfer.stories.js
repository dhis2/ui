import propTypes from '@dhis2/prop-types'
import { SingleSelectOption, Tab, TabBar } from '@dhis2/ui-core'
import React, { useEffect, useState } from 'react'
import { SingleSelectField, Transfer, TransferOption } from '../index.js'

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

export default { title: 'Transfer', component: Transfer }

const StatefulTemplate = ({ initiallySelected, ...args }) => {
    const [selected, setSelected] = useState(initiallySelected)
    const onChange = payload => setSelected(payload.selected)

    return <Transfer {...args} selected={selected} onChange={onChange} />
}

StatefulTemplate.defaultProps = {
    initiallySelected: [],
}

StatefulTemplate.propTypes = {
    initiallySelected: propTypes.array,
}

export const SingleSelection = StatefulTemplate.bind({})
SingleSelection.args = {
    maxSelections: 1,
    options,
}

export const Multiple = StatefulTemplate.bind({})
Multiple.args = {
    options: options.slice(0, 3),
}

export const Header = StatefulTemplate.bind({})
Header.args = {
    leftHeader: <h3>Header on the left side</h3>,
    rightHeader: <h4>Header on the right side</h4>,
    options,
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
    options,
}

export const Filtered = StatefulTemplate.bind({})
Filtered.args = {
    filterable: true,
    initialSearchTerm: 'ANC',
    options,
}

export const FilteredPicked = StatefulTemplate.bind({})
FilteredPicked.args = {
    filterablePicked: true,
    initialSearchTermPicked: 'ANC',
    initiallySelected: options.map(({ value }) => value),
    options,
}

export const FilteredPlaceholder = StatefulTemplate.bind({})
FilteredPlaceholder.args = {
    filterable: true,
    filterLabel: 'Filter with placeholder',
    filterPlaceholder: 'Search',
    options,
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

export const CustomListOptions = args => (
    <>
        <RenderOptionCode />
        <StatefulTemplate {...args} />
    </>
)
CustomListOptions.args = {
    renderOption,
    options: options.slice(0, 2),
    initiallySelected: options.slice(0, 2).map(({ value }) => value),
}

export const IndividualCustomOption = StatefulTemplate.bind({})
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
    options,
}

export const CustomButtonText = StatefulTemplate.bind({})
CustomButtonText.args = {
    addAllText: 'Add all',
    addIndividualText: 'Add individual',
    removeAllText: 'Remove all',
    removeIndividualText: 'Remove individual',
    options,
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
    options,
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
    options,
}

export const DifferentWidths = StatefulTemplate.bind({})
DifferentWidths.args = {
    optionsWidth: '500px',
    selectedWidth: '240px',
    options,
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

const sliceLength = 6

export const InfiniteLoading = () => {
    const [loading, setLoading] = useState(false)
    const [optionsLength, setOptionsLength] = useState(sliceLength)
    const [optionsSlice, setOptionsSlice] = useState(
        options.slice(0, optionsLength)
    )
    const [selected, setSelected] = useState()
    const onChange = payload => setSelected(payload.selected)

    useEffect(() => {
        if (sliceLength !== optionsLength) {
            setTimeout(() => {
                setOptionsSlice(options.slice(0, optionsLength))
                setLoading(false)
            }, 1000)

            setLoading(true)
        }
    }, [optionsLength])

    return (
        <Transfer
            loading={loading}
            options={optionsSlice}
            selected={selected}
            onChange={onChange}
            onEndReached={() => {
                if (loading) return

                const newOptionsLength = Math.min(
                    optionsLength + sliceLength,
                    options.length
                )

                setOptionsLength(newOptionsLength)
            }}
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
