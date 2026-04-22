import { mount } from 'enzyme'
import React from 'react'
import { ReorderingActions } from '../reordering-actions.js'

const findButton = (wrapper, dataTest) =>
    wrapper.find(`button[data-test="${dataTest}"]`)

const allButtonHooks = (dataTest) => [
    `${dataTest}-buttonmovetotop`,
    `${dataTest}-buttonmoveup`,
    `${dataTest}-buttonmovedown`,
    `${dataTest}-buttonmovetobottom`,
]

describe('Transfer - ReorderingActions', () => {
    const dataTest = 'test-reorderingactions'
    const baseProps = {
        dataTest,
        onChangeUp: jest.fn(),
        onChangeDown: jest.fn(),
        onChangeToTop: jest.fn(),
        onChangeToBottom: jest.fn(),
    }

    afterEach(() => {
        Object.values(baseProps).forEach((value) => {
            if (jest.isMockFunction(value)) {
                value.mockClear()
            }
        })
    })

    it('renders all four reorder buttons', () => {
        const wrapper = mount(<ReorderingActions {...baseProps} />)

        expect(findButton(wrapper, `${dataTest}-buttonmovetotop`)).toHaveLength(
            1
        )
        expect(findButton(wrapper, `${dataTest}-buttonmoveup`)).toHaveLength(1)
        expect(findButton(wrapper, `${dataTest}-buttonmovedown`)).toHaveLength(
            1
        )
        expect(
            findButton(wrapper, `${dataTest}-buttonmovetobottom`)
        ).toHaveLength(1)
    })

    it('invokes the corresponding handler for each button', () => {
        const wrapper = mount(<ReorderingActions {...baseProps} />)

        findButton(wrapper, `${dataTest}-buttonmovetotop`).simulate('click')
        expect(baseProps.onChangeToTop).toHaveBeenCalledTimes(1)

        findButton(wrapper, `${dataTest}-buttonmoveup`).simulate('click')
        expect(baseProps.onChangeUp).toHaveBeenCalledTimes(1)

        findButton(wrapper, `${dataTest}-buttonmovedown`).simulate('click')
        expect(baseProps.onChangeDown).toHaveBeenCalledTimes(1)

        findButton(wrapper, `${dataTest}-buttonmovetobottom`).simulate('click')
        expect(baseProps.onChangeToBottom).toHaveBeenCalledTimes(1)
    })

    it('does not cross-fire handlers when a single button is clicked', () => {
        const wrapper = mount(<ReorderingActions {...baseProps} />)

        findButton(wrapper, `${dataTest}-buttonmoveup`).simulate('click')

        expect(baseProps.onChangeUp).toHaveBeenCalledTimes(1)
        expect(baseProps.onChangeDown).not.toHaveBeenCalled()
        expect(baseProps.onChangeToTop).not.toHaveBeenCalled()
        expect(baseProps.onChangeToBottom).not.toHaveBeenCalled()
    })

    it('disables both up-side buttons when disabledUp is true', () => {
        const wrapper = mount(
            <ReorderingActions {...baseProps} disabledUp={true} />
        )

        expect(
            findButton(wrapper, `${dataTest}-buttonmovetotop`).prop('disabled')
        ).toBe(true)
        expect(
            findButton(wrapper, `${dataTest}-buttonmoveup`).prop('disabled')
        ).toBe(true)
        expect(
            findButton(wrapper, `${dataTest}-buttonmovedown`).prop('disabled')
        ).toBeFalsy()
        expect(
            findButton(wrapper, `${dataTest}-buttonmovetobottom`).prop(
                'disabled'
            )
        ).toBeFalsy()
    })

    it('disables both down-side buttons when disabledDown is true', () => {
        const wrapper = mount(
            <ReorderingActions {...baseProps} disabledDown={true} />
        )

        expect(
            findButton(wrapper, `${dataTest}-buttonmovedown`).prop('disabled')
        ).toBe(true)
        expect(
            findButton(wrapper, `${dataTest}-buttonmovetobottom`).prop(
                'disabled'
            )
        ).toBe(true)
        expect(
            findButton(wrapper, `${dataTest}-buttonmoveup`).prop('disabled')
        ).toBeFalsy()
        expect(
            findButton(wrapper, `${dataTest}-buttonmovetotop`).prop('disabled')
        ).toBeFalsy()
    })

    it('does not invoke handlers for disabled buttons', () => {
        const wrapper = mount(
            <ReorderingActions
                {...baseProps}
                disabledUp={true}
                disabledDown={true}
            />
        )

        findButton(wrapper, `${dataTest}-buttonmovetotop`).simulate('click')
        findButton(wrapper, `${dataTest}-buttonmoveup`).simulate('click')
        findButton(wrapper, `${dataTest}-buttonmovedown`).simulate('click')
        findButton(wrapper, `${dataTest}-buttonmovetobottom`).simulate('click')

        expect(baseProps.onChangeToTop).not.toHaveBeenCalled()
        expect(baseProps.onChangeUp).not.toHaveBeenCalled()
        expect(baseProps.onChangeDown).not.toHaveBeenCalled()
        expect(baseProps.onChangeToBottom).not.toHaveBeenCalled()
    })

    it('sets aria-label on every button', () => {
        const wrapper = mount(<ReorderingActions {...baseProps} />)

        const assertLabel = (hook, label) => {
            expect(findButton(wrapper, hook).prop('aria-label')).toBe(label)
        }

        assertLabel(`${dataTest}-buttonmovetotop`, 'Move selected items to top')
        assertLabel(`${dataTest}-buttonmoveup`, 'Move selected items up')
        assertLabel(`${dataTest}-buttonmovedown`, 'Move selected items down')
        assertLabel(
            `${dataTest}-buttonmovetobottom`,
            'Move selected items to bottom'
        )
    })

    it('still renders and wires up all four buttons when filterActive is true', () => {
        const wrapper = mount(
            <ReorderingActions {...baseProps} filterActive={true} />
        )

        allButtonHooks(dataTest).forEach((hook) => {
            expect(findButton(wrapper, hook)).toHaveLength(1)
        })

        findButton(wrapper, `${dataTest}-buttonmoveup`).simulate('click')
        expect(baseProps.onChangeUp).toHaveBeenCalledTimes(1)
    })
})
