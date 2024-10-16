import React, { useEffect, useMemo, useState } from 'react'
import { SingleSelectA11y } from './single-select-a11y.js'

export default {
    title: 'Single Select A11y',
    component: SingleSelectA11y,
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

const fiveOptions = options.slice(0, 5)

export const DefaultPosition = () => (
    <SingleSelectA11y
        idPrefix="a11y"
        value=""
        onChange={() => null}
        options={fiveOptions}
    />
)

export const FlippedPosition = () => (
    <>
        <SingleSelectA11y
            idPrefix="a11y"
            value=""
            onChange={() => null}
            options={options}
        />

        <style jsx>{`
            :global(html),
            :global(body),
            :global(#storybook-root) {
                position: relative;
                height: 500px;
                max-height: 500px;
            }
            :global(#storybook-root) {
                padding-top: 400px !important;
            }
        `}</style>
    </>
)

export const ShiftedIntoView = () => (
    <>
        <SingleSelectA11y
            idPrefix="a11y"
            value=""
            onChange={() => null}
            options={options}
        />

        <style jsx>{`
            :global(html),
            :global(body),
            :global(#storybook-root) {
                position: relative;
                height: 300px !important;
                max-height: 300px;
            }
            :global(#storybook-root) {
                padding-top: 130px !important;
            }
        `}</style>
    </>
)
