import { Children, createElement } from 'react'

import { createChildren } from '../../common/createChildren'
import { getSubsetByFilter } from '../../../Transfer/helper/getSubsetByFilter'

describe('Transfer - getSubsetByFilter', () => {
    const filterCallback = (options, filter) =>
        options.filter(({ label }) => label.indexOf(filter) !== -1)

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

    it('should return only the react reactOptions with a matching label', () => {
        const result = Children.toArray(
            getSubsetByFilter({
                filterable: true,
                filter: 'oo',
                reactOptions,
                filterCallback,
            })
        )

        expect(result).toHaveLength(4)
        expect(result[0].props).toEqual(
            expect.objectContaining({ label: 'Foo', value: 'foo' })
        )
        expect(result[1].props).toEqual(
            expect.objectContaining({ label: 'Foobar', value: 'foobar' })
        )
        expect(result[2].props).toEqual(
            expect.objectContaining({ label: 'Foobaz', value: 'foobaz' })
        )
        expect(result[3].props).toEqual(
            expect.objectContaining({ label: 'Barfoo', value: 'barfoo' })
        )
    })

    it('should return all reactOptions when filterable is false', () => {
        const result = Children.toArray(
            getSubsetByFilter({
                filterable: false,
                filter: 'oo',
                reactOptions,
                filterCallback,
            })
        )

        expect(result).toHaveLength(6)
    })

    it('should return all reactOptions when the filter is empty', () => {
        const result = Children.toArray(
            getSubsetByFilter({
                filterable: true,
                filter: '',
                reactOptions,
                filterCallback,
            })
        )

        expect(result).toHaveLength(6)
    })
})
