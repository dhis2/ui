import { IconChevronDown24, IconChevronUp24 } from '@dhis2/ui-icons'
import { shallow } from 'enzyme'
import React from 'react'
import { ExpandHandleCell } from '../../DataTableRow/ExpandHandleCell.js'

describe('<ExpandHandleCell>', () => {
    it('renders an <IconChevronUp24> when expanded is true', () => {
        const wrapper = shallow(<ExpandHandleCell expanded />)

        expect(wrapper.find(IconChevronUp24)).toHaveLength(1)
        expect(wrapper.find(IconChevronDown24)).toHaveLength(0)
    })
    it('renders an <IconChevronDown24> when expanded is falsy', () => {
        const wrapper = shallow(<ExpandHandleCell />)

        expect(wrapper.find(IconChevronUp24)).toHaveLength(0)
        expect(wrapper.find(IconChevronDown24)).toHaveLength(1)
    })
    it('responds to clicks', () => {
        const onClick = jest.fn()
        const wrapper = shallow(
            <ExpandHandleCell expanded={false} onClick={onClick} />
        )

        wrapper.simulate('click')

        expect(onClick).toHaveBeenCalledTimes(1)
        expect(onClick).toHaveBeenCalledWith({
            expanded: true,
        })
    })
})
