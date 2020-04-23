import { createEqualTo } from '../createEqualTo.js'
import { allowsEmptyValues } from './helpers/index.js'
import { requiredArgumentErrorMessage } from '../helpers/index.js'

describe('validator: createEqualTo', () => {
    const equalToFoo = createEqualTo('foo')

    it('should throw an error when key is not a string', () => {
        expect(() => {
            createEqualTo(undefined)
        }).toThrowError(requiredArgumentErrorMessage)
        expect(() => {
            createEqualTo({})
        }).toThrowError(requiredArgumentErrorMessage)
    })

    it('should create a function', () => {
        expect(typeof equalToFoo).toEqual('function')
    })

    allowsEmptyValues(equalToFoo)

    it('should return undefined when the fields have equal values', () => {
        const sameValue = 'abcde'

        expect(equalToFoo(sameValue, { foo: sameValue })).toEqual(undefined)
    })

    it('should return an error string when the fields have inequal values', () => {
        const inValidFooMsg =
            'Please make sure the value of this input matches the value in "foo".'

        expect(equalToFoo('this', { foo: 'that' })).toEqual(inValidFooMsg)
    })

    it('should use the property description in the error string if provided', () => {
        const equalToBar = createEqualTo('bar', 'Barista')
        const inValidBarMsg =
            'Please make sure the value of this input matches the value in "Barista".'

        expect(equalToBar('this', { bar: 'that' })).toEqual(inValidBarMsg)
    })
})
