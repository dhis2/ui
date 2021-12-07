import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { ContextSelector } from '../context-selector/index.js'
import { ContextSelection } from './context-selection.js'

const noop = () => null

describe('ContextSelection', () => {
    it('should render the context selectors', () => {
        render(
            <ContextSelection>
                <ContextSelector
                    label="Context selector 1"
                    noValueMessage="No value message 1"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </ContextSelector>

                <ContextSelector
                    label="Context selector 2"
                    noValueMessage="No value message 2"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </ContextSelector>
            </ContextSelection>
        )

        expect(screen.getByText('Context selector 1')).not.toBeNull()
        expect(screen.getByText('Context selector 2')).not.toBeNull()
    })

    it('should not disable the clear selection button by default', () => {
        render(
            <ContextSelection onClearSelectionClick={noop}>
                <ContextSelector
                    label="label"
                    noValueMessage="msg"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </ContextSelector>
            </ContextSelection>
        )

        const clearBtn = screen.getByText('Clear selections')
        expect(clearBtn).not.toBeNull()
        expect(clearBtn).not.toBeDisabled()
    })

    it('should disable the clear selection button', () => {
        render(
            <ContextSelection
                disableClearSelections
                onClearSelectionClick={noop}
            >
                <ContextSelector
                    label="label"
                    noValueMessage="msg"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </ContextSelector>
            </ContextSelection>
        )

        const clearBtn = screen.getByText('Clear selections')
        expect(clearBtn).not.toBeNull()
        expect(clearBtn).toBeDisabled()
    })

    it('should render the optional content', () => {
        render(
            <ContextSelection rightHandSideContents={<div>Foobar</div>}>
                <ContextSelector
                    label="label"
                    noValueMessage="msg"
                    open={false}
                    setOpen={noop}
                >
                    Content
                </ContextSelector>
            </ContextSelection>
        )

        const extraContent = screen.getByText('Foobar')
        expect(extraContent).not.toBeNull()
    })
})
