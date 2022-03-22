import { Button } from '@dhis2-ui/button'
import React from 'react'
import { StackedTableBody } from './stacked-table-body.js'
import { StackedTableCellHead } from './stacked-table-cell-head.js'
import { StackedTableCell } from './stacked-table-cell.js'
import { StackedTableFoot } from './stacked-table-foot.js'
import { StackedTableHead } from './stacked-table-head.js'
import { StackedTableRowHead } from './stacked-table-row-head.js'
import { StackedTableRow } from './stacked-table-row.js'
import { StackedTable } from './stacked-table.js'

const description = `
Expresses tabular data such that each 'row' becomes a table section with the 'column' header in each cell. Multiple rows become multiple sections.

Compose with StackedTable child components, as seen in the examples.

\`\`\`js
import {
    StackedTable,
    StackedTableBody,
    StackedTableCell,
    StackedTableCellHead,
    StackedTableFoot,
    StackedTableHead,
    StackedTableRow,
    StackedTableRowHead,
} from 'dhis2/ui'
\`\`\`
`

const CustomCell = (props) => (
    <td>
        Received props:
        <code>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </code>
    </td>
)

export default {
    title: 'Stacked Table',
    component: StackedTable,
    parameters: { docs: { description: { component: description } } },
}

export const Default = (args) => (
    <StackedTable {...args}>
        <StackedTableHead>
            <StackedTableRowHead>
                <StackedTableCellHead>First name</StackedTableCellHead>
                <StackedTableCellHead>Last name</StackedTableCellHead>
                <StackedTableCellHead>Incident date</StackedTableCellHead>
                <StackedTableCellHead>Last updated</StackedTableCellHead>
                <StackedTableCellHead>Age</StackedTableCellHead>
                <StackedTableCellHead>Registering unit</StackedTableCellHead>
                <StackedTableCellHead>Assigned user</StackedTableCellHead>
                <StackedTableCellHead>Status</StackedTableCellHead>
            </StackedTableRowHead>
        </StackedTableHead>
        <StackedTableBody>
            <StackedTableRow>
                <StackedTableCell>Onyekachukwu</StackedTableCell>
                <StackedTableCell>Kariuki</StackedTableCell>
                <StackedTableCell>02/06/2007</StackedTableCell>
                <StackedTableCell>05/25/1972</StackedTableCell>
                <StackedTableCell>66</StackedTableCell>
                <StackedTableCell>Jawi</StackedTableCell>
                <StackedTableCell>Sofie Hubert</StackedTableCell>
                <StackedTableCell>Incomplete</StackedTableCell>
            </StackedTableRow>
        </StackedTableBody>
        <StackedTableFoot>
            <StackedTableRow>
                <StackedTableCell colSpan="8" hideTitle>
                    <Button primary>StackedTable footer button</Button>
                </StackedTableCell>
            </StackedTableRow>
        </StackedTableFoot>
    </StackedTable>
)

export const HiddenLabel = (args) => (
    <StackedTable {...args}>
        <StackedTableHead>
            <StackedTableRowHead>
                <StackedTableCellHead>First name</StackedTableCellHead>
                <StackedTableCellHead>Last name</StackedTableCellHead>
                <StackedTableCellHead>Incident date</StackedTableCellHead>
                <StackedTableCellHead>Last updated</StackedTableCellHead>
                <StackedTableCellHead>Age</StackedTableCellHead>
                <StackedTableCellHead>Registering unit</StackedTableCellHead>
                <StackedTableCellHead>Assigned user</StackedTableCellHead>
                <StackedTableCellHead />
            </StackedTableRowHead>
        </StackedTableHead>
        <StackedTableBody>
            <StackedTableRow>
                <StackedTableCell>Onyekachukwu</StackedTableCell>
                <StackedTableCell>Kariuki</StackedTableCell>
                <StackedTableCell>02/06/2007</StackedTableCell>
                <StackedTableCell>05/25/1972</StackedTableCell>
                <StackedTableCell>66</StackedTableCell>
                <StackedTableCell>Jawi</StackedTableCell>
                <StackedTableCell>Sofie Hubert</StackedTableCell>
                <StackedTableCell>
                    <Button
                        primary
                        onClick={() => alert('something should happen now')}
                    >
                        A row action
                    </Button>
                </StackedTableCell>
            </StackedTableRow>
        </StackedTableBody>
    </StackedTable>
)

