import { render } from '@testing-library/react'
import React from 'react'
import { SingleSelectOption } from '../../single-select-option/index.js'
import { Selection } from '../selection.js'
import '@testing-library/jest-dom'

describe('<Selection />', () => {
    const env = process.env

    beforeEach(() => {
        // Ensure process.env is also reset for cached modules
        jest.resetModules()
        process.env = { ...env }

        // Allow spying on console.error and silence rendering errors
        jest.spyOn(console, 'error').mockImplementation(() => {})
    })

    afterEach(() => {
        // Restore process.env to original state
        process.env = env

        // Restore all mocks back to original values
        jest.restoreAllMocks()
    })

    describe('production', () => {
        it('should not throw an error for a selection that is not in the options', () => {
            process.env.NODE_ENV = 'production'
            const options = <SingleSelectOption key="1" label="one" value="1" />
            const selected = 'value'

            expect(() => {
                render(
                    <Selection
                        selected={selected}
                        options={options}
                        disabled={false}
                        onChange={() => {}}
                    />
                )
            }).not.toThrow()
        })

        it('should show the selection for a selection that is not in the options', () => {
            process.env.NODE_ENV = 'production'
            const options = <SingleSelectOption key="1" label="one" value="1" />
            const selected = 'value'

            const { getByText } = render(
                <Selection
                    selected={selected}
                    options={options}
                    disabled={false}
                    onChange={() => {}}
                />
            )

            expect(getByText(selected)).toBeInTheDocument()
        })

        it('log an error for a selection that is not in the options', () => {
            process.env.NODE_ENV = 'production'
            const options = <SingleSelectOption key="1" label="one" value="1" />
            const selected = 'value'

            render(
                <Selection
                    selected={selected}
                    options={options}
                    disabled={false}
                    onChange={() => {}}
                />
            )

            expect(console.error).toHaveBeenCalledWith(
                'There is no option with the value: "value". Make sure that the value passed to the selected prop matches the value of an existing option.'
            )
        })
    })

    describe('not production', () => {
        it('should throw an error for a selection that is not in the options', () => {
            process.env.NODE_ENV = 'development'
            const options = <SingleSelectOption key="1" label="one" value="1" />
            const selected = 'value'

            expect(() => {
                render(
                    <Selection
                        selected={selected}
                        options={options}
                        disabled={false}
                        onChange={() => {}}
                    />
                )
            }).toThrow(
                'There is no option with the value: "value". Make sure that the value passed to the selected prop matches the value of an existing option.'
            )
        })
    })
})
