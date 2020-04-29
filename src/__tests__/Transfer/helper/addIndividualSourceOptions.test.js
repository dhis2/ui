import { createElement } from 'react'

import { addIndividualSourceOptions } from '../../../Transfer/helper/addIndividualSourceOptions'
import { createChildren } from '../../common/createChildren'

describe('Transfer - addIndividualSourceOptions', () => {
    const onChange = jest.fn()
    const setHighlightedSourceOptions = jest.fn()

    const filteredSourcePlainOptions = createChildren(
        createElement('div', { key: 'foo', label: 'Foo', value: 'foo' }),
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

    const highlightedSourcePlainOptions = [
        { label: 'Foobaz', value: 'foobaz' },
        { label: 'Bar', value: 'bar' },
    ]

    const selectedPlainOptions = [{ label: 'Barfoo', value: 'barfoo' }]

    afterEach(() => {
        onChange.mockClear()
        setHighlightedSourceOptions.mockClear()
    })

    it('should add the highlighted source options to the selectedPlainOptions array', () => {
        addIndividualSourceOptions({
            highlightedSourcePlainOptions,
            maxSelections: Infinity,
            onChange,
            selectedPlainOptions,
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: [
                { label: 'Barfoo', value: 'barfoo' },
                { label: 'Foobaz', value: 'foobaz' },
                { label: 'Bar', value: 'bar' },
            ],
        })
    })

    it('should reset the highlighted source options', () => {
        addIndividualSourceOptions({
            highlightedSourcePlainOptions,
            maxSelections: Infinity,
            onChange,
            selectedPlainOptions,
            setHighlightedSourceOptions,
        })

        expect(setHighlightedSourceOptions).toHaveBeenCalledWith([])
    })

    it('should only select the filtered source options', () => {
        addIndividualSourceOptions({
            filterable: true,
            filter: 'oo',
            filteredSourcePlainOptions,
            highlightedSourcePlainOptions,
            maxSelections: Infinity,
            onChange,
            selectedPlainOptions,
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: [
                { label: 'Barfoo', value: 'barfoo' },
                { label: 'Foobaz', value: 'foobaz' },
            ],
        })
    })

    it('should only call onChange with the max selection amount', () => {
        addIndividualSourceOptions({
            filterable: true,
            filter: 'oo',
            filteredSourcePlainOptions,
            highlightedSourcePlainOptions: highlightedSourcePlainOptions.slice(
                0,
                1
            ),
            maxSelections: 1,
            onChange,
            selectedPlainOptions: selectedPlainOptions.slice(0, 1),
            setHighlightedSourceOptions,
        })

        expect(onChange).toHaveBeenCalledWith({
            selected: [{ label: 'Foobaz', value: 'foobaz' }],
        })
    })
})
