import { colors } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export default css`
    :global(table) > tr:hover > :global(td),
    :global(tbody) > tr:hover > :global(td),
    :global(table) > tr.isHoveringExpandedContent > :global(td),
    :global(tbody) > tr.isHoveringExpandedContent > :global(td) {
        background-color: ${colors.blue050};
    }
    :global(table) > tr:hover > :global(th),
    :global(tbody) > tr:hover > :global(th),
    :global(table) > tr.isHoveringExpandedContent > :global(th),
    :global(tbody) > tr.isHoveringExpandedContent > :global(th) {
        background-color: ${colors.grey300};
    }
    :global(table) > tr:active > :global(td),
    :global(tbody) > tr:active > :global(td) {
        background-color: ${colors.blue100};
    }
    :global(table) > tr.selected > :global(td),
    :global(tbody) > tr.selected > :global(td) {
        background-color: ${colors.teal050};
    }
    :global(table) > tr.selected:hover > :global(td),
    :global(tbody) > tr.selected:hover > :global(td),
    :global(table) > tr.selected.isHoveringExpandedContent > :global(td),
    :global(tbody) > tr.selected.isHoveringExpandedContent > :global(td) {
        background-color: ${colors.teal100};
    }
    :global(table) > tr.isExpanded > :global(td),
    :global(tbody) > tr.isExpanded > :global(td) {
        border-bottom-color: transparent;
    }
    :global(table) > tr.isExpanded > :global(td.bordered),
    :global(tbody) > tr.isExpanded > :global(td.bordered) {
        border-bottom-color: ${colors.grey300};
    }
    :global(table) > tr.draggable,
    :global(tbody) > tr.draggable {
        cursor: move;
        user-select: none;
    }
    :global(table) > tr > :global(td.active),
    :global(tbody) > tr > :global(td.active) {
        background-color: ${colors.blue100} !important;
    }
`