export const HiddenLabelInCell = (args) => (
    <StackedTable {...args}>
        <StackedTableHead>
            <StackedTableRowHead>
                <StackedTableCellHead>First name</StackedTableCellHead>
                <StackedTableCellHead>Last name</StackedTableCellHead>
                <StackedTableCellHead>Incident date</StackedTableCellHead>
                <StackedTableCellHead>Last updated</StackedTableCellHead>
                <StackedTableCellHead>Age</StackedTableCellHead>
                <StackedTableCellHead>Registering unit</StackedTableCellHead>
                <StackedTableCellHead>Assigned user</StackedTableCellHead>
                <StackedTableCellHead>Status</StackedTableCellHead>
            </StackedTableRowHead>
        </StackedTableHead>
        <StackedTableBody>
            <StackedTableRow>
                <StackedTableCell>Onyekachukwu</StackedTableCell>
                <StackedTableCell>Kariuki</StackedTableCell>
                <StackedTableCell>02/06/2007</StackedTableCell>
                <StackedTableCell>05/25/1972</StackedTableCell>
                <StackedTableCell>66</StackedTableCell>
                <StackedTableCell>Jawi</StackedTableCell>
                <StackedTableCell>Sofie Hubert</StackedTableCell>
                <StackedTableCell hideTitle>
                    <Button
                        primary
                        onClick={() => alert('something should happen now')}
                    >
                        A row action
                    </Button>
                </StackedTableCell>
            </StackedTableRow>
            <StackedTableRow>
                <StackedTableCell>Onyekachukwu</StackedTableCell>
                <StackedTableCell>Kariuki</StackedTableCell>
                <StackedTableCell>02/06/2007</StackedTableCell>
                <StackedTableCell>05/25/1972</StackedTableCell>
                <StackedTableCell>66</StackedTableCell>
                <StackedTableCell>Jawi</StackedTableCell>
                <StackedTableCell>Sofie Hubert</StackedTableCell>
                <StackedTableCell>Incomplete</StackedTableCell>
            </StackedTableRow>
        </StackedTableBody>
    </StackedTable>
)

export const ColspanInHeader = (args) => (
    <StackedTable {...args}>
        <StackedTableHead>
            <StackedTableRowHead>
                <StackedTableCellHead colSpan="2">Name</StackedTableCellHead>
                <StackedTableCellHead>Incident date</StackedTableCellHead>
                <StackedTableCellHead>Last updated</StackedTableCellHead>
                <StackedTableCellHead>Age</StackedTableCellHead>
                <StackedTableCellHead>Registering unit</StackedTableCellHead>
                <StackedTableCellHead>Assigned user</StackedTableCellHead>
                <StackedTableCellHead>Status</StackedTableCellHead>
            </StackedTableRowHead>
        </StackedTableHead>
        <StackedTableBody>
            <StackedTableRow>
                <StackedTableCell>Onyekachukwu</StackedTableCell>
                <StackedTableCell>Kariuki</StackedTableCell>
                <StackedTableCell>02/06/2007</StackedTableCell>
                <StackedTableCell>05/25/1972</StackedTableCell>
                <StackedTableCell>66</StackedTableCell>
                <StackedTableCell>Jawi</StackedTableCell>
                <StackedTableCell>Sofie Hubert</StackedTableCell>
                <StackedTableCell>Incomplete</StackedTableCell>
            </StackedTableRow>
        </StackedTableBody>
    </StackedTable>
)

