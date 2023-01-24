import { OrganisationUnitTree } from '@dhis2-ui/organisation-unit-tree'
import React, { useState } from 'react'
import { SelectorBar, SelectorBarItem } from '../../index.js'
import {
    createStatefulDecorator,
    decoratorCommonStyles,
    createDecoratorCustomDataProvider,
} from './common.js'

export const KeepOrgUnitExpanded = (
    _,
    { orgUnit, setOrgUnit, orgUnitOpen, setOrgUnitOpen }
) => {
    const [expanded, setExpanded] = useState([])
    const handleExpand = ({ path }) => setExpanded([...expanded, path])
    const handleCollapse = ({ path }) =>
        setExpanded(expanded.filter((p) => p !== path))

    return (
        <>
            <SelectorBar
                disableClearSelections={!orgUnit}
                onClearSelectionClick={() => setOrgUnit(null)}
            >
                <SelectorBarItem
                    label="Org unit"
                    value={orgUnit?.displayName}
                    noValueMessage="Choose an organisation unit"
                    open={orgUnitOpen}
                    setOpen={setOrgUnitOpen}
                    onClearSelectionClick={() => {
                        setOrgUnit(null)
                    }}
                >
                    <div
                        style={{
                            width: 400,
                            minHeight: 400,
                            maxHeight: '70vh',
                        }}
                    >
                        <OrganisationUnitTree
                            singleSelection
                            roots={['A0000000000']}
                            selected={orgUnit ? [orgUnit.path] : []}
                            onChange={(nextOrgUnit, evt) => {
                                evt.stopPropagation()
                                setOrgUnit(nextOrgUnit)
                                setOrgUnitOpen(false)
                            }}
                            expanded={expanded}
                            handleExpand={handleExpand}
                            handleCollapse={handleCollapse}
                        />
                    </div>
                </SelectorBarItem>
            </SelectorBar>

            <p style={{ padding: '0 16px' }}>
                This story illustrates how to keep states between mount/unmount
                cycles of the component rendered inside the selector bar icon
            </p>
        </>
    )
}

KeepOrgUnitExpanded.decorators = [
    decoratorCommonStyles,
    createStatefulDecorator(),
    createDecoratorCustomDataProvider(),
]
