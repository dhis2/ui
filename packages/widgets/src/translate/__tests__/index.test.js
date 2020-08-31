import translate from '../index.js'

describe('translate', () => {
    it('should call prop and return the result if it is a function', () => {
        const spy = jest.fn(() => 'translated string')
        const result = translate(spy)

        expect(spy).toHaveBeenCalled()
        expect(result).toBe('translated string')
    })

    it('should pass the interpolationObject as an argument to the prop function', () => {
        const spy = jest.fn(() => 'translated string')
        const interpolationObject = { name: 'Test' }

        translate(spy, interpolationObject)

        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith(interpolationObject)
    })

    it('should return prop as is if it is not a function', () => {
        const result = translate('just a string')

        expect(result).toBe('just a string')
    })
})
