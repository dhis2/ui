import { Children, createElement } from 'react'

import { createChildren } from '../../common/createChildren'
import { extractPickedReactOptions } from '../../../Transfer/helper/extractPickedReactOptions'

describe('Transfer - extractPickedReactOptions', () => {
    it('should remove all non-picked options', () => {
        const toggleHighlightedPickedOptions = jest.fn()
        const highlightedPickedOptions = []
        const reactOptions = createChildren(
            createElement('div', { key: 'foo', label: 'Foo', value: 'foo' }),
            createElement('div', { key: 'bar', label: 'Bar', value: 'bar' }),
            createElement('div', { key: 'baz', label: 'Baz', value: 'baz' })
        )
        const selectedPlainOptions = [{ label: 'Baz', value: 'baz' }]
        const result = Children.toArray(
            extractPickedReactOptions({
                reactOptions,
                selectedPlainOptions,
                highlightedPickedOptions,
                toggleHighlightedPickedOptions,
            })
        )

        expect(result).toHaveLength(1)
        expect(result[0].props).toEqual(
            expect.objectContaining({ label: 'Baz', value: 'baz' })
        )
    })

    it('sorts the picked options by the order of the "selectedPlainOptions" array', () => {
        const toggleHighlightedPickedOptions = jest.fn()
        const highlightedPickedOptions = []
        const reactOptions = createChildren(
            createElement('div', { key: 'foo', label: 'Foo', value: 'foo' }),
            createElement('div', { key: 'bar', label: 'Bar', value: 'bar' }),
            createElement('div', { key: 'baz', label: 'Baz', value: 'baz' }),
            createElement('div', {
                key: 'foobar',
                label: 'Foobar',
                value: 'foobar',
            }),
            createElement('div', {
                key: 'foobaz',
                label: 'Foobaz',
                value: 'foobaz',
            }),
            createElement('div', {
                key: 'barfoo',
                label: 'Barfoo',
                value: 'barfoo',
            })
        )
        const selectedPlainOptions = [
            { label: 'Barfoo', value: 'barfoo' },
            { label: 'Foo', value: 'foo' },
            { label: 'Foobar', value: 'foobar' },
        ]
        const result = Children.toArray(
            extractPickedReactOptions({
                reactOptions,
                selectedPlainOptions,
                highlightedPickedOptions,
                toggleHighlightedPickedOptions,
            })
        )

        expect(result).toHaveLength(3)
        expect(result[0].props).toEqual(
            expect.objectContaining({ label: 'Barfoo', value: 'barfoo' })
        )
        expect(result[1].props).toEqual(
            expect.objectContaining({ label: 'Foo', value: 'foo' })
        )
        expect(result[2].props).toEqual(
            expect.objectContaining({ label: 'Foobar', value: 'foobar' })
        )
    })
})
