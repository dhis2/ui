import { colors } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export default css.resolve`
    tr.isHoveringExpandedContent > :global(td) {
        background-color: ${colors.grey100};
    }
    tr.isHoveringExpandedContent > :global(th) {
        background-color: ${colors.grey300};
    }
    tr.selected.isHoveringExpandedContent > :global(td) {
        background-color: #cdeae8;
    }
    tr.expanded > :global(td) {
        border-bottom-color: transparent;
    }
    tr.expanded > :global(td.bordered) {
        border-bottom-color: ${colors.grey300};
    }
`
