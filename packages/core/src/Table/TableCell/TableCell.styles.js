import { colors } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export default css`
    td,
    th {
        padding: 0 12px;
        font-size: 14px;
        line-height: 16px;
        height: 45px;
        border-bottom: 1px solid ${colors.grey300};
    }
    td {
        background-color: ${colors.white};
    }
    th {
        color: ${colors.grey800};
        background-color: ${colors.grey200};
        font-weight: normal;
    }
    th:last-of-type {
        border-right: 1px solid ${colors.grey300};
    }
    td:first-child,
    th:first-child {
        border-left: 1px solid ${colors.grey300};
    }
    td:last-child,
    th:last-child {
        border-right: 1px solid ${colors.grey300};
    }
    :global(tbody) :global(tr:hover) td {
        background-color: ${colors.blue050};
    }
    :global(tbody) :global(tr:hover) th {
        background-color: ${colors.grey300};
    }
    :global(tbody) :global(tr:active) td {
        background-color: ${colors.blue100};
    }
    :global(tbody) :global(tr.selected) td {
        background-color: ${colors.teal050};
    }
    :global(tbody) :global(tr.selected:hover) td {
        background-color: ${colors.teal100};
    }
    td.active {
        background-color: ${colors.blue100};
    }
    td.bordered,
    th.bordered {
        border: 1px solid ${colors.grey300};
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
        height: 60px;
    }
    th.fixed {
        position: sticky;
        z-index: 1;
    }
`
