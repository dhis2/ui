import { createElement } from 'react'

import { createChildren } from '../../common/createChildren'
import { getPlainOptionsFromReactOptions } from '../../../Transfer/helper/getPlainOptionsFromReactOptions'

describe('Transfer - getPlainOptionsFromReactOptions', () => {
    it('should extract the option objects from the reactOptions and return as array', () => {
        const reactOptions = createChildren(
            createElement('div', {
                label: 'Foo',
                value: 'foo',
                key: 'foo',
            }),
            createElement('div', {
                label: 'Bar',
                value: 'bar',
                key: 'bar',
            })
        )

        const expected = [
            { label: 'Foo', value: 'foo' },
            { label: 'Bar', value: 'bar' },
        ]
        const actual = getPlainOptionsFromReactOptions(reactOptions)

        expect(actual).toEqual(expected)
    })

    it('should extract additionalData', () => {
        const reactOptions = createChildren(
            createElement('div', {
                label: 'Foo',
                value: 'foo',
                key: 'foo',
                additionalData: {
                    year: '2020',
                    relativePeriod: true,
                },
            }),
            createElement('div', {
                label: 'Bar',
                value: 'bar',
                key: 'bar',
                additionalData: {
                    year: '2019',
                    relativePeriod: false,
                },
            })
        )

        const expected = [
            { label: 'Foo', value: 'foo', year: '2020', relativePeriod: true },
            { label: 'Bar', value: 'bar', year: '2019', relativePeriod: false },
        ]
        const actual = getPlainOptionsFromReactOptions(reactOptions)

        expect(actual).toEqual(expected)
    })
})
