import { SingleSelectOption, Tab, TabBar } from '@dhis2/ui-core'
import React, { useEffect, useState } from 'react'
import { SingleSelectField, Transfer, TransferOption } from '../index.js'

/* eslint-disable */

/**
 * This was throwing an react/display-name error in eslint, which is correct.
 * Since it's not critical, I disabled the display-name rule, which caused an
 * error stating that display-name was disabled incorrectly. So the only way
 * to resolve this is either to use JSX, or to disable eslint for this area.
 * For the sake of getting the new linting active I'll disable it, but the
 * proper eventual solution would be to use JSX here.
 */

const statefulDecorator = ({ initialState = [] } = {}) => fn =>
    React.createElement(() => {
        const [selected, setSelected] = useState(initialState)

        return fn({
            selected,
            onChange: payload => setSelected(payload.selected),
        })
    })
/* eslint-enable */
/* eslint-disable react/prop-types */

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

export default { title: 'Transfer', decorators: [statefulDecorator()] }

export const SingleSelection = ({ selected, onChange }) => (
    <Transfer
        maxSelections={1}
        onChange={onChange}
        selected={selected}
        options={options}
    />
)

export const Multiple = ({ selected, onChange }) => (
    <Transfer
        onChange={onChange}
        selected={selected}
        options={options.slice(0, 3)}
    />
)

export const Header = ({ selected, onChange }) => (
    <Transfer
        onChange={onChange}
        selected={selected}
        leftHeader={<h3>Header on the left side</h3>}
        rightHeader={<h4>Header on the right side</h4>}
        options={options}
    />
)

export const OptionsFooter = ({ selected, onChange }) => (
    <Transfer
        onChange={onChange}
        selected={selected}
        leftFooter={
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
        }
        options={options}
    />
)

export const Filtered = ({ selected, onChange }) => (
    <Transfer
        filterable
        onChange={onChange}
        selected={selected}
        initialSearchTerm="ANC"
        leftHeader={<h3>Header on the left side</h3>}
        rightHeader={<h4>Header on the right side</h4>}
        options={options}
    />
)

export const FilteredPicked = ({ selected, onChange }) => (
    <Transfer
        filterablePicked
        onChange={onChange}
        selected={selected}
        initialSearchTermPicked="ANC"
        leftHeader={<h3>Header on the left side</h3>}
        rightHeader={<h4>Header on the right side</h4>}
        options={options}
    />
)

FilteredPicked.story = {
    decorators: [
        statefulDecorator({
            initialState: options.map(({ value }) => value),
        }),
    ],
}

export const FilterPlaceholder = ({ selected, onChange }) => (
    <Transfer
        filterable
        onChange={onChange}
        selected={selected}
        options={options}
        filterLabel="Filter with placeholder"
        filterPlaceholder="Search"
    />
)

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

export const CustomListOptions = ({ selected, onChange }) => (
    <>
        <RenderOptionCode />

        <Transfer
            onChange={onChange}
            selected={selected}
            renderOption={renderOption}
            options={options}
        />
    </>
)

CustomListOptions.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 2).map(({ value }) => value),
        }),
    ],
}

export const IndividualCustomOption = ({ selected, onChange }) => (
    <Transfer
        onChange={onChange}
        selected={selected}
        addAllText="Add all"
        addIndividualText="Add individual"
        removeAllText="Remove all"
        removeIndividualText="Remove individual"
        renderOption={option => {
            if (option.value === options[0].value) {
                return renderOption(option)
            }

            return <TransferOption {...option} />
        }}
        options={options}
    />
)

export const CustomButtonText = ({ selected, onChange }) => (
    <Transfer
        onChange={onChange}
        selected={selected}
        addAllText="Add all"
        addIndividualText="Add individual"
        removeAllText="Remove all"
        removeIndividualText="Remove individual"
        options={options}
    />
)

export const SourceEmptyPlaceholder = ({ onChange }) => (
    <Transfer
        onChange={onChange}
        options={[]}
        sourceEmptyPlaceholder={
            <p style={{ textAlign: 'center' }}>
                No options found.
                <br />
                <a href="#" style={{ color: 'grey' }}>
                    Add option
                </a>
            </p>
        }
    />
)

export const PickedEmptyComponent = ({ selected, onChange }) => (
    <Transfer
        selected={selected}
        onChange={onChange}
        selectedEmptyComponent={
            <p style={{ textAlign: 'center' }}>
                You have not selected anything yet
                <br />
            </p>
        }
        options={options}
    />
)

export const Reordering = ({ selected, onChange }) => (
    <Transfer
        enableOrderChange
        onChange={onChange}
        selected={selected}
        options={options.slice(0, 4)}
    />
)

Reordering.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 4).map(({ value }) => value),
        }),
    ],
}

export const IncreasedOptionsHeight = ({ selected, onChange }) => (
    <div style={{ maxHeight: 400 }}>
        <Transfer
            maxSelections={Infinity}
            filterable
            onChange={onChange}
            selected={selected}
            height="400px"
            leftHeader={<h3>Header on the left side</h3>}
            rightHeader={<h4>Header on the right side</h4>}
            options={options}
        />
    </div>
)

export const DifferentWidths = ({ selected, onChange }) => (
    <Transfer
        filterable
        onChange={onChange}
        selected={selected}
        initialSearchTerm="Ba"
        leftHeader={<h3>Header on the left side</h3>}
        rightHeader={<h4>Header on the right side</h4>}
        optionsWidth="500px"
        selectedWidth="240px"
        options={options}
    />
)

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

    // eslint-disable-next-line react/display-name
    return ({ selected, onChange }) => (
        <CustomTransfer
            options={allOptions}
            onChange={onChange}
            selected={selected}
        />
    )
}

export const CustomFilteringWithFilterInput = createCustomFilteringInHeader(
    false
)

export const CustomFilteringWithoutFilterInput = createCustomFilteringInHeader(
    true
)

const sliceLength = 6

export const InfiniteLoading = ({ selected, onChange }) => {
    const [loading, setLoading] = useState(false)
    const [optionsLength, setOptionsLength] = useState(sliceLength)
    const [optionsSlice, setOptionsSlice] = useState(
        options.slice(0, optionsLength)
    )

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

export const LoadingSource = ({ selected, onChange }) => (
    <Transfer
        loading
        onChange={onChange}
        selected={selected}
        options={options.slice(0, 3)}
        leftHeader={<h4>Left header</h4>}
        leftFooter={<h4>Left footer</h4>}
    />
)

export const LoadingPicked = ({ selected, onChange }) => (
    <Transfer
        loadingPicked
        onChange={onChange}
        selected={selected}
        options={options.slice(0, 3)}
        rightHeader={<h4>Right header</h4>}
        rightFooter={<h4>Right footer</h4>}
    />
)

LoadingPicked.story = {
    decorators: [
        statefulDecorator({
            initialState: options.slice(0, 2).map(({ value }) => value),
        }),
    ],
}
