/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import {
    SingleSelectField,
    SingleSelectOption,
    Tab,
    TabBar,
    Transfer,
    TransferOption,
} from '../index'

export default { title: 'Transfer' }

const StatefulWrapper = ({ children, initialState }) => {
    const initialSelected = initialState.map(child => child.props)
    const [selected, setSelected] = useState(initialSelected)

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
    <TransferOption
        label="ANC 1st visit"
        value="ANC 1st visit"
        key="ANC 1st visit"
    />,
    <TransferOption
        label="ANC 2nd visit"
        value="ANC 2nd visit"
        key="ANC 2nd visit"
    />,
    <TransferOption
        label="ANC 3rd visit"
        value="ANC 3rd visit"
        key="ANC 3rd visit"
    />,
    <TransferOption
        label="ANC 4th or more visits"
        value="ANC 4th or more visits"
        key="ANC 4th or more visits"
    />,
    <TransferOption
        label="ARI treated with antibiotics (pneumonia) follow-up"
        value="ARI treated with antibiotics (pneumonia) follow-up"
        key="ARI treated with antibiotics (pneumonia) follow-up"
    />,
    <TransferOption
        label="ARI treated with antibiotics (pneumonia) new"
        value="ARI treated with antibiotics (pneumonia) new"
        key="ARI treated with antibiotics (pneumonia) new"
    />,
    <TransferOption
        label="ARI treated with antibiotics (pneumonia) referrals"
        value="ARI treated with antibiotics (pneumonia) referrals"
        key="ARI treated with antibiotics (pneumonia) referrals"
    />,
    <TransferOption
        label="ARI treated without antibiotics (cough) follow-up"
        value="ARI treated without antibiotics (cough) follow-up"
        key="ARI treated without antibiotics (cough) follow-up"
    />,
    <TransferOption
        label="ARI treated without antibiotics (cough) new"
        value="ARI treated without antibiotics (cough) new"
        key="ARI treated without antibiotics (cough) new"
    />,
    <TransferOption
        label="ARI treated without antibiotics (cough) referrals"
        value="ARI treated without antibiotics (cough) referrals"
        key="ARI treated without antibiotics (cough) referrals"
    />,
    <TransferOption
        label="ART No clients who stopped TRT due to TRT failure"
        value="ART No clients who stopped TRT due to TRT failure"
        key="ART No clients who stopped TRT due to TRT failure"
    />,
    <TransferOption
        label="ART No clients who stopped TRT due to adverse clinical status/event"
        value="ART No clients who stopped TRT due to adverse clinical status/event"
        key="ART No clients who stopped TRT due to adverse clinical status/event"
    />,
    <TransferOption
        label="ART No clients with change of regimen due to drug toxicity"
        value="ART No clients with change of regimen due to drug toxicity"
        key="ART No clients with change of regimen due to drug toxicity"
    />,
    <TransferOption
        label="ART No clients with new adverse drug reaction"
        value="ART No clients with new adverse drug reaction"
        key="ART No clients with new adverse drug reaction"
    />,
    <TransferOption
        label="ART No started Opportunist Infection prophylaxis"
        value="ART No started Opportunist Infection prophylaxis"
        key="ART No started Opportunist Infection prophylaxis"
    />,
    <TransferOption
        label="ART clients with new adverse clinical event"
        value="ART clients with new adverse clinical event"
        key="ART clients with new adverse clinical event"
    />,
    <TransferOption
        label="ART defaulters"
        value="ART defaulters"
        key="ART defaulters"
    />,
    <TransferOption
        label="ART enrollment stage 1"
        value="ART enrollment stage 1"
        key="ART enrollment stage 1"
    />,
    <TransferOption
        label="ART enrollment stage 2"
        value="ART enrollment stage 2"
        key="ART enrollment stage 2"
    />,
    <TransferOption
        label="ART enrollment stage 3"
        value="ART enrollment stage 3"
        key="ART enrollment stage 3"
    />,
    <TransferOption
        label="ART enrollment stage 4"
        value="ART enrollment stage 4"
        key="ART enrollment stage 4"
    />,
    <TransferOption
        label="ART entry point: No PMTCT"
        value="ART entry point: No PMTCT"
        key="ART entry point: No PMTCT"
    />,
]

