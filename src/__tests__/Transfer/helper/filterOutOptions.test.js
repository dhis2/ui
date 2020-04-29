import { Children, createElement } from 'react'

import { createChildren } from '../../common/createChildren'
import { filterOutOptions } from '../../../Transfer/helper/filterOutOptions'

describe('Transfer - filterOutOptions', () => {
    it('should remove all picked options', () => {
        const reactOptions = createChildren(
            createElement('div', { label: 'Foo', value: 'foo', key: 'foo' }),
            createElement('div', { label: 'Bar', value: 'bar', key: 'bar' }),
            createElement('div', { label: 'Baz', value: 'baz', key: 'baz' })
        )

        const plainOptions = [{ label: 'Baz', value: 'baz' }]

        const result = Children.toArray(
            filterOutOptions(reactOptions, plainOptions)
        )

        expect(result).toHaveLength(2)
        expect(result[0].props).toEqual({ label: 'Foo', value: 'foo' })
        expect(result[1].props).toEqual({ label: 'Bar', value: 'bar' })
    })
})
