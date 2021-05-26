/* eslint-disable react/prop-types */

import { Box, Checkbox } from '@dhis2/ui-core'
import { IconAttachment16 } from '@dhis2/ui-icons'
import React, { useState } from 'react'
import { Table } from './Table.js'
import { TableBody } from './TableBody.js'
import { TableDataCell } from './TableDataCell.js'
import { TableFoot } from './TableFoot.js'
import { TableHead } from './TableHead.js'
import { TableHeaderCell } from './TableHeaderCell.js'
import { TableHeaderCellAction } from './TableHeaderCellAction.js'
import { TableRow } from './TableRow.js'
import { TableScrollBox } from './TableScrollBox.js'
import { TableToolbar } from './TableToolbar.js'

const subtitle = 'Used to display information in a standard, effective way.'

const description = `
Should be used with multiple Table-related child components - see the table and examples below.

\`\`\`js
import {
    Table,
    TableToolbar,
    TableHead,
    TableBody,
    TableFoot,
    TableRow,
    TableDataCell,
    TableHeaderCell,
    TableScrollBox,
} from '@dhis2/ui'
\`\`\`
`

export default {
    title: 'Data Display/Table',
    component: Table,
    // Add subcomponents to the args table
    subcomponents: {
        TableToolbar,
        TableHead,
        TableBody,
        TableFoot,
        TableRow,
        TableDataCell,
        TableHeaderCell,
    },
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
    argTypes: {
        // hide control from `children` because that can't be live edited
        children: { control: { disable: true } },
        // hide child component controls completely to avoid confusion
        borderedCells: { table: { disable: true } },
        largeCells: { table: { disable: true } },
        staticCells: { table: { disable: true } },
        draggableRows: { table: { disable: true } },
    },
}

const BasicTemplate = ({
    borderedCells,
    largeCells,
    staticCells,
    draggableRows,
    ...args
}) => (
    <Table {...args}>
        <TableHead>
            <TableRow>
                <TableHeaderCell large={largeCells}>First name</TableHeaderCell>
                <TableHeaderCell large={largeCells}>Last name</TableHeaderCell>
                <TableHeaderCell large={largeCells}>
                    Incident date
                </TableHeaderCell>
                <TableHeaderCell large={largeCells}>
                    Last updated
                </TableHeaderCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow draggable={draggableRows}>
                <TableDataCell
                    staticStyle={staticCells}
                    large={largeCells}
                    bordered={borderedCells}
                >
                    Onyekachukwu
                </TableDataCell>
                <TableDataCell
                    staticStyle={staticCells}
                    large={largeCells}
                    bordered={borderedCells}
                >
                    Kariuki
                </TableDataCell>
                <TableDataCell
                    staticStyle={staticCells}
                    large={largeCells}
                    bordered={borderedCells}
                >
                    02/06/2007
                </TableDataCell>
                <TableDataCell
                    staticStyle={staticCells}
                    large={largeCells}
                    bordered={borderedCells}
                >
                    05/25/1972
                </TableDataCell>
            </TableRow>
            <TableRow draggable={draggableRows}>
                <TableDataCell
                    staticStyle={staticCells}
                    large={largeCells}
                    bordered={borderedCells}
                >
                    Kwasi
                </TableDataCell>
                <TableDataCell
                    staticStyle={staticCells}
                    large={largeCells}
                    bordered={borderedCells}
                >
                    Okafor
                </TableDataCell>
                <TableDataCell
                    staticStyle={staticCells}
                    large={largeCells}
                    bordered={borderedCells}
                >
                    08/11/2010
                </TableDataCell>
                <TableDataCell
                    staticStyle={staticCells}
                    large={largeCells}
                    bordered={borderedCells}
                >
                    02/26/1991
                </TableDataCell>
            </TableRow>
            <TableRow draggable={draggableRows}>
                <TableDataCell
                    staticStyle={staticCells}
                    large={largeCells}
                    bordered={borderedCells}
                >
                    Siyabonga
                </TableDataCell>
                <TableDataCell
                    staticStyle={staticCells}
                    large={largeCells}
                    bordered={borderedCells}
                >
                    Abiodun
                </TableDataCell>
                <TableDataCell
                    staticStyle={staticCells}
                    large={largeCells}
                    bordered={borderedCells}
                >
                    07/21/1981
                </TableDataCell>
                <TableDataCell
                    staticStyle={staticCells}
                    large={largeCells}
                    bordered={borderedCells}
                >
                    02/06/2007
                </TableDataCell>
            </TableRow>
        </TableBody>
        <TableFoot>
            <TableRow>
                <TableDataCell
                    staticStyle={staticCells}
                    large={largeCells}
                    bordered={borderedCells}
                    colSpan="4"
                >
                    Footer content
                </TableDataCell>
            </TableRow>
        </TableFoot>
    </Table>
)

