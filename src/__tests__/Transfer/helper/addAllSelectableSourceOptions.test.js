import { createElement } from 'react'

import { addAllSelectableSourceOptions } from '../../../Transfer/helper/addAllSelectableSourceOptions'
import { createChildren } from '../../common/createChildren'

describe('Transfer - addAllSelectableSourceOptions', () => {
    const onChange = jest.fn()
    const setHighlightedSourceOptions = jest.fn()

    const sourceReactOptions = createChildren(
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
        })
    )

    afterEach(() => {
        onChange.mockClear()
        setHighlightedSourceOptions.mockClear()
    })

    it('should add all selectable source options to the selectedPlainOptions array', () => {
        const selectedPlainOptions = [{ label: 'Barfoo', value: 'barfoo' }]
        const expected = {
            selected: [
                { label: 'Barfoo', value: 'barfoo' },
                { label: 'Foo', value: 'foo' },
                { label: 'Bar', value: 'bar' },
                { label: 'Baz', value: 'baz' },
                { label: 'Foobar', value: 'foobar' },
                { label: 'Foobaz', value: 'foobaz' },
            ],
        }

        addAllSelectableSourceOptions({
            sourceReactOptions,
            selectedPlainOptions,
            onChange,
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith(expected)
    })

    it('should reset all highlighted source options', () => {
        addAllSelectableSourceOptions({
            sourceReactOptions,
            selectedPlainOptions: [{ label: 'Barfoo', value: 'barfoo' }],
            onChange,
            setHighlightedSourceOptions,
        })

        expect(setHighlightedSourceOptions).toHaveBeenCalledWith([])
    })
})