export const ColspanInBody = (args) => (
    <StackedTable {...args}>
        <StackedTableHead>
            <StackedTableRowHead>
                <StackedTableCellHead>First name</StackedTableCellHead>
                <StackedTableCellHead>Last name</StackedTableCellHead>
                <StackedTableCellHead>Incident date</StackedTableCellHead>
                <StackedTableCellHead>Last updated</StackedTableCellHead>
                <StackedTableCellHead>Age</StackedTableCellHead>
                <StackedTableCellHead>Registering unit</StackedTableCellHead>
                <StackedTableCellHead>Assigned user</StackedTableCellHead>
                <StackedTableCellHead>Status</StackedTableCellHead>
            </StackedTableRowHead>
        </StackedTableHead>
        <StackedTableBody>
            <StackedTableRow>
                <StackedTableCell>Onyekachukwu</StackedTableCell>
                <StackedTableCell>Kariuki</StackedTableCell>
                <StackedTableCell colSpan="2">
                    {
                        "Colspan 2 here. Next cell doesn't get header 'Last updated'."
                    }
                </StackedTableCell>
                <StackedTableCell>66</StackedTableCell>
                <StackedTableCell>Jawi</StackedTableCell>
                <StackedTableCell>Sofie Hubert</StackedTableCell>
                <StackedTableCell>Incomplete</StackedTableCell>
            </StackedTableRow>
            <StackedTableRow>
                <StackedTableCell>Onyekachukwu</StackedTableCell>
                <StackedTableCell>Kariuki</StackedTableCell>
                <StackedTableCell>02/06/2007</StackedTableCell>
                <StackedTableCell>05/25/1972</StackedTableCell>
                <StackedTableCell>66</StackedTableCell>
                <StackedTableCell>Jawi</StackedTableCell>
                <StackedTableCell>Sofie Hubert</StackedTableCell>
                <StackedTableCell>Incomplete</StackedTableCell>
            </StackedTableRow>
        </StackedTableBody>
    </StackedTable>
)

export const MultipleHeaderRows = (args) => (
    <StackedTable {...args}>
        <StackedTableHead>
            <StackedTableRowHead>
                <StackedTableCellHead colSpan="2">Name</StackedTableCellHead>
                <StackedTableCellHead>Incident date</StackedTableCellHead>
                <StackedTableCellHead>Last updated</StackedTableCellHead>
                <StackedTableCellHead>Age</StackedTableCellHead>
                <StackedTableCellHead>Registering unit</StackedTableCellHead>
                <StackedTableCellHead>Assigned user</StackedTableCellHead>
                <StackedTableCellHead>Status</StackedTableCellHead>
            </StackedTableRowHead>
            <StackedTableRowHead>
                <StackedTableCellHead>First name</StackedTableCellHead>
                <StackedTableCellHead>Last name</StackedTableCellHead>
                <StackedTableCellHead colSpan="6"></StackedTableCellHead>
            </StackedTableRowHead>
        </StackedTableHead>
        <StackedTableBody>
            <StackedTableRow>
                <StackedTableCell>Onyekachukwu</StackedTableCell>
                <StackedTableCell>Kariuki</StackedTableCell>
                <StackedTableCell>02/06/2007</StackedTableCell>
                <StackedTableCell>05/25/1972</StackedTableCell>
                <StackedTableCell>66</StackedTableCell>
                <StackedTableCell>Jawi</StackedTableCell>
                <StackedTableCell>Sofie Hubert</StackedTableCell>
                <StackedTableCell>Incomplete</StackedTableCell>
            </StackedTableRow>
        </StackedTableBody>
    </StackedTable>
)

export const LongTitle = (args) => (
    <StackedTable {...args}>
        <StackedTableHead>
            <StackedTableRowHead>
                <StackedTableCellHead>
                    This title is so long, it should be displayed in multiple
                    lines. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet.
                </StackedTableCellHead>
            </StackedTableRowHead>
        </StackedTableHead>
        <StackedTableBody>
            <StackedTableRow>
                <StackedTableCell>Onyekachukwu</StackedTableCell>
            </StackedTableRow>
        </StackedTableBody>
    </StackedTable>
)

