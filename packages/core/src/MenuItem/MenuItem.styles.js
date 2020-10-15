import { colors, spacers } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export default css`
    li {
        display: flex;
        align-items: stretch;
        padding: 0;
        cursor: pointer;
        list-style: none;
        transition: background-color 150ms ease-in-out;
        background-color: ${colors.white};
        color: ${colors.grey900};
        fill: ${colors.grey900};
        font-size: 15px;
        line-height: 18px;
        user-select: none;
    }

    li.dense {
        font-size: 14px;
        line-height: 16px;
    }

    li:hover {
        background-color: ${colors.grey200};
    }

    li:active,
    li.active {
        background-color: ${colors.grey400};
    }

    li.destructive {
        color: ${colors.red700};
        fill: ${colors.red600};
    }

    li.destructive:hover {
        background-color: ${colors.red050};
    }

    li.destructive:active,
    li.destructive.active {
        background-color: ${colors.red100};
    }

    li.disabled {
        cursor: not-allowed;
        color: ${colors.grey500};
        fill: ${colors.grey500};
    }

    li.disabled:hover {
        background-color: ${colors.white};
    }

    a {
        display: inline-flex;
        flex-grow: 1;
        align-items: center;
        padding: 0 ${spacers.dp24};
        min-height: 48px;
        text-decoration: none;
        color: inherit;
    }

    li.with-chevron a {
        padding-right: ${spacers.dp8};
    }

    li.dense a {
        padding: 0 ${spacers.dp12};
        min-height: 32px;
    }

    li.with-chevron.dense a {
        padding-right: ${spacers.dp4};
    }

    .label {
        flex-grow: 1;
        padding: 15px 0;
    }

    li.dense .label {
        padding: 8px 0;
    }

    .icon {
        flex-grow: 0;
        margin-right: ${spacers.dp16};
        width: 24px;
        height: 24px;
    }

    .chevron {
        flex-grow: 0;
        margin-left: ${spacers.dp48};
    }

    li.dense .icon {
        margin-right: ${spacers.dp8};
        width: 16px;
        height: 16px;
    }

    li .icon > :global(svg) {
        width: 24px;
        height: 24px;
    }

    li.dense .icon > :global(svg),
    li .chevron > :global(svg) {
        width: 16px;
        height: 16px;
    }
`
