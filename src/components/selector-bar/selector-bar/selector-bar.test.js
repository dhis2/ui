import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
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
})
