import React from 'react'
import { Button } from '@dhis2/ui-button'
import { Table } from './table.js'
import { TableBody } from './table-body.js'
import { TableCell } from './table-cell.js'
import { TableCellHead } from './table-cell-head.js'
import { TableFoot } from './table-foot.js'
import { TableHead } from './table-head.js'
import { TableRow } from './table-row.js'
import { TableRowHead } from './table-row-head.js'

const subtitle = 'Used to display information in a standard, effective way.'

const description = `
Should be used with multiple Table-related child components - see the table and examples below.

\`\`\`js
import {
    Table,
    TableBody,
    TableCell,
    TableCellHead,
    TableFoot,
    TableHead,
    TableRow,
    TableRowHead,
} from '@dhis2/ui'
\`\`\`
`

const TableFooterButton = () => (
    <div>
        <Button primary>Table footer button</Button>

        <style jsx>{`
            div {
                text-align: right;
                padding: 16px 0;
            }
        `}</style>
    </div>
)

const TableButton = () => <Button primary>Table button</Button>

export default {
    title: 'Data Display/Table',
    component: Table,
    // Add subcomponents to the args table
    subcomponents: {
        TableHead,
        TableBody,
        TableFoot,
        TableRowHead,
        TableCellHead,
        TableRow,
        TableCell,
    },
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
}

export const StaticLayout = args => (
    <Table {...args}>
        <TableHead>
            <TableRowHead>
                <TableCellHead>First name</TableCellHead>
                <TableCellHead>Last name</TableCellHead>
                <TableCellHead>Incident date</TableCellHead>
                <TableCellHead>Last updated</TableCellHead>
                <TableCellHead>Age</TableCellHead>
                <TableCellHead>Registering unit</TableCellHead>
                <TableCellHead>Assigned user</TableCellHead>
                <TableCellHead>Status</TableCellHead>
            </TableRowHead>
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
        <TableFoot>
            <TableRow>
                <TableCell colSpan="8">
                    <TableFooterButton />
                </TableCell>
            </TableRow>
        </TableFoot>
    </Table>
)

