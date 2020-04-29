import React from 'react'
import { getPlainOptionFromReactOption } from '../../../Transfer/helper/getPlainOptionFromReactOption'

describe('Transfer - getPlainOptionFromReactOption', () => {
    it('should extract the plain option', () => {
        const reactOption = React.createElement('span', {
            label: 'Foo',
            value: 'foo',
            disabled: false,
        })
        const expected = { label: 'Foo', value: 'foo', disabled: false }
        const actual = getPlainOptionFromReactOption(reactOption)

        expect(actual).toEqual(expected)
    })

    it('should merge additionalData into the option', () => {
        const additionalData = {
            bar: 'Bar',
            baz: 'Baz',
        }
        const reactOption = React.createElement('span', {
            label: 'Foo',
            value: 'foo',
            disabled: false,
            additionalData,
        })
        const expected = expect.objectContaining(additionalData)
        const actual = getPlainOptionFromReactOption(reactOption)

        expect(actual).toEqual(expected)
    })
})
