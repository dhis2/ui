import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { OuTreeContainer } from './ou-tree-container'

describe('OuTreeContainer', () => {
    it('is the tree, with the focus props it is given', () => {
        const onKeyDown = jest.fn()
        const onFocus = jest.fn()
        const onBlur = jest.fn()
        render(
            <OuTreeContainer
                tabIndex={0}
                activeDescendantId="outree-1-ou-1"
                onKeyDown={onKeyDown}
                onFocus={onFocus}
                onBlur={onBlur}
                dataTest="t"
            >
                x
            </OuTreeContainer>
        )
        const tree = screen.getByRole('tree')

        expect(tree).toHaveAttribute('tabindex', '0')
        expect(tree).toHaveAttribute('aria-activedescendant', 'outree-1-ou-1')
        fireEvent.keyDown(tree, { key: 'ArrowDown' })
        expect(onKeyDown).toHaveBeenCalledTimes(1)
        tree.focus()
        expect(onFocus).toHaveBeenCalledTimes(1)
        tree.blur()
        expect(onBlur).toHaveBeenCalledTimes(1)
    })

    it('has no tab stop and no active descendant by default', () => {
        render(<OuTreeContainer dataTest="t">x</OuTreeContainer>)
        const tree = screen.getByRole('tree')

        expect(tree).not.toHaveAttribute('tabindex')
        expect(tree).not.toHaveAttribute('aria-activedescendant')
    })
})
