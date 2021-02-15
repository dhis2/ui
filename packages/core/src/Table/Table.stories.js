/* eslint-disable react/prop-types */

import React, { useState } from 'react'
import { Box } from '../Box/Box.js'
import { Checkbox } from '../Checkbox/Checkbox.js'
import { Input } from '../Input/Input.js'
import { Table } from './Table.js'
import { TableBody } from './TableBody.js'
import { TableCell } from './TableCell.js'
import { TableCellHead } from './TableCellHead.js'
import { TableHead } from './TableHead.js'
import { TableRow } from './TableRow.js'
import { TableScrollBox } from './TableScrollBox.js'
import { TableToolbar } from './TableToolbar.js'

export default { title: 'Table' }
const BasicTemplate = ({ bordered, large, draggable }) => (
    <Table>
        <TableHead>
            <TableRow>
                {draggable && <TableCellHead large={large} />}
                <TableCellHead large={large}>First name</TableCellHead>
                <TableCellHead large={large}>Last name</TableCellHead>
                <TableCellHead large={large}>Incident date</TableCellHead>
                <TableCellHead large={large}>Last updated</TableCellHead>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow draggable={draggable}>
                <TableCell large={large} bordered={bordered}>
                    Onyekachukwu
                </TableCell>
                <TableCell large={large} bordered={bordered}>
                    Kariuki
                </TableCell>
                <TableCell large={large} bordered={bordered}>
                    02/06/2007
                </TableCell>
                <TableCell large={large} bordered={bordered}>
                    05/25/1972
                </TableCell>
            </TableRow>
            <TableRow draggable={draggable}>
                <TableCell large={large} bordered={bordered}>
                    Kwasi
                </TableCell>
                <TableCell large={large} bordered={bordered}>
                    Okafor
                </TableCell>
                <TableCell large={large} bordered={bordered}>
                    08/11/2010
                </TableCell>
                <TableCell large={large} bordered={bordered}>
                    02/26/1991
                </TableCell>
            </TableRow>
            <TableRow draggable={draggable}>
                <TableCell large={large} bordered={bordered}>
                    Siyabonga
                </TableCell>
                <TableCell large={large} bordered={bordered}>
                    Abiodun
                </TableCell>
                <TableCell large={large} bordered={bordered}>
                    07/21/1981
                </TableCell>
                <TableCell large={large} bordered={bordered}>
                    02/06/2007
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
)

export const Default = BasicTemplate.bind({})
Default.args = {}

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

const IndividualCellTemplate = ({
    active,
    align,
    error,
    muted,
    valid,
    onClick,
}) => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCellHead>Header</TableCellHead>
                <TableCellHead>Header</TableCellHead>
                <TableCellHead>Header</TableCellHead>
                <TableCellHead>Header</TableCellHead>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell tag="th">Active Cells</TableCell>
                <TableCell>Inactive cell</TableCell>
                <TableCell active={active} onClick={onClick}>
                    Acive Cell with onClick
                </TableCell>
                <TableCell>Inactive cell</TableCell>
            </TableRow>
            <TableRow>
                <TableCell tag="th" align={align}>
                    Alignment
                </TableCell>
                <TableCell align="left">Left</TableCell>
                <TableCell align="center">Center</TableCell>
                <TableCell align="right">Right</TableCell>
            </TableRow>
            <TableRow>
                <TableCell tag="th">Built in formatting</TableCell>
                <TableCell error={error}>Error</TableCell>
                <TableCell valid={valid}>Valid</TableCell>
                <TableCell muted={muted}>Muted</TableCell>
            </TableRow>
        </TableBody>
    </Table>
)

export const CellStyling = IndividualCellTemplate.bind({})
CellStyling.args = {
    active: true,
    align: 'left',
    error: true,
    muted: true,
    valid: true,
    onClick: () => {
        console.log('You clicked on a TableCell')
    },
}

