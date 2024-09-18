import { mount } from 'enzyme'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { Tooltip } from './tooltip.js'

// Due to its global nature, tooltip & popper need to be unmounted after each test
let wrapper
const tooltipContent = 'tooltip content'
const tooltipContentSelector = '[data-test="dhis2-uicore-tooltip-content"]'

beforeEach(() => {
    jest.useFakeTimers()
    wrapper = mount(<div />)
})

afterEach(() => {
    // clean up any tooltips that are still open
    wrapper.unmount()
})

describe('default delay behavior', () => {
    it('opens after a delay of 200ms', () => {
        wrapper = mount(<Tooltip content={tooltipContent}>Hi hi!</Tooltip>)
        wrapper.simulate('mouseover')

        expect(document.querySelector(tooltipContentSelector)).toBe(null)

        // wait for 'open delay' to elapse to open tooltip
        act(() => {
            jest.advanceTimersByTime(200)
        })

        // expect tooltip to be open after delay
        const res = document.querySelector(tooltipContentSelector)
        expect(res).not.toBe(null)
        expect(res.textContent).toBe(tooltipContent)

        // this last part clears a warning about "code should be wrapped in `act(...)`"
        // and clears the tooltip
        wrapper.simulate('mouseout')
        act(() => {
            jest.runAllTimers()
        })
    })

    it('closes after a delay of 400ms', () => {
        wrapper = mount(<Tooltip content={tooltipContent}>Hi hi!</Tooltip>)

        // open tooltip
        wrapper.simulate('mouseover')

        act(() => {
            jest.runAllTimers()
        })
        // verify tooltip is open
        expect(document.querySelector(tooltipContentSelector)).not.toBe(null)

        // close tooltip
        wrapper.simulate('mouseout')

        // delay function has been called; tooltip is still open
        expect(document.querySelector(tooltipContentSelector)).not.toBe(null)

        // wait for close delay
        act(() => {
            jest.advanceTimersByTime(400)
        })

        // expect tooltip to be closed
        expect(document.querySelector(tooltipContentSelector)).toBe(null)
    })
})

it("doesn't leave a rendered node open", () => {
    // makes sure 'unmount' is working
    const res = document.querySelector('[data-test="dhis2-uicore-popper"]')
    expect(res).toBe(null)
})

describe('it handles custom open and close delays', () => {
    it('handles open delay = close delay = 0', () => {
        wrapper = mount(
            <Tooltip openDelay={0} closeDelay={0} content={tooltipContent}>
                Hi hi!
            </Tooltip>
        )

        // open tooltip
        wrapper.simulate('mouseover')

        // wait for open delay (necessary b/c timeout is still used)
        act(() => {
            jest.advanceTimersByTime(0)
        })
        // verify tooltip is open
        expect(document.querySelector(tooltipContentSelector)).not.toBe(null)

        // close tooltip
        wrapper.simulate('mouseout')

        // wait for close delay (necessary b/c timeout is used)
        act(() => {
            jest.advanceTimersByTime(0)
        })

        // expect tooltip to be closed
        expect(document.querySelector(tooltipContentSelector)).toBe(null)
    })

    it('handles open delay = close delay = 1000', () => {
        wrapper = mount(
            <Tooltip
                openDelay={1000}
                closeDelay={1000}
                content={tooltipContent}
            >
                Hi hi!
            </Tooltip>
        )

        // open tooltip
        wrapper.simulate('mouseover')

        // expect tooltip is not open after 950ms
        act(() => {
            jest.advanceTimersByTime(950)
        })
        expect(document.querySelector(tooltipContentSelector)).toBe(null)

        // finish wait for open delay
        act(() => {
            jest.advanceTimersByTime(50)
        })
        // verify tooltip is open
        expect(document.querySelector(tooltipContentSelector)).not.toBe(null)

        // close tooltip
        wrapper.simulate('mouseout')

        // expect tooltip to still be open after 950ms
        act(() => {
            jest.advanceTimersByTime(950)
        })
        expect(document.querySelector(tooltipContentSelector)).not.toBe(null)

        // Finisih waiting for close delay
        act(() => {
            jest.advanceTimersByTime(50)
        })

        // expect tooltip to be closed
        expect(document.querySelector(tooltipContentSelector)).toBe(null)
    })
})

describe('Keyboard interaction', () => {
    it('opens on keyboard focus and closes on blur', () => {
        wrapper = mount(<Tooltip content={tooltipContent}>Hi hi!</Tooltip>)
        wrapper.simulate('focus')

        expect(document.querySelector(tooltipContentSelector)).toBe(null)

        act(() => {
            jest.advanceTimersByTime(200)
        })

        const res = document.querySelector(tooltipContentSelector)
        expect(res).not.toBe(null)
        expect(res.textContent).toBe(tooltipContent)

        wrapper.simulate('blur')
        act(() => {
            jest.advanceTimersByTime(200)
        })
        expect(document.querySelector(tooltipContentSelector)).toBe(null)

        act(() => {
            jest.runAllTimers()
        })
    })

    it('closes when escape key is pressed', () => {
        wrapper = mount(<Tooltip content={tooltipContent}>Hi hi!</Tooltip>)

        // open tooltip
        wrapper.simulate('mouseover')

        act(() => {
            jest.advanceTimersByTime(200)
        })

        // verify tooltip is open
        expect(document.querySelector(tooltipContentSelector)).not.toBe(null)

        //Press the Escape key
        act(() => {
            document.dispatchEvent(
                new KeyboardEvent('keydown', { key: 'Escape' })
            )
        })

        // wait for close delay
        act(() => {
            jest.advanceTimersByTime(200)
        })

        // expect tooltip to be closed
        expect(document.querySelector(tooltipContentSelector)).toBe(null)
    })
})