export const Default = BasicTemplate.bind({})
Default.args = {}

export const BorderedCells = BasicTemplate.bind({})
BorderedCells.args = {
    borderedCells: true,
}
export const LargeCells = BasicTemplate.bind({})
LargeCells.args = {
    largeCells: true,
}
export const StaticCells = BasicTemplate.bind({})
StaticCells.args = {
    staticCells: true,
}
export const DraggableRows = BasicTemplate.bind({})
DraggableRows.args = {
    draggableRows: true,
}

const IndividualCellTemplate = args => (
    <Table {...args}>
        <TableHead>
            <TableRow>
                <TableHeaderCell>Header</TableHeaderCell>
                <TableHeaderCell>Header</TableHeaderCell>
                <TableHeaderCell>Header</TableHeaderCell>
                <TableHeaderCell>Header</TableHeaderCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableDataCell tag="th">Active Cells</TableDataCell>
                <TableDataCell>Inactive cell</TableDataCell>
                <TableDataCell
                    active
                    onClick={() => {
                        console.log('You clicked on a TableDataCell')
                    }}
                >
                    Acive Cell with onClick
                </TableDataCell>
                <TableDataCell>Inactive cell</TableDataCell>
            </TableRow>
            <TableRow>
                <TableDataCell tag="th">Alignment</TableDataCell>
                <TableDataCell align="left">Left</TableDataCell>
                <TableDataCell align="center">Center</TableDataCell>
                <TableDataCell align="right">Right</TableDataCell>
            </TableRow>
            <TableRow>
                <TableDataCell tag="th">Built in formatting</TableDataCell>
                <TableDataCell error>Error</TableDataCell>
                <TableDataCell valid>Valid</TableDataCell>
                <TableDataCell muted>Muted</TableDataCell>
            </TableRow>
        </TableBody>
    </Table>
)

export const CellStyling = IndividualCellTemplate.bind({})
CellStyling.args = {}

const IrregularHeadersTemplate = args => (
    <Table {...args}>
        <colgroup />
        <colgroup span="2"></colgroup>
        <colgroup span="2"></colgroup>
        <TableHead>
            <TableRow>
                <TableHeaderCell
                    rowSpan="2"
                    colSpan="2"
                    bordered
                ></TableHeaderCell>
                <TableHeaderCell align="center" colSpan="2" scope="colgroup">
                    Mars
                </TableHeaderCell>
                <TableHeaderCell align="center" colSpan="2" scope="colgroup">
                    Venus
                </TableHeaderCell>
            </TableRow>
            <TableRow>
                <TableHeaderCell scope="col">Produced</TableHeaderCell>
                <TableHeaderCell scope="col">Sold</TableHeaderCell>
                <TableHeaderCell scope="col">Produced</TableHeaderCell>
                <TableHeaderCell scope="col">Sold</TableHeaderCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableHeaderCell staticStyle bordered scope="row" rowSpan="2">
                    Type
                </TableHeaderCell>
                <TableHeaderCell staticStyle bordered scope="row">
                    Teddy Bears
                </TableHeaderCell>
                <TableDataCell staticStyle>50,000</TableDataCell>
                <TableDataCell staticStyle>30,000</TableDataCell>
                <TableDataCell staticStyle>100,000</TableDataCell>
                <TableDataCell staticStyle>80,000</TableDataCell>
            </TableRow>
            <TableRow>
                <TableHeaderCell staticStyle bordered scope="row">
                    Board Games
                </TableHeaderCell>
                <TableDataCell staticStyle>10,000</TableDataCell>
                <TableDataCell staticStyle>5,000</TableDataCell>
                <TableDataCell staticStyle>12,000</TableDataCell>
                <TableDataCell staticStyle>9,000</TableDataCell>
            </TableRow>
        </TableBody>
    </Table>
)
export const IrregularHeaders = IrregularHeadersTemplate.bind({})
IrregularHeaders.args = {}