export const _CustomCell = (args) => (
    <StackedTable {...args}>
        <StackedTableHead>
            <StackedTableRowHead>
                <StackedTableCellHead colSpan="2">Name</StackedTableCellHead>
                <StackedTableCellHead>Incident date</StackedTableCellHead>
            </StackedTableRowHead>
        </StackedTableHead>
        <StackedTableBody>
            <StackedTableRow>
                <CustomCell>Onyekachukwu</CustomCell>
                <CustomCell>Kariuki</CustomCell>
                <CustomCell>02/06/2007</CustomCell>
            </StackedTableRow>
        </StackedTableBody>
    </StackedTable>
)

export const CustomCellTitle = (args) => (
    <StackedTable {...args}>
        <StackedTableHead>
            <StackedTableRowHead>
                <StackedTableCellHead colSpan="2">Name</StackedTableCellHead>
                <StackedTableCellHead>Incident date</StackedTableCellHead>
            </StackedTableRowHead>
        </StackedTableHead>
        <StackedTableBody>
            <StackedTableRow>
                <StackedTableCell>Onyekachukwu</StackedTableCell>
                <StackedTableCell title="Custom title">
                    Kariuki
                </StackedTableCell>
                <StackedTableCell>02/06/2007</StackedTableCell>
            </StackedTableRow>
        </StackedTableBody>
    </StackedTable>
)

