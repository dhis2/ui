import { shallow, mount } from 'enzyme'
import React from 'react'
import { TableCell } from '../TableCell.js'
import { TableRow } from '../TableRow.js'
import { TableRowExpandable } from '../TableRowExpandable.js'

describe('<TableRowExpandable>', () => {
    const content = 'more info'

    it('does not render expandable content in its initial state', () => {
        const wrapper = shallow(
            <TableRowExpandable expandableContent={content}>
                <TableCell>cell content</TableCell>
            </TableRowExpandable>
        )

        expect(wrapper.find(TableRow)).toHaveLength(1)
    })

    it('renders expandable content after the toggle cell is clicked', () => {
        const wrapper = mount(
            <table>
                <tbody>
                    <TableRowExpandable expandableContent={content}>
                        <TableCell>cell content</TableCell>
                    </TableRowExpandable>
                </tbody>
            </table>
        )
        wrapper.find('td').first().simulate('click')

        expect(wrapper.find('tr')).toHaveLength(2)
        expect(wrapper.find('tr').last().find('td').text()).toBe(content)
    })
})