const ToolbarsTemplate = args => (
    <>
        <TableToolbar>
            <p>Content</p>
        </TableToolbar>
        <Table {...args}>
            <TableHead>
                <TableRow>
                    <TableHeaderCell>First name</TableHeaderCell>
                    <TableHeaderCell>Last name</TableHeaderCell>
                    <TableHeaderCell>Incident date</TableHeaderCell>
                    <TableHeaderCell>Last updated</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableDataCell>Onyekachukwu</TableDataCell>
                    <TableDataCell>Kariuki</TableDataCell>
                    <TableDataCell>02/06/2007</TableDataCell>
                    <TableDataCell>05/25/1972</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableDataCell>Kwasi</TableDataCell>
                    <TableDataCell>Okafor</TableDataCell>
                    <TableDataCell>08/11/2010</TableDataCell>
                    <TableDataCell>02/26/1991</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableDataCell>Siyabonga</TableDataCell>
                    <TableDataCell>Abiodun</TableDataCell>
                    <TableDataCell>07/21/1981</TableDataCell>
                    <TableDataCell>02/06/2007</TableDataCell>
                </TableRow>
            </TableBody>
        </Table>
        <TableToolbar position="bottom">
            <p>Content (bottom)</p>
        </TableToolbar>
    </>
)
export const Toolbars = ToolbarsTemplate.bind({})
Toolbars.args = {}