export const IrregularHeaders = () => (
    <Table>
        <colgroup />
        <colgroup span="2"></colgroup>
        <colgroup span="2"></colgroup>
        <TableHead>
            <TableRow>
                <TableCellHead rowSpan="2" colSpan="2"></TableCellHead>
                <TableCellHead align="center" colSpan="2" scope="colgroup">
                    Mars
                </TableCellHead>
                <TableCellHead align="center" colSpan="2" scope="colgroup">
                    Venus
                </TableCellHead>
            </TableRow>
            <TableRow>
                <TableCellHead scope="col">Produced</TableCellHead>
                <TableCellHead scope="col">Sold</TableCellHead>
                <TableCellHead scope="col">Produced</TableCellHead>
                <TableCellHead scope="col">Sold</TableCellHead>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell tag="th" scope="row" rowSpan="2">
                    Type
                </TableCell>
                <TableCell tag="th" scope="row">
                    Teddy Bears
                </TableCell>
                <TableCell>50,000</TableCell>
                <TableCell>30,000</TableCell>
                <TableCell>100,000</TableCell>
                <TableCell>80,000</TableCell>
            </TableRow>
            <TableRow>
                <TableCell tag="th" scope="row">
                    Board Games
                </TableCell>
                <TableCell>10,000</TableCell>
                <TableCell>5,000</TableCell>
                <TableCell>12,000</TableCell>
                <TableCell>9,000</TableCell>
            </TableRow>
        </TableBody>
    </Table>
)

export const Toolbars = () => (
    <>
        <TableToolbar>
            <p>Content</p>
        </TableToolbar>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCellHead>First name</TableCellHead>
                    <TableCellHead>Last name</TableCellHead>
                    <TableCellHead>Incident date</TableCellHead>
                    <TableCellHead>Last updated</TableCellHead>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Onyekachukwu</TableCell>
                    <TableCell>Kariuki</TableCell>
                    <TableCell>02/06/2007</TableCell>
                    <TableCell>05/25/1972</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Kwasi</TableCell>
                    <TableCell>Okafor</TableCell>
                    <TableCell>08/11/2010</TableCell>
                    <TableCell>02/26/1991</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Siyabonga</TableCell>
                    <TableCell>Abiodun</TableCell>
                    <TableCell>07/21/1981</TableCell>
                    <TableCell>02/06/2007</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        <TableToolbar position="bottom">
            <p>Content (bottom)</p>
        </TableToolbar>
    </>
)

