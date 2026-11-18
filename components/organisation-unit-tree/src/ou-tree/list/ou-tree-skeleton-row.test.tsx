import { CustomDataProvider } from '@dhis2/app-runtime'
import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'
import React from 'react'
import {
    createGistResolver,
    createTreeResolver,
    zambiaOrgUnits,
} from '../__fixtures__'
import { GIST_RESOURCE, TREE_RESOURCE } from '../data'
import { OuTreeNodeStoreProvider, OuTreeProvider } from '../tree'
import { useTreeState } from '../tree/ou-tree-provider'
import type { TreeState } from '../tree/tree-state'
import { OuTreeSkeletonRow } from './ou-tree-skeleton-row'

const data = {
    [TREE_RESOURCE]: createTreeResolver({ orgUnits: zambiaOrgUnits }),
    [GIST_RESOURCE]: createGistResolver({ orgUnits: zambiaOrgUnits }),
}

const setup = () => {
    const ref: { tree?: TreeState } = {}
    const Probe = () => {
        ref.tree = useTreeState()
        return (
            <OuTreeSkeletonRow
                row={{
                    kind: 'children-skeleton',
                    parentId: 'ou-1',
                    index: 3,
                    depth: 3,
                }}
                dataTest="t"
            />
        )
    }
    render(
        <CustomDataProvider data={data}>
            <OuTreeNodeStoreProvider>
                <OuTreeProvider rootIds={['ou-1']}>
                    <Probe />
                </OuTreeProvider>
            </OuTreeNodeStoreProvider>
        </CustomDataProvider>
    )
    return ref as { tree: TreeState }
}

describe('OuTreeSkeletonRow', () => {
    it('renders the skeleton at its depth after the empty toggle slot, with no button', () => {
        setup()
        const row = screen.getByTestId('t-row')

        expect(row).toHaveAttribute('data-row-kind', 'children-skeleton')
        expect(row.querySelectorAll('.indent')).toHaveLength(3)
        // The empty toggle slot lines the bar up with a label.
        expect(screen.getByTestId('t-toggle-space')).toBeInTheDocument()
        expect(screen.getByTestId('t-skeleton')).toBeInTheDocument()
        expect(screen.queryByRole('button')).toBeNull()
    })

    it('is a busy treeitem named Loading, with its element id, focused when its key is', () => {
        const ref = setup()
        const row = screen.getByRole('treeitem', { name: 'Loading' })

        expect(row).toHaveAttribute('aria-busy', 'true')
        expect(row).toHaveAttribute(
            'id',
            expect.stringMatching(/^outree-\d+-children-skeleton:ou-1:3$/)
        )
        expect(row).not.toHaveClass('focused')

        act(() => {
            ref.tree.focusRow(0)
            ref.tree.setHasFocus(true)
        })
        // Not a row of this tree's rows, so focusRow cannot reach it; the
        // class follows isFocused of its key.
        expect(row).not.toHaveClass('focused')
    })
})
