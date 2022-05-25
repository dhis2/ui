import { colors } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export default css`
    td {
        padding: 14px 12px;
        font-size: 14px;
        border: 1px solid transparant;
        border-bottom: 1px solid ${colors.grey300};
        color: ${colors.grey900};
    }
    td.active {
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
`
