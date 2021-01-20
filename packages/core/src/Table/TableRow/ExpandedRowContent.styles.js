import { colors } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export default css`
    tr > td {
        border-bottom: 1px solid ${colors.grey300};
    }
    tr:last-child > td {
        border-bottom: 1px solid transparent;
    }
    tr:hover > td,
    :global(tr.isExpanded:hover) + tr > td {
        background-color: ${colors.blue050};
    }
    :global(tr.isExpanded:active) + tr > td {
        background-color: ${colors.blue100};
    }
    tr.selected > td {
        background-color: ${colors.teal050};
    }
    :global(tr.selected.isExpanded:hover) + tr > td,
    tr.selected:hover > td {
        background-color: ${colors.teal100};
    }
`
