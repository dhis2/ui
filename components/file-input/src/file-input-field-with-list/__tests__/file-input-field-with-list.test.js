import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { FileInputFieldWithList } from '../file-input-field-with-list.js'

describe('<FileInputFieldWithList />', () => {
    it('should call the onKeyDown callback when provided', () => {
        const onKeyDown = jest.fn()

        render(
            <FileInputFieldWithList
                label="Label"
                name="foo"
                value="bar"
                checked={false}
                onKeyDown={onKeyDown}
                onChange={jest.fn()}
            />
        )

        fireEvent.keyDown(screen.getByRole('button'), {})

        expect(onKeyDown).toHaveBeenCalledTimes(1)

        const input = screen.getByTestId('dhis2-uicore-fileinput-input')
        expect(onKeyDown).toHaveBeenCalledWith(
            { name: 'foo', files: input.files },
            expect.objectContaining({})
        )
    })

    it('should announce added and removed files', () => {
        const file = new File(['content'], 'test.md')
        const renderWithFiles = (files) => (
            <FileInputFieldWithList
                name="foo"
                multiple
                files={files}
                onChange={jest.fn()}
            />
        )
        const { rerender } = render(renderWithFiles([]))

        rerender(renderWithFiles([file]))
        expect(screen.getByRole('status')).toHaveTextContent('test.md added')

        rerender(renderWithFiles([]))
        expect(screen.getByRole('status')).toHaveTextContent('test.md removed')
    })
})
