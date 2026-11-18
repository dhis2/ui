import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { OuTreeContainer } from './ou-tree-container'

describe('OuTreeContainer', () => {
    it('is the tree and its one tab stop, with the focus props it is given', () => {
        const onKeyDown = jest.fn()
        const onFocus = jest.fn()
        const onBlur = jest.fn()
        render(
            <OuTreeContainer
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

    it('draws its own focus ring only while it names no row', () => {
        render(<OuTreeContainer dataTest="t">x</OuTreeContainer>)
        const css = document.body.innerHTML

        expect(css).toContain(
            '.container:focus-visible:not([aria-activedescendant])'
        )
    })

    it('is a tab stop without an active descendant by default', () => {
        render(<OuTreeContainer dataTest="t">x</OuTreeContainer>)
        const tree = screen.getByRole('tree')

        expect(tree).toHaveAttribute('tabindex', '0')
        expect(tree).not.toHaveAttribute('aria-activedescendant')
    })
})
