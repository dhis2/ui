import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { SplitButton } from './split-button.js'

describe('SplitButton', () => {
    it('renders button with children', () => {
        const { getByText } = render(<SplitButton>Click me</SplitButton>)
        expect(getByText('Click me')).toBeInTheDocument()
    })

    it('toggles dropdown when right button is clicked', () => {
        const { getByTestId, queryByTestId } = render(<SplitButton />)
        const toggleButton = getByTestId('dhis2-uicore-splitbutton-toggle')

        fireEvent.click(toggleButton)
        expect(
            queryByTestId('dhis2-uicore-splitbutton-menu')
        ).toBeInTheDocument()

        fireEvent.click(toggleButton)
        expect(
            queryByTestId('dhis2-uicore-splitbutton-menu')
        ).not.toBeInTheDocument()
    })

    it('renders dropdown content when open is true', () => {
        const { getByTestId } = render(
            <SplitButton component={<div>Dropdown Content</div>} />
        )

        const toggleButton = getByTestId('dhis2-uicore-splitbutton-toggle')
        fireEvent.click(toggleButton)

        expect(getByTestId('dhis2-uicore-splitbutton-menu')).toBeInTheDocument()
    })

    it('closes dropdown when escape key is pressed', () => {
        const { getByTestId, queryByTestId } = render(
            <SplitButton
                component={
                    <div data-testid="dropdown-content">Dropdown Content</div>
                }
            />
        )

        const toggleButton = getByTestId('dhis2-uicore-splitbutton-toggle')
        fireEvent.click(toggleButton)

        fireEvent.keyDown(document, { key: 'Escape' })

        expect(queryByTestId('dropdown-content')).not.toBeInTheDocument()
    })

    it('adds title and aria-label attributes to the right button', () => {
        const { getByTestId } = render(<SplitButton />)
        const toggleButton = getByTestId('dhis2-uicore-splitbutton-toggle')

        expect(toggleButton).toHaveAttribute('title', 'Toggle dropdown')
        expect(toggleButton).toHaveAttribute('aria-label', 'Toggle dropdown')
    })
})
