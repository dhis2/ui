import { shallow } from 'enzyme'
import React from 'react'
import {
    Sorter,
    getNextSortDirection,
    ASC,
    DESC,
    DEFAULT,
} from '../../TableCellHead/Sorter.js'

describe('<Sorter>', () => {
    it('accepts an sortDirection prop and sets this as a className', () => {
        const sorterDefault = shallow(
            <Sorter onSortIconClick={() => {}} sortDirection={DEFAULT} />
        )
        const sorterAsc = shallow(
            <Sorter onSortIconClick={() => {}} sortDirection={ASC} />
        )
        const sorterDesc = shallow(
            <Sorter onSortIconClick={() => {}} sortDirection={DESC} />
        )
        expect(sorterDefault.find('svg').hasClass(DEFAULT)).toBe(true)
        expect(sorterAsc.find('svg').hasClass(ASC)).toBe(true)
        expect(sorterDesc.find('svg').hasClass(DESC)).toBe(true)
    })

    it('accepts an onSortIconClick prop', () => {
        const fakeEvent = {
            target: 'test',
            value: 'test',
        }
        const onSortIconClick = jest.fn()
        const name = 'test'
        const wrapper = shallow(
            <Sorter
                sortDirection={ASC}
                onSortIconClick={onSortIconClick}
                name={name}
            />
        )

        wrapper.simulate('click', fakeEvent)

        expect(onSortIconClick).toHaveBeenCalledTimes(1)
        expect(onSortIconClick).toHaveBeenCalledWith(
            {
                name,
                direction: DESC,
            },
            fakeEvent
        )
    })

    describe('getNextSortDirection helper', () => {
        it('correctly returns the next sort direction before the last sort direction', () => {
            expect(getNextSortDirection(DEFAULT)).toBe(ASC)
            expect(getNextSortDirection(ASC)).toBe(DESC)
        })
        it('returns the first sort direction the current sort direction is the last one', () => {
            expect(getNextSortDirection(DESC)).toBe(DEFAULT)
        })
    })
})
