import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { SelectorBarItem } from '../selector-bar-item/index.js'
import { SelectorBar } from './selector-bar.js'

const noop = () => null

describe('SelectorBar', () => {
    it('should render the selection bar items', () => {
        render(
            <SelectorBar>
                <SelectorBarItem
                    label="Selection bar item 1"
                    noValueMessage="No value message 1"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </SelectorBarItem>

                <SelectorBarItem
                    label="Selection bar item 2"
                    noValueMessage="No value message 2"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </SelectorBarItem>
            </SelectorBar>
        )

        expect(screen.getByText('Selection bar item 1')).not.toBeNull()
        expect(screen.getByText('Selection bar item 2')).not.toBeNull()
    })

    it('should not disable the clear selection button by default', () => {
        render(
            <SelectorBar onClearSelectionClick={noop}>
                <SelectorBarItem
                    label="label"
                    noValueMessage="msg"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </SelectorBarItem>
            </SelectorBar>
        )

        const clearBtn = screen.getByText('Clear selections')
        expect(clearBtn).not.toBeNull()
        expect(clearBtn).not.toBeDisabled()
    })

    it('should disable the clear selection button', () => {
        render(
            <SelectorBar disableClearSelections onClearSelectionClick={noop}>
                <SelectorBarItem
                    label="label"
                    noValueMessage="msg"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </SelectorBarItem>
            </SelectorBar>
        )

        const clearBtn = screen.getByText('Clear selections')
        expect(clearBtn).not.toBeNull()
        expect(clearBtn).toBeDisabled()
    })

    it('should render the optional content', () => {
        render(
            <SelectorBar additionalContent={<div>Foobar</div>}>
                <SelectorBarItem
                    label="label"
                    noValueMessage="msg"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </SelectorBarItem>
            </SelectorBar>
        )

        const extraContent = screen.getByText('Foobar')
        expect(extraContent).not.toBeNull()
    })

    it('should render the displayOnly value', () => {
        render(
            <SelectorBar>
                <SelectorBarItem
                    displayOnly={true}
                    label="Person"
                    value="John doe"
                />
            </SelectorBar>
        )

        const value = screen.getByText('John doe')
        expect(value).not.toBeNull()
    })

    it('should render the cross icon', () => {
        render(
            <SelectorBar>
                <SelectorBarItem
                    label="label"
                    value="selected value"
                    onClearSelectionClick={noop}
                />
            </SelectorBar>
        )

        const clearIcon = screen.getByTestId(
            'dhis2-ui-selectorbaritem-clear-icon'
        )
        expect(clearIcon).not.toBeNull()
    })

    it('should open a closed item when its trigger is clicked', () => {
        const setOpen = jest.fn()
        render(
            <SelectorBar>
                <SelectorBarItem
                    label="label"
                    noValueMessage="msg"
                    open={false}
                    setOpen={setOpen}
                >
                    Content
                </SelectorBarItem>
            </SelectorBar>
        )

        fireEvent.click(screen.getByRole('button', { name: /label/ }))
        expect(setOpen).toHaveBeenCalledWith(true)
    })

    it('should close an open item when Space is pressed on its trigger', async () => {
        const user = userEvent.setup()
        const setOpen = jest.fn()
        render(
            <SelectorBar>
                <SelectorBarItem
                    label="label"
                    noValueMessage="msg"
                    open={true}
                    setOpen={setOpen}
                >
                    Content
                </SelectorBarItem>
            </SelectorBar>
        )
        screen.getByRole('button', { name: /label/ }).focus()
        await user.keyboard(' ')

        expect(setOpen).toHaveBeenCalledWith(false)
    })

    it('should not toggle the item when a click originates inside the popup', () => {
        const setOpen = jest.fn()
        render(
            <SelectorBar>
                <SelectorBarItem
                    label="label"
                    noValueMessage="msg"
                    open={true}
                    setOpen={setOpen}
                >
                    <button type="button">Inside the popup</button>
                </SelectorBarItem>
            </SelectorBar>
        )
        fireEvent.click(screen.getByText('Inside the popup'))

        expect(setOpen).not.toHaveBeenCalled()
    })

    it('should focus the clear selection button itself, not its wrapper', async () => {
        const user = userEvent.setup()
        const onClearSelectionClick = jest.fn()
        render(
            <SelectorBar onClearSelectionClick={onClearSelectionClick}>
                <SelectorBarItem
                    label="label"
                    noValueMessage="msg"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </SelectorBarItem>
            </SelectorBar>
        )

        const item = screen.getByRole('button', { name: /label/ })
        const clearBtn = screen.getByText('Clear selections')

        item.focus()
        fireEvent.keyDown(item, { key: 'ArrowRight' })

        expect(clearBtn).toHaveFocus()
        expect(clearBtn.parentElement).not.toHaveAttribute('tabindex')

        await user.keyboard('{Enter}')
        expect(onClearSelectionClick).toHaveBeenCalled()
    })

    it('should move focus between items with the arrow keys', () => {
        render(
            <SelectorBar>
                <SelectorBarItem
                    label="first"
                    noValueMessage="msg"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </SelectorBarItem>
                <SelectorBarItem
                    label="second"
                    noValueMessage="msg"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </SelectorBarItem>
            </SelectorBar>
        )

        const first = screen.getByRole('button', { name: /first/ })
        const second = screen.getByRole('button', { name: /second/ })

        expect(first).toHaveAttribute('tabindex', '-1')

        first.focus()
        fireEvent.keyDown(first, { key: 'ArrowRight' })
        expect(second).toHaveFocus()

        fireEvent.keyDown(second, { key: 'ArrowLeft' })
        expect(first).toHaveFocus()
    })

    it('should skip the clear selection button once it becomes disabled', () => {
        const children = (
            <SelectorBarItem
                label="label"
                noValueMessage="msg"
                open={false}
                setOpen={noop}
            >
                Content
            </SelectorBarItem>
        )
        const { rerender } = render(
            <SelectorBar onClearSelectionClick={noop}>{children}</SelectorBar>
        )

        const item = screen.getByRole('button', { name: /label/ })
        const clearBtn = screen.getByText('Clear selections')

        item.focus()
        fireEvent.keyDown(item, { key: 'ArrowRight' })
        expect(clearBtn).toHaveFocus()

        rerender(
            <SelectorBar disableClearSelections onClearSelectionClick={noop}>
                {children}
            </SelectorBar>
        )

        item.focus()
        fireEvent.keyDown(item, { key: 'ArrowRight' })

        expect(item).toHaveFocus()
    })
})
