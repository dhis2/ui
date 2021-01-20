import { IconSearch16 } from '@dhis2/ui-icons'
import { shallow } from 'enzyme'
import React from 'react'
import { FilterHandle } from '../../TableCellHead/FilterHandle.js'

describe('<FilterHandle>', () => {
    it('accepts an active prop', () => {
        const activeColor = '#1565c0'
        const inactiveColor = '#6e7a8a'
        const activeWrapper = shallow(<FilterHandle active />)
        const inactiveWrapper = shallow(<FilterHandle />)

        expect(activeWrapper.find(IconSearch16).prop('color')).toBe(activeColor)
        expect(inactiveWrapper.find(IconSearch16).prop('color')).toBe(
            inactiveColor
        )
    })

    it('accepts an onFilterIconClick prop', () => {
        const fakeEvent = {
            target: 'test',
            value: 'test',
        }
        const onFilterIconClick = jest.fn()
        const name = 'test'
        const wrapper = shallow(
            <FilterHandle
                onFilterIconClick={onFilterIconClick}
                active
                name={name}
            />
        )

        wrapper.simulate('click', fakeEvent)

        expect(onFilterIconClick).toHaveBeenCalledTimes(1)
        expect(onFilterIconClick).toHaveBeenCalledWith(
            {
                name,
                show: false,
            },
            fakeEvent
        )
    })
})
