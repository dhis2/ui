import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
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
        expect(shell).toHaveAttribute('role', 'presentation')
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
                role="treeitem"
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

    it('omits aria-expanded when undefined', () => {
        render(
            <OuTreeRowShell depth={0} dataTest="t">
                x
            </OuTreeRowShell>
        )

        expect(screen.getByTestId('t')).not.toHaveAttribute('aria-expanded')
    })
})
