import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { OuTreeRowShell } from './ou-tree-row-shell'

describe('OuTreeRowShell', () => {
    it('renders one indent element per level', () => {
        render(
            <OuTreeRowShell depth={3} dataTest="t">
                x
            </OuTreeRowShell>
        )
        const shell = screen.getByTestId('t')
        const indents = shell.querySelectorAll('.indent')

        expect(indents).toHaveLength(3)
        expect(
            Array.from(indents).map((el) => el.getAttribute('data-level'))
        ).toEqual(['0', '1', '2'])
        expect(indents[0]).toHaveAttribute('aria-hidden', 'true')
        expect(shell).toHaveAttribute('aria-level', '4')
        expect(shell).toHaveAttribute('role', 'treeitem')
    })

    it('reports hover changes through onHoverChange', async () => {
        const onHoverChange = jest.fn()
        render(
            <OuTreeRowShell
                depth={0}
                dataTest="t"
                onHoverChange={onHoverChange}
            >
                x
            </OuTreeRowShell>
        )

        await userEvent.hover(screen.getByTestId('t'))
        expect(onHoverChange).toHaveBeenLastCalledWith(true)
        await userEvent.unhover(screen.getByTestId('t'))
        expect(onHoverChange).toHaveBeenLastCalledWith(false)
        expect(onHoverChange).toHaveBeenCalledTimes(2)
    })

    it('renders no indent at depth 0', () => {
        render(
            <OuTreeRowShell depth={0} dataTest="t">
                x
            </OuTreeRowShell>
        )

        expect(
            screen.getByTestId('t').querySelectorAll('.indent')
        ).toHaveLength(0)
    })

    it('is a treeitem with aria-expanded, kind and id when asked', () => {
        render(
            <OuTreeRowShell
                depth={0}
                ariaExpanded={false}
                rowKind="node"
                id="ou-1"
                dataTest="t"
            >
                x
            </OuTreeRowShell>
        )
        const shell = screen.getByRole('treeitem')

        expect(shell).toHaveAttribute('aria-expanded', 'false')
        expect(shell).toHaveAttribute('data-row-kind', 'node')
        expect(shell).toHaveAttribute('data-id', 'ou-1')
    })

    it('renders the element id, the focus ring, the label, busy and the shortcut', () => {
        const { rerender } = render(
            <OuTreeRowShell
                depth={0}
                elementId="outree-1-ou-1"
                focused
                ariaLabel="Loading"
                ariaBusy
                keyshortcuts="Shift+Enter"
                dataTest="t"
            >
                x
            </OuTreeRowShell>
        )
        const shell = screen.getByTestId('t')

        expect(shell).toHaveAttribute('id', 'outree-1-ou-1')
        expect(shell).toHaveClass('focused')
        expect(shell).toHaveAttribute('aria-label', 'Loading')
        expect(shell).toHaveAttribute('aria-busy', 'true')
        expect(shell).toHaveAttribute('aria-keyshortcuts', 'Shift+Enter')

        rerender(
            <OuTreeRowShell depth={0} dataTest="t">
                x
            </OuTreeRowShell>
        )
        expect(shell).not.toHaveAttribute('id')
        expect(shell).not.toHaveClass('focused')
        expect(shell).not.toHaveAttribute('aria-busy')
        expect(shell).not.toHaveAttribute('aria-keyshortcuts')
    })

    it('calls onClick with the click event', async () => {
        const onClick = jest.fn()
        render(
            <OuTreeRowShell depth={0} onClick={onClick} dataTest="t">
                <span>x</span>
            </OuTreeRowShell>
        )

        await userEvent.click(screen.getByText('x'))

        expect(onClick).toHaveBeenCalledTimes(1)
        expect(onClick.mock.calls[0][0].target).toBe(screen.getByText('x'))
    })

    it('lights the segment of the lit level, reports guide hover and takes the guide click without the row', async () => {
        const onGuideHover = jest.fn()
        const onGuideClick = jest.fn()
        const onClick = jest.fn()
        render(
            <OuTreeRowShell
                depth={3}
                litLevel={1}
                onGuideHover={onGuideHover}
                onGuideClick={onGuideClick}
                onClick={onClick}
                dataTest="t"
            >
                x
            </OuTreeRowShell>
        )
        const indents = screen.getByTestId('t').querySelectorAll('.indent')

        expect(indents[0]).not.toHaveClass('lit')
        expect(indents[1]).toHaveClass('lit')
        expect(indents[2]).not.toHaveClass('lit')

        await userEvent.hover(indents[2])
        expect(onGuideHover).toHaveBeenLastCalledWith(2)
        await userEvent.unhover(indents[2])
        expect(onGuideHover).toHaveBeenLastCalledWith(undefined)

        await userEvent.click(indents[0])
        expect(onGuideClick).toHaveBeenCalledWith(0)
        expect(onClick).not.toHaveBeenCalled()
    })

    it('omits aria-expanded when undefined', () => {
        render(
            <OuTreeRowShell depth={0} dataTest="t">
                x
            </OuTreeRowShell>
        )

        expect(screen.getByTestId('t')).not.toHaveAttribute('aria-expanded')
    })
})
