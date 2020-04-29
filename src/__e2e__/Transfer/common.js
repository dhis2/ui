import React, { useState } from 'react'
import { TransferOption } from '../../index'

export const extractOptionFromComponent = ({ props }) => ({
    label: props.label,
    value: props.value,
})

export const statefulDecorator = ({
    initialState = [],
    controlFilter = false,
    initialSearchTerm = '',
} = {}) => fn =>
    React.createElement(() => {
        const initialSelected = initialState.map(child => child.props)
        const [selected, setSelected] = useState(initialSelected)
        const [searchTerm, setSearchTerm] = useState(initialSearchTerm)

        return fn({
            selected,
            searchTerm: controlFilter ? searchTerm : undefined,
            onChange: payload => setSelected(payload.selected),
            onFilterChange: controlFilter
                ? ({ value }) => setSearchTerm(value)
                : undefined,
        })
    })

export const options = [
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
