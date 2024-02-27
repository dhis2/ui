import { render, fireEvent, cleanup, waitFor } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { SplitButton } from './split-button.js'

describe('SplitButton', () => {
    afterEach(cleanup)

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

    it("does not close dropdown 'Enter' key is pressed", async () => {
        const { getByTestId } = render(
            <SplitButton component={<div>Dropdown Content</div>} />
        )

        const toggleButton = getByTestId('dhis2-uicore-splitbutton-toggle')
        fireEvent.click(toggleButton)
        expect(getByTestId('dhis2-uicore-splitbutton-menu')).toBeInTheDocument()

        fireEvent.keyDown(document, { key: 'Enter' })

        // Use waitFor to wait for the DOM to update
        await waitFor(() => {
            expect(
                getByTestId('dhis2-uicore-splitbutton-menu')
            ).toBeInTheDocument()
        })
    })

    it("does not close dropdown 'SpaceBar' key is pressed", async () => {
        const { getByTestId } = render(
            <SplitButton component={<div>Dropdown Content</div>} />
        )

        const toggleButton = getByTestId('dhis2-uicore-splitbutton-toggle')
        fireEvent.click(toggleButton)
        expect(getByTestId('dhis2-uicore-splitbutton-menu')).toBeInTheDocument()

        fireEvent.keyDown(document, { key: ' ' })

        // Use waitFor to wait for the DOM to update
        await waitFor(() => {
            expect(
                getByTestId('dhis2-uicore-splitbutton-menu')
            ).toBeInTheDocument()
        })
    })

    it('closes dropdown when escape key is pressed', async () => {
        const { getByTestId, queryByTestId } = render(
            <SplitButton component={<div>Dropdown Content</div>} />
        )

        const toggleButton = getByTestId('dhis2-uicore-splitbutton-toggle')
        fireEvent.click(toggleButton)
        expect(getByTestId('dhis2-uicore-splitbutton-menu')).toBeInTheDocument()

        fireEvent.keyDown(document, { key: 'Escape' })

        // Use waitFor to wait for the DOM to update
        await waitFor(() => {
            expect(
                queryByTestId('dhis2-uicore-splitbutton-menu')
            ).not.toBeInTheDocument()
        })
    })

    it('adds title and aria-label attributes to the right button', () => {
        const { getByTestId } = render(<SplitButton />)
        const toggleButton = getByTestId('dhis2-uicore-splitbutton-toggle')

        expect(toggleButton).toHaveAttribute('title', 'Toggle dropdown')
        expect(toggleButton).toHaveAttribute('aria-label', 'Toggle dropdown')
    })
})
