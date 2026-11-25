import { render, fireEvent, screen } from '@testing-library/react'
import { mount } from 'enzyme'
import React from 'react'
import { Button } from '../button.js'

describe('<Button>', () => {
    let consoleSpy

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'debug').mockImplementation()
    })

    afterEach(() => {
        consoleSpy.mockRestore()
    })

    describe('warning for missing aria-label and title', () => {
        it('No warning  if children exist but aria-label and title is missing', () => {
            render(<Button>Children content</Button>)

            expect(consoleSpy).not.toHaveBeenCalled()
        })

        it('does not warn if aria-label and title is present', () => {
            render(
                <Button aria-label="Test" title="Test">
                    Children content
                </Button>
            )

            expect(consoleSpy).not.toHaveBeenCalled()
        })

        it('warns if no children are present with no arial-label and title', () => {
            render(<Button>{/* No children */}</Button>)

            expect(consoleSpy).toHaveBeenCalledWith(
                'Button component has no children but is missing title and ariaLabel attribute.'
            )
        })

        it('No warning if there are no children but arial label and title', () => {
            render(
                <Button aria-label="Test" title="Test">
                    {/* No children */}
                </Button>
            )

            expect(consoleSpy).not.toHaveBeenCalled()
        })
    })

    it('renders a default data-test attribute', () => {
        const dataTest = 'dhis2-uicore-button'
        const wrapper = mount(<Button dataTest={dataTest} />)

        const actual = wrapper.find({ 'data-test': dataTest })

        expect(actual.length).toBe(1)
    })

    it('renders a custom data-test attribute', () => {
        const dataTest = 'button-data-test'
        const wrapper = mount(<Button dataTest={dataTest} />)

        const actual = wrapper.find({ 'data-test': dataTest })

        expect(actual.length).toBe(1)
    })

    it('has the accessibility attributes', () => {
        const dataTest = 'button-data-test'
        const wrapper = mount(
            <Button
                dataTest={dataTest}
                ariaLabel="test aria label"
                title="title for button"
            />
        )
        const buttonElement = wrapper.find('button').getDOMNode()
        expect(buttonElement).toHaveAttribute('title', 'title for button')
        expect(buttonElement).toHaveAttribute('ariaLabel', 'test aria label')
    })

    describe('toggle', () => {
        it('should have class "toggled" if toggled-prop is true', () => {
            const wrapper = mount(<Button toggled />)

            const actual = wrapper.find('button')
            expect(actual.hasClass('toggled')).toBe(true)
        })
        it('should not have class "toggled" if toggled-prop is not passed', () => {
            const wrapper = mount(<Button />)

            const actual = wrapper.find('button')
            expect(actual.hasClass('toggled')).toBe(false)
        })
    })

    it('should call the onKeyDown callback when provided', () => {
        const onKeyDown = jest.fn()

        render(
            <Button
                name="button-name"
                value="button-value"
                onKeyDown={onKeyDown}
            >
                btn
            </Button>
        )

        fireEvent.keyDown(screen.getByRole('button'), {
            key: 'Enter',
            code: 'Enter',
            charCode: 13,
        })

        expect(onKeyDown).toHaveBeenCalledWith(
            { name: 'button-name', value: 'button-value' },
            expect.objectContaining({})
        )

        expect(onKeyDown).toHaveBeenCalledTimes(1)
    })

    describe('when the browser has translated the page', () => {
        // Google Translate replaces text nodes with <font> elements
        const translateTextNodes = (root) => {
            const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
            const textNodes = []
            while (walker.nextNode()) {
                textNodes.push(walker.currentNode)
            }
            textNodes.forEach((textNode) => {
                const font = document.createElement('font')
                font.textContent = `translated ${textNode.nodeValue}`
                textNode.parentNode.replaceChild(font, textNode)
            })
        }

        it('does not crash when loading is turned on', () => {
            const { rerender } = render(<Button>Save</Button>)
            translateTextNodes(screen.getByRole('button'))

            expect(() => rerender(<Button loading>Save</Button>)).not.toThrow()
            expect(screen.getByRole('button')).toBeDisabled()
            expect(screen.getByRole('progressbar')).toBeInTheDocument()
        })

        it('does not crash when an icon is added', () => {
            const { rerender } = render(<Button>Save</Button>)
            translateTextNodes(screen.getByRole('button'))

            expect(() =>
                rerender(<Button icon={<svg data-test="icon" />}>Save</Button>)
            ).not.toThrow()
            expect(
                screen.getByRole('button').querySelector('[data-test="icon"]')
            ).toBeInTheDocument()
        })
    })
})
