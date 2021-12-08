import React from 'react'
import { SelectorGroup, SelectorGroupItem } from '../../index.js'
import {
    OrgUnitSelect,
    MenuSelect,
    createDecoratorCustomDataProvider,
    createStatefulDecorator,
    decoratorCommonStyles,
    workflows,
} from './common.js'

export const WithSomeInputs = (_, {
    workflow,
    setWorkflow,
    workflowOpen,
    setWorkflowOpen,
    orgUnit,
    setOrgUnit,
    orgUnitOpen,
    setOrgUnitOpen,
}) => {
    return (
        <SelectorGroup
            disableClearSelections={!workflow && !orgUnit}
            onClearSelectionClick={() => {
                setWorkflow(null)
                setOrgUnit(null)
            }}
        >
            <SelectorGroupItem
                disabled={false}
                label="Workflow"
                value={workflow?.label}
                noValueMessage="Choose a workflow"
                open={workflowOpen}
                setOpen={setWorkflowOpen}
            >
                <MenuSelect
                    values={workflows}
                    selected={workflow?.value}
                    onChange={({ selected }) => {
                        setWorkflow(
                            workflows.find(
                                (currentWorkflow) =>
                                    selected === currentWorkflow.value
                            )
                        )
                        setWorkflowOpen(false)
                    }}
                />
            </SelectorGroupItem>

            <SelectorGroupItem
                disabled={!workflow}
                label="Org unit"
                value={orgUnit?.displayName}
                noValueMessage="Choose an organisation unit"
                open={orgUnitOpen}
                setOpen={setOrgUnitOpen}
            >
                <OrgUnitSelect
                    selected={orgUnit ? [orgUnit.path] : []}
                    onChange={(nextOrgUnit, evt) => {
                        evt.stopPropagation()
                        setOrgUnit(nextOrgUnit)
                        setOrgUnitOpen(false)
                    }}
                />
            </SelectorGroupItem>
        </SelectorGroup>
    )
}

WithSomeInputs.decorators = [
    decoratorCommonStyles,
    createStatefulDecorator({ workflow: workflows[0] }),
    createDecoratorCustomDataProvider(),
]