export const SingleSelection = () => (
    <StatefulWrapper>
        <Transfer
            maxSelections={1}
            onChange={() => console.log('Will be overriden')}
        >
            {options}
        </Transfer>
    </StatefulWrapper>
)

export const Multiple = () => (
    <StatefulWrapper>
        <Transfer onChange={() => console.log('Will be overriden')}>
            {options}
        </Transfer>
    </StatefulWrapper>
)

export const Header = () => (
    <StatefulWrapper>
        <Transfer
            onChange={() => console.log('Will be overriden')}
            leftHeader={<h3>Header on the left side</h3>}
        >
            {options}
        </Transfer>
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
        >
            {options}
        </Transfer>
    </StatefulWrapper>
)

export const Filtered = () => (
    <StatefulWrapper>
        <Transfer
            filterable
            onChange={() => console.log('Will be overriden by StatefulWrapper')}
            initialSearchTerm="ANC"
            leftHeader={<h3>Header on the left side</h3>}
        >
            {options}
        </Transfer>
    </StatefulWrapper>
)

const CustomOption = ({ label, value, onClick, highlighted }) => (
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
            <pre>{`const CustomOption = ({ label, value, onClick, highlighted }) => (
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
                optionsComponent={CustomOption}
            >
                <CustomOption label="Foo" value="foo" />
                <CustomOption label="Bar" value="bar" />
                <CustomOption label="Baz" value="baz" />
                <CustomOption label="Fo" value="foo" />
                <CustomOption label="Ba" value="bar" />
                <CustomOption label="Ba" value="baz" />
            </Transfer>
        </StatefulWrapper>
    </>
)

export const CustomButtonText = () => (
    <StatefulWrapper>
        <Transfer
            onChange={() => console.log('Will be overriden')}
            addAllText="Add all"
            addIndividualText="Add individual"
            removeAllText="Remove all"
            removeIndividualText="Remove individual"
        >
            {options}
        </Transfer>
    </StatefulWrapper>
)

export const SourceEmptyPlaceholder = () => (
    <Transfer
        onChange={() => console.log('Will be overriden')}
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
    >
        {options}
    </Transfer>
)

export const Reordering = () => (
    <StatefulWrapper initialState={options.slice(0, 4)}>
        <Transfer enableOrderChange onChange={() => null}>
            {options.slice(0, 4)}
        </Transfer>
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
            >
                {options}
            </Transfer>
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
            optionsWidth="500px"
            selectedWidth="240px"
        >
            {options}
        </Transfer>
    </StatefulWrapper>
)

const createCustomFilteringInHeader = hideFilterInput => {
    const relativePeriods = React.Children.map(
        options.slice(0, 10),
        (child, index) =>
            React.cloneElement(child, {
                additionalData: {
                    relativePeriod: true,
                    year: index < 5 ? '2020' : '2019',
                },
            })
    )

    const fixedPeriods = React.Children.map(
        options.slice(10, 20),
        (child, index) =>
            React.cloneElement(child, {
                additionalData: {
                    relativePeriod: false,
                    year: index < 5 ? '2020' : '2019',
                },
            })
    )

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
        const [year, setYear] = useState({ label: '2020', value: '2020' })
        const filterCallback = (options, filter) => {
            const optionsWithYear = options.filter(
                option => option.year === year.value
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
                onFilterChange={({ value }) => setFilter(value)}
                height="400px"
                filterLabel="Filter options"
            />
        )
    }

    // eslint-disable-next-line react/display-name
    return () => (
        <StatefulWrapper>
            <CustomTransfer>{allOptions}</CustomTransfer>
        </StatefulWrapper>
    )
}

export const CustomFilteringWithFilterInput = createCustomFilteringInHeader(
    false
)

export const CustomFilteringWithoutFilterInput = createCustomFilteringInHeader(
    true
)
