import { colors } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export default css`
    th {
        padding: 12px;
        border: 1px solid transparant;
        border-bottom: 1px solid ${colors.grey300};
        color: ${colors.grey800};
        font-weight: normal;
        font-size: 14px;
        vertical-align: top;
    }
    :global(thead) th {
        padding: 8px 12px;
        font-size: 13px;
    }
    th:last-of-type {
        border-right: 1px solid ${colors.grey300};
    }
    th.active {
        outline: 2px solid ${colors.grey600};
        outline-offset: -2px;
    }
    th.bordered {
        border-right: 1px solid ${colors.grey300};
    }
    th.bordered:last-child {
        border-right: 1px solid transparent;
    }
    th.error {
        color: ${colors.red700};
    }
    th.muted {
        color: ${colors.grey700};
        font-style: italic;
    }
    th.valid {
        color: ${colors.green700};
    }
    th.large {
        padding: 14px 12px;
        font-size: 16px;
    }
    :global(thead) th.large {
        padding: 13px 12px;
        font-size: 15px;
    }
    th.fixed {
        position: sticky;
        z-index: 1;
    }
    :global(thead) th.fixed {
        position: sticky;
        /* ensure on top of scrolling body cells */
        z-index: 2;
    }
    :global(thead) th.fixedHorizontally {
        /* ensure on top of all scrolling cells */
        z-index: 3;
    }
    :global(tr:last-child) th {
        border-bottom: 1px solid transparent;
    }
    :global(thead) :global(tr:last-child) th {
        border-bottom: 1px solid ${colors.grey300};
    }
    :global(tfoot) > :global(tr:first-child) th {
        border-top: 1px solid ${colors.grey300};
    }
`
