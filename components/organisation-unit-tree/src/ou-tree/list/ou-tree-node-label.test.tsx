import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { OuTreeNodeLabel } from './ou-tree-node-label'

describe('OuTreeNodeLabel', () => {
    it('renders its children in a plain span: the row takes the click', () => {
        render(<OuTreeNodeLabel dataTest="t">Zambia</OuTreeNodeLabel>)

        expect(screen.getByText('Zambia').tagName).toBe('SPAN')
        expect(screen.getByTestId('t')).not.toHaveAttribute('role')
    })

    it('has the clickable class only when clickable', () => {
        const { rerender } = render(
            <OuTreeNodeLabel dataTest="t">x</OuTreeNodeLabel>
        )
        expect(screen.getByTestId('t')).not.toHaveClass('clickable')

        rerender(
            <OuTreeNodeLabel clickable dataTest="t">
                x
            </OuTreeNodeLabel>
        )
        expect(screen.getByTestId('t')).toHaveClass('clickable')
    })

    it('has the result class only for a result', () => {
        const { rerender } = render(
            <OuTreeNodeLabel dataTest="t">x</OuTreeNodeLabel>
        )
        expect(screen.getByTestId('t')).not.toHaveClass('result')

        rerender(
            <OuTreeNodeLabel result dataTest="t">
                x
            </OuTreeNodeLabel>
        )
        expect(screen.getByTestId('t')).toHaveClass('result')
    })
})
