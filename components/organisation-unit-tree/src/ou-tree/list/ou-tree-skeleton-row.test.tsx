import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { OuTreeSkeletonRow } from './ou-tree-skeleton-row'

describe('OuTreeSkeletonRow', () => {
    it('renders the skeleton at its depth after the empty toggle slot, with no button', () => {
        render(
            <OuTreeSkeletonRow
                row={{ kind: 'skeleton', parentId: 'ou-1', index: 3, depth: 3 }}
                dataTest="t"
            />
        )
        const row = screen.getByTestId('t-row')

        expect(row).toHaveAttribute('data-row-kind', 'skeleton')
        expect(row.querySelectorAll('.indent')).toHaveLength(3)
        // The empty toggle slot lines the bar up with a label.
        expect(screen.getByTestId('t-toggle-space')).toBeInTheDocument()
        expect(screen.getByTestId('t-skeleton')).toBeInTheDocument()
        expect(screen.queryByRole('button')).toBeNull()
    })
})
