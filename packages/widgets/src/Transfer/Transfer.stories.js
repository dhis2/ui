import React, { useState, useCallback } from 'react'
import { Transfer, TransferOption } from '../index.js'

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

/* eslint-disable */
const withState = (Component, initialState = []) => () => {
    const [selected, setSelected] = useState(initialState)
    const handleChange = useCallback(payload => {
        setSelected(payload.selected)
    }, [])

    return <Component selected={selected} onChange={handleChange} />
}
/* eslint-enable */

export default { title: 'Transfer' }

export const SingleSelection = withState(({ selected, onChange }) => (
    <Transfer
        maxSelections={1}
        onChange={onChange}
        selected={selected}
        options={options}
    />
))

export const Multiple = withState(({ selected, onChange }) => (
    <Transfer
        onChange={onChange}
        selected={selected}
        options={options.slice(0, 3)}
    />
))

export const Header = withState(({ selected, onChange }) => (
    <Transfer
        onChange={onChange}
        selected={selected}
        leftHeader={<h3>Header on the left side</h3>}
        rightHeader={<h4>Header on the right side</h4>}
        options={options}
    />
))

export const OptionsFooter = withState(({ selected, onChange }) => (
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
))

export const Filtered = withState(({ selected, onChange }) => (
    <Transfer
        filterable
        onChange={onChange}
        selected={selected}
        initialSearchTerm="ANC"
        leftHeader={<h3>Header on the left side</h3>}
        rightHeader={<h4>Header on the right side</h4>}
        options={options}
    />
))

export const FilteredPicked = withState(
    ({ selected, onChange }) => (
        <Transfer
            filterablePicked
            onChange={onChange}
            selected={selected}
            initialSearchTermPicked="ANC"
            leftHeader={<h3>Header on the left side</h3>}
            rightHeader={<h4>Header on the right side</h4>}
            options={options}
        />
    ),
    options.map(({ value }) => value)
)

export const FilterPlaceholder = withState(({ selected, onChange }) => (
    <Transfer
        filterable
        onChange={onChange}
        selected={selected}
        options={options}
        filterLabel="Filter with placeholder"
        filterPlaceholder="Search"
    />
))

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

export const CustomListOptions = withState(
    ({ selected, onChange }) => (
        <>
            <RenderOptionCode />

            <Transfer
                onChange={onChange}
                selected={selected}
                renderOption={renderOption}
                options={options}
            />
        </>
    ),
    options.slice(0, 2).map(({ value }) => value)
)

export const IndividualCustomOption = withState(({ selected, onChange }) => (
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
))

export const CustomButtonText = withState(({ selected, onChange }) => (
    <Transfer
        onChange={onChange}
        selected={selected}
        addAllText="Add all"
        addIndividualText="Add individual"
        removeAllText="Remove all"
        removeIndividualText="Remove individual"
        options={options}
    />
))

export const SourceEmptyPlaceholder = withState(({ onChange }) => (
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
))

export const PickedEmptyComponent = withState(({ selected, onChange }) => (
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
))

export const Reordering = withState(
    ({ selected, onChange }) => (
        <Transfer
            enableOrderChange
            onChange={onChange}
            selected={selected}
            options={options.slice(0, 4)}
        />
    ),
    options.slice(0, 4).map(({ value }) => value)
)

export const IncreasedOptionsHeight = withState(({ selected, onChange }) => (
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
))

export const DifferentWidths = withState(({ selected, onChange }) => (
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
))

export const LoadingSource = withState(({ selected, onChange }) => (
    <Transfer
        loading
        onChange={onChange}
        selected={selected}
        options={options.slice(0, 3)}
        leftHeader={<h4>Left header</h4>}
        leftFooter={<h4>Left footer</h4>}
    />
))

export const LoadingPicked = withState(
    ({ selected, onChange }) => (
        <Transfer
            loadingPicked
            onChange={onChange}
            selected={selected}
            options={options.slice(0, 3)}
            rightHeader={<h4>Right header</h4>}
            rightFooter={<h4>Right footer</h4>}
        />
    ),
    options.slice(0, 2).map(({ value }) => value)
)
