import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import { shallow } from 'enzyme'
import React from 'react'
import { Button } from '../../index.js'
import { DropdownButton } from '../dropdown-button.js'

describe('<DropdownButton>', () => {
    describe('controlled mode', () => {
        describe('open state', () => {
            const onClick = jest.fn()
            const wrapper = shallow(
                <DropdownButton
                    onClick={onClick}
                    open={true}
                    component={<span>test</span>}
                />
            )
            it('it shows the Popper when open is true', () => {
                const popper = wrapper.find(Popper)
                expect(popper).toHaveLength(1)
                expect(popper.find('span').text()).toEqual('test')
            })
            it('passes an "open" property to the callback payload with the next open state', () => {
                wrapper.find(Layer).simulate('click')
                expect(onClick).toHaveBeenCalledTimes(1)

                const args = onClick.mock.calls[0]

                expect(args).toHaveLength(2)
                expect(args[0]).toEqual(
                    expect.objectContaining({
                        open: false,
                    })
                )
            })
        })
        describe('closed state', () => {
            const onClick = jest.fn()
            const wrapper = shallow(
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
