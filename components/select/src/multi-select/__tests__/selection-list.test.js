import { render } from '@testing-library/react'
import React from 'react'
import { MultiSelectOption } from '../../multi-select-option/index.js'
import { SelectionList } from '../selection-list.js'
import '@testing-library/jest-dom'

describe('<SelectionList />', () => {
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
            const options = <MultiSelectOption key="1" label="one" value="1" />
            const selected = ['value']

            expect(() => {
                render(
                    <SelectionList
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
            const options = <MultiSelectOption key="1" label="one" value="1" />
            const selected = ['value']

            const { getByText } = render(
                <SelectionList
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
            const options = <MultiSelectOption key="1" label="one" value="1" />
            const selected = ['value']

            render(
                <SelectionList
                    selected={selected}
                    options={options}
                    disabled={false}
                    onChange={() => {}}
                />
            )

            expect(console.error).toHaveBeenCalledWith(
                'There is no option with the value: "value". Make sure that all the values passed to the selected prop match the value of an existing option.'
            )
        })
    })

    describe('not production', () => {
        it('should throw an error for a selection that is not in the options', () => {
            process.env.NODE_ENV = 'development'
            const options = <MultiSelectOption key="1" label="one" value="1" />
            const selected = ['value']

            expect(() => {
                render(
                    <SelectionList
                        selected={selected}
                        options={options}
                        disabled={false}
                        onChange={() => {}}
                    />
                )
            }).toThrow(
                'There is no option with the value: "value". Make sure that all the values passed to the selected prop match the value of an existing option.'
            )
        })
    })
})
