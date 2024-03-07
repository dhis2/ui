import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { mount } from 'enzyme'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { Modal } from '../../../../modal/src/modal/modal.js'
import { Button } from '../../index.js'
import { DropdownButton } from '../dropdown-button.js'

describe('<DropdownButton>', () => {
    describe('controlled mode', () => {
        describe('open state', () => {
            const onClick = jest.fn()
            const Component = (
                <DropdownButton
                    onClick={onClick}
                    open={true}
                    component={<span>test</span>}
                />
            )
            it('shows the Popper when open is true', async () => {
                // TODO: https://github.com/popperjs/react-popper/issues/350
                const wrapper = mount(Component)
                await act(async () => await null)

                const popper = wrapper.find(Popper)
                expect(popper).toHaveLength(1)
                expect(popper.find('span').text()).toEqual('test')
            })
            it('passes an "open" property to the callback payload with the next open state', async () => {
                // TODO: https://github.com/popperjs/react-popper/issues/350
                const wrapper = mount(Component)
                await act(async () => await null)

                wrapper.find(Layer).find('.backdrop').simulate('click')
                expect(onClick).toHaveBeenCalledTimes(1)

                const args = onClick.mock.calls[0]

                expect(args).toHaveLength(2)
                expect(args[0]).toEqual(
                    expect.objectContaining({
                        open: false,
                    })
                )
            })
            it('closes dropdown when escape key is pressed', async () => {
                const componentText = 'Dropdown Content'

                const { getByTestId, queryByText } = render(
                    <DropdownButton component={componentText} />
                )

                const toggleButton = getByTestId(
                    'dhis2-uicore-dropdownbutton-toggle'
                )
                fireEvent.click(toggleButton)

                await waitFor(() => {
                    expect(queryByText(componentText)).toBeInTheDocument()
                })

                fireEvent.keyDown(document, { key: 'Escape' })

                await waitFor(() => {
                    expect(queryByText(componentText)).not.toBeInTheDocument()
                })
            })
            test('modal remains open when dropdown button is closed on escape click', async () => {
                const dropdownButtonText = 'Dropdown Content'
                const headingText = 'Heading Text'
                const modalContent = (
                    <div>
                        <h1>{headingText}</h1>
                        <DropdownButton component={dropdownButtonText} />
                    </div>
                )

                const { getByTestId, queryByText } = render(
                    <Modal hide={false} onClose={() => {}}>
                        {modalContent}
                    </Modal>
                )

                const toggleButton = getByTestId(
                    'dhis2-uicore-dropdownbutton-toggle'
                )
                fireEvent.click(toggleButton)

                await waitFor(() => {
                    expect(queryByText(dropdownButtonText)).toBeInTheDocument()
                })

                fireEvent.keyDown(document, { key: 'Escape' })

                await waitFor(() => {
                    expect(
                        queryByText(dropdownButtonText)
                    ).not.toBeInTheDocument()
                    expect(queryByText(headingText)).toBeInTheDocument()
                })
            })
        })

        describe('closed state', () => {
            const onClick = jest.fn()
            const wrapper = mount(
                <DropdownButton
                    onClick={onClick}
                    open={false}
                    component={<span>test</span>}
                />
            )

            it('it does not show the Popper when open is false', () => {
                const popper = wrapper.find(Popper)
                expect(popper).toHaveLength(0)
            })
            it('passes an "open" property to the callback payload with the next open state (false)', () => {
                wrapper.find(Button).simulate('click')
                expect(onClick).toHaveBeenCalledTimes(1)

                const args = onClick.mock.calls[0]

                expect(args).toHaveLength(2)
                expect(args[0]).toEqual(
                    expect.objectContaining({
                        open: true,
                    })
                )
            })
        })
    })
})
