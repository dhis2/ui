import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { OuTreeSkeleton } from './ou-tree-skeleton'

describe('OuTreeSkeleton', () => {
    it('has the error class only with error', () => {
        const { rerender } = render(<OuTreeSkeleton dataTest="t-skeleton" />)
        expect(screen.getByTestId('t-skeleton')).not.toHaveClass('error')

        rerender(<OuTreeSkeleton error dataTest="t-skeleton" />)
        expect(screen.getByTestId('t-skeleton')).toHaveClass('error')
    })
})
