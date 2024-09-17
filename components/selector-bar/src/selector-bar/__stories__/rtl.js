import { Button } from '@dhis2-ui/button'
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

const RHSContent = () => (
    <div className="rhs-content">
        <Button small>Options</Button>
        <style jsx>{`
            .rhs-content {
                display: flex;
                height: 40px;
                padding: 0 16px;
                align-items: center;
            }
        `}</style>
    </div>
)

export const RTL = (
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
        <div dir="rtl">
            <SelectorBar
                disableClearSelections={!workflow || !orgUnit}
                onClearSelectionClick={() => {
                    setWorkflow(null)
                    setOrgUnit(null)
                }}
                additionalContent={<RHSContent />}
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
            </SelectorBar>
        </div>
    )
}

RTL.decorators = [
    decoratorCommonStyles,
    createStatefulDecorator(),
    createDecoratorCustomDataProvider(),
]
