import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { OuTreeSkeleton } from './ou-tree-skeleton'

describe('OuTreeSkeleton', () => {
    it('puts its dataTest on the bar', () => {
        render(<OuTreeSkeleton dataTest="t-skeleton" />)
        expect(screen.getByTestId('t-skeleton')).toHaveClass('skeleton')
    })
})
