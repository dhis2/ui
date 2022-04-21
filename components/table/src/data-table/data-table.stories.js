import { Box } from '@dhis2-ui/box'
import { Checkbox } from '@dhis2-ui/checkbox'
import { Input } from '@dhis2-ui/input'
import React, { useState } from 'react'
import { DataTableBody } from './data-table-body.js'
import { DataTableCell } from './data-table-cell.js'
import { DataTableColumnHeader } from './data-table-column-header/data-table-column-header.js'
import { DataTableFoot } from './data-table-foot.js'
import { DataTableHead } from './data-table-head.js'
import { DataTableRow } from './data-table-row/data-table-row.js'
import { DataTableToolbar } from './data-table-toolbar.js'
import { DataTable } from './data-table.js'

const subtitle = 'Used to display information in a standard, effective way.'

const description = `
Should be used with multiple DataTable-related child components - see the datatable and examples below.

\`\`\`js
import {
    DataTable,
    DataTableToolbar,
    DataTableHead,
    DataTableBody,
    DataTableFoot,
    DataTableRow,
    DataTableCell,
    DataTableColumnHeader,
} from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'DataTable',
    component: DataTable,
    // Add subcomponents to the args datatable
    subcomponents: {
        DataTableToolbar,
        DataTableHead,
        DataTableBody,
        DataTableFoot,
        DataTableRow,
        DataTableCell,
        DataTableColumnHeader,
    },
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
    argTypes: {
        // hide control from `children` because that can't be live edited
        children: { control: { disable: true } },
        // hide child component controls completely to avoid confusion
        bordered: { datatable: { disable: true } },
        large: { datatable: { disable: true } },
        draggable: { datatable: { disable: true } },
    },
}

const BasicTemplate = ({ bordered, large, draggable, bodyProps, ...args }) => (
    <DataTable {...args}>
        <DataTableHead>
            <DataTableRow>
                {draggable && <DataTableColumnHeader large={large} />}
                <DataTableColumnHeader large={large}>
                    First name
                </DataTableColumnHeader>
                <DataTableColumnHeader large={large}>
                    Last name
                </DataTableColumnHeader>
                <DataTableColumnHeader large={large}>
                    Incident date
                </DataTableColumnHeader>
                <DataTableColumnHeader large={large}>
                    Last updated
                </DataTableColumnHeader>
            </DataTableRow>
        </DataTableHead>
        <DataTableBody {...bodyProps}>
            <DataTableRow draggable={draggable}>
                <DataTableCell large={large} bordered={bordered}>
                    Onyekachukwu
                </DataTableCell>
                <DataTableCell large={large} bordered={bordered}>
                    Kariuki
                </DataTableCell>
                <DataTableCell large={large} bordered={bordered}>
                    02/06/2007
                </DataTableCell>
                <DataTableCell large={large} bordered={bordered}>
                    05/25/1972
                </DataTableCell>
            </DataTableRow>
            <DataTableRow draggable={draggable}>
                <DataTableCell large={large} bordered={bordered}>
                    Kwasi
                </DataTableCell>
                <DataTableCell large={large} bordered={bordered}>
                    Okafor
                </DataTableCell>
                <DataTableCell large={large} bordered={bordered}>
                    08/11/2010
                </DataTableCell>
                <DataTableCell large={large} bordered={bordered}>
                    02/26/1991
                </DataTableCell>
            </DataTableRow>
            <DataTableRow draggable={draggable}>
                <DataTableCell large={large} bordered={bordered}>
                    Siyabonga
                </DataTableCell>
                <DataTableCell large={large} bordered={bordered}>
                    Abiodun
                </DataTableCell>
                <DataTableCell large={large} bordered={bordered}>
                    07/21/1981
                </DataTableCell>
                <DataTableCell large={large} bordered={bordered}>
                    02/06/2007
                </DataTableCell>
            </DataTableRow>
        </DataTableBody>
        <DataTableFoot>
            <DataTableRow>
                <DataTableCell colSpan={draggable ? '5' : '4'}>
                    Footer content
                </DataTableCell>
            </DataTableRow>
        </DataTableFoot>
    </DataTable>
)

export const Default = BasicTemplate.bind({})
Default.args = {}

export const Loading = BasicTemplate.bind({})
Loading.args = { bodyProps: { loading: true } }

export const BorderedCells = BasicTemplate.bind({})
BorderedCells.args = {
    bordered: true,
}
export const LargeCells = BasicTemplate.bind({})
LargeCells.args = {
    large: true,
}
export const DraggableRows = BasicTemplate.bind({})
DraggableRows.args = {
    draggable: true,
}

const IndividualCellTemplate = (args) => (
    <DataTable {...args}>
        <DataTableHead>
            <DataTableRow>
                <DataTableColumnHeader>Header</DataTableColumnHeader>
                <DataTableColumnHeader>Header</DataTableColumnHeader>
                <DataTableColumnHeader>Header</DataTableColumnHeader>
                <DataTableColumnHeader>Header</DataTableColumnHeader>
            </DataTableRow>
        </DataTableHead>
        <DataTableBody>
            <DataTableRow>
                <DataTableCell tag="th">Active Cells</DataTableCell>
                <DataTableCell>Inactive cell</DataTableCell>
                <DataTableCell
                    active
                    onClick={() => {
                        console.log('You clicked on a DataTableCell')
                    }}
                >
                    Acive Cell with onClick
                </DataTableCell>
                <DataTableCell>Inactive cell</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell tag="th">Alignment</DataTableCell>
                <DataTableCell align="left">Left</DataTableCell>
                <DataTableCell align="center">Center</DataTableCell>
                <DataTableCell align="right">Right</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell tag="th">Built in formatting</DataTableCell>
                <DataTableCell error>Error</DataTableCell>
                <DataTableCell valid>Valid</DataTableCell>
                <DataTableCell muted>Muted</DataTableCell>
            </DataTableRow>
        </DataTableBody>
    </DataTable>
)

export const CellStyling = IndividualCellTemplate.bind({})
CellStyling.args = {}

const ToolbarsTemplate = (args) => (
    <>
        <DataTableToolbar>
            <p>Content</p>
        </DataTableToolbar>
        <DataTable {...args}>
            <DataTableHead>
                <DataTableRow>
                    <DataTableColumnHeader>First name</DataTableColumnHeader>
                    <DataTableColumnHeader>Last name</DataTableColumnHeader>
                    <DataTableColumnHeader>Incident date</DataTableColumnHeader>
                    <DataTableColumnHeader>Last updated</DataTableColumnHeader>
                </DataTableRow>
            </DataTableHead>
            <DataTableBody>
                <DataTableRow>
                    <DataTableCell>Onyekachukwu</DataTableCell>
                    <DataTableCell>Kariuki</DataTableCell>
                    <DataTableCell>02/06/2007</DataTableCell>
                    <DataTableCell>05/25/1972</DataTableCell>
                </DataTableRow>
                <DataTableRow>
                    <DataTableCell>Kwasi</DataTableCell>
                    <DataTableCell>Okafor</DataTableCell>
                    <DataTableCell>08/11/2010</DataTableCell>
                    <DataTableCell>02/26/1991</DataTableCell>
                </DataTableRow>
                <DataTableRow>
                    <DataTableCell>Siyabonga</DataTableCell>
                    <DataTableCell>Abiodun</DataTableCell>
                    <DataTableCell>07/21/1981</DataTableCell>
                    <DataTableCell>02/06/2007</DataTableCell>
                </DataTableRow>
            </DataTableBody>
        </DataTable>
        <DataTableToolbar position="bottom">
            <p>Content (bottom)</p>
        </DataTableToolbar>
    </>
)
export const Toolbars = ToolbarsTemplate.bind({})
Toolbars.args = {}

const ExpandableContentTemplate = (args) => {
    const [openRowIndex, setOpenRowIndex] = useState(null)
    const toggleOpenRow = (index) =>
        setOpenRowIndex(openRowIndex === index ? null : index)
    const style = {
        margin: 8,
        padding: 4,
        backgroundColor: 'lightblue',
    }
    const expandableContent = <div style={style}>More info about this row!</div>
    return (
        <DataTable {...args}>
            <DataTableHead>
                <DataTableRow>
                    <DataTableColumnHeader />
                    <DataTableColumnHeader>First name</DataTableColumnHeader>
                    <DataTableColumnHeader>Last name</DataTableColumnHeader>
                    <DataTableColumnHeader>Incident date</DataTableColumnHeader>
                    <DataTableColumnHeader>Last updated</DataTableColumnHeader>
                </DataTableRow>
            </DataTableHead>
            <DataTableBody>
                <DataTableRow
                    expanded={openRowIndex === 0}
                    onExpandToggle={(payload) => {
                        console.log(payload)
                        toggleOpenRow(0)
                    }}
                    expandableContent={expandableContent}
                >
                    <DataTableCell>Onyekachukwu</DataTableCell>
                    <DataTableCell>Kariuki</DataTableCell>
                    <DataTableCell>02/06/2007</DataTableCell>
                    <DataTableCell>05/25/1972</DataTableCell>
                </DataTableRow>
                <DataTableRow
                    expanded={openRowIndex === 1}
                    onExpandToggle={() => toggleOpenRow(1)}
                    expandableContent={expandableContent}
                >
                    <DataTableCell>Kwasi</DataTableCell>
                    <DataTableCell>Okafor</DataTableCell>
                    <DataTableCell>08/11/2010</DataTableCell>
                    <DataTableCell>02/26/1991</DataTableCell>
                </DataTableRow>
                <DataTableRow
                    expanded={openRowIndex === 2}
                    onExpandToggle={() => toggleOpenRow(2)}
                    expandableContent={expandableContent}
                >
                    <DataTableCell>Siyabonga</DataTableCell>
                    <DataTableCell>Abiodun</DataTableCell>
                    <DataTableCell>07/21/1981</DataTableCell>
                    <DataTableCell>02/06/2007</DataTableCell>
                </DataTableRow>
            </DataTableBody>
        </DataTable>
    )
}
export const ExpandableContent = ExpandableContentTemplate.bind({})
ExpandableContent.args = {}

const SelectableRowsTemplate = (args) => {
    const [selected, setSelected] = useState({ id_2: true })
    const toggleSelected = ({ value, checked }) => {
        setSelected({
            ...selected,
            [value]: checked,
        })
    }
    const toggleAll = ({ checked }) => {
        setSelected({
            id_1: checked,
            id_2: checked,
            id_3: checked,
        })
    }
    const allSelected = () =>
        Object.values(selected).filter((value) => value).length === 3

    return (
        <DataTable {...args}>
            <DataTableHead>
                <DataTableRow>
                    <DataTableColumnHeader width="48px">
                        <Checkbox
                            checked={allSelected()}
                            onChange={toggleAll}
                        />
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>First name</DataTableColumnHeader>
                    <DataTableColumnHeader>Last name</DataTableColumnHeader>
                    <DataTableColumnHeader>Incident date</DataTableColumnHeader>
                    <DataTableColumnHeader>Last updated</DataTableColumnHeader>
                </DataTableRow>
            </DataTableHead>
            <DataTableBody>
                <DataTableRow selected={!!selected.id_1}>
                    <DataTableCell width="48px">
                        <Checkbox
                            value="id_1"
                            checked={!!selected.id_1}
                            onChange={toggleSelected}
                        />
                    </DataTableCell>
                    <DataTableCell>Onyekachukwu</DataTableCell>
                    <DataTableCell>Kariuki</DataTableCell>
                    <DataTableCell>02/06/2007</DataTableCell>
                    <DataTableCell>05/25/1972</DataTableCell>
                </DataTableRow>
                <DataTableRow selected={!!selected.id_2}>
                    <DataTableCell width="48px">
                        <Checkbox
                            value="id_2"
                            checked={!!selected.id_2}
                            onChange={toggleSelected}
                        />
                    </DataTableCell>
                    <DataTableCell>Kwasi</DataTableCell>
                    <DataTableCell>Okafor</DataTableCell>
                    <DataTableCell>08/11/2010</DataTableCell>
                    <DataTableCell>02/26/1991</DataTableCell>
                </DataTableRow>
                <DataTableRow selected={!!selected.id_3}>
                    <DataTableCell width="48px">
                        <Checkbox
                            value="id_3"
                            checked={!!selected.id_3}
                            onChange={toggleSelected}
                        />
                    </DataTableCell>
                    <DataTableCell>Siyabonga</DataTableCell>
                    <DataTableCell>Abiodun</DataTableCell>
                    <DataTableCell>07/21/1981</DataTableCell>
                    <DataTableCell>02/06/2007</DataTableCell>
                </DataTableRow>
            </DataTableBody>
        </DataTable>
    )
}
export const SelectableRows = SelectableRowsTemplate.bind({})
SelectableRows.args = {}

const FixedHeaderTemplate = (args) => (
    <DataTable {...args}>
        <DataTableHead>
            <DataTableRow>
                <DataTableColumnHeader fixed top="0">
                    First name
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Last name
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Incident date
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Last updated
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Age
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Registering unit
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Assigned user
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Status
                </DataTableColumnHeader>
            </DataTableRow>
        </DataTableHead>
        <DataTableBody>
            <DataTableRow>
                <DataTableCell>Onyekachukwu</DataTableCell>
                <DataTableCell>Kariuki</DataTableCell>
                <DataTableCell>02/06/2007</DataTableCell>
                <DataTableCell>05/25/1972</DataTableCell>
                <DataTableCell>66</DataTableCell>
                <DataTableCell>Jawi</DataTableCell>
                <DataTableCell>Sofie Hubert</DataTableCell>
                <DataTableCell>Incomplete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell>Kwasi</DataTableCell>
                <DataTableCell>Okafor</DataTableCell>
                <DataTableCell>08/11/2010</DataTableCell>
                <DataTableCell>02/26/1991</DataTableCell>
                <DataTableCell>38</DataTableCell>
                <DataTableCell>Mokassie MCHP</DataTableCell>
                <DataTableCell>Dashonte Clarke</DataTableCell>
                <DataTableCell>Complete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell>Siyabonga</DataTableCell>
                <DataTableCell>Abiodun</DataTableCell>
                <DataTableCell>07/21/1981</DataTableCell>
                <DataTableCell>02/06/2007</DataTableCell>
                <DataTableCell>98</DataTableCell>
                <DataTableCell>Bathurst MCHP</DataTableCell>
                <DataTableCell>Unassigned</DataTableCell>
                <DataTableCell>Incomplete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell>Chiyembekezo</DataTableCell>
                <DataTableCell>Okeke</DataTableCell>
                <DataTableCell>01/23/1982</DataTableCell>
                <DataTableCell>07/15/2003</DataTableCell>
                <DataTableCell>2</DataTableCell>
                <DataTableCell>Mayolla MCHP</DataTableCell>
                <DataTableCell>Wan Gengxin</DataTableCell>
                <DataTableCell>Incomplete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell>Mtendere</DataTableCell>
                <DataTableCell>Afolayan</DataTableCell>
                <DataTableCell>08/12/1994</DataTableCell>
                <DataTableCell>05/12/1972</DataTableCell>
                <DataTableCell>37</DataTableCell>
                <DataTableCell>Gbangadu MCHP</DataTableCell>
                <DataTableCell>Gvozden Boskovsky</DataTableCell>
                <DataTableCell>Complete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell>Inyene</DataTableCell>
                <DataTableCell>Okonkwo</DataTableCell>
                <DataTableCell>04/01/1971</DataTableCell>
                <DataTableCell>03/16/2000</DataTableCell>
                <DataTableCell>70</DataTableCell>
                <DataTableCell>Kunike Barina</DataTableCell>
                <DataTableCell>Oscar de la Cavallería</DataTableCell>
                <DataTableCell>Complete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell>Amaka</DataTableCell>
                <DataTableCell>Pretorius</DataTableCell>
                <DataTableCell>01/25/1996</DataTableCell>
                <DataTableCell>09/15/1986</DataTableCell>
                <DataTableCell>32</DataTableCell>
                <DataTableCell>Bargbo</DataTableCell>
                <DataTableCell>Alberto Raya</DataTableCell>
                <DataTableCell>Incomplete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell>Meti</DataTableCell>
                <DataTableCell>Abiodun</DataTableCell>
                <DataTableCell>10/24/2010</DataTableCell>
                <DataTableCell>07/26/1989</DataTableCell>
                <DataTableCell>8</DataTableCell>
                <DataTableCell>Majihun MCHP</DataTableCell>
                <DataTableCell>Unassigned</DataTableCell>
                <DataTableCell>Complete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell>Eshe</DataTableCell>
                <DataTableCell>Okeke</DataTableCell>
                <DataTableCell>01/31/1995</DataTableCell>
                <DataTableCell>01/31/1995</DataTableCell>
                <DataTableCell>63</DataTableCell>
                <DataTableCell>Mambiama CHP</DataTableCell>
                <DataTableCell>Shadrias Pearson</DataTableCell>
                <DataTableCell>Incomplete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell>Obi</DataTableCell>
                <DataTableCell>Okafor</DataTableCell>
                <DataTableCell>06/07/1990</DataTableCell>
                <DataTableCell>01/03/2006</DataTableCell>
                <DataTableCell>28</DataTableCell>
                <DataTableCell>Dalakuru CHP</DataTableCell>
                <DataTableCell>Anatoliy Shcherbatykh</DataTableCell>
                <DataTableCell>Incomplete</DataTableCell>
            </DataTableRow>
        </DataTableBody>
    </DataTable>
)
export const FixedHeader = FixedHeaderTemplate.bind({})
FixedHeader.args = {
    scrollHeight: '350px',
}

const FixedFirstColumnTemplate = (args) => (
    <DataTable {...args}>
        <DataTableHead>
            <DataTableRow>
                <DataTableColumnHeader fixed top="0" left="0">
                    First name
                </DataTableColumnHeader>
                <DataTableColumnHeader>Last name</DataTableColumnHeader>
                <DataTableColumnHeader>Incident date</DataTableColumnHeader>
                <DataTableColumnHeader>Last updated</DataTableColumnHeader>
                <DataTableColumnHeader>Age</DataTableColumnHeader>
                <DataTableColumnHeader>Registering unit</DataTableColumnHeader>
                <DataTableColumnHeader>Assigned user</DataTableColumnHeader>
                <DataTableColumnHeader>Status</DataTableColumnHeader>
            </DataTableRow>
        </DataTableHead>
        <DataTableBody>
            <DataTableRow>
                <DataTableCell fixed left="0">
                    Onyekachukwu
                </DataTableCell>
                <DataTableCell>Kariuki</DataTableCell>
                <DataTableCell>02/06/2007</DataTableCell>
                <DataTableCell>05/25/1972</DataTableCell>
                <DataTableCell>66</DataTableCell>
                <DataTableCell>Jawi</DataTableCell>
                <DataTableCell>Sofie Hubert</DataTableCell>
                <DataTableCell>Incomplete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0">
                    Kwasi
                </DataTableCell>
                <DataTableCell>Okafor</DataTableCell>
                <DataTableCell>08/11/2010</DataTableCell>
                <DataTableCell>02/26/1991</DataTableCell>
                <DataTableCell>38</DataTableCell>
                <DataTableCell>Mokassie MCHP</DataTableCell>
                <DataTableCell>Dashonte Clarke</DataTableCell>
                <DataTableCell>Complete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0">
                    Siyabonga
                </DataTableCell>
                <DataTableCell>Abiodun</DataTableCell>
                <DataTableCell>07/21/1981</DataTableCell>
                <DataTableCell>02/06/2007</DataTableCell>
                <DataTableCell>98</DataTableCell>
                <DataTableCell>Bathurst MCHP</DataTableCell>
                <DataTableCell>Unassigned</DataTableCell>
                <DataTableCell>Incomplete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0">
                    Chiyembekezo
                </DataTableCell>
                <DataTableCell>Okeke</DataTableCell>
                <DataTableCell>01/23/1982</DataTableCell>
                <DataTableCell>07/15/2003</DataTableCell>
                <DataTableCell>2</DataTableCell>
                <DataTableCell>Mayolla MCHP</DataTableCell>
                <DataTableCell>Wan Gengxin</DataTableCell>
                <DataTableCell>Incomplete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0">
                    Mtendere
                </DataTableCell>
                <DataTableCell>Afolayan</DataTableCell>
                <DataTableCell>08/12/1994</DataTableCell>
                <DataTableCell>05/12/1972</DataTableCell>
                <DataTableCell>37</DataTableCell>
                <DataTableCell>Gbangadu MCHP</DataTableCell>
                <DataTableCell>Gvozden Boskovsky</DataTableCell>
                <DataTableCell>Complete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0">
                    Inyene
                </DataTableCell>
                <DataTableCell>Okonkwo</DataTableCell>
                <DataTableCell>04/01/1971</DataTableCell>
                <DataTableCell>03/16/2000</DataTableCell>
                <DataTableCell>70</DataTableCell>
                <DataTableCell>Kunike Barina</DataTableCell>
                <DataTableCell>Oscar de la Cavallería</DataTableCell>
                <DataTableCell>Complete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0">
                    Amaka
                </DataTableCell>
                <DataTableCell>Pretorius</DataTableCell>
                <DataTableCell>01/25/1996</DataTableCell>
                <DataTableCell>09/15/1986</DataTableCell>
                <DataTableCell>32</DataTableCell>
                <DataTableCell>Bargbo</DataTableCell>
                <DataTableCell>Alberto Raya</DataTableCell>
                <DataTableCell>Incomplete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0">
                    Meti
                </DataTableCell>
                <DataTableCell>Abiodun</DataTableCell>
                <DataTableCell>10/24/2010</DataTableCell>
                <DataTableCell>07/26/1989</DataTableCell>
                <DataTableCell>8</DataTableCell>
                <DataTableCell>Majihun MCHP</DataTableCell>
                <DataTableCell>Unassigned</DataTableCell>
                <DataTableCell>Complete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0">
                    Eshe
                </DataTableCell>
                <DataTableCell>Okeke</DataTableCell>
                <DataTableCell>01/31/1995</DataTableCell>
                <DataTableCell>01/31/1995</DataTableCell>
                <DataTableCell>63</DataTableCell>
                <DataTableCell>Mambiama CHP</DataTableCell>
                <DataTableCell>Shadrias Pearson</DataTableCell>
                <DataTableCell>Incomplete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0">
                    Obi
                </DataTableCell>
                <DataTableCell>Okafor</DataTableCell>
                <DataTableCell>06/07/1990</DataTableCell>
                <DataTableCell>01/03/2006</DataTableCell>
                <DataTableCell>28</DataTableCell>
                <DataTableCell>Dalakuru CHP</DataTableCell>
                <DataTableCell>Anatoliy Shcherbatykh</DataTableCell>
                <DataTableCell>Incomplete</DataTableCell>
            </DataTableRow>
        </DataTableBody>
    </DataTable>
)
export const FixedFirstColumn = FixedFirstColumnTemplate.bind({})
FixedFirstColumn.args = {
    scrollWidth: '500px',
}

const FixedHeaderAndTwoColumnsTemplate = (args) => (
    <DataTable {...args}>
        <DataTableHead>
            <DataTableRow>
                <DataTableColumnHeader fixed top="0" left="0" width="120px">
                    First name
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0" left="120px">
                    Last name
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Incident date
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Last updated
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Age
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Registering unit
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Assigned user
                </DataTableColumnHeader>
                <DataTableColumnHeader fixed top="0">
                    Status
                </DataTableColumnHeader>
            </DataTableRow>
        </DataTableHead>
        <DataTableBody>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    Onyekachukwu
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    Kariuki
                </DataTableCell>
                <DataTableCell>02/06/2007</DataTableCell>
                <DataTableCell>05/25/1972</DataTableCell>
                <DataTableCell>66</DataTableCell>
                <DataTableCell>Jawi</DataTableCell>
                <DataTableCell>Sofie Hubert</DataTableCell>
                <DataTableCell>Incomplete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    Kwasi
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    Okafor
                </DataTableCell>
                <DataTableCell>08/11/2010</DataTableCell>
                <DataTableCell>02/26/1991</DataTableCell>
                <DataTableCell>38</DataTableCell>
                <DataTableCell>Mokassie MCHP</DataTableCell>
                <DataTableCell>Dashonte Clarke</DataTableCell>
                <DataTableCell>Complete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    Siyabonga
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    Abiodun
                </DataTableCell>
                <DataTableCell>07/21/1981</DataTableCell>
                <DataTableCell>02/06/2007</DataTableCell>
                <DataTableCell>98</DataTableCell>
                <DataTableCell>Bathurst MCHP</DataTableCell>
                <DataTableCell>Unassigned</DataTableCell>
                <DataTableCell>Incomplete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    Chiyembekezo
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    Okeke
                </DataTableCell>
                <DataTableCell>01/23/1982</DataTableCell>
                <DataTableCell>07/15/2003</DataTableCell>
                <DataTableCell>2</DataTableCell>
                <DataTableCell>Mayolla MCHP</DataTableCell>
                <DataTableCell>Wan Gengxin</DataTableCell>
                <DataTableCell>Incomplete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    Mtendere
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    Afolayan
                </DataTableCell>
                <DataTableCell>08/12/1994</DataTableCell>
                <DataTableCell>05/12/1972</DataTableCell>
                <DataTableCell>37</DataTableCell>
                <DataTableCell>Gbangadu MCHP</DataTableCell>
                <DataTableCell>Gvozden Boskovsky</DataTableCell>
                <DataTableCell>Complete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    Inyene
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    Okonkwo
                </DataTableCell>
                <DataTableCell>04/01/1971</DataTableCell>
                <DataTableCell>03/16/2000</DataTableCell>
                <DataTableCell>70</DataTableCell>
                <DataTableCell>Kunike Barina</DataTableCell>
                <DataTableCell>Oscar de la Cavallería</DataTableCell>
                <DataTableCell>Complete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    Amaka
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    Pretorius
                </DataTableCell>
                <DataTableCell>01/25/1996</DataTableCell>
                <DataTableCell>09/15/1986</DataTableCell>
                <DataTableCell>32</DataTableCell>
                <DataTableCell>Bargbo</DataTableCell>
                <DataTableCell>Alberto Raya</DataTableCell>
                <DataTableCell>Incomplete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    Meti
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    Abiodun
                </DataTableCell>
                <DataTableCell>10/24/2010</DataTableCell>
                <DataTableCell>07/26/1989</DataTableCell>
                <DataTableCell>8</DataTableCell>
                <DataTableCell>Majihun MCHP</DataTableCell>
                <DataTableCell>Unassigned</DataTableCell>
                <DataTableCell>Complete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    Eshe
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    Okeke
                </DataTableCell>
                <DataTableCell>01/31/1995</DataTableCell>
                <DataTableCell>01/31/1995</DataTableCell>
                <DataTableCell>63</DataTableCell>
                <DataTableCell>Mambiama CHP</DataTableCell>
                <DataTableCell>Shadrias Pearson</DataTableCell>
                <DataTableCell>Incomplete</DataTableCell>
            </DataTableRow>
            <DataTableRow>
                <DataTableCell fixed left="0" width="120px">
                    Obi
                </DataTableCell>
                <DataTableCell fixed left="120px">
                    Okafor
                </DataTableCell>
                <DataTableCell>06/07/1990</DataTableCell>
                <DataTableCell>01/03/2006</DataTableCell>
                <DataTableCell>28</DataTableCell>
                <DataTableCell>Dalakuru CHP</DataTableCell>
                <DataTableCell>Anatoliy Shcherbatykh</DataTableCell>
                <DataTableCell>Incomplete</DataTableCell>
            </DataTableRow>
        </DataTableBody>
    </DataTable>
)

export const FixedHeaderAndTwoColumns = FixedHeaderAndTwoColumnsTemplate.bind(
    {}
)
FixedHeaderAndTwoColumns.args = {
    layout: 'fixed',
    width: '1000px',
    scrollWidth: '500px',
    scrollHeight: '400px',
}

const ScrollingDataTableWithToolbarsTemplate = (args) => (
    <Box width="500px">
        <DataTableToolbar>
            <p>Content</p>
        </DataTableToolbar>
        <DataTable
            {...args}
            layout="fixed"
            width="1000px"
            scrollWidth="500px"
            scrollHeight="400px"
        >
            <DataTableHead>
                <DataTableRow>
                    <DataTableColumnHeader fixed top="0" left="0" width="120px">
                        First name
                    </DataTableColumnHeader>
                    <DataTableColumnHeader fixed top="0" left="120px">
                        Last name
                    </DataTableColumnHeader>
                    <DataTableColumnHeader fixed top="0">
                        Incident date
                    </DataTableColumnHeader>
                    <DataTableColumnHeader fixed top="0">
                        Last updated
                    </DataTableColumnHeader>
                    <DataTableColumnHeader fixed top="0">
                        Age
                    </DataTableColumnHeader>
                    <DataTableColumnHeader fixed top="0">
                        Registering unit
                    </DataTableColumnHeader>
                    <DataTableColumnHeader fixed top="0">
                        Assigned user
                    </DataTableColumnHeader>
                    <DataTableColumnHeader fixed top="0">
                        Status
                    </DataTableColumnHeader>
                </DataTableRow>
            </DataTableHead>
            <DataTableBody>
                <DataTableRow>
                    <DataTableCell fixed left="0" width="120px">
                        Onyekachukwu
                    </DataTableCell>
                    <DataTableCell fixed left="120px">
                        Kariuki
                    </DataTableCell>
                    <DataTableCell>02/06/2007</DataTableCell>
                    <DataTableCell>05/25/1972</DataTableCell>
                    <DataTableCell>66</DataTableCell>
                    <DataTableCell>Jawi</DataTableCell>
                    <DataTableCell>Sofie Hubert</DataTableCell>
                    <DataTableCell>Incomplete</DataTableCell>
                </DataTableRow>
                <DataTableRow>
                    <DataTableCell fixed left="0" width="120px">
                        Kwasi
                    </DataTableCell>
                    <DataTableCell fixed left="120px">
                        Okafor
                    </DataTableCell>
                    <DataTableCell>08/11/2010</DataTableCell>
                    <DataTableCell>02/26/1991</DataTableCell>
                    <DataTableCell>38</DataTableCell>
                    <DataTableCell>Mokassie MCHP</DataTableCell>
                    <DataTableCell>Dashonte Clarke</DataTableCell>
                    <DataTableCell>Complete</DataTableCell>
                </DataTableRow>
                <DataTableRow>
                    <DataTableCell fixed left="0" width="120px">
                        Siyabonga
                    </DataTableCell>
                    <DataTableCell fixed left="120px">
                        Abiodun
                    </DataTableCell>
                    <DataTableCell>07/21/1981</DataTableCell>
                    <DataTableCell>02/06/2007</DataTableCell>
                    <DataTableCell>98</DataTableCell>
                    <DataTableCell>Bathurst MCHP</DataTableCell>
                    <DataTableCell>Unassigned</DataTableCell>
                    <DataTableCell>Incomplete</DataTableCell>
                </DataTableRow>
                <DataTableRow>
                    <DataTableCell fixed left="0" width="120px">
                        Chiyembekezo
                    </DataTableCell>
                    <DataTableCell fixed left="120px">
                        Okeke
                    </DataTableCell>
                    <DataTableCell>01/23/1982</DataTableCell>
                    <DataTableCell>07/15/2003</DataTableCell>
                    <DataTableCell>2</DataTableCell>
                    <DataTableCell>Mayolla MCHP</DataTableCell>
                    <DataTableCell>Wan Gengxin</DataTableCell>
                    <DataTableCell>Incomplete</DataTableCell>
                </DataTableRow>
                <DataTableRow>
                    <DataTableCell fixed left="0" width="120px">
                        Mtendere
                    </DataTableCell>
                    <DataTableCell fixed left="120px">
                        Afolayan
                    </DataTableCell>
                    <DataTableCell>08/12/1994</DataTableCell>
                    <DataTableCell>05/12/1972</DataTableCell>
                    <DataTableCell>37</DataTableCell>
                    <DataTableCell>Gbangadu MCHP</DataTableCell>
                    <DataTableCell>Gvozden Boskovsky</DataTableCell>
                    <DataTableCell>Complete</DataTableCell>
                </DataTableRow>
                <DataTableRow>
                    <DataTableCell fixed left="0" width="120px">
                        Inyene
                    </DataTableCell>
                    <DataTableCell fixed left="120px">
                        Okonkwo
                    </DataTableCell>
                    <DataTableCell>04/01/1971</DataTableCell>
                    <DataTableCell>03/16/2000</DataTableCell>
                    <DataTableCell>70</DataTableCell>
                    <DataTableCell>Kunike Barina</DataTableCell>
                    <DataTableCell>Oscar de la Cavallería</DataTableCell>
                    <DataTableCell>Complete</DataTableCell>
                </DataTableRow>
                <DataTableRow>
                    <DataTableCell fixed left="0" width="120px">
                        Amaka
                    </DataTableCell>
                    <DataTableCell fixed left="120px">
                        Pretorius
                    </DataTableCell>
                    <DataTableCell>01/25/1996</DataTableCell>
                    <DataTableCell>09/15/1986</DataTableCell>
                    <DataTableCell>32</DataTableCell>
                    <DataTableCell>Bargbo</DataTableCell>
                    <DataTableCell>Alberto Raya</DataTableCell>
                    <DataTableCell>Incomplete</DataTableCell>
                </DataTableRow>
                <DataTableRow>
                    <DataTableCell fixed left="0" width="120px">
                        Meti
                    </DataTableCell>
                    <DataTableCell fixed left="120px">
                        Abiodun
                    </DataTableCell>
                    <DataTableCell>10/24/2010</DataTableCell>
                    <DataTableCell>07/26/1989</DataTableCell>
                    <DataTableCell>8</DataTableCell>
                    <DataTableCell>Majihun MCHP</DataTableCell>
                    <DataTableCell>Unassigned</DataTableCell>
                    <DataTableCell>Complete</DataTableCell>
                </DataTableRow>
                <DataTableRow>
                    <DataTableCell fixed left="0" width="120px">
                        Eshe
                    </DataTableCell>
                    <DataTableCell fixed left="120px">
                        Okeke
                    </DataTableCell>
                    <DataTableCell>01/31/1995</DataTableCell>
                    <DataTableCell>01/31/1995</DataTableCell>
                    <DataTableCell>63</DataTableCell>
                    <DataTableCell>Mambiama CHP</DataTableCell>
                    <DataTableCell>Shadrias Pearson</DataTableCell>
                    <DataTableCell>Incomplete</DataTableCell>
                </DataTableRow>
                <DataTableRow>
                    <DataTableCell fixed left="0" width="120px">
                        Obi
                    </DataTableCell>
                    <DataTableCell fixed left="120px">
                        Okafor
                    </DataTableCell>
                    <DataTableCell>06/07/1990</DataTableCell>
                    <DataTableCell>01/03/2006</DataTableCell>
                    <DataTableCell>28</DataTableCell>
                    <DataTableCell>Dalakuru CHP</DataTableCell>
                    <DataTableCell>Anatoliy Shcherbatykh</DataTableCell>
                    <DataTableCell>Incomplete</DataTableCell>
                </DataTableRow>
            </DataTableBody>
        </DataTable>
        <DataTableToolbar position="bottom">
            <p>Content (bottom)</p>
        </DataTableToolbar>
    </Box>
)

export const ScrollingDataTableWithToolbars =
    ScrollingDataTableWithToolbarsTemplate.bind({})
ScrollingDataTableWithToolbars.args = {
    layout: 'fixed',
    width: '1000px',
    scrollWidth: '500px',
    scrollHeight: '400px',
}

const ColumnHeaderSortingTemplate = (args) => {
    const rows = [
        {
            firstName: 'Onyekachukwu',
            lastName: 'Kariuki',
        },
        {
            firstName: 'Kwasi',
            lastName: 'Okafor',
        },
        {
            firstName: 'Siyabonga',
            lastName: 'Abiodun',
        },
    ]
    const [{ column, direction }, setSortInstructions] = useState({
        column: 'firstName',
        direction: 'default',
    })
    const getSortDirection = (columnName) =>
        columnName === column ? direction : 'default'
    const onSortIconClick = ({ name, direction }) => {
        setSortInstructions({
            column: name,
            direction,
        })
    }
    return (
        <DataTable {...args}>
            <DataTableHead>
                <DataTableRow>
                    <DataTableColumnHeader
                        onSortIconClick={onSortIconClick}
                        sortDirection={getSortDirection('firstName')}
                        name={'firstName'}
                        sortIconTitle="Sort by first name"
                    >
                        First name
                    </DataTableColumnHeader>
                    <DataTableColumnHeader
                        onSortIconClick={onSortIconClick}
                        sortDirection={getSortDirection('lastName')}
                        name={'lastName'}
                        sortIconTitle="Sort by last name"
                    >
                        Last name
                    </DataTableColumnHeader>
                </DataTableRow>
            </DataTableHead>
            <DataTableBody>
                {rows
                    .sort((a, b) => {
                        const strA = a[column]
                        const strB = b[column]

                        if (
                            (direction === 'asc' && strA < strB) ||
                            (direction === 'desc' && strA > strB)
                        ) {
                            return -1
                        }
                        if (
                            (direction === 'desc' && strA < strB) ||
                            (direction === 'asc' && strA > strB)
                        ) {
                            return 1
                        }

                        return 0
                    })
                    .map(({ firstName, lastName }) => (
                        <DataTableRow key={firstName + lastName}>
                            <DataTableCell>{firstName}</DataTableCell>
                            <DataTableCell>{lastName}</DataTableCell>
                        </DataTableRow>
                    ))}
            </DataTableBody>
        </DataTable>
    )
}

export const ColumnHeaderSorting = ColumnHeaderSortingTemplate.bind({})
ColumnHeaderSorting.args = {}

const InlineFilteringTemplate = (args) => {
    const rows = [
        {
            firstName: 'Onyekachukwu',
            lastName: 'Kariuki',
        },
        {
            firstName: 'Kwasi',
            lastName: 'Okafor',
        },
        {
            firstName: 'Siyabonga',
            lastName: 'Abiodun',
        },
    ]
    const [{ column, value }, setFilter] = useState({
        column: null,
        value: '',
    })
    const onFilterIconClick = ({ name, show }) => {
        setFilter({
            column: show ? name : null,
            value: '',
        })
    }
    const onFilterInputChange = ({ value }) => {
        setFilter({
            column: column,
            value,
        })
    }

    return (
        <DataTable {...args}>
            <DataTableHead>
                <DataTableRow>
                    <DataTableColumnHeader
                        onFilterIconClick={onFilterIconClick}
                        name="firstName"
                        showFilter={column === 'firstName'}
                        filter={
                            <Input
                                dense
                                onChange={onFilterInputChange}
                                name="firstName"
                                value={value}
                            />
                        }
                    >
                        First name
                    </DataTableColumnHeader>
                    <DataTableColumnHeader
                        onFilterIconClick={onFilterIconClick}
                        name="lastName"
                        showFilter={column === 'lastName'}
                        filter={
                            <Input
                                dense
                                onChange={onFilterInputChange}
                                name="lastName"
                                value={value}
                            />
                        }
                    >
                        Last name
                    </DataTableColumnHeader>
                </DataTableRow>
            </DataTableHead>
            <DataTableBody>
                {rows
                    .filter((row) => {
                        if (!column || !value) {
                            return true
                        }
                        return row[column]
                            .toUpperCase()
                            .includes(value.toUpperCase())
                    })
                    .map(({ firstName, lastName }) => (
                        <DataTableRow key={firstName + lastName}>
                            <DataTableCell>{firstName}</DataTableCell>
                            <DataTableCell>{lastName}</DataTableCell>
                        </DataTableRow>
                    ))}
            </DataTableBody>
        </DataTable>
    )
}

export const InlineFiltering = InlineFilteringTemplate.bind({})
InlineFiltering.args = {
    layout: 'fixed',
}

const LongCellContentTemplate = ({ large }) => (
    <DataTable>
        <DataTableHead>
            <DataTableRow>
                <DataTableColumnHeader
                    large={large}
                    onSortIconClick={() => {}}
                    sortDirection="asc"
                    name="first"
                >
                    FIRST - Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Eligendi non quis exercitationem culpa nesciunt nihil
                    aut nostrum explicabo reprehenderit optio amet ab temporibus
                    asperiores quasi cupiditate. Voluptatum ducimus voluptates
                    voluptas?
                </DataTableColumnHeader>
                <DataTableColumnHeader
                    large={large}
                    onFilterIconClick={() => {}}
                    name="firstName"
                    showFilter={true}
                    filter={
                        <Input
                            dense
                            onChange={() => {}}
                            name="firstName"
                            value="Filter value"
                        />
                    }
                >
                    SECOND - Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Eligendi non quis exercitationem culpa nesciunt nihil
                    aut nostrum explicabo reprehenderit optio amet ab temporibus
                    asperiores quasi cupiditate. Voluptatum ducimus voluptates
                    voluptas?
                </DataTableColumnHeader>
                <DataTableColumnHeader
                    large={large}
                    onSortIconClick={() => {}}
                    sortDirection="asc"
                    name="third"
                >
                    Third (short)
                </DataTableColumnHeader>
                <DataTableColumnHeader
                    large={large}
                    onSortIconClick={() => {}}
                    sortDirection="asc"
                    name="fourth"
                >
                    Fourth - Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Eligendi non quis exercitationem culpa nesciunt nihil
                    aut nostrum explicabo reprehenderit optio amet ab temporibus
                    asperiores quasi cupiditate. Voluptatum ducimus voluptates
                    voluptas?
                </DataTableColumnHeader>
            </DataTableRow>
        </DataTableHead>
        <DataTableBody>
            <DataTableRow>
                <DataTableCell large={large}>
                    FIRST - Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Eligendi non quis exercitationem culpa nesciunt nihil
                    aut nostrum explicabo reprehenderit optio amet ab temporibus
                    asperiores quasi cupiditate. Voluptatum ducimus voluptates
                    voluptas?
                </DataTableCell>
                <DataTableCell large={large}>
                    SECOND - Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Eligendi non quis exercitationem culpa nesciunt nihil
                    aut nostrum explicabo reprehenderit optio amet ab temporibus
                    asperiores quasi cupiditate. Voluptatum ducimus voluptates
                    voluptas?
                </DataTableCell>
                <DataTableCell large={large}>Third (short)</DataTableCell>
                <DataTableCell large={large}>
                    Fourth - Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Eligendi non quis exercitationem culpa nesciunt nihil
                    aut nostrum explicabo reprehenderit optio amet ab temporibus
                    asperiores quasi cupiditate. Voluptatum ducimus voluptates
                    voluptas?
                </DataTableCell>
            </DataTableRow>
        </DataTableBody>
    </DataTable>
)

export const LongCellContent = LongCellContentTemplate.bind({})

export const LongCellContentLargeCells = LongCellContentTemplate.bind({})
LongCellContentLargeCells.args = {
    large: 'true',
}
