import { colors } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export default css`
    td {
        padding: 14px 12px;
        font-size: 14px;
        border: 1px solid transparant;
        border-bottom: 1px solid ${colors.grey300};
        background-color: ${colors.white};
        color: ${colors.grey900};
    }
    td.active {
        background-color: ${colors.white};
        outline: 2px solid ${colors.grey600};
        outline-offset: -2px;
    }
    td.bordered {
        border-right: 1px solid ${colors.grey300};
    }
    td.bordered:last-child {
        border-right: 1px solid transparent;
    }
    td.error {
        color: ${colors.red700};
    }
    td.muted {
        color: ${colors.grey700};
        font-style: italic;
    }
    td.valid {
        color: ${colors.green700};
    }
    td.large {
        padding: 20px 12px;
        font-size: 16px;
    }
    :global(tr:last-child) td {
        border-bottom: 1px solid transparent;
    }
    :global(tfoot) :global(tr:first-child) td {
        border-top: 1px solid ${colors.grey300};
    }
    :global(tr.selected) > td {
        background-color: ${colors.teal100};
    }
    :global(tr:hover) > td:not(.staticStyle) {
        background-color: ${colors.grey100};
    }
    :global(tr:active) > td:not(.staticStyle) {
        background-color: ${colors.grey200};
    }
    :global(tr.selected:hover) > td:not(.staticStyle) {
        background-color: #cdeae8;
    }
`
