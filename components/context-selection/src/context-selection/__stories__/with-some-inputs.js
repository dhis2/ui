import { OrganisationUnitTree } from '@dhis2-ui/organisation-unit-tree'
import { SingleSelect, SingleSelectOption } from '@dhis2-ui/select'
import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React, { useState } from 'react'
import { ContextSelection, ContextSelector } from '../../index.js'
import { createDecoratorCustomDataProvider } from './common.js'

const workflows = [
    { value: 'm<4y', label: 'Mortality < 4 years' },
    { value: 'm<5y', label: 'Mortality < 5 years' },
]

export const WithSomeInputs = () => {
    const [workflow, setWorkflow] = useState(workflows[0])
    const [workflowOpen, setWorkflowOpen] = useState(false)
    const [orgUnit, setOrgUnit] = useState(null)
    const [orgUnitOpen, setOrgUnitOpen] = useState(false)

    return (
        <ContextSelection
            disableClearSelections={!workflow || !orgUnit}
            onClearSelectionClick={() => {
                setWorkflow(null)
                setOrgUnit(null)
            }}
        >
            <ContextSelector
                disabled={false}
                label="Workflow"
                value={workflow?.label}
                noValueMessage="Choose a workflow"
                open={workflowOpen}
                setOpen={setWorkflowOpen}
            >
                <div style={{ width: 400, padding: 16, background: 'white' }}>
                    <SingleSelect
                        onChange={({ selected }) => {
                            setWorkflow(
                                workflows.find(
                                    (currentWorkflow) =>
                                        selected === currentWorkflow.value
                                )
                            )
                            setWorkflowOpen(false)
                        }}
                    >
                        {workflows.map((currentWorkflow) => {
                            const { value, label } = currentWorkflow
                            const active = workflow?.value === value

                            return (
                                <SingleSelectOption
                                    key={value}
                                    label={label}
                                    value={value}
                                    className={cx('custom-option', { active })}
                                />
                            )
                        })}
                    </SingleSelect>
                </div>
            </ContextSelector>

            <ContextSelector
                disabled={!workflow}
                label="Org unit"
                value={orgUnit?.displayName}
                noValueMessage="Choose an organisation unit"
                open={orgUnitOpen}
                setOpen={setOrgUnitOpen}
            >
                <div style={{ width: 400, minHeight: 400, maxHeight: '70vh' }}>
                    <OrganisationUnitTree
                        singleSelection
                        onChange={(nextOrgUnit, evt) => {
                            evt.stopPropagation()
                            setOrgUnit(nextOrgUnit)
                            setOrgUnitOpen(false)
                        }}
                        roots={['A0000000000']}
                        selected={orgUnit ? [orgUnit.path] : []}
                    />
                </div>
            </ContextSelector>

            <style jsx>{`
                :global(body) {
                    background: ${colors.grey100};
                    padding: 0 !important;
                }

                :global(div#root) {
                    padding: 0;
                }

                .custom-option {
                    border-top: 1px solid grey;
                    background: white;
                }

                .custom-option:first-child {
                    border-top: 0;
                }

                .custom-option:hover {
                    background: grey;
                }
            `}</style>
        </ContextSelection>
    )
}

WithSomeInputs.decorators = [createDecoratorCustomDataProvider()]
