import { CustomDataProvider } from '@dhis2/app-runtime'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
    createGistResolver,
    createTreeResolver,
    zambiaOrgUnits,
} from './__fixtures__/index'
import { GIST_RESOURCE, TREE_RESOURCE } from './data/index'
import { OuTree } from './ou-tree'
import { OuTreeNodeStoreProvider } from './tree/index'

jest.mock('@tanstack/react-virtual', () =>
    jest.requireActual('./__fixtures__/virtualizer-mock')
)

const data = {
    [TREE_RESOURCE]: createTreeResolver({ orgUnits: zambiaOrgUnits }),
    [GIST_RESOURCE]: createGistResolver({ orgUnits: zambiaOrgUnits }),
}

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <CustomDataProvider data={data}>
        <OuTreeNodeStoreProvider>{children}</OuTreeNodeStoreProvider>
    </CustomDataProvider>
)

const nodeRows = (testId = 'dhis2-uicore-outree') =>
    screen
        .queryAllByTestId(`${testId}-row`)
        .filter((row) => row.getAttribute('data-row-kind') === 'node')
const labels = (testId = 'dhis2-uicore-outree') =>
    screen
        .queryAllByTestId(`${testId}-label`)
        .map((el) => el.firstChild?.textContent)

describe('OuTree', () => {
    it('renders the roots and opens one on click', async () => {
        render(<OuTree roots={['ou-2', 'ou-13']} />, { wrapper })
        await waitFor(() => expect(nodeRows()).toHaveLength(2))

        await userEvent.click(
            screen.getAllByTestId('dhis2-uicore-outree-toggle')[0]
        )

        await waitFor(() => expect(nodeRows()).toHaveLength(4))
        expect(labels()).toEqual([
            'Central Province',
            'Kabwe District',
            'Serenje District',
            'Lusaka Province',
        ])
    })

    it('applies a custom data-test attribute and class', async () => {
        render(
            <OuTree
                roots={['ou-1']}
                dataTest="custom-ou-tree"
                className="custom-class"
            />,
            { wrapper }
        )

        const tree = screen.getByTestId('custom-ou-tree')
        expect(tree).toHaveClass('custom-class')
        await waitFor(() => expect(nodeRows('custom-ou-tree')).toHaveLength(1))
    })
})
