import { Transfer, Button } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

const transferOptions = [
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
        label: 'ART No clients who stopped TRT due to adverse clinical status/event',
        value: 'art_no_clients_who_stopped_trt_due_to_adverse_clinical_status/event',
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

const initiallySelected = []

export const TransferDemoMain = () => {
    const [selected, setSelected] = useState()
    const onChange = (payload) => setSelected(payload.selected)
    return (
        <Transfer
            options={transferOptions}
            selected={selected}
            onChange={onChange}
        />
    )
}
const Header = (props) => {
    return (
        <p
            style={{
                margin: '8px 0',
                color: '#4A5768',
                fontSize: '14px',
                fontWeight: '500',
            }}
        >
            {props.label}
        </p>
    )
}
Header.propTypes = {
    label: PropTypes.string,
}

export const TransferDemoHeader = () => {
    const [selected, setSelected] = useState()
    const onChange = (payload) => setSelected(payload.selected)
    return (
        <Transfer
            options={transferOptions}
            selected={selected}
            leftHeader={<Header label="Available options" />}
            rightHeader={<Header label="Selected options" />}
            onChange={onChange}
        />
    )
}

const Footer = () => {
    return (
        <div style={{ margin: '4px 0' }}>
            <Button secondary small>
                Reload
            </Button>
        </div>
    )
}

export const TransferDemoFooter = () => {
    const [selected, setSelected] = useState()
    const onChange = (payload) => setSelected(payload.selected)
    return (
        <Transfer
            options={transferOptions}
            selected={selected}
            leftFooter={<Footer />}
            onChange={onChange}
        />
    )
}

export const TransferDemoReorder = () => {
    const [selected, setSelected] = useState(initiallySelected)
    const onChange = (payload) => setSelected(payload.selected)
    return (
        <Transfer
            enableOrderChange
            options={transferOptions}
            selected={selected}
            onChange={onChange}
        />
    )
}

export const TransferDemoFilter = () => {
    const [selected, setSelected] = useState(initiallySelected)
    const onChange = (payload) => setSelected(payload.selected)
    return (
        <Transfer
            filterable
            filterPlaceholder="Search for an option"
            options={transferOptions}
            selected={selected}
            onChange={onChange}
        />
    )
}
