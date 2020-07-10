/* eslint-disable react/prop-types */
import { SingleSelectOption, Tab, TabBar } from '@dhis2/ui-core'
import React, { useState } from 'react'

import { SingleSelectField, Transfer, TransferOption } from '../index.js'

export default { title: 'Transfer' }

const StatefulWrapper = ({ children, initialState }) => {
    const [selected, setSelected] = useState(initialState)

    return React.Children.map(children, child =>
        React.cloneElement(child, {
            selected,
            onChange: ({ selected }) => setSelected(selected),
        })
    )
}

StatefulWrapper.defaultProps = {
    initialState: [],
}

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

export const SingleSelection = () => (
    <StatefulWrapper>
        <Transfer
            maxSelections={1}
            onChange={() => console.log('Will be overriden')}
            options={options}
        />
    </StatefulWrapper>
)

export const Multiple = () => (
    <StatefulWrapper>
        <Transfer
            onChange={() => console.log('Will be overriden')}
            options={options.slice(0, 3)}
        />
    </StatefulWrapper>
)

export const Header = () => (
    <StatefulWrapper>
        <Transfer
            onChange={() => console.log('Will be overriden')}
            leftHeader={<h3>Header on the left side</h3>}
            rightHeader={<h4>Header on the right side</h4>}
            options={options}
        />
    </StatefulWrapper>
)

export const OptionsFooter = () => (
    <StatefulWrapper>
        <Transfer
            onChange={() => console.log('Will be overriden')}
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
    </StatefulWrapper>
)

export const Filtered = () => (
    <StatefulWrapper>
        <Transfer
            filterable
            onChange={() => console.log('Will be overriden by StatefulWrapper')}
            initialSearchTerm="ANC"
            leftHeader={<h3>Header on the left side</h3>}
            rightHeader={<h4>Header on the right side</h4>}
            options={options}
        />
    </StatefulWrapper>
)

export const FilterPlaceholder = () => (
    <StatefulWrapper>
        <Transfer
            filterable
            onChange={() => console.log('Will be overriden by StatefulWrapper')}
            options={options}
            filterLabel="Filter with placeholder"
            filterPlaceholder="Search"
        />
    </StatefulWrapper>
)

const renderOption = ({ label, value, onClick, highlighted }) => (
    <p
        onClick={event => onClick({ label, value }, event)}
        style={{ background: highlighted ? 'green' : 'blue' }}
    >
        Custom: {label} (label), {value} (value)
    </p>
)

export const CustomListOptions = () => (
    <>
        <strong>Custom option code:</strong>
        <code>
            <pre>{`const renderOption = ({ label, value, onClick, highlighted }) => (
    <p
        onClick={event => onClick({ label, value }, event)}
        style={{ background: highlighted ? 'green' : 'blue' }}
    >
        Custom: {label} (label), {value} (value)
    </p>
)`}</pre>
        </code>
        <StatefulWrapper>
            <Transfer
                onChange={() =>
                    console.log('Will be overriden by StatefulWrapper')
                }
                renderOption={renderOption}
                options={options}
            />
        </StatefulWrapper>
    </>
)

export const IndividualCustomOption = () => (
    <StatefulWrapper>
        <Transfer
            onChange={() => console.log('Will be overriden')}
            addAllText="Add all"
            addIndividualText="Add individual"
            removeAllText="Remove all"
            removeIndividualText="Remove individual"
            renderOption={args => {
                if (args.option.value === options[0].value) {
                    return renderOption(args)
                }

                return <TransferOption {...args} />
            }}
            options={options}
        />
    </StatefulWrapper>
)

export const CustomButtonText = () => (
    <StatefulWrapper>
        <Transfer
            onChange={() => console.log('Will be overriden')}
            addAllText="Add all"
            addIndividualText="Add individual"
            removeAllText="Remove all"
            removeIndividualText="Remove individual"
            options={options}
        />
    </StatefulWrapper>
)

export const SourceEmptyPlaceholder = () => (
    <Transfer
        onChange={() => console.log('Will be overriden')}
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

export const PickedEmptyComponent = () => (
    <Transfer
        onChange={() => console.log('Will be overriden')}
        selectedEmptyComponent={
            <p style={{ textAlign: 'center' }}>
                You have not selected anything yet
                <br />
            </p>
        }
        options={options}
    />
)

export const Reordering = () => (
    <StatefulWrapper
        initialState={options.slice(0, 4).map(({ value }) => value)}
    >
        <Transfer
            enableOrderChange
            onChange={() => null}
            options={options.slice(0, 4)}
        />
    </StatefulWrapper>
)

export const IncreasedOptionsHeight = () => (
    <div style={{ maxHeight: 400 }}>
        <StatefulWrapper>
            <Transfer
                maxSelections={Infinity}
                filterable
                onChange={() =>
                    console.log('Will be overriden by StatefulWrapper')
                }
                height="400px"
                leftHeader={<h3>Header on the left side</h3>}
                rightHeader={<h4>Header on the right side</h4>}
                options={options}
            />
        </StatefulWrapper>
    </div>
)

export const DifferentWidths = () => (
    <StatefulWrapper>
        <Transfer
            filterable
            onChange={() => console.log('Will be overriden by StatefulWrapper')}
            initialSearchTerm="Ba"
            leftHeader={<h3>Header on the left side</h3>}
            rightHeader={<h4>Header on the right side</h4>}
            optionsWidth="500px"
            selectedWidth="240px"
            options={options}
        />
    </StatefulWrapper>
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
    return () => (
        <StatefulWrapper>
            <CustomTransfer options={allOptions} />
        </StatefulWrapper>
    )
}

export const CustomFilteringWithFilterInput = createCustomFilteringInHeader(
    false
)

export const CustomFilteringWithoutFilterInput = createCustomFilteringInHeader(
    true
)
