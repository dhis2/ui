import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { SelectorGroupItem } from '../selector-group-item/index.js'
import { SelectorGroup } from './selector-group.js'

const noop = () => null

describe('SelectorGroup', () => {
    it('should render the selection group items', () => {
        render(
            <SelectorGroup>
                <SelectorGroupItem
                    label="Selection group item 1"
                    noValueMessage="No value message 1"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </SelectorGroupItem>

                <SelectorGroupItem
                    label="Selection group item 2"
                    noValueMessage="No value message 2"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </SelectorGroupItem>
            </SelectorGroup>
        )

        expect(screen.getByText('Selection group item 1')).not.toBeNull()
        expect(screen.getByText('Selection group item 2')).not.toBeNull()
    })

    it('should not disable the clear selection button by default', () => {
        render(
            <SelectorGroup onClearSelectionClick={noop}>
                <SelectorGroupItem
                    label="label"
                    noValueMessage="msg"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </SelectorGroupItem>
            </SelectorGroup>
        )

        const clearBtn = screen.getByText('Clear selections')
        expect(clearBtn).not.toBeNull()
        expect(clearBtn).not.toBeDisabled()
    })

    it('should disable the clear selection button', () => {
        render(
            <SelectorGroup disableClearSelections onClearSelectionClick={noop}>
                <SelectorGroupItem
                    label="label"
                    noValueMessage="msg"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </SelectorGroupItem>
            </SelectorGroup>
        )

        const clearBtn = screen.getByText('Clear selections')
        expect(clearBtn).not.toBeNull()
        expect(clearBtn).toBeDisabled()
    })

    it('should render the optional content', () => {
        render(
            <SelectorGroup additionalContent={<div>Foobar</div>}>
                <SelectorGroupItem
                    label="label"
                    noValueMessage="msg"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </SelectorGroupItem>
            </SelectorGroup>
        )

        const extraContent = screen.getByText('Foobar')
        expect(extraContent).not.toBeNull()
    })
})
