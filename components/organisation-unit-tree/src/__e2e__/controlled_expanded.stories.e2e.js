import { Button } from '@dhis2-ui/button'
import React, { useState } from 'react'
import { OrganisationUnitTree, getAllExpandedOrgUnitPaths } from '../index.js'
import { createDecoratorCustomDataProvider, namespace } from './common.js'

window.initiallyExpandedPaths = ['/A0000000000/A0000000001']
window.orgUnitPathToExpand = '/A0000000000/A0000000001'

export default {
    title: namespace,
    decorators: [createDecoratorCustomDataProvider()],
}

export const Controlled = () => {
    const initiallyExpanded = getAllExpandedOrgUnitPaths(
        window.initiallyExpandedPaths
    )

    const [expanded, setExpanded] = useState(initiallyExpanded)

    const handleExpand = ({ path }) => {
        if (!expanded.includes(path)) {
            setExpanded([...expanded, path])
        }
    }

    const handleCollapse = ({ path }) => {
        const pathIndex = expanded.indexOf(path)

        if (pathIndex !== -1) {
            const updatedExpanded =
                pathIndex === 0
                    ? expanded.slice(1)
                    : [
                          ...expanded.slice(0, pathIndex),
                          ...expanded.slice(pathIndex + 1),
                      ]

            setExpanded(updatedExpanded)
        }
    }

    const imperativeToggle = () => {
        if (!expanded.includes('/A0000000000/A0000000001')) {
            // Make sure that all required sub paths are included as well
            const nextPaths = getAllExpandedOrgUnitPaths([
                ...expanded,
                window.orgUnitPathToExpand,
            ])

            return setExpanded(nextPaths)
        }

        setExpanded(expanded.filter(v => v !== '/A0000000000/A0000000001'))
    }

    return (
        <>
            <OrganisationUnitTree
                onChange={() => null}
                name="Root org unit"
                roots={['A0000000000']}
                expanded={expanded}
                handleExpand={handleExpand}
                handleCollapse={handleCollapse}
            />

            <br />

            <Button dataTest="org-unit-toggle" onClick={imperativeToggle}>
                Toggle Org Unit 2
            </Button>
        </>
    )
}

export const MissingProps = () => {
    const expanded = []
    const handleExpand = () => null

    return (
        <OrganisationUnitTree
            onChange={() => null}
            name="Root org unit"
            roots={['A0000000000']}
            expanded={expanded}
            handleExpand={handleExpand}
        />
    )
}
