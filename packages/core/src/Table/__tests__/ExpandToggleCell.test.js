import { IconChevronDown24, IconChevronUp24 } from '@dhis2/ui-icons'
import { shallow } from 'enzyme'
import React from 'react'
import { ExpandToggleCell } from '../TableRowExpandable/ExpandToggleCell.js'

describe('<ExpandToggleCell>', () => {
    const onClick = jest.fn()

    it('renders an <IconChevronUp24> when isExpanded is true', () => {
        const wrapper = shallow(
            <ExpandToggleCell isExpanded onClick={onClick} />
        )

        expect(wrapper.find(IconChevronUp24)).toHaveLength(1)
        expect(wrapper.find(IconChevronDown24)).toHaveLength(0)
    })
    it('renders an <IconChevronDown24> when isExpanded is falsy', () => {
        const wrapper = shallow(
            <ExpandToggleCell isExpanded={false} onClick={onClick} />
        )

        expect(wrapper.find(IconChevronUp24)).toHaveLength(0)
        expect(wrapper.find(IconChevronDown24)).toHaveLength(1)
    })
    it('responds to clicks', () => {
        const wrapper = shallow(
            <ExpandToggleCell isExpanded={false} onClick={onClick} />
        )
        wrapper.simulate('click')

        expect(onClick).toHaveBeenCalledTimes(1)
    })
})
