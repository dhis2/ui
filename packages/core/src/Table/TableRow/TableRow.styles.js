import { colors } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export default css`
    :global(tbody) tr:hover > :global(td),
    :global(tbody) tr.isHoveringExpandedContent > :global(td) {
        background-color: ${colors.blue050};
    }
    :global(tbody) tr:hover > :global(th),
    :global(tbody) tr.isHoveringExpandedContent > :global(th) {
        background-color: ${colors.grey300};
    }
    :global(tbody) tr:active > :global(td) {
        background-color: ${colors.blue100};
    }
    :global(tbody) tr.selected > :global(td) {
        background-color: ${colors.teal050};
    }
    :global(tbody) tr.selected:hover > :global(td),
    :global(tbody) tr.selected.isHoveringExpandedContent > :global(td) {
        background-color: ${colors.teal100};
    }
    :global(tbody) tr.isExpanded > :global(td) {
        border-bottom-color: transparent;
    }
    :global(tbody) tr.isExpanded > :global(td.bordered) {
        border-bottom-color: ${colors.grey300};
    }
    :global(tbody) tr.sortable {
        cursor: move;
    }
    :global(tbody) tr > :global(td.active) {
        background-color: ${colors.blue100} !important;
    }
`
