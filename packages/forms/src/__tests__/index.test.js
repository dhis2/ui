import { FinalForm, ReactFinalForm } from '../index.js'

describe('final-form named export', () => {
    it('should re-export the expected exports', () => {
        const exports = Object.keys(FinalForm)

        expect(exports).toMatchSnapshot()
    })

    it.each(Object.keys(FinalForm))(
        'should re-export the expected type for %s',
        exportName => {
            const type = typeof FinalForm[exportName]

            expect(type).toMatchSnapshot()
        }
    )
})

describe('react-final-form named export', () => {
    it('should re-export the expected exports', () => {
        const exports = Object.keys(ReactFinalForm)

        expect(exports).toMatchSnapshot()
    })

    it.each(Object.keys(ReactFinalForm))(
        'should re-export the expected type for %s',
        exportName => {
            const type = typeof ReactFinalForm[exportName]

            expect(type).toMatchSnapshot()
        }
    )
})