export const OneDenseCell = args => (
    <Table {...args}>
        <TableHead>
            <TableRowHead>
                <TableCellHead>First name</TableCellHead>
                <TableCellHead>Last name</TableCellHead>
                <TableCellHead>Incident date</TableCellHead>
                <TableCellHead>Last updated</TableCellHead>
                <TableCellHead>Age</TableCellHead>
                <TableCellHead>Registering unit</TableCellHead>
                <TableCellHead>Assigned user</TableCellHead>
                <TableCellHead>Button</TableCellHead>
            </TableRowHead>
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
                <TableCell dense>
                    <TableButton />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Kwasi</TableCell>
                <TableCell>Okafor</TableCell>
                <TableCell>08/11/2010</TableCell>
                <TableCell>02/26/1991</TableCell>
                <TableCell>38</TableCell>
                <TableCell>Mokassie MCHP</TableCell>
                <TableCell>Dashonte Clarke</TableCell>
                <TableCell dense>
                    <TableButton />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Siyabonga</TableCell>
                <TableCell>Abiodun</TableCell>
                <TableCell>07/21/1981</TableCell>
                <TableCell>02/06/2007</TableCell>
                <TableCell>98</TableCell>
                <TableCell>Bathurst MCHP</TableCell>
                <TableCell>Unassigned</TableCell>
                <TableCell dense>
                    <TableButton />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Chiyembekezo</TableCell>
                <TableCell>Okeke</TableCell>
                <TableCell>01/23/1982</TableCell>
                <TableCell>07/15/2003</TableCell>
                <TableCell>2</TableCell>
                <TableCell>Mayolla MCHP</TableCell>
                <TableCell>Wan Gengxin</TableCell>
                <TableCell dense>
                    <TableButton />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Mtendere</TableCell>
                <TableCell>Afolayan</TableCell>
                <TableCell>08/12/1994</TableCell>
                <TableCell>05/12/1972</TableCell>
                <TableCell>37</TableCell>
                <TableCell>Gbangadu MCHP</TableCell>
                <TableCell>Gvozden Boskovsky</TableCell>
                <TableCell dense>
                    <TableButton />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Inyene</TableCell>
                <TableCell>Okonkwo</TableCell>
                <TableCell>04/01/1971</TableCell>
                <TableCell>03/16/2000</TableCell>
                <TableCell>70</TableCell>
                <TableCell>Kunike Barina</TableCell>
                <TableCell>Oscar de la Cavallería</TableCell>
                <TableCell dense>
                    <TableButton />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Amaka</TableCell>
                <TableCell>Pretorius</TableCell>
                <TableCell>01/25/1996</TableCell>
                <TableCell>09/15/1986</TableCell>
                <TableCell>32</TableCell>
                <TableCell>Bargbo</TableCell>
                <TableCell>Alberto Raya</TableCell>
                <TableCell dense>
                    <TableButton />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Meti</TableCell>
                <TableCell>Abiodun</TableCell>
                <TableCell>10/24/2010</TableCell>
                <TableCell>07/26/1989</TableCell>
                <TableCell>8</TableCell>
                <TableCell>Majihun MCHP</TableCell>
                <TableCell>Unassigned</TableCell>
                <TableCell dense>
                    <TableButton />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Eshe</TableCell>
                <TableCell>Okeke</TableCell>
                <TableCell>01/31/1995</TableCell>
                <TableCell>01/31/1995</TableCell>
                <TableCell>63</TableCell>
                <TableCell>Mambiama CHP</TableCell>
                <TableCell>Shadrias Pearson</TableCell>
                <TableCell dense>
                    <TableButton />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Obi</TableCell>
                <TableCell>Okafor</TableCell>
                <TableCell>06/07/1990</TableCell>
                <TableCell>01/03/2006</TableCell>
                <TableCell>28</TableCell>
                <TableCell>Dalakuru CHP</TableCell>
                <TableCell>Anatoliy Shcherbatykh</TableCell>
                <TableCell dense>
                    <TableButton />
                </TableCell>
            </TableRow>
        </TableBody>
        <TableFoot>
            <TableRow>
                <TableCell colSpan="8">
                    <TableFooterButton />
                </TableCell>
            </TableRow>
        </TableFoot>
    </Table>
)

export const NoAlternatingBgColor = args => (
    <Table {...args}>
        <TableHead>
            <TableRowHead>
                <TableCellHead>Name</TableCellHead>
                <TableCellHead colSpan="7" />
            </TableRowHead>
            <TableRowHead>
                <TableCellHead>First name</TableCellHead>
                <TableCellHead>Last name</TableCellHead>
                <TableCellHead>Incident date</TableCellHead>
                <TableCellHead>Last updated</TableCellHead>
                <TableCellHead>Age</TableCellHead>
                <TableCellHead>Registering unit</TableCellHead>
                <TableCellHead>Assigned user</TableCellHead>
                <TableCellHead>Status</TableCellHead>
            </TableRowHead>
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
        <TableFoot>
            <TableRow>
                <TableCell colSpan="8">
                    <TableFooterButton />
                </TableCell>
            </TableRow>
        </TableFoot>
    </Table>
)
NoAlternatingBgColor.args = { suppressZebraStriping: true }

export const CustomAlternatingBgColor = () => (
    <Table>
        <TableHead>
            <TableRowHead>
                <TableCellHead>Name</TableCellHead>
                <TableCellHead colSpan="7" />
            </TableRowHead>
            <TableRowHead>
                <TableCellHead>First name</TableCellHead>
                <TableCellHead>Last name</TableCellHead>
                <TableCellHead>Incident date</TableCellHead>
                <TableCellHead>Last updated</TableCellHead>
                <TableCellHead>Age</TableCellHead>
                <TableCellHead>Registering unit</TableCellHead>
                <TableCellHead>Assigned user</TableCellHead>
                <TableCellHead>Status</TableCellHead>
            </TableRowHead>
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
            <TableRow suppressZebraStriping>
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
        <TableFoot>
            <TableRow>
                <TableCell colSpan="8">
                    <TableFooterButton />
                </TableCell>
            </TableRow>
        </TableFoot>
    </Table>
)