export const LargerTable = (args) => (
    <StackedTable {...args}>
        <StackedTableHead>
            <StackedTableRowHead>
                <StackedTableCellHead>First name</StackedTableCellHead>
                <StackedTableCellHead>Last name</StackedTableCellHead>
                <StackedTableCellHead>Incident date</StackedTableCellHead>
                <StackedTableCellHead>Last updated</StackedTableCellHead>
                <StackedTableCellHead>Age</StackedTableCellHead>
                <StackedTableCellHead>Registering unit</StackedTableCellHead>
                <StackedTableCellHead>Assigned user</StackedTableCellHead>
                <StackedTableCellHead>Status</StackedTableCellHead>
            </StackedTableRowHead>
        </StackedTableHead>
        <StackedTableBody>
            <StackedTableRow>
                <StackedTableCell>Onyekachukwu</StackedTableCell>
                <StackedTableCell>Kariuki</StackedTableCell>
                <StackedTableCell>02/06/2007</StackedTableCell>
                <StackedTableCell>05/25/1972</StackedTableCell>
                <StackedTableCell>66</StackedTableCell>
                <StackedTableCell>Jawi</StackedTableCell>
                <StackedTableCell>Sofie Hubert</StackedTableCell>
                <StackedTableCell>Incomplete</StackedTableCell>
            </StackedTableRow>
            <StackedTableRow>
                <StackedTableCell>Kwasi</StackedTableCell>
                <StackedTableCell>Okafor</StackedTableCell>
                <StackedTableCell>08/11/2010</StackedTableCell>
                <StackedTableCell>02/26/1991</StackedTableCell>
                <StackedTableCell>38</StackedTableCell>
                <StackedTableCell>Mokassie MCHP</StackedTableCell>
                <StackedTableCell>Dashonte Clarke</StackedTableCell>
                <StackedTableCell>Complete</StackedTableCell>
            </StackedTableRow>
            <StackedTableRow>
                <StackedTableCell>Siyabonga</StackedTableCell>
                <StackedTableCell>Abiodun</StackedTableCell>
                <StackedTableCell>07/21/1981</StackedTableCell>
                <StackedTableCell>02/06/2007</StackedTableCell>
                <StackedTableCell>98</StackedTableCell>
                <StackedTableCell>Bathurst MCHP</StackedTableCell>
                <StackedTableCell>Unassigned</StackedTableCell>
                <StackedTableCell>Incomplete</StackedTableCell>
            </StackedTableRow>
            <StackedTableRow>
                <StackedTableCell>Chiyembekezo</StackedTableCell>
                <StackedTableCell>Okeke</StackedTableCell>
                <StackedTableCell>01/23/1982</StackedTableCell>
                <StackedTableCell>07/15/2003</StackedTableCell>
                <StackedTableCell>2</StackedTableCell>
                <StackedTableCell>Mayolla MCHP</StackedTableCell>
                <StackedTableCell>Wan Gengxin</StackedTableCell>
                <StackedTableCell>Incomplete</StackedTableCell>
            </StackedTableRow>
            <StackedTableRow>
                <StackedTableCell>Mtendere</StackedTableCell>
                <StackedTableCell>Afolayan</StackedTableCell>
                <StackedTableCell>08/12/1994</StackedTableCell>
                <StackedTableCell>05/12/1972</StackedTableCell>
                <StackedTableCell>37</StackedTableCell>
                <StackedTableCell>Gbangadu MCHP</StackedTableCell>
                <StackedTableCell>Gvozden Boskovsky</StackedTableCell>
                <StackedTableCell>Complete</StackedTableCell>
            </StackedTableRow>
            <StackedTableRow>
                <StackedTableCell>Inyene</StackedTableCell>
                <StackedTableCell>Okonkwo</StackedTableCell>
                <StackedTableCell>04/01/1971</StackedTableCell>
                <StackedTableCell>03/16/2000</StackedTableCell>
                <StackedTableCell>70</StackedTableCell>
                <StackedTableCell>Kunike Barina</StackedTableCell>
                <StackedTableCell>Oscar de la Cavallería</StackedTableCell>
                <StackedTableCell>Complete</StackedTableCell>
            </StackedTableRow>
            <StackedTableRow>
                <StackedTableCell>Amaka</StackedTableCell>
                <StackedTableCell>Pretorius</StackedTableCell>
                <StackedTableCell>01/25/1996</StackedTableCell>
                <StackedTableCell>09/15/1986</StackedTableCell>
                <StackedTableCell>32</StackedTableCell>
                <StackedTableCell>Bargbo</StackedTableCell>
                <StackedTableCell>Alberto Raya</StackedTableCell>
                <StackedTableCell>Incomplete</StackedTableCell>
            </StackedTableRow>
            <StackedTableRow>
                <StackedTableCell>Meti</StackedTableCell>
                <StackedTableCell>Abiodun</StackedTableCell>
                <StackedTableCell>10/24/2010</StackedTableCell>
                <StackedTableCell>07/26/1989</StackedTableCell>
                <StackedTableCell>8</StackedTableCell>
                <StackedTableCell>Majihun MCHP</StackedTableCell>
                <StackedTableCell>Unassigned</StackedTableCell>
                <StackedTableCell>Complete</StackedTableCell>
            </StackedTableRow>
            <StackedTableRow>
                <StackedTableCell>Eshe</StackedTableCell>
                <StackedTableCell>Okeke</StackedTableCell>
                <StackedTableCell>01/31/1995</StackedTableCell>
                <StackedTableCell>01/31/1995</StackedTableCell>
                <StackedTableCell>63</StackedTableCell>
                <StackedTableCell>Mambiama CHP</StackedTableCell>
                <StackedTableCell>Shadrias Pearson</StackedTableCell>
                <StackedTableCell>Incomplete</StackedTableCell>
            </StackedTableRow>
            <StackedTableRow>
                <StackedTableCell>Obi</StackedTableCell>
                <StackedTableCell>Okafor</StackedTableCell>
                <StackedTableCell>06/07/1990</StackedTableCell>
                <StackedTableCell>01/03/2006</StackedTableCell>
                <StackedTableCell>28</StackedTableCell>
                <StackedTableCell>Dalakuru CHP</StackedTableCell>
                <StackedTableCell>Anatoliy Shcherbatykh</StackedTableCell>
                <StackedTableCell>Incomplete</StackedTableCell>
            </StackedTableRow>
        </StackedTableBody>
        <StackedTableFoot>
            <StackedTableRow>
                <StackedTableCell colSpan="8" hideTitle>
                    <Button primary>StackedTable footer button</Button>
                </StackedTableCell>
            </StackedTableRow>
        </StackedTableFoot>
    </StackedTable>
)
