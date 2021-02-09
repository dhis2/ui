import { colors, spacers } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export default css`
    th {
        text-align: left;
        vertical-align: top;
        background-color: ${colors.grey200};
        border-bottom: 1px solid ${colors.grey300};
    }
    th.fixed {
        position: sticky;
        /* ensure on top of scrolling body cells */
        z-index: 2;
    }
    th.fixedLeft {
        /* ensure on top of all scrolling cells */
        z-index: 3;
        background-color: ${colors.grey300};
    }
    span.container {
        display: flex;
        flex-direction: column;
        padding: 0 12px;
    }
    span.top {
        display: flex;
        flex-direction: row;
        height: 36px;
    }
    span.bottom {
        padding-bottom: ${spacers.dp4};
    }
    th.large span.top {
        height: 48px;
    }
    span.label {
        display: inline-flex;
        align-items: center;
        height: 100%;
        font-size: 13px;
        color: ${colors.grey800};
        font-weight: normal;
    }

    th.large span.label {
        font-size: 15px;
    }
`
