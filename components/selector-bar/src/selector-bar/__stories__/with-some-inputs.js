import React from 'react'
import { SelectorBar, SelectorBarItem } from '../../index.js'
import {
    OrgUnitSelect,
    MenuSelect,
    createDecoratorCustomDataProvider,
    createStatefulDecorator,
    decoratorCommonStyles,
    workflows,
} from './common.js'

export const WithSomeInputs = (
    _,
    {
        workflow,
        setWorkflow,
        workflowOpen,
        setWorkflowOpen,
        orgUnit,
        setOrgUnit,
        orgUnitOpen,
        setOrgUnitOpen,
    }
) => {
    return (
        <SelectorBar
            disableClearSelections={!workflow && !orgUnit}
            onClearSelectionClick={() => {
                setWorkflow(null)
                setOrgUnit(null)
            }}
        >
            <SelectorBarItem
                disabled={false}
                label="Workflow"
                value={workflow?.label}
                noValueMessage="Choose a workflow"
                open={workflowOpen}
                setOpen={setWorkflowOpen}
                onClearSelectionClick={() => {
                    setWorkflow(null)
                }}
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
            </SelectorBarItem>

            <SelectorBarItem
                disabled={!workflow}
                label="Org unit"
                value={orgUnit?.displayName}
                noValueMessage="Choose an organisation unit"
                open={orgUnitOpen}
                setOpen={setOrgUnitOpen}
                onClearSelectionClick={() => {
                    setOrgUnit(null)
                }}
            >
                <OrgUnitSelect
                    selected={orgUnit ? [orgUnit.path] : []}
                    onChange={(nextOrgUnit, evt) => {
                        evt.stopPropagation()
                        setOrgUnit(nextOrgUnit)
                        setOrgUnitOpen(false)
                    }}
                />
            </SelectorBarItem>
            <SelectorBarItem
                displayOnly={true}
                label="Person"
                value="John doe"
            />
        </SelectorBar>
    )
}

WithSomeInputs.decorators = [
    decoratorCommonStyles,
    createStatefulDecorator({ workflow: workflows[0] }),
    createDecoratorCustomDataProvider(),
]
