import { OrganisationUnitTree } from '@dhis2-ui/organisation-unit-tree'
import React from 'react'
import { SelectorBar, SelectorBarItem } from '../../index.js'
import {
    MenuSelect,
    createDecoratorCustomDataProvider,
    createStatefulDecorator,
    dataSets,
    decoratorCommonStyles,
    workflows,
} from './common.js'

export const WithMultipleRows = (_, {
    workflow,
    setWorkflow,
    workflowOpen,
    setWorkflowOpen,
    dataSet,
    setDataSet,
    dataSetOpen,
    setDataSetOpen,
    orgUnit,
    setOrgUnit,
    orgUnitOpen,
    setOrgUnitOpen,
}) => {
    return (
        <div className="narrow-container">
            <SelectorBar
                disableClearSelections
                onClearSelectionClick={() => null}
            >
                <SelectorBarItem
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
                </SelectorBarItem>

                <SelectorBarItem
                    disabled={!workflow}
                    label="Data set"
                    value={dataSet?.label}
                    noValueMessage="Choose a data set"
                    open={dataSetOpen}
                    setOpen={setDataSetOpen}
                >
                    <MenuSelect
                        values={dataSets}
                        selected={dataSet?.value}
                        onChange={({ selected }) => {
                            setDataSet(
                                dataSets.find(
                                    (currentWorkflow) =>
                                        selected === currentWorkflow.value
                                )
                            )
                            setDataSetOpen(false)
                        }}
                    />
                </SelectorBarItem>

                <SelectorBarItem
                    disabled={!workflow && !dataSet}
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
                </SelectorBarItem>
            </SelectorBar>

            <p style={{ padding: '0 16px', textAlign: 'center' }}>
                This story shows the selection bar component with multiple rows when a workflow has been selected.
            </p>

            <style jsx>{`
                .narrow-container {
                    margin: 0 auto;
                    width: 100%;
                    max-width: 600px;
                }
            `}</style>
        </div>
    )
}

WithMultipleRows.decorators = [
    decoratorCommonStyles,
    createStatefulDecorator({ workflow: workflows[0] }),
    createDecoratorCustomDataProvider(),
]
