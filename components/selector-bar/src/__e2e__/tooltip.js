import React from 'react'
import { SelectorBar, SelectorBarItem } from '../index.js'
import {
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
    }
) => {
    return (
        <SelectorBar
            disableClearSelections={!workflow}
            onClearSelectionClick={() => setWorkflow(null)}
        >
            <SelectorBarItem
                label="Workflow"
                value={workflow?.label}
                noValueMessage="Without tooltip"
                open={workflowOpen}
                setOpen={setWorkflowOpen}
                tooltipContent="I am some tooltip content!"
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
        </SelectorBar>
    )
}

WithTooltip.decorators = [
    decoratorCommonStyles,
    createStatefulDecorator({}),
    createDecoratorCustomDataProvider(),
]

export const WithoutTooltip = (
    _,
    {
        workflow,
        setWorkflow,
        workflowOpen,
        setWorkflowOpen,
    }
) => {
    return (
        <SelectorBar
            disableClearSelections={!workflow}
            onClearSelectionClick={() => setWorkflow(null)}
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
        </SelectorBar>
    )
}

WithoutTooltip.decorators = [
    decoratorCommonStyles,
    createStatefulDecorator({}),
    createDecoratorCustomDataProvider(),
]
