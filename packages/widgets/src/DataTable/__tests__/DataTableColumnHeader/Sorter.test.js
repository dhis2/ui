import { shallow } from 'enzyme'
import React from 'react'
import { Sorter, ASC, DESC } from '../../DataTableColumnHeader/Sorter.js'
import { TableHeaderCellAction } from '../../TableElements/index.js'

describe('<Sorter>', () => {
    it('accepts a sortDirection prop', () => {
        const wrapper = shallow(<Sorter sortDirection={ASC} />)

        expect(
            wrapper.find(TableHeaderCellAction).dive().find('svg').hasClass(ASC)
        ).toBe(true)
    })
    it('accepts a name and onClick prop', () => {
        const name = 'test'
        const fakeEvent = {
            target: 'test',
            value: 'test',
        }
        const onClick = jest.fn()
        const wrapper = shallow(
            <Sorter sortDirection={ASC} onClick={onClick} name={name} />
        )

        wrapper
            .find(TableHeaderCellAction)
            .dive()
            .find('button')
            .simulate('click', fakeEvent)

        expect(onClick).toHaveBeenCalledTimes(1)
        expect(onClick).toHaveBeenCalledWith(
            {
                name,
                // next sort direction
                direction: DESC,
            },
            fakeEvent
        )
    })
})
