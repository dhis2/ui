import { render, fireEvent } from '@testing-library/react'
import * as React from 'react'
import { Button } from './index.js'

describe('<Button />', () => {
    test('onFocus', () => {
        const onFocus = jest.fn()
        const result = render(<Button onFocus={onFocus} />)
        fireEvent.focus(result.getByRole('button'))
        expect(onFocus).toHaveBeenCalledTimes(1)
    })

    test('onBlur', () => {
        const onBlur = jest.fn()
        const result = render(<Button onBlur={onBlur} />)
        const button = result.getByRole('button')
        fireEvent.focus(button)
        fireEvent.blur(button)
        expect(onBlur).toHaveBeenCalledTimes(1)
    })

    test('onClick', () => {
        const onClick = jest.fn()
        const result = render(<Button onClick={onClick} />)
        fireEvent.click(result.getByRole('button'))
        expect(onClick).toHaveBeenCalledTimes(1)
    })

    test('onKeyDown', () => {
        const onKeyDown = jest.fn()
        const result = render(<Button onKeyDown={onKeyDown} />)
        fireEvent.keyDown(result.getByRole('button'))
        expect(onKeyDown).toHaveBeenCalledTimes(1)
    })
})
