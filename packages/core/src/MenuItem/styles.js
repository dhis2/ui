import css from 'styled-jsx/css'
import { colors, spacers } from '../theme.js'

export default css`
    li {
        position: relative;
        padding: 0;
        cursor: pointer;
        list-style: none;
    }

    li div.label:not(:first-child) {
        margin-left: ${spacers.dp8};
    }

    li:hover {
        background-color: ${colors.grey200};
    }

    li:active,
    li.active {
        background-color: ${colors.grey400};
    }

    .dense .link {
        padding: ${spacers.dp8} ${spacers.dp12};
    }

    .dense .label {
        font-size: 14px;
        line-height: 16px;
    }

    .dense .icon {
        font-size: 20px;
    }

    .disabled {
        cursor: not-allowed;
        pointer-events: none;
        user-select: none;
    }

    .disabled .icon,
    .disabled .label {
        color: ${colors.grey500};
    }

    .destructive .label {
        color: ${colors.red700};
    }

    .destructive .icon {
        color: ${colors.red600};
    }

    li.destructive:hover {
        background-color: ${colors.red050};
    }

    li.destructive:active {
        background-color: ${colors.red100};
    }

    .link {
        display: block;
        height: 100%;
        padding: 15px ${spacers.dp24};
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .label {
        color: ${colors.grey900};
        font-size: 15px;
        line-height: 18px;
        user-select: none;
    }

    .icon {
        box-sizing: border-box;

        margin-right: ${spacers.dp16};
        color: #404040;
        font-size: 24px;
        pointer-events: none;
        user-select: none;
    }
`
