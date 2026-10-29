import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { OuTreeNodeLabel } from './ou-tree-node-label'

describe('OuTreeNodeLabel', () => {
    it('renders its children and calls onClick', async () => {
        const onClick = jest.fn()
        render(
            <OuTreeNodeLabel onClick={onClick} dataTest="t">
                Zambia
            </OuTreeNodeLabel>
        )

        await userEvent.click(screen.getByText('Zambia'))

        expect(onClick).toHaveBeenCalledTimes(1)
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
