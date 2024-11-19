import '@testing-library/jest-dom'
import { Button } from '@dhis2-ui/button'
import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { Field, Form } from 'react-final-form'
import { hasValue } from '../validators/index.js'
import { SingleSelectA11yFieldFF } from './SingleSelectA11yFieldFF.js'

describe('<SingleSelectA11yFieldFF/>', () => {
    it("should use FF's input for value selection", () => {
        const onSubmit = jest.fn()

        render(
            <Form onSubmit={onSubmit}>
                {(formRenderProps) => (
                    <form onSubmit={formRenderProps.handleSubmit}>
                        <Field
                            component={SingleSelectA11yFieldFF}
                            idPrefix="story"
                            name="selectName"
                            label="Label text"
                            options={[
                                { value: '', label: 'None' },
                                { value: 'foo', label: 'Foo' },
                                { value: 'bar', label: 'Bar' },
                            ]}
                        />

                        <Button primary type="submit">
                            Submit
                        </Button>
                    </form>
                )}
            </Form>
        )

        fireEvent.click(screen.getByRole('combobox'))
        fireEvent.click(screen.getByText('Foo').parentNode)
        fireEvent.click(screen.getByRole('button'))

        expect(onSubmit).toHaveBeenCalledTimes(1)
        expect(onSubmit).toHaveBeenCalledWith(
            { selectName: 'foo' },
            expect.anything(),
            expect.anything()
        )
    })

    it('should display the validation error', () => {
        const onSubmit = jest.fn()

        render(
            <Form onSubmit={onSubmit}>
                {(formRenderProps) => (
                    <form onSubmit={formRenderProps.handleSubmit}>
                        <Field
                            required
                            component={SingleSelectA11yFieldFF}
                            idPrefix="story"
                            name="selectName"
                            label="Label text"
                            validate={hasValue}
                            options={[
                                { value: '', label: 'None' },
                                { value: 'foo', label: 'Foo' },
                                { value: 'bar', label: 'Bar' },
                            ]}
                        />

                        <Button primary type="submit">
                            Submit
                        </Button>
                    </form>
                )}
            </Form>
        )

        fireEvent.click(screen.getByRole('button'))

        const error = screen.getByText('Please provide a value')
        expect(error).not.toBeNull()
    })
})
