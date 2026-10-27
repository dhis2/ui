import { CustomDataProvider } from '@dhis2/app-runtime'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'
import {
    createGistResolver,
    createTreeResolver,
    zambiaOrgUnits,
} from '../__fixtures__/index'
import { GIST_RESOURCE, TREE_RESOURCE } from '../data/index'
import type { Row } from '../tree/index'
import { OuTreeNodeStoreProvider, OuTreeProvider } from '../tree/index'
import type { RenderLabel } from './ou-tree-node-row'
import { OuTreeRow } from './ou-tree-row'

const data = {
    [TREE_RESOURCE]: createTreeResolver({ orgUnits: zambiaOrgUnits }),
    [GIST_RESOURCE]: createGistResolver({ orgUnits: zambiaOrgUnits }),
}

const Providers = ({ children }: { children: React.ReactNode }) => (
    <CustomDataProvider data={data}>
        <OuTreeNodeStoreProvider>
            <OuTreeProvider roots={['ou-1']}>{children}</OuTreeProvider>
        </OuTreeNodeStoreProvider>
    </CustomDataProvider>
)

const nodeRow: Row = {
    kind: 'node',
    id: 'ou-1',
    depth: 0,
    children: { status: 'none' },
}

describe('OuTreeRow', () => {
    it.each([
        [nodeRow, 'node'],
        [
            { kind: 'skeleton', parentId: 'ou-1', index: 0, depth: 1 },
            'skeleton',
        ],
        [
            {
                kind: 'error',
                parentId: 'ou-1',
                page: 1,
                error: new Error('x'),
                depth: 1,
            },
            'error',
        ],
    ] as Array<[Row, string]>)('renders a %#: %s row', async (row, kind) => {
        render(
            <Providers>
                <OuTreeRow row={row} dataTest="t" />
            </Providers>
        )

        expect(await screen.findByTestId('t-row')).toHaveAttribute(
            'data-row-kind',
            kind
        )
    })

    it('does not re-render for the same row object', async () => {
        let renders = 0
        const renderLabel: RenderLabel = ({ node }) => {
            renders += 1
            return <span>{node.displayName}</span>
        }
        const Parent = () => {
            const [, setCount] = useState(0)
            return (
                <>
                    <button onClick={() => setCount((count) => count + 1)}>
                        rerender
                    </button>
                    <OuTreeRow row={nodeRow} renderLabel={renderLabel} />
                </>
            )
        }
        render(
            <Providers>
                <Parent />
            </Providers>
        )
        await screen.findByText('Zambia')
        const before = renders

        await userEvent.click(screen.getByText('rerender'))

        expect(renders).toBe(before)
    })
})
