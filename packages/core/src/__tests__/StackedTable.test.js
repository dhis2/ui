/* eslint-disable react/prop-types */
import React from 'react'

import { mount } from 'enzyme'

import {
    StackedTable,
    StackedTableBody,
    StackedTableCell,
    StackedTableCellHead,
    StackedTableHead,
    StackedTableRow,
    StackedTableRowHead,
} from '../index.js'

const Table = ({ headerLabels, bodyLabels }) => (
    <StackedTable>
        <StackedTableHead>
            <StackedTableRowHead>
                {headerLabels.map(({ label, ...props }, index) => (
                    <StackedTableCellHead {...props} key={label + index}>
                        {label}
                    </StackedTableCellHead>
                ))}
            </StackedTableRowHead>
        </StackedTableHead>
        <StackedTableBody>
            <StackedTableRow>
                {bodyLabels.map(({ label, ...props }) => (
                    <StackedTableCell {...props} key={label}>
                        {label}
                    </StackedTableCell>
                ))}
            </StackedTableRow>
        </StackedTableBody>
    </StackedTable>
)

describe('StackedTable', () => {
    const headerLabels = [
        { label: 'First name', colSpan: '1' },
        { label: 'Last name', colSpan: '1' },
        { label: 'Incident date', colSpan: '1' },
        { label: 'Last updated', colSpan: '1' },
        { label: 'Age', colSpan: '1' },
        { label: 'Registering unit', colSpan: '1' },
        { label: 'Assigned user', colSpan: '1' },
        { label: 'Status', colSpan: '1' },
    ]

    const bodyLabels = [
        { label: 'Onyekachukwu' },
        { label: 'Kariuki' },
        { label: '02/06/2007' },
        { label: '05/25/1972' },
        { label: '66' },
        { label: 'Jawi' },
        { label: 'Sofie Hubert' },
        { label: 'Incomplete' },
    ]

    it('should add the headerLabels to each cell', () => {
        const table = mount(
            <Table headerLabels={headerLabels} bodyLabels={bodyLabels} />
        )
        const cells = table.find('td')

        headerLabels.forEach((label, index) => {
            const cell = cells.at(index)
            const title = cell.find('.title').text()

            expect(title).toBe(headerLabels[index].label)
        })
    })

    it('should not add empty header labels to the body cells', () => {
        const emptyLabelIndex = 2
        const headerLabelsWithEmpty = [
            ...headerLabels.slice(0, emptyLabelIndex),
            '',
            ...headerLabels.slice(emptyLabelIndex + 1),
        ]
        const table = mount(
            <Table
                headerLabels={headerLabelsWithEmpty}
                bodyLabels={bodyLabels}
            />
        )
        const cells = table.find('td')
        const cell = cells.at(emptyLabelIndex)
        const title = cell.find('.title')

        expect(title).toHaveLength(0)
    })

    it('should add a header label with a colspan higher than 1 to multiple body cells', () => {
        const indexWithColspan = 1
        const colSpan = 3
        const originalHeaderLabel = headerLabels[indexWithColspan]
        const headerLabelsWithColspan = [
            ...headerLabels.slice(0, indexWithColspan),
            { ...originalHeaderLabel, colSpan: `${colSpan}` },
            ...headerLabels.slice(indexWithColspan + colSpan),
        ]
        const table = mount(
            <Table
                headerLabels={headerLabelsWithColspan}
                bodyLabels={bodyLabels}
            />
        )
        const cells = table.find('td')
        const label = headerLabelsWithColspan[indexWithColspan].label

        // all body cells that are group under the single header should share the same label
        for (let i = 0; i < colSpan; ++i) {
            const index = indexWithColspan + i
            const cell = cells.at(index)
            expect(cell).toHaveLength(1)

            const title = cell.find('.title')
            expect(title.text()).toBe(label)
        }

        // the next body cell should have the label of the next header cell
        const titleAfterColspan =
            headerLabelsWithColspan[indexWithColspan + 1].label
        const cellAfterColspan = cells.at(indexWithColspan + colSpan)
        expect(cellAfterColspan).toHaveLength(1)
        expect(cellAfterColspan.find('.title').text()).toBe(titleAfterColspan)
    })
})
