import { render, screen } from '@testing-library/react'
import React from 'react'
import { OuTree } from './ou-tree.js'

describe('OuTree', () => {
    it('renders the placeholder heading', () => {
        render(<OuTree />)

        expect(
            screen.getByRole('heading', { name: 'ouTree - coming soon' })
        ).toBeInTheDocument()
    })

    it('applies a custom data-test attribute', () => {
        render(<OuTree dataTest="custom-ou-tree" />)

        expect(screen.getByTestId('custom-ou-tree')).toBeInTheDocument()
    })
})