export const ExpandableRowContent = () => {
    const style = {
        margin: 8,
        padding: 4,
        backgroundColor: 'lightblue',
    }
    const expandableContent = <div style={style}>More info about this row!</div>
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCellHead />
                    <TableCellHead>First name</TableCellHead>
                    <TableCellHead>Last name</TableCellHead>
                    <TableCellHead>Incident date</TableCellHead>
                    <TableCellHead>Last updated</TableCellHead>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow expandableContent={expandableContent}>
                    <TableCell>Onyekachukwu</TableCell>
                    <TableCell>Kariuki</TableCell>
                    <TableCell>02/06/2007</TableCell>
                    <TableCell>05/25/1972</TableCell>
                </TableRow>
                <TableRow expandableContent={expandableContent}>
                    <TableCell>Kwasi</TableCell>
                    <TableCell>Okafor</TableCell>
                    <TableCell>08/11/2010</TableCell>
                    <TableCell>02/26/1991</TableCell>
                </TableRow>
                <TableRow expandableContent={expandableContent}>
                    <TableCell>Siyabonga</TableCell>
                    <TableCell>Abiodun</TableCell>
                    <TableCell>07/21/1981</TableCell>
                    <TableCell>02/06/2007</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export const SelectableRows = () => {
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
        <Table>
            <TableHead>
                <TableRow>
                    <TableCellHead>
                        <Checkbox
                            checked={allSelected()}
                            onChange={toggleAll}
                        />
                    </TableCellHead>
                    <TableCellHead>First name</TableCellHead>
                    <TableCellHead>Last name</TableCellHead>
                    <TableCellHead>Incident date</TableCellHead>
                    <TableCellHead>Last updated</TableCellHead>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow selected={!!selected.id_1}>
                    <TableCell>
                        <Checkbox
                            value="id_1"
                            checked={!!selected.id_1}
                            onChange={toggleSelected}
                        />
                    </TableCell>
                    <TableCell>Onyekachukwu</TableCell>
                    <TableCell>Kariuki</TableCell>
                    <TableCell>02/06/2007</TableCell>
                    <TableCell>05/25/1972</TableCell>
                </TableRow>
                <TableRow selected={!!selected.id_2}>
                    <TableCell>
                        <Checkbox
                            value="id_2"
                            checked={!!selected.id_2}
                            onChange={toggleSelected}
                        />
                    </TableCell>
                    <TableCell>Kwasi</TableCell>
                    <TableCell>Okafor</TableCell>
                    <TableCell>08/11/2010</TableCell>
                    <TableCell>02/26/1991</TableCell>
                </TableRow>
                <TableRow selected={!!selected.id_3}>
                    <TableCell>
                        <Checkbox
                            value="id_3"
                            checked={!!selected.id_3}
                            onChange={toggleSelected}
                        />
                    </TableCell>
                    <TableCell>Siyabonga</TableCell>
                    <TableCell>Abiodun</TableCell>
                    <TableCell>07/21/1981</TableCell>
                    <TableCell>02/06/2007</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export const FixedHeader = () => (
    <TableScrollBox overflow="auto" height="350px">
        <Table>
            <TableHead>
                <TableRow>
                    <TableCellHead fixed top="0">
                        First name
                    </TableCellHead>
                    <TableCellHead fixed top="0">
                        Last name
                    </TableCellHead>
                    <TableCellHead fixed top="0">
                        Incident date
                    </TableCellHead>
                    <TableCellHead fixed top="0">
                        Last updated
                    </TableCellHead>
                    <TableCellHead fixed top="0">
                        Age
                    </TableCellHead>
                    <TableCellHead fixed top="0">
                        Registering unit
                    </TableCellHead>
                    <TableCellHead fixed top="0">
                        Assigned user
                    </TableCellHead>
                    <TableCellHead fixed top="0">
                        Status
                    </TableCellHead>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Onyekachukwu</TableCell>
                    <TableCell>Kariuki</TableCell>
                    <TableCell>02/06/2007</TableCell>
                    <TableCell>05/25/1972</TableCell>
                    <TableCell>66</TableCell>
                    <TableCell>Jawi</TableCell>
                    <TableCell>Sofie Hubert</TableCell>
                    <TableCell>Incomplete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Kwasi</TableCell>
                    <TableCell>Okafor</TableCell>
                    <TableCell>08/11/2010</TableCell>
                    <TableCell>02/26/1991</TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>Mokassie MCHP</TableCell>
                    <TableCell>Dashonte Clarke</TableCell>
                    <TableCell>Complete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Siyabonga</TableCell>
                    <TableCell>Abiodun</TableCell>
                    <TableCell>07/21/1981</TableCell>
                    <TableCell>02/06/2007</TableCell>
                    <TableCell>98</TableCell>
                    <TableCell>Bathurst MCHP</TableCell>
                    <TableCell>Unassigned</TableCell>
                    <TableCell>Incomplete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Chiyembekezo</TableCell>
                    <TableCell>Okeke</TableCell>
                    <TableCell>01/23/1982</TableCell>
                    <TableCell>07/15/2003</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>Mayolla MCHP</TableCell>
                    <TableCell>Wan Gengxin</TableCell>
                    <TableCell>Incomplete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Mtendere</TableCell>
                    <TableCell>Afolayan</TableCell>
                    <TableCell>08/12/1994</TableCell>
                    <TableCell>05/12/1972</TableCell>
                    <TableCell>37</TableCell>
                    <TableCell>Gbangadu MCHP</TableCell>
                    <TableCell>Gvozden Boskovsky</TableCell>
                    <TableCell>Complete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Inyene</TableCell>
                    <TableCell>Okonkwo</TableCell>
                    <TableCell>04/01/1971</TableCell>
                    <TableCell>03/16/2000</TableCell>
                    <TableCell>70</TableCell>
                    <TableCell>Kunike Barina</TableCell>
                    <TableCell>Oscar de la Cavallería</TableCell>
                    <TableCell>Complete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Amaka</TableCell>
                    <TableCell>Pretorius</TableCell>
                    <TableCell>01/25/1996</TableCell>
                    <TableCell>09/15/1986</TableCell>
                    <TableCell>32</TableCell>
                    <TableCell>Bargbo</TableCell>
                    <TableCell>Alberto Raya</TableCell>
                    <TableCell>Incomplete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Meti</TableCell>
                    <TableCell>Abiodun</TableCell>
                    <TableCell>10/24/2010</TableCell>
                    <TableCell>07/26/1989</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>Majihun MCHP</TableCell>
                    <TableCell>Unassigned</TableCell>
                    <TableCell>Complete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Eshe</TableCell>
                    <TableCell>Okeke</TableCell>
                    <TableCell>01/31/1995</TableCell>
                    <TableCell>01/31/1995</TableCell>
                    <TableCell>63</TableCell>
                    <TableCell>Mambiama CHP</TableCell>
                    <TableCell>Shadrias Pearson</TableCell>
                    <TableCell>Incomplete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Obi</TableCell>
                    <TableCell>Okafor</TableCell>
                    <TableCell>06/07/1990</TableCell>
                    <TableCell>01/03/2006</TableCell>
                    <TableCell>28</TableCell>
                    <TableCell>Dalakuru CHP</TableCell>
                    <TableCell>Anatoliy Shcherbatykh</TableCell>
                    <TableCell>Incomplete</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableScrollBox>
)

export const FixedFirstColumn = () => (
    <TableScrollBox overflow="auto" width="500px">
        <Table>
            <TableHead>
                <TableRow>
                    <TableCellHead fixed top="0" left="0">
                        First name
                    </TableCellHead>
                    <TableCellHead>Last name</TableCellHead>
                    <TableCellHead>Incident date</TableCellHead>
                    <TableCellHead>Last updated</TableCellHead>
                    <TableCellHead>Age</TableCellHead>
                    <TableCellHead>Registering unit</TableCellHead>
                    <TableCellHead>Assigned user</TableCellHead>
                    <TableCellHead>Status</TableCellHead>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell fixed left="0">
                        Onyekachukwu
                    </TableCell>
                    <TableCell>Kariuki</TableCell>
                    <TableCell>02/06/2007</TableCell>
                    <TableCell>05/25/1972</TableCell>
                    <TableCell>66</TableCell>
                    <TableCell>Jawi</TableCell>
                    <TableCell>Sofie Hubert</TableCell>
                    <TableCell>Incomplete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell fixed left="0">
                        Kwasi
                    </TableCell>
                    <TableCell>Okafor</TableCell>
                    <TableCell>08/11/2010</TableCell>
                    <TableCell>02/26/1991</TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>Mokassie MCHP</TableCell>
                    <TableCell>Dashonte Clarke</TableCell>
                    <TableCell>Complete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell fixed left="0">
                        Siyabonga
                    </TableCell>
                    <TableCell>Abiodun</TableCell>
                    <TableCell>07/21/1981</TableCell>
                    <TableCell>02/06/2007</TableCell>
                    <TableCell>98</TableCell>
                    <TableCell>Bathurst MCHP</TableCell>
                    <TableCell>Unassigned</TableCell>
                    <TableCell>Incomplete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell fixed left="0">
                        Chiyembekezo
                    </TableCell>
                    <TableCell>Okeke</TableCell>
                    <TableCell>01/23/1982</TableCell>
                    <TableCell>07/15/2003</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>Mayolla MCHP</TableCell>
                    <TableCell>Wan Gengxin</TableCell>
                    <TableCell>Incomplete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell fixed left="0">
                        Mtendere
                    </TableCell>
                    <TableCell>Afolayan</TableCell>
                    <TableCell>08/12/1994</TableCell>
                    <TableCell>05/12/1972</TableCell>
                    <TableCell>37</TableCell>
                    <TableCell>Gbangadu MCHP</TableCell>
                    <TableCell>Gvozden Boskovsky</TableCell>
                    <TableCell>Complete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell fixed left="0">
                        Inyene
                    </TableCell>
                    <TableCell>Okonkwo</TableCell>
                    <TableCell>04/01/1971</TableCell>
                    <TableCell>03/16/2000</TableCell>
                    <TableCell>70</TableCell>
                    <TableCell>Kunike Barina</TableCell>
                    <TableCell>Oscar de la Cavallería</TableCell>
                    <TableCell>Complete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell fixed left="0">
                        Amaka
                    </TableCell>
                    <TableCell>Pretorius</TableCell>
                    <TableCell>01/25/1996</TableCell>
                    <TableCell>09/15/1986</TableCell>
                    <TableCell>32</TableCell>
                    <TableCell>Bargbo</TableCell>
                    <TableCell>Alberto Raya</TableCell>
                    <TableCell>Incomplete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell fixed left="0">
                        Meti
                    </TableCell>
                    <TableCell>Abiodun</TableCell>
                    <TableCell>10/24/2010</TableCell>
                    <TableCell>07/26/1989</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>Majihun MCHP</TableCell>
                    <TableCell>Unassigned</TableCell>
                    <TableCell>Complete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell fixed left="0">
                        Eshe
                    </TableCell>
                    <TableCell>Okeke</TableCell>
                    <TableCell>01/31/1995</TableCell>
                    <TableCell>01/31/1995</TableCell>
                    <TableCell>63</TableCell>
                    <TableCell>Mambiama CHP</TableCell>
                    <TableCell>Shadrias Pearson</TableCell>
                    <TableCell>Incomplete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell fixed left="0">
                        Obi
                    </TableCell>
                    <TableCell>Okafor</TableCell>
                    <TableCell>06/07/1990</TableCell>
                    <TableCell>01/03/2006</TableCell>
                    <TableCell>28</TableCell>
                    <TableCell>Dalakuru CHP</TableCell>
                    <TableCell>Anatoliy Shcherbatykh</TableCell>
                    <TableCell>Incomplete</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableScrollBox>
)

export const FixedHeaderAndTwoColumns = () => (
    <TableScrollBox overflow="auto" width="500px" height="400px">
        <Table layout="fixed" width="1000px">
            <TableHead>
                <TableRow>
                    <TableCellHead fixed top="0" left="0" width="120px">
                        First name
                    </TableCellHead>
                    <TableCellHead fixed top="0" left="120px">
                        Last name
                    </TableCellHead>
                    <TableCellHead fixed top="0">
                        Incident date
                    </TableCellHead>
                    <TableCellHead fixed top="0">
                        Last updated
                    </TableCellHead>
                    <TableCellHead fixed top="0">
                        Age
                    </TableCellHead>
                    <TableCellHead fixed top="0">
                        Registering unit
                    </TableCellHead>
                    <TableCellHead fixed top="0">
                        Assigned user
                    </TableCellHead>
                    <TableCellHead fixed top="0">
                        Status
                    </TableCellHead>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell fixed left="0" width="120px">
                        Onyekachukwu
                    </TableCell>
                    <TableCell fixed left="120px">
                        Kariuki
                    </TableCell>
                    <TableCell>02/06/2007</TableCell>
                    <TableCell>05/25/1972</TableCell>
                    <TableCell>66</TableCell>
                    <TableCell>Jawi</TableCell>
                    <TableCell>Sofie Hubert</TableCell>
                    <TableCell>Incomplete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell fixed left="0" width="120px">
                        Kwasi
                    </TableCell>
                    <TableCell fixed left="120px">
                        Okafor
                    </TableCell>
                    <TableCell>08/11/2010</TableCell>
                    <TableCell>02/26/1991</TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>Mokassie MCHP</TableCell>
                    <TableCell>Dashonte Clarke</TableCell>
                    <TableCell>Complete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell fixed left="0" width="120px">
                        Siyabonga
                    </TableCell>
                    <TableCell fixed left="120px">
                        Abiodun
                    </TableCell>
                    <TableCell>07/21/1981</TableCell>
                    <TableCell>02/06/2007</TableCell>
                    <TableCell>98</TableCell>
                    <TableCell>Bathurst MCHP</TableCell>
                    <TableCell>Unassigned</TableCell>
                    <TableCell>Incomplete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell fixed left="0" width="120px">
                        Chiyembekezo
                    </TableCell>
                    <TableCell fixed left="120px">
                        Okeke
                    </TableCell>
                    <TableCell>01/23/1982</TableCell>
                    <TableCell>07/15/2003</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>Mayolla MCHP</TableCell>
                    <TableCell>Wan Gengxin</TableCell>
                    <TableCell>Incomplete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell fixed left="0" width="120px">
                        Mtendere
                    </TableCell>
                    <TableCell fixed left="120px">
                        Afolayan
                    </TableCell>
                    <TableCell>08/12/1994</TableCell>
                    <TableCell>05/12/1972</TableCell>
                    <TableCell>37</TableCell>
                    <TableCell>Gbangadu MCHP</TableCell>
                    <TableCell>Gvozden Boskovsky</TableCell>
                    <TableCell>Complete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell fixed left="0" width="120px">
                        Inyene
                    </TableCell>
                    <TableCell fixed left="120px">
                        Okonkwo
                    </TableCell>
                    <TableCell>04/01/1971</TableCell>
                    <TableCell>03/16/2000</TableCell>
                    <TableCell>70</TableCell>
                    <TableCell>Kunike Barina</TableCell>
                    <TableCell>Oscar de la Cavallería</TableCell>
                    <TableCell>Complete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell fixed left="0" width="120px">
                        Amaka
                    </TableCell>
                    <TableCell fixed left="120px">
                        Pretorius
                    </TableCell>
                    <TableCell>01/25/1996</TableCell>
                    <TableCell>09/15/1986</TableCell>
                    <TableCell>32</TableCell>
                    <TableCell>Bargbo</TableCell>
                    <TableCell>Alberto Raya</TableCell>
                    <TableCell>Incomplete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell fixed left="0" width="120px">
                        Meti
                    </TableCell>
                    <TableCell fixed left="120px">
                        Abiodun
                    </TableCell>
                    <TableCell>10/24/2010</TableCell>
                    <TableCell>07/26/1989</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>Majihun MCHP</TableCell>
                    <TableCell>Unassigned</TableCell>
                    <TableCell>Complete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell fixed left="0" width="120px">
                        Eshe
                    </TableCell>
                    <TableCell fixed left="120px">
                        Okeke
                    </TableCell>
                    <TableCell>01/31/1995</TableCell>
                    <TableCell>01/31/1995</TableCell>
                    <TableCell>63</TableCell>
                    <TableCell>Mambiama CHP</TableCell>
                    <TableCell>Shadrias Pearson</TableCell>
                    <TableCell>Incomplete</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell fixed left="0" width="120px">
                        Obi
                    </TableCell>
                    <TableCell fixed left="120px">
                        Okafor
                    </TableCell>
                    <TableCell>06/07/1990</TableCell>
                    <TableCell>01/03/2006</TableCell>
                    <TableCell>28</TableCell>
                    <TableCell>Dalakuru CHP</TableCell>
                    <TableCell>Anatoliy Shcherbatykh</TableCell>
                    <TableCell>Incomplete</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableScrollBox>
)

export const ScrollingTableWithToolbars = () => (
    <Box width="500px" height="400px">
        <TableToolbar>
            <p>Content</p>
        </TableToolbar>
        <TableScrollBox overflow="auto" width="500px" height="400px">
            <Table layout="fixed" width="1000px">
                <TableHead>
                    <TableRow>
                        <TableCellHead fixed top="0" left="0" width="120px">
                            First name
                        </TableCellHead>
                        <TableCellHead fixed top="0" left="120px">
                            Last name
                        </TableCellHead>
                        <TableCellHead fixed top="0">
                            Incident date
                        </TableCellHead>
                        <TableCellHead fixed top="0">
                            Last updated
                        </TableCellHead>
                        <TableCellHead fixed top="0">
                            Age
                        </TableCellHead>
                        <TableCellHead fixed top="0">
                            Registering unit
                        </TableCellHead>
                        <TableCellHead fixed top="0">
                            Assigned user
                        </TableCellHead>
                        <TableCellHead fixed top="0">
                            Status
                        </TableCellHead>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell fixed left="0" width="120px">
                            Onyekachukwu
                        </TableCell>
                        <TableCell fixed left="120px">
                            Kariuki
                        </TableCell>
                        <TableCell>02/06/2007</TableCell>
                        <TableCell>05/25/1972</TableCell>
                        <TableCell>66</TableCell>
                        <TableCell>Jawi</TableCell>
                        <TableCell>Sofie Hubert</TableCell>
                        <TableCell>Incomplete</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell fixed left="0" width="120px">
                            Kwasi
                        </TableCell>
                        <TableCell fixed left="120px">
                            Okafor
                        </TableCell>
                        <TableCell>08/11/2010</TableCell>
                        <TableCell>02/26/1991</TableCell>
                        <TableCell>38</TableCell>
                        <TableCell>Mokassie MCHP</TableCell>
                        <TableCell>Dashonte Clarke</TableCell>
                        <TableCell>Complete</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell fixed left="0" width="120px">
                            Siyabonga
                        </TableCell>
                        <TableCell fixed left="120px">
                            Abiodun
                        </TableCell>
                        <TableCell>07/21/1981</TableCell>
                        <TableCell>02/06/2007</TableCell>
                        <TableCell>98</TableCell>
                        <TableCell>Bathurst MCHP</TableCell>
                        <TableCell>Unassigned</TableCell>
                        <TableCell>Incomplete</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell fixed left="0" width="120px">
                            Chiyembekezo
                        </TableCell>
                        <TableCell fixed left="120px">
                            Okeke
                        </TableCell>
                        <TableCell>01/23/1982</TableCell>
                        <TableCell>07/15/2003</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>Mayolla MCHP</TableCell>
                        <TableCell>Wan Gengxin</TableCell>
                        <TableCell>Incomplete</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell fixed left="0" width="120px">
                            Mtendere
                        </TableCell>
                        <TableCell fixed left="120px">
                            Afolayan
                        </TableCell>
                        <TableCell>08/12/1994</TableCell>
                        <TableCell>05/12/1972</TableCell>
                        <TableCell>37</TableCell>
                        <TableCell>Gbangadu MCHP</TableCell>
                        <TableCell>Gvozden Boskovsky</TableCell>
                        <TableCell>Complete</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell fixed left="0" width="120px">
                            Inyene
                        </TableCell>
                        <TableCell fixed left="120px">
                            Okonkwo
                        </TableCell>
                        <TableCell>04/01/1971</TableCell>
                        <TableCell>03/16/2000</TableCell>
                        <TableCell>70</TableCell>
                        <TableCell>Kunike Barina</TableCell>
                        <TableCell>Oscar de la Cavallería</TableCell>
                        <TableCell>Complete</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell fixed left="0" width="120px">
                            Amaka
                        </TableCell>
                        <TableCell fixed left="120px">
                            Pretorius
                        </TableCell>
                        <TableCell>01/25/1996</TableCell>
                        <TableCell>09/15/1986</TableCell>
                        <TableCell>32</TableCell>
                        <TableCell>Bargbo</TableCell>
                        <TableCell>Alberto Raya</TableCell>
                        <TableCell>Incomplete</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell fixed left="0" width="120px">
                            Meti
                        </TableCell>
                        <TableCell fixed left="120px">
                            Abiodun
                        </TableCell>
                        <TableCell>10/24/2010</TableCell>
                        <TableCell>07/26/1989</TableCell>
                        <TableCell>8</TableCell>
                        <TableCell>Majihun MCHP</TableCell>
                        <TableCell>Unassigned</TableCell>
                        <TableCell>Complete</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell fixed left="0" width="120px">
                            Eshe
                        </TableCell>
                        <TableCell fixed left="120px">
                            Okeke
                        </TableCell>
                        <TableCell>01/31/1995</TableCell>
                        <TableCell>01/31/1995</TableCell>
                        <TableCell>63</TableCell>
                        <TableCell>Mambiama CHP</TableCell>
                        <TableCell>Shadrias Pearson</TableCell>
                        <TableCell>Incomplete</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell fixed left="0" width="120px">
                            Obi
                        </TableCell>
                        <TableCell fixed left="120px">
                            Okafor
                        </TableCell>
                        <TableCell>06/07/1990</TableCell>
                        <TableCell>01/03/2006</TableCell>
                        <TableCell>28</TableCell>
                        <TableCell>Dalakuru CHP</TableCell>
                        <TableCell>Anatoliy Shcherbatykh</TableCell>
                        <TableCell>Incomplete</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableScrollBox>
        <TableToolbar position="bottom">
            <p>Content (bottom)</p>
        </TableToolbar>
    </Box>
)

export const ColumnHeaderSorting = () => {
    const [sortInstructions, setSortInstructions] = useState({
        firstName: 'default',
        lastName: 'default',
        incidentDate: 'default',
        lastUpdated: 'default',
    })
    const onSortIconClick = ({ name, direction }) => {
        setSortInstructions({
            ...sortInstructions,
            [name]: direction,
        })
    }
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCellHead
                        onSortIconClick={onSortIconClick}
                        sortDirection={sortInstructions.firstName}
                        name={'firstName'}
                    >
                        First name
                    </TableCellHead>
                    <TableCellHead
                        onSortIconClick={onSortIconClick}
                        sortDirection={sortInstructions.lastName}
                        name={'lastName'}
                    >
                        Last name
                    </TableCellHead>
                    <TableCellHead
                        onSortIconClick={onSortIconClick}
                        sortDirection={sortInstructions.incidentDate}
                        name={'incidentDate'}
                    >
                        Incident date
                    </TableCellHead>
                    <TableCellHead
                        onSortIconClick={onSortIconClick}
                        sortDirection={sortInstructions.lastUpdated}
                        name={'lastUpdated'}
                    >
                        Last updated
                    </TableCellHead>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Onyekachukwu</TableCell>
                    <TableCell>Kariuki</TableCell>
                    <TableCell>02/06/2007</TableCell>
                    <TableCell>05/25/1972</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Kwasi</TableCell>
                    <TableCell>Okafor</TableCell>
                    <TableCell>08/11/2010</TableCell>
                    <TableCell>02/26/1991</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Siyabonga</TableCell>
                    <TableCell>Abiodun</TableCell>
                    <TableCell>07/21/1981</TableCell>
                    <TableCell>02/06/2007</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export const InlineFiltering = () => {
    const [visibility, setVisibility] = useState({
        firstName: false,
        lastName: false,
        incidentDate: false,
        lastUpdated: false,
    })
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        incidentDate: '',
        lastUpdated: '',
    })
    const onFilterIconClick = ({ name, show }) => {
        setVisibility({
            ...visibility,
            [name]: show,
        })
    }
    const onFilterInputChange = ({ name, value }) => {
        setValues({
            ...values,
            [name]: value,
        })
    }
    return (
        <Table layout="fixed">
            <TableHead>
                <TableRow>
                    <TableCellHead
                        onFilterIconClick={onFilterIconClick}
                        name="firstName"
                        showFilter={visibility.firstName}
                        filter={
                            <Input
                                dense
                                onChange={onFilterInputChange}
                                name="firstName"
                                value={values.firstName}
                            />
                        }
                    >
                        First name
                    </TableCellHead>
                    <TableCellHead
                        onFilterIconClick={onFilterIconClick}
                        name="lastName"
                        showFilter={visibility.lastName}
                        filter={
                            <Input
                                dense
                                onChange={onFilterInputChange}
                                name="lastName"
                                value={values.lastName}
                            />
                        }
                    >
                        Last name
                    </TableCellHead>
                    <TableCellHead
                        onFilterIconClick={onFilterIconClick}
                        name="incidentDate"
                        showFilter={visibility.incidentDate}
                        filter={
                            <Input
                                dense
                                onChange={onFilterInputChange}
                                name="incidentDate"
                                value={values.incidentDate}
                            />
                        }
                    >
                        Incident date
                    </TableCellHead>
                    <TableCellHead
                        onFilterIconClick={onFilterIconClick}
                        name="lastUpdated"
                        showFilter={visibility.lastUpdated}
                        filter={
                            <Input
                                dense
                                onChange={onFilterInputChange}
                                name="lastUpdated"
                                value={values.lastUpdated}
                            />
                        }
                    >
                        Last updated
                    </TableCellHead>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Onyekachukwu</TableCell>
                    <TableCell>Kariuki</TableCell>
                    <TableCell>02/06/2007</TableCell>
                    <TableCell>05/25/1972</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Kwasi</TableCell>
                    <TableCell>Okafor</TableCell>
                    <TableCell>08/11/2010</TableCell>
                    <TableCell>02/26/1991</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Siyabonga</TableCell>
                    <TableCell>Abiodun</TableCell>
                    <TableCell>07/21/1981</TableCell>
                    <TableCell>02/06/2007</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
