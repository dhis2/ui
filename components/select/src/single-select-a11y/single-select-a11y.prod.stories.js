import React, { useEffect, useMemo, useState } from 'react'
import { SingleSelectA11y } from './single-select-a11y.js'

export default {
    title: 'Single Select A11y',
    component: SingleSelectA11y,
}

const options = [
    {
        label: 'None',
        value: '',
    },
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

export const WithoutSelection = () => {
    const [value, setValue] = useState('')

    return (
        <SingleSelectA11y
            idPrefix="a11y"
            value={value}
            onChange={(nextValue) => setValue(nextValue)}
            options={fiveOptions}
        />
    )
}

export const WithSelection = () => {
    const [value, setValue] = useState('anc_1st_visit')

    return (
        <SingleSelectA11y
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={fiveOptions}
        />
    )
}

export const WithOnFocus = () => {
    const [value, setValue] = useState('')
    const [focusTime, setFocusTime] = useState('')

    return (
        <>
            <SingleSelectA11y
                onFocus={() => setFocusTime(new Date().toISOString())}
                idPrefix="a11y"
                value={value}
                valueLabel={
                    value
                        ? options.find((option) => option.value === value).label
                        : ''
                }
                onChange={(nextValue) => setValue(nextValue)}
                options={fiveOptions}
            />

            <p>Last time select received focus: {focusTime || 'never'}</p>
        </>
    )
}

export const WithOnBlur = () => {
    const [value, setValue] = useState('')
    const [blurTime, setBlurTime] = useState('')

    return (
        <>
            <SingleSelectA11y
                onBlur={() => setBlurTime(new Date().toISOString())}
                idPrefix="a11y"
                value={value}
                valueLabel={
                    value
                        ? options.find((option) => option.value === value).label
                        : ''
                }
                onChange={(nextValue) => setValue(nextValue)}
                options={fiveOptions}
            />

            <p>Last time select received blur: {blurTime || 'never'}</p>
        </>
    )
}

const CustomOption = ({ label }) => (
    <span className="container">
        <span className="label">{label}</span>

        <span
            className="button"
            role="button"
            onClick={(e) => {
                e.stopPropagation()
                alert('Custom "button" clicked!')
            }}
        >
            x
        </span>

        <style jsx>{`
            .container {
                display: flex;
                color: white;
                cursor: pointer;
                height: 30px;
            }

            .label {
                flex-grow: 1;
                background: green;
                padding: 5px 10px;
            }

            .label:hover {
                background: blue;
            }

            .button {
                height: 30px;
                width: 30px;
                padding: 0;
                border: 0;
                background: none;
                background: white;
                cursor: pointer;
                font-size: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: black;
            }

            .button:hover {
                background: black;
                color: white;
            }
        `}</style>
    </span>
)

export const WithCustomOptions = () => {
    const [value, setValue] = useState('')
    const optionsWithCustomStyle = useMemo(() => {
        return options.slice(0, 3).map((option) => ({
            ...option,
            component: CustomOption,
        }))
    }, [])

    return (
        <SingleSelectA11y
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={optionsWithCustomStyle}
        />
    )
}

export const WithInitialFocus = () => {
    const [value, setValue] = useState('')

    return (
        <>
            <SingleSelectA11y
                autoFocus
                idPrefix="a11y"
                value={value}
                valueLabel={
                    value
                        ? options.find((option) => option.value === value).label
                        : ''
                }
                onChange={(nextValue) => setValue(nextValue)}
                options={fiveOptions}
            />

            <select onChange={(e) => console.log(e)}>
                <option value="">None</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
            </select>
        </>
    )
}

export const Dense = () => {
    const [value, setValue] = useState('')

    return (
        <SingleSelectA11y
            dense
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={fiveOptions}
        />
    )
}

export const Empty = () => {
    const [value, setValue] = useState('')

    return (
        <SingleSelectA11y
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={[]}
        />
    )
}

export const EmptyWithEmptyText = () => {
    const [value, setValue] = useState('')

    return (
        <SingleSelectA11y
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={[]}
            empty="Custom empty text"
        />
    )
}

export const EmptyWithEmptyNode = () => {
    const [value, setValue] = useState('')
    const emptyNode = (
        <div
            style={{
                color: 'red',
                textAlign: 'center',
                padding: '10px 0',
            }}
        >
            Custom empty text
        </div>
    )

    return (
        <SingleSelectA11y
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={[]}
            empty={emptyNode}
        />
    )
}

export const WithOptionsAndLoading = () => {
    const [value, setValue] = useState('')

    return (
        <SingleSelectA11y
            loading
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={[
                { label: 'None', value: '' },
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
                { value: '3', label: 'Option 3' },
            ]}
        />
    )
}

export const WithOptionsAndLoadingText = () => {
    const [value, setValue] = useState('')

    return (
        <SingleSelectA11y
            loading
            menuLoadingText="Loading options"
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={[
                { label: 'None', value: '' },
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
                { value: '3', label: 'Option 3' },
            ]}
        />
    )
}

export const WithManyOptions = () => {
    const [value, setValue] = useState('art_entry_point:_no_pmtct')

    return (
        <SingleSelectA11y
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={options}
        />
    )
}

export const WithCustomLowMaxHeight = () => {
    const [value, setValue] = useState('')

    return (
        <SingleSelectA11y
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={options}
            menuMaxHeight="100px"
        />
    )
}

export const WithOptionsAndDisabled = () => {
    const [value, setValue] = useState('')

    return (
        <SingleSelectA11y
            disabled
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={fiveOptions}
        />
    )
}

export const WithSelectionAndDisabled = () => {
    const [value, setValue] = useState('anc_1st_visit')

    return (
        <SingleSelectA11y
            disabled
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={fiveOptions}
        />
    )
}

export const WithPrefix = () => {
    const [value, setValue] = useState('')

    return (
        <SingleSelectA11y
            prefix="Prefix text"
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={fiveOptions}
        />
    )
}

export const WithPrefixAndSelection = () => {
    const [value, setValue] = useState('anc_1st_visit')

    return (
        <SingleSelectA11y
            prefix="Prefix text"
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={fiveOptions}
        />
    )
}

export const WithRTL = () => {
    const [value, setValue] = useState('anc_1st_visit')

    // as options are rendered in Portal, the body dir (of the iframe) needs to be set to 'rtl'
    useEffect(() => {
        document.body.dir = 'rtl'
        return () => {
            document.body.dir = 'ltr'
        }
    }, [])

    return (
        <div dir="rtl">
            <SingleSelectA11y
                idPrefix="a11y"
                value={value}
                valueLabel={
                    value
                        ? options.find((option) => option.value === value).label
                        : ''
                }
                onChange={(nextValue) => setValue(nextValue)}
                options={fiveOptions}
            />
        </div>
    )
}

export const WithPlaceholder = () => {
    const [value, setValue] = useState('')

    return (
        <SingleSelectA11y
            placeholder="Placeholder text"
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={fiveOptions}
        />
    )
}

export const WithPlaceholderAndSelection = () => {
    const [value, setValue] = useState('anc_1st_visit')

    return (
        <SingleSelectA11y
            placeholder="Placeholder text"
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={fiveOptions}
        />
    )
}

const fiveOptionsWithFourthDisabled = [
    ...fiveOptions.slice(0, 3),
    { ...fiveOptions[3], disabled: true },
    ...fiveOptions.slice(4),
]
export const WithDisabledOption = () => {
    const [value, setValue] = useState('anc_1st_visit')

    return (
        <SingleSelectA11y
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={fiveOptionsWithFourthDisabled}
        />
    )
}

export const WithClearButton = () => {
    const [value, setValue] = useState('anc_1st_visit')

    return (
        <SingleSelectA11y
            clearable
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={fiveOptions}
        />
    )
}

export const WithFilterField = () => {
    const [value, setValue] = useState('')
    const [filterValue, setFilterValue] = useState('')
    const filteredOptions = useMemo(() => {
        return filterValue
            ? fiveOptions.filter(
                  ({ label, value }) =>
                      label.match(new RegExp(filterValue), 'i') && value !== ''
              )
            : fiveOptions
    }, [filterValue])

    return (
        <SingleSelectA11y
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? fiveOptions.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            filterable
            filterPlaceholder="Filter placeholder"
            filterValue={filterValue}
            onFilterChange={setFilterValue}
            noMatchText="No results for your filter"
            options={filteredOptions}
        />
    )
}

export const DefaultPosition = () => {
    const [value, setValue] = useState('anc_1st_visit')

    return (
        <div
            style={{
                position: 'relative',
                // Accounting for the padding on the body
                height: 'calc(100vh - 32px)',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    transform: 'translateY(-50%)',
                    width: '100%',
                }}
            >
                <SingleSelectA11y
                    idPrefix="a11y"
                    value={value}
                    valueLabel={
                        value
                            ? options.find((option) => option.value === value)
                                  .label
                            : ''
                    }
                    onChange={(nextValue) => setValue(nextValue)}
                    options={fiveOptions}
                />
            </div>
        </div>
    )
}

export const FlippedPosition = () => {
    const [value, setValue] = useState('anc_1st_visit')

    return (
        <div
            style={{
                position: 'relative',
                // Accounting for the padding on the body
                height: 'calc(100vh - 32px)',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                }}
            >
                <SingleSelectA11y
                    idPrefix="a11y"
                    value={value}
                    valueLabel={
                        value
                            ? options.find((option) => option.value === value)
                                  .label
                            : ''
                    }
                    onChange={(nextValue) => setValue(nextValue)}
                    options={fiveOptions}
                />
            </div>
        </div>
    )
}

export const ShiftedIntoView = () => {
    const [value, setValue] = useState('anc_1st_visit')

    return (
        <>
            <SingleSelectA11y
                idPrefix="a11y"
                value={value}
                valueLabel={
                    value
                        ? options.find((option) => option.value === value).label
                        : ''
                }
                onChange={(nextValue) => setValue(nextValue)}
                options={fiveOptions}
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
}
