import { colors } from '@dhis2/ui-constants'
import { TableHeaderCellAction } from '@dhis2/ui-core'
import { IconSearch16 } from '@dhis2/ui-icons'
import { shallow } from 'enzyme'
import React from 'react'
import { FilterHandle } from '../../DataTableColumnHeader/FilterHandle.js'

describe('<FilterHandle>', () => {
    it('accepts an active prop', () => {
        const wrapper = shallow(<FilterHandle />)
        const wrapperActive = shallow(<FilterHandle active />)

        expect(wrapper.find(IconSearch16).prop('color')).toBe(colors.grey600)
        expect(wrapperActive.find(IconSearch16).prop('color')).toBe(
            colors.blue700
        )
    })
    it('accepts a name and onClick prop', () => {
        const name = 'test'
        const fakeEvent = {
            target: 'test',
            value: 'test',
        }
        const onClick = jest.fn()
        const wrapper = shallow(<FilterHandle onClick={onClick} name={name} />)

        wrapper
            .find(TableHeaderCellAction)
            .dive()
            .find('button')
            .simulate('click', fakeEvent)

        expect(onClick).toHaveBeenCalledTimes(1)
        expect(onClick).toHaveBeenCalledWith(
            {
                name,
                // toggled
                show: true,
            },
            fakeEvent
        )
    })
})