const SelectableRowsTemplate = args => {
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
        Object.values(selected).filter(value => value).length === 3

    return (
        <Table {...args}>
            <TableHead>
                <TableRow>
                    <TableHeaderCell width="48px">
                        <Checkbox
                            checked={allSelected()}
                            onChange={toggleAll}
                        />
                    </TableHeaderCell>
                    <TableHeaderCell>First name</TableHeaderCell>
                    <TableHeaderCell>Last name</TableHeaderCell>
                    <TableHeaderCell>Incident date</TableHeaderCell>
                    <TableHeaderCell>Last updated</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow selected={!!selected.id_1}>
                    <TableDataCell width="48px">
                        <Checkbox
                            value="id_1"
                            checked={!!selected.id_1}
                            onChange={toggleSelected}
                        />
                    </TableDataCell>
                    <TableDataCell>Onyekachukwu</TableDataCell>
                    <TableDataCell>Kariuki</TableDataCell>
                    <TableDataCell>02/06/2007</TableDataCell>
                    <TableDataCell>05/25/1972</TableDataCell>
                </TableRow>
                <TableRow selected={!!selected.id_2}>
                    <TableDataCell width="48px">
                        <Checkbox
                            value="id_2"
                            checked={!!selected.id_2}
                            onChange={toggleSelected}
                        />
                    </TableDataCell>
                    <TableDataCell>Kwasi</TableDataCell>
                    <TableDataCell>Okafor</TableDataCell>
                    <TableDataCell>08/11/2010</TableDataCell>
                    <TableDataCell>02/26/1991</TableDataCell>
                </TableRow>
                <TableRow selected={!!selected.id_3}>
                    <TableDataCell width="48px">
                        <Checkbox
                            value="id_3"
                            checked={!!selected.id_3}
                            onChange={toggleSelected}
                        />
                    </TableDataCell>
                    <TableDataCell>Siyabonga</TableDataCell>
                    <TableDataCell>Abiodun</TableDataCell>
                    <TableDataCell>07/21/1981</TableDataCell>
                    <TableDataCell>02/06/2007</TableDataCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
export const SelectableRows = SelectableRowsTemplate.bind({})
SelectableRows.args = {}

const FixedHeaderTemplate = ({ ...args }) => (
    <TableScrollBox maxHeight="350px">
        <Table {...args}>
            <TableHead>
                <TableRow>
                    <TableHeaderCell fixed top="0">
                        First name
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Last name
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Incident date
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Last updated
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Age
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Registering unit
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Assigned user
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Status
                    </TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableDataCell>Onyekachukwu</TableDataCell>
                    <TableDataCell>Kariuki</TableDataCell>
                    <TableDataCell>02/06/2007</TableDataCell>
                    <TableDataCell>05/25/1972</TableDataCell>
                    <TableDataCell>66</TableDataCell>
                    <TableDataCell>Jawi</TableDataCell>
                    <TableDataCell>Sofie Hubert</TableDataCell>
                    <TableDataCell>Incomplete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableDataCell>Kwasi</TableDataCell>
                    <TableDataCell>Okafor</TableDataCell>
                    <TableDataCell>08/11/2010</TableDataCell>
                    <TableDataCell>02/26/1991</TableDataCell>
                    <TableDataCell>38</TableDataCell>
                    <TableDataCell>Mokassie MCHP</TableDataCell>
                    <TableDataCell>Dashonte Clarke</TableDataCell>
                    <TableDataCell>Complete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableDataCell>Siyabonga</TableDataCell>
                    <TableDataCell>Abiodun</TableDataCell>
                    <TableDataCell>07/21/1981</TableDataCell>
                    <TableDataCell>02/06/2007</TableDataCell>
                    <TableDataCell>98</TableDataCell>
                    <TableDataCell>Bathurst MCHP</TableDataCell>
                    <TableDataCell>Unassigned</TableDataCell>
                    <TableDataCell>Incomplete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableDataCell>Chiyembekezo</TableDataCell>
                    <TableDataCell>Okeke</TableDataCell>
                    <TableDataCell>01/23/1982</TableDataCell>
                    <TableDataCell>07/15/2003</TableDataCell>
                    <TableDataCell>2</TableDataCell>
                    <TableDataCell>Mayolla MCHP</TableDataCell>
                    <TableDataCell>Wan Gengxin</TableDataCell>
                    <TableDataCell>Incomplete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableDataCell>Mtendere</TableDataCell>
                    <TableDataCell>Afolayan</TableDataCell>
                    <TableDataCell>08/12/1994</TableDataCell>
                    <TableDataCell>05/12/1972</TableDataCell>
                    <TableDataCell>37</TableDataCell>
                    <TableDataCell>Gbangadu MCHP</TableDataCell>
                    <TableDataCell>Gvozden Boskovsky</TableDataCell>
                    <TableDataCell>Complete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableDataCell>Inyene</TableDataCell>
                    <TableDataCell>Okonkwo</TableDataCell>
                    <TableDataCell>04/01/1971</TableDataCell>
                    <TableDataCell>03/16/2000</TableDataCell>
                    <TableDataCell>70</TableDataCell>
                    <TableDataCell>Kunike Barina</TableDataCell>
                    <TableDataCell>Oscar de la Cavallería</TableDataCell>
                    <TableDataCell>Complete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableDataCell>Amaka</TableDataCell>
                    <TableDataCell>Pretorius</TableDataCell>
                    <TableDataCell>01/25/1996</TableDataCell>
                    <TableDataCell>09/15/1986</TableDataCell>
                    <TableDataCell>32</TableDataCell>
                    <TableDataCell>Bargbo</TableDataCell>
                    <TableDataCell>Alberto Raya</TableDataCell>
                    <TableDataCell>Incomplete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableDataCell>Meti</TableDataCell>
                    <TableDataCell>Abiodun</TableDataCell>
                    <TableDataCell>10/24/2010</TableDataCell>
                    <TableDataCell>07/26/1989</TableDataCell>
                    <TableDataCell>8</TableDataCell>
                    <TableDataCell>Majihun MCHP</TableDataCell>
                    <TableDataCell>Unassigned</TableDataCell>
                    <TableDataCell>Complete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableDataCell>Eshe</TableDataCell>
                    <TableDataCell>Okeke</TableDataCell>
                    <TableDataCell>01/31/1995</TableDataCell>
                    <TableDataCell>01/31/1995</TableDataCell>
                    <TableDataCell>63</TableDataCell>
                    <TableDataCell>Mambiama CHP</TableDataCell>
                    <TableDataCell>Shadrias Pearson</TableDataCell>
                    <TableDataCell>Incomplete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableDataCell>Obi</TableDataCell>
                    <TableDataCell>Okafor</TableDataCell>
                    <TableDataCell>06/07/1990</TableDataCell>
                    <TableDataCell>01/03/2006</TableDataCell>
                    <TableDataCell>28</TableDataCell>
                    <TableDataCell>Dalakuru CHP</TableDataCell>
                    <TableDataCell>Anatoliy Shcherbatykh</TableDataCell>
                    <TableDataCell>Incomplete</TableDataCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableScrollBox>
)
export const FixedHeader = FixedHeaderTemplate.bind({})
FixedHeader.args = {
    borderless: true,
}

const FixedFirstColumnTemplate = args => (
    <TableScrollBox maxWidth="500px">
        <Table {...args}>
            <TableHead>
                <TableRow>
                    <TableHeaderCell fixed top="0" left="0">
                        First name
                    </TableHeaderCell>
                    <TableHeaderCell>Last name</TableHeaderCell>
                    <TableHeaderCell>Incident date</TableHeaderCell>
                    <TableHeaderCell>Last updated</TableHeaderCell>
                    <TableHeaderCell>Age</TableHeaderCell>
                    <TableHeaderCell>Registering unit</TableHeaderCell>
                    <TableHeaderCell>Assigned user</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableHeaderCell fixed left="0">
                        Onyekachukwu
                    </TableHeaderCell>
                    <TableDataCell>Kariuki</TableDataCell>
                    <TableDataCell>02/06/2007</TableDataCell>
                    <TableDataCell>05/25/1972</TableDataCell>
                    <TableDataCell>66</TableDataCell>
                    <TableDataCell>Jawi</TableDataCell>
                    <TableDataCell>Sofie Hubert</TableDataCell>
                    <TableDataCell>Incomplete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0">
                        Kwasi
                    </TableHeaderCell>
                    <TableDataCell>Okafor</TableDataCell>
                    <TableDataCell>08/11/2010</TableDataCell>
                    <TableDataCell>02/26/1991</TableDataCell>
                    <TableDataCell>38</TableDataCell>
                    <TableDataCell>Mokassie MCHP</TableDataCell>
                    <TableDataCell>Dashonte Clarke</TableDataCell>
                    <TableDataCell>Complete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0">
                        Siyabonga
                    </TableHeaderCell>
                    <TableDataCell>Abiodun</TableDataCell>
                    <TableDataCell>07/21/1981</TableDataCell>
                    <TableDataCell>02/06/2007</TableDataCell>
                    <TableDataCell>98</TableDataCell>
                    <TableDataCell>Bathurst MCHP</TableDataCell>
                    <TableDataCell>Unassigned</TableDataCell>
                    <TableDataCell>Incomplete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0">
                        Chiyembekezo
                    </TableHeaderCell>
                    <TableDataCell>Okeke</TableDataCell>
                    <TableDataCell>01/23/1982</TableDataCell>
                    <TableDataCell>07/15/2003</TableDataCell>
                    <TableDataCell>2</TableDataCell>
                    <TableDataCell>Mayolla MCHP</TableDataCell>
                    <TableDataCell>Wan Gengxin</TableDataCell>
                    <TableDataCell>Incomplete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0">
                        Mtendere
                    </TableHeaderCell>
                    <TableDataCell>Afolayan</TableDataCell>
                    <TableDataCell>08/12/1994</TableDataCell>
                    <TableDataCell>05/12/1972</TableDataCell>
                    <TableDataCell>37</TableDataCell>
                    <TableDataCell>Gbangadu MCHP</TableDataCell>
                    <TableDataCell>Gvozden Boskovsky</TableDataCell>
                    <TableDataCell>Complete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0">
                        Inyene
                    </TableHeaderCell>
                    <TableDataCell>Okonkwo</TableDataCell>
                    <TableDataCell>04/01/1971</TableDataCell>
                    <TableDataCell>03/16/2000</TableDataCell>
                    <TableDataCell>70</TableDataCell>
                    <TableDataCell>Kunike Barina</TableDataCell>
                    <TableDataCell>Oscar de la Cavallería</TableDataCell>
                    <TableDataCell>Complete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0">
                        Amaka
                    </TableHeaderCell>
                    <TableDataCell>Pretorius</TableDataCell>
                    <TableDataCell>01/25/1996</TableDataCell>
                    <TableDataCell>09/15/1986</TableDataCell>
                    <TableDataCell>32</TableDataCell>
                    <TableDataCell>Bargbo</TableDataCell>
                    <TableDataCell>Alberto Raya</TableDataCell>
                    <TableDataCell>Incomplete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0">
                        Meti
                    </TableHeaderCell>
                    <TableDataCell>Abiodun</TableDataCell>
                    <TableDataCell>10/24/2010</TableDataCell>
                    <TableDataCell>07/26/1989</TableDataCell>
                    <TableDataCell>8</TableDataCell>
                    <TableDataCell>Majihun MCHP</TableDataCell>
                    <TableDataCell>Unassigned</TableDataCell>
                    <TableDataCell>Complete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0">
                        Eshe
                    </TableHeaderCell>
                    <TableDataCell>Okeke</TableDataCell>
                    <TableDataCell>01/31/1995</TableDataCell>
                    <TableDataCell>01/31/1995</TableDataCell>
                    <TableDataCell>63</TableDataCell>
                    <TableDataCell>Mambiama CHP</TableDataCell>
                    <TableDataCell>Shadrias Pearson</TableDataCell>
                    <TableDataCell>Incomplete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0">
                        Obi
                    </TableHeaderCell>
                    <TableDataCell>Okafor</TableDataCell>
                    <TableDataCell>06/07/1990</TableDataCell>
                    <TableDataCell>01/03/2006</TableDataCell>
                    <TableDataCell>28</TableDataCell>
                    <TableDataCell>Dalakuru CHP</TableDataCell>
                    <TableDataCell>Anatoliy Shcherbatykh</TableDataCell>
                    <TableDataCell>Incomplete</TableDataCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableScrollBox>
)
export const FixedFirstColumn = FixedFirstColumnTemplate.bind({})
FixedFirstColumn.args = {
    borderless: true,
    width: '1000px',
}

const FixedHeaderAndTwoColumnsTemplate = args => (
    <TableScrollBox maxHeight="350px" maxWidth="500px">
        <Table {...args}>
            <TableHead>
                <TableRow>
                    <TableHeaderCell fixed top="0" left="0" width="120px">
                        First name
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0" left="120px">
                        Last name
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Incident date
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Last updated
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Age
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Registering unit
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Assigned user
                    </TableHeaderCell>
                    <TableHeaderCell fixed top="0">
                        Status
                    </TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        Onyekachukwu
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        Kariuki
                    </TableHeaderCell>
                    <TableDataCell>02/06/2007</TableDataCell>
                    <TableDataCell>05/25/1972</TableDataCell>
                    <TableDataCell>66</TableDataCell>
                    <TableDataCell>Jawi</TableDataCell>
                    <TableDataCell>Sofie Hubert</TableDataCell>
                    <TableDataCell>Incomplete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        Kwasi
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        Okafor
                    </TableHeaderCell>
                    <TableDataCell>08/11/2010</TableDataCell>
                    <TableDataCell>02/26/1991</TableDataCell>
                    <TableDataCell>38</TableDataCell>
                    <TableDataCell>Mokassie MCHP</TableDataCell>
                    <TableDataCell>Dashonte Clarke</TableDataCell>
                    <TableDataCell>Complete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        Siyabonga
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        Abiodun
                    </TableHeaderCell>
                    <TableDataCell>07/21/1981</TableDataCell>
                    <TableDataCell>02/06/2007</TableDataCell>
                    <TableDataCell>98</TableDataCell>
                    <TableDataCell>Bathurst MCHP</TableDataCell>
                    <TableDataCell>Unassigned</TableDataCell>
                    <TableDataCell>Incomplete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        Chiyembekezo
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        Okeke
                    </TableHeaderCell>
                    <TableDataCell>01/23/1982</TableDataCell>
                    <TableDataCell>07/15/2003</TableDataCell>
                    <TableDataCell>2</TableDataCell>
                    <TableDataCell>Mayolla MCHP</TableDataCell>
                    <TableDataCell>Wan Gengxin</TableDataCell>
                    <TableDataCell>Incomplete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        Mtendere
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        Afolayan
                    </TableHeaderCell>
                    <TableDataCell>08/12/1994</TableDataCell>
                    <TableDataCell>05/12/1972</TableDataCell>
                    <TableDataCell>37</TableDataCell>
                    <TableDataCell>Gbangadu MCHP</TableDataCell>
                    <TableDataCell>Gvozden Boskovsky</TableDataCell>
                    <TableDataCell>Complete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        Inyene
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        Okonkwo
                    </TableHeaderCell>
                    <TableDataCell>04/01/1971</TableDataCell>
                    <TableDataCell>03/16/2000</TableDataCell>
                    <TableDataCell>70</TableDataCell>
                    <TableDataCell>Kunike Barina</TableDataCell>
                    <TableDataCell>Oscar de la Cavallería</TableDataCell>
                    <TableDataCell>Complete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        Amaka
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        Pretorius
                    </TableHeaderCell>
                    <TableDataCell>01/25/1996</TableDataCell>
                    <TableDataCell>09/15/1986</TableDataCell>
                    <TableDataCell>32</TableDataCell>
                    <TableDataCell>Bargbo</TableDataCell>
                    <TableDataCell>Alberto Raya</TableDataCell>
                    <TableDataCell>Incomplete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        Meti
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        Abiodun
                    </TableHeaderCell>
                    <TableDataCell>10/24/2010</TableDataCell>
                    <TableDataCell>07/26/1989</TableDataCell>
                    <TableDataCell>8</TableDataCell>
                    <TableDataCell>Majihun MCHP</TableDataCell>
                    <TableDataCell>Unassigned</TableDataCell>
                    <TableDataCell>Complete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        Eshe
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        Okeke
                    </TableHeaderCell>
                    <TableDataCell>01/31/1995</TableDataCell>
                    <TableDataCell>01/31/1995</TableDataCell>
                    <TableDataCell>63</TableDataCell>
                    <TableDataCell>Mambiama CHP</TableDataCell>
                    <TableDataCell>Shadrias Pearson</TableDataCell>
                    <TableDataCell>Incomplete</TableDataCell>
                </TableRow>
                <TableRow>
                    <TableHeaderCell fixed left="0" width="120px">
                        Obi
                    </TableHeaderCell>
                    <TableHeaderCell fixed left="120px">
                        Okafor
                    </TableHeaderCell>
                    <TableDataCell>06/07/1990</TableDataCell>
                    <TableDataCell>01/03/2006</TableDataCell>
                    <TableDataCell>28</TableDataCell>
                    <TableDataCell>Dalakuru CHP</TableDataCell>
                    <TableDataCell>Anatoliy Shcherbatykh</TableDataCell>
                    <TableDataCell>Incomplete</TableDataCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableScrollBox>
)

export const FixedHeaderAndTwoColumns = FixedHeaderAndTwoColumnsTemplate.bind(
    {}
)
FixedHeaderAndTwoColumns.args = {
    layout: 'fixed',
    borderless: true,
    width: '1000px',
}

const ScrollingTableWithToolbarsTemplate = args => (
    <Box width="500px">
        <TableToolbar>
            <p>Content</p>
        </TableToolbar>
        <TableScrollBox maxHeight="350px" maxWidth="500px">
            <Table {...args}>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell fixed top="0" left="0" width="120px">
                            First name
                        </TableHeaderCell>
                        <TableHeaderCell fixed top="0" left="120px">
                            Last name
                        </TableHeaderCell>
                        <TableHeaderCell fixed top="0">
                            Incident date
                        </TableHeaderCell>
                        <TableHeaderCell fixed top="0">
                            Last updated
                        </TableHeaderCell>
                        <TableHeaderCell fixed top="0">
                            Age
                        </TableHeaderCell>
                        <TableHeaderCell fixed top="0">
                            Registering unit
                        </TableHeaderCell>
                        <TableHeaderCell fixed top="0">
                            Assigned user
                        </TableHeaderCell>
                        <TableHeaderCell fixed top="0">
                            Status
                        </TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableHeaderCell fixed left="0" width="120px">
                            Onyekachukwu
                        </TableHeaderCell>
                        <TableHeaderCell fixed left="120px">
                            Kariuki
                        </TableHeaderCell>
                        <TableDataCell>02/06/2007</TableDataCell>
                        <TableDataCell>05/25/1972</TableDataCell>
                        <TableDataCell>66</TableDataCell>
                        <TableDataCell>Jawi</TableDataCell>
                        <TableDataCell>Sofie Hubert</TableDataCell>
                        <TableDataCell>Incomplete</TableDataCell>
                    </TableRow>
                    <TableRow>
                        <TableHeaderCell fixed left="0" width="120px">
                            Kwasi
                        </TableHeaderCell>
                        <TableHeaderCell fixed left="120px">
                            Okafor
                        </TableHeaderCell>
                        <TableDataCell>08/11/2010</TableDataCell>
                        <TableDataCell>02/26/1991</TableDataCell>
                        <TableDataCell>38</TableDataCell>
                        <TableDataCell>Mokassie MCHP</TableDataCell>
                        <TableDataCell>Dashonte Clarke</TableDataCell>
                        <TableDataCell>Complete</TableDataCell>
                    </TableRow>
                    <TableRow>
                        <TableHeaderCell fixed left="0" width="120px">
                            Siyabonga
                        </TableHeaderCell>
                        <TableHeaderCell fixed left="120px">
                            Abiodun
                        </TableHeaderCell>
                        <TableDataCell>07/21/1981</TableDataCell>
                        <TableDataCell>02/06/2007</TableDataCell>
                        <TableDataCell>98</TableDataCell>
                        <TableDataCell>Bathurst MCHP</TableDataCell>
                        <TableDataCell>Unassigned</TableDataCell>
                        <TableDataCell>Incomplete</TableDataCell>
                    </TableRow>
                    <TableRow>
                        <TableHeaderCell fixed left="0" width="120px">
                            Chiyembekezo
                        </TableHeaderCell>
                        <TableHeaderCell fixed left="120px">
                            Okeke
                        </TableHeaderCell>
                        <TableDataCell>01/23/1982</TableDataCell>
                        <TableDataCell>07/15/2003</TableDataCell>
                        <TableDataCell>2</TableDataCell>
                        <TableDataCell>Mayolla MCHP</TableDataCell>
                        <TableDataCell>Wan Gengxin</TableDataCell>
                        <TableDataCell>Incomplete</TableDataCell>
                    </TableRow>
                    <TableRow>
                        <TableHeaderCell fixed left="0" width="120px">
                            Mtendere
                        </TableHeaderCell>
                        <TableHeaderCell fixed left="120px">
                            Afolayan
                        </TableHeaderCell>
                        <TableDataCell>08/12/1994</TableDataCell>
                        <TableDataCell>05/12/1972</TableDataCell>
                        <TableDataCell>37</TableDataCell>
                        <TableDataCell>Gbangadu MCHP</TableDataCell>
                        <TableDataCell>Gvozden Boskovsky</TableDataCell>
                        <TableDataCell>Complete</TableDataCell>
                    </TableRow>
                    <TableRow>
                        <TableHeaderCell fixed left="0" width="120px">
                            Inyene
                        </TableHeaderCell>
                        <TableHeaderCell fixed left="120px">
                            Okonkwo
                        </TableHeaderCell>
                        <TableDataCell>04/01/1971</TableDataCell>
                        <TableDataCell>03/16/2000</TableDataCell>
                        <TableDataCell>70</TableDataCell>
                        <TableDataCell>Kunike Barina</TableDataCell>
                        <TableDataCell>Oscar de la Cavallería</TableDataCell>
                        <TableDataCell>Complete</TableDataCell>
                    </TableRow>
                    <TableRow>
                        <TableHeaderCell fixed left="0" width="120px">
                            Amaka
                        </TableHeaderCell>
                        <TableHeaderCell fixed left="120px">
                            Pretorius
                        </TableHeaderCell>
                        <TableDataCell>01/25/1996</TableDataCell>
                        <TableDataCell>09/15/1986</TableDataCell>
                        <TableDataCell>32</TableDataCell>
                        <TableDataCell>Bargbo</TableDataCell>
                        <TableDataCell>Alberto Raya</TableDataCell>
                        <TableDataCell>Incomplete</TableDataCell>
                    </TableRow>
                    <TableRow>
                        <TableHeaderCell fixed left="0" width="120px">
                            Meti
                        </TableHeaderCell>
                        <TableHeaderCell fixed left="120px">
                            Abiodun
                        </TableHeaderCell>
                        <TableDataCell>10/24/2010</TableDataCell>
                        <TableDataCell>07/26/1989</TableDataCell>
                        <TableDataCell>8</TableDataCell>
                        <TableDataCell>Majihun MCHP</TableDataCell>
                        <TableDataCell>Unassigned</TableDataCell>
                        <TableDataCell>Complete</TableDataCell>
                    </TableRow>
                    <TableRow>
                        <TableHeaderCell fixed left="0" width="120px">
                            Eshe
                        </TableHeaderCell>
                        <TableHeaderCell fixed left="120px">
                            Okeke
                        </TableHeaderCell>
                        <TableDataCell>01/31/1995</TableDataCell>
                        <TableDataCell>01/31/1995</TableDataCell>
                        <TableDataCell>63</TableDataCell>
                        <TableDataCell>Mambiama CHP</TableDataCell>
                        <TableDataCell>Shadrias Pearson</TableDataCell>
                        <TableDataCell>Incomplete</TableDataCell>
                    </TableRow>
                    <TableRow>
                        <TableHeaderCell fixed left="0" width="120px">
                            Obi
                        </TableHeaderCell>
                        <TableHeaderCell fixed left="120px">
                            Okafor
                        </TableHeaderCell>
                        <TableDataCell>06/07/1990</TableDataCell>
                        <TableDataCell>01/03/2006</TableDataCell>
                        <TableDataCell>28</TableDataCell>
                        <TableDataCell>Dalakuru CHP</TableDataCell>
                        <TableDataCell>Anatoliy Shcherbatykh</TableDataCell>
                        <TableDataCell>Incomplete</TableDataCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableScrollBox>
        <TableToolbar position="bottom">
            <p>Content (bottom)</p>
        </TableToolbar>
    </Box>
)

export const ScrollingTableWithToolbars = ScrollingTableWithToolbarsTemplate.bind(
    {}
)
ScrollingTableWithToolbars.args = {
    layout: 'fixed',
    borderless: true,
    width: '1000px',
}

const HeaderActionsTemplate = args => (
    <Table {...args}>
        <TableHead>
            <TableRow>
                <TableHeaderCell>
                    <span
                        style={{
                            display: 'flex',
                            height: '100%',
                            alignItems: 'center',
                        }}
                    >
                        First name
                        <TableHeaderCellAction>
                            <IconAttachment16 color="green" />
                        </TableHeaderCellAction>
                    </span>
                </TableHeaderCell>
                <TableHeaderCell>
                    <span
                        style={{
                            display: 'flex',
                            height: '100%',
                            alignItems: 'center',
                        }}
                    >
                        Last name
                        <TableHeaderCellAction>
                            <IconAttachment16 color="red" />
                        </TableHeaderCellAction>
                    </span>
                </TableHeaderCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableDataCell colSpan="3"></TableDataCell>
            </TableRow>
        </TableBody>
    </Table>
)

export const HeaderActions = HeaderActionsTemplate.bind({})
HeaderActions.args = {}
