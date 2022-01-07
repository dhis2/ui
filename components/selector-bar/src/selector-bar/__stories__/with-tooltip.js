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

export const WithTooltip = (
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
                label="Workflow"
                value={workflow?.label}
                noValueMessage="Without tooltip"
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
            </SelectorBarItem>

            <SelectorBarItem
                label="Org unit"
                value={orgUnit?.displayName}
                noValueMessage="With tooltip"
                open={orgUnitOpen}
                setOpen={setOrgUnitOpen}
                tooltipContent="I am some tooltip content!"
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
        </SelectorBar>
    )
}

WithTooltip.decorators = [
    decoratorCommonStyles,
    createStatefulDecorator({}),
    createDecoratorCustomDataProvider(),
]
