import { colors } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export default css`
    td,
    th {
        padding: 0 12px;
        font-size: 14px;
        height: 45px;
        border: 1px solid transparant;
        border-bottom: 1px solid ${colors.grey300};
    }
    td {
        background-color: ${colors.white};
        color: ${colors.grey900};
    }
    th {
        color: ${colors.grey800};
        background-color: ${colors.grey200};
        font-weight: normal;
        border-right: 1px solid transparent;
    }
    th:last-of-type {
        border-right: 1px solid ${colors.grey300};
    }
    td.active {
        background-color: ${colors.white};
        outline: 2px solid ${colors.grey600};
    }
    td.bordered,
    th.bordered {
        border-right: 1px solid ${colors.grey300};
    }
    td.bordered:last-child,
    th.bordered:last-child {
        border-right: 1px solid transparent;
    }
    td.error,
    th.error {
        color: ${colors.red700};
    }
    td.muted,
    th.muted {
        color: ${colors.grey700};
        font-style: italic;
    }
    td.valid,
    th.valid {
        color: ${colors.green700};
    }
    td.large,
    th.large {
        font-size: 16px;
        height: 60px;
    }
    th.fixed {
        position: sticky;
        z-index: 1;
    }
    :global(tr:last-child) td,
    :global(tr:last-child) th {
        border-bottom: 1px solid transparent;
    }
    :global(tfoot) :global(tr:first-child) td,
    :global(tfoot) :global(tr:first-child) th {
        border-top: 1px solid ${colors.grey300};
    }
    :global(tbody) > :global(tr:hover) > td {
        background-color: ${colors.grey100};
    }
    :global(tbody) > :global(tr:hover) > th {
        background-color: ${colors.grey300};
    }
    :global(tbody) > :global(tr:hover) > td.active,
    :global(tbody) > :global(tr:active) > td {
        background-color: ${colors.grey200};
    }
    :global(tbody) > :global(tr.selected) > td {
        background-color: ${colors.teal100};
    }
    :global(tbody) > :global(tr.selected:hover) > td {
        background-color: #cdeae8;
    }
`
