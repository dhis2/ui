import { colors, spacers, theme } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export default css`
    li {
        display: flex;
        align-items: stretch;
        padding: 0;
        cursor: pointer;
        list-style: none;
        background-color: ${colors.white};
        color: ${colors.grey900};
        fill: ${colors.grey900};
        font-size: 14px;
        line-height: 16px;
        user-select: none;
    }

    li:hover {
        background-color: ${colors.grey200};
    }

    li:active,
    li.active {
        background-color: ${colors.grey300};
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

    /*focus-visible backwards compatibility for safari: https://css-tricks.com/platform-news-using-focus-visible-bbcs-new-typeface-declarative-shadow-doms-a11y-and-placeholders/*/
    li:focus {
        outline: 3px solid ${theme.focus};
        outline-offset: -3px;
    }
    li:focus:not(:focus-visible) {
        outline: none;
    }

    a {
        display: inline-flex;
        flex-grow: 1;
        align-items: center;
        padding: 0 ${spacers.dp16};
        min-height: 40px;
        text-decoration: none;
        color: inherit;
    }

    li.with-chevron a {
        padding-inline-end: ${spacers.dp8};
    }

    li.dense a {
        padding: 0 ${spacers.dp12};
        min-height: 32px;
    }

    li.with-chevron.dense a {
        padding-inline-end: ${spacers.dp4};
    }

    .label {
        flex-grow: 1;
        padding: ${spacers.dp12} 0;
    }

    li.dense .label {
        padding: ${spacers.dp8} 0;
    }

    .icon {
        flex-grow: 0;
        margin-inline-end: ${spacers.dp12};
        width: 24px;
        height: 24px;
    }

    .suffix {
        display: flex;
        align-items: center;
        margin-inline-start: ${spacers.dp8};
    }

    .chevron {
        display: flex;
        align-items: center;
        flex-grow: 0;
        margin-inline-start: ${spacers.dp24};
    }

    .chevron:dir(rtl) {
        transform: rotate(180deg);
    }

    li.dense .icon {
        margin-inline-end: ${spacers.dp8};
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
