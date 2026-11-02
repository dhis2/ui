import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'
import { SelectorBarItem } from '../selector-bar-item/index.js'
import { SelectorBar } from './selector-bar.js'

const noop = () => null

const StatefulItem = (props) => {
    const [open, setOpen] = useState(false)
    return (
        <SelectorBarItem
            label="label"
            noValueMessage="msg"
            open={open}
            setOpen={setOpen}
            {...props}
        />
    )
}

const openWithKeyboard = async (user) => {
    screen.getByRole('button', { name: /label/ }).focus()
    await user.keyboard(' ')
}

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

        expect(first).toHaveAttribute('tabindex', '0')

        first.focus()
        fireEvent.keyDown(first, { key: 'ArrowRight' })
        expect(second).toHaveFocus()

        fireEvent.keyDown(second, { key: 'ArrowLeft' })
        expect(first).toHaveFocus()
    })

    it('should skip the clear selection button once it becomes disabled', async () => {
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

        // The SelectorBar picks up DOM changes with a MutationObserver
        await waitFor(() => {
            item.focus()
            fireEvent.keyDown(item, { key: 'ArrowRight' })
            expect(item).toHaveFocus()
        })
    })

    it('should make only the active item a tab stop, not the toolbar', () => {
        render(
            <SelectorBar onClearSelectionClick={noop}>
                <SelectorBarItem
                    label="first"
                    noValueMessage="msg"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </SelectorBarItem>
            </SelectorBar>
        )

        const first = screen.getByRole('button', { name: /first/ })
        const clearBtn = screen.getByText('Clear selections')

        expect(screen.getByRole('toolbar')).not.toHaveAttribute('tabindex')

        first.focus()
        fireEvent.keyDown(first, { key: 'End' })
        expect(clearBtn).toHaveFocus()
        expect(clearBtn).toHaveAttribute('tabindex', '0')
        expect(first).toHaveAttribute('tabindex', '-1')

        fireEvent.keyDown(clearBtn, { key: 'Home' })
        expect(first).toHaveFocus()

        fireEvent.keyDown(first, { key: 'ArrowRight', altKey: true })
        expect(first).toHaveFocus()
    })

    it('should expose the open state of the item', () => {
        const { rerender } = render(
            <SelectorBar>
                <SelectorBarItem
                    label="label"
                    noValueMessage="msg"
                    open={false}
                    setOpen={noop}
                />
                <SelectorBarItem displayOnly label="person" value="John" />
            </SelectorBar>
        )

        const item = screen.getByRole('button', { name: /label/ })
        expect(item).toHaveAttribute('aria-expanded', 'false')
        expect(
            screen.getByRole('button', { name: /person/ })
        ).not.toHaveAttribute('aria-expanded')

        rerender(
            <SelectorBar>
                <SelectorBarItem
                    label="label"
                    noValueMessage="msg"
                    open={true}
                    setOpen={noop}
                />
                <SelectorBarItem displayOnly label="person" value="John" />
            </SelectorBar>
        )
        expect(item).toHaveAttribute('aria-expanded', 'true')
    })

    it('should move focus into the popup on open and back to the trigger when the content closes it', async () => {
        const user = userEvent.setup()
        const Item = () => {
            const [open, setOpen] = useState(false)
            return (
                <SelectorBarItem
                    label="label"
                    noValueMessage="msg"
                    open={open}
                    setOpen={setOpen}
                >
                    <button type="button" onClick={() => setOpen(false)}>
                        Option
                    </button>
                </SelectorBarItem>
            )
        }
        render(
            <SelectorBar>
                <Item />
            </SelectorBar>
        )

        await openWithKeyboard(user)
        const trigger = screen.getByRole('button', { name: /label/ })

        await waitFor(() => expect(screen.getByText('Option')).toHaveFocus())

        await user.keyboard('{Enter}')

        expect(screen.queryByText('Option')).toBeNull()
        expect(trigger).toHaveFocus()
    })

    it('should close the popup and focus the trigger on Escape', async () => {
        const user = userEvent.setup()
        render(
            <SelectorBar>
                <StatefulItem>
                    <button type="button">Option</button>
                </StatefulItem>
            </SelectorBar>
        )

        await openWithKeyboard(user)
        await waitFor(() => expect(screen.getByText('Option')).toHaveFocus())
        await user.keyboard('{Escape}')

        expect(screen.queryByText('Option')).toBeNull()
        expect(screen.getByRole('button', { name: /label/ })).toHaveFocus()
    })

    it('should leave Escape to popup content that already handled it', () => {
        const setOpen = jest.fn()
        render(
            <SelectorBar>
                <SelectorBarItem
                    label="label"
                    noValueMessage="msg"
                    open={true}
                    setOpen={setOpen}
                >
                    <button
                        type="button"
                        onKeyDown={(event) => event.preventDefault()}
                    >
                        Option
                    </button>
                </SelectorBarItem>
            </SelectorBar>
        )

        fireEvent.keyDown(screen.getByText('Option'), { key: 'Escape' })

        expect(setOpen).not.toHaveBeenCalled()
    })

    it('should keep the popup open while tabbing through it and close it when tabbing out', async () => {
        const user = userEvent.setup()
        render(
            <SelectorBar>
                <StatefulItem>
                    <button type="button">First option</button>
                    <button type="button">Last option</button>
                </StatefulItem>
            </SelectorBar>
        )

        await openWithKeyboard(user)
        await waitFor(() =>
            expect(screen.getByText('First option')).toHaveFocus()
        )

        await user.tab()
        expect(screen.getByText('Last option')).toHaveFocus()

        await user.tab()
        await waitFor(() =>
            expect(screen.queryByText('Last option')).toBeNull()
        )
    })

    it('should close the popup when tabbing out of content that stops key propagation', async () => {
        const user = userEvent.setup()
        render(
            <SelectorBar>
                <StatefulItem>
                    <button
                        type="button"
                        onKeyDown={(e) => e.stopPropagation()}
                    >
                        Option
                    </button>
                </StatefulItem>
            </SelectorBar>
        )

        await openWithKeyboard(user)
        await waitFor(() => expect(screen.getByText('Option')).toHaveFocus())

        await user.tab()
        await waitFor(() => expect(screen.queryByText('Option')).toBeNull())
    })

    it('should close the popup and focus the trigger on Shift+Tab from its first element', async () => {
        const user = userEvent.setup()
        render(
            <SelectorBar>
                <StatefulItem>
                    <button type="button">Option</button>
                </StatefulItem>
            </SelectorBar>
        )

        await openWithKeyboard(user)
        await waitFor(() => expect(screen.getByText('Option')).toHaveFocus())
        await user.tab({ shift: true })

        expect(screen.queryByText('Option')).toBeNull()
        expect(screen.getByRole('button', { name: /label/ })).toHaveFocus()
    })

    it('should clear the item with Delete on the trigger but not from inside the popup', () => {
        const onClearSelectionClick = jest.fn()
        render(
            <SelectorBar>
                <SelectorBarItem
                    label="label"
                    value="selected value"
                    open={true}
                    setOpen={noop}
                    onClearSelectionClick={onClearSelectionClick}
                >
                    <input aria-label="filter" />
                </SelectorBarItem>
            </SelectorBar>
        )

        fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Backspace' })
        expect(onClearSelectionClick).not.toHaveBeenCalled()

        fireEvent.keyDown(screen.getByRole('button', { name: /label/ }), {
            key: 'Delete',
        })
        expect(onClearSelectionClick).toHaveBeenCalled()
    })

    it('should close the popup when the arrow keys move focus to another item', async () => {
        const setOpen = jest.fn()
        render(
            <SelectorBar>
                <SelectorBarItem
                    label="first"
                    noValueMessage="msg"
                    open={true}
                    setOpen={setOpen}
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
        first.focus()
        fireEvent.keyDown(first, { key: 'ArrowRight' })

        expect(screen.getByRole('button', { name: /second/ })).toHaveFocus()
        await waitFor(() => expect(setOpen).toHaveBeenCalledWith(false))
    })
})
