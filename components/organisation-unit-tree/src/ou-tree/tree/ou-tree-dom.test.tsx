import '@testing-library/jest-dom'
import { render, renderHook, screen } from '@testing-library/react'
import React from 'react'
import {
    OuTreeDomProvider,
    useOuTreeFocusTarget,
    useOuTreeRowElementId,
} from './ou-tree-dom'

const RowId = ({ dataTest }: { dataTest: string }) => (
    <span data-test={dataTest}>{useOuTreeRowElementId('ou-1')}</span>
)

describe('OuTreeDomProvider', () => {
    it('gives each provider its own tree id, so row element ids differ between trees', () => {
        render(
            <>
                <OuTreeDomProvider>
                    <RowId dataTest="a" />
                </OuTreeDomProvider>
                <OuTreeDomProvider>
                    <RowId dataTest="b" />
                </OuTreeDomProvider>
            </>
        )
        const a = screen.getByTestId('a').textContent
        const b = screen.getByTestId('b').textContent

        expect(a).toMatch(/^outree-\d+-ou-1$/)
        expect(b).toMatch(/^outree-\d+-ou-1$/)
        expect(a).not.toBe(b)
    })

    it('shares one focus target between the consumers of a provider', () => {
        const targets: React.MutableRefObject<HTMLElement | null>[] = []
        const Consumer = () => {
            targets.push(useOuTreeFocusTarget())
            return null
        }
        render(
            <OuTreeDomProvider>
                <Consumer />
                <Consumer />
            </OuTreeDomProvider>
        )

        expect(targets).toHaveLength(2)
        expect(targets[0]).toBe(targets[1])
        expect(targets[0].current).toBeNull()
    })

    it('throws outside a provider', () => {
        jest.spyOn(console, 'error').mockImplementation(() => undefined)
        expect(() => renderHook(() => useOuTreeRowElementId('x'))).toThrow(
            'OuTree hooks need an OuTreeProvider above them'
        )
        expect(() => renderHook(() => useOuTreeFocusTarget())).toThrow(
            'OuTree hooks need an OuTreeProvider above them'
        )
        jest.restoreAllMocks()
    })
})
