import { colors, theme, spacers } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export default css`
    button {
        display: inline-flex;
        position: relative;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        font-weight: 400;
        letter-spacing: 0.5px;
        text-decoration: none;
        cursor: pointer;
        user-select: none;
        color: ${colors.grey900};

        /*medium*/
        height: 36px;
        padding: 0 ${spacers.dp12};
        font-size: 14px;
        line-height: 16px;

        /*basic*/
        border: 1px solid ${colors.grey500};
        background-color: #f9fafb;
    }

    button:disabled {
        cursor: not-allowed;
    }

    button:focus {
        outline: 3px solid ${theme.focus};
        outline-offset: -3px;
        text-decoration: underline;
    }

    /* Prevent focus styles when mouse clicking */
    button:focus:not(:focus-visible) {
        outline: none;
        text-decoration: none;
    }

    /* Prevent focus styles on active and disabled buttons */
    button:active:focus,
    button:disabled:focus {
        outline: none;
        text-decoration: none;
    }

    button:hover {
        border-color: ${colors.grey500};
        background-color: ${colors.grey200};
    }

    button:active,
    button:active:focus {
        border-color: ${colors.grey500};
        background-color: ${colors.grey200};
        box-shadow: 0 0 0 1px rgb(0, 0, 0, 0.1) inset;
    }

    button:focus {
        background-color: #f9fafb;
    }

    button:disabled {
        border-color: ${colors.grey400};
        background-color: #f9fafb;
        box-shadow: none;
        color: ${theme.disabled};
        fill: ${theme.disabled};
    }

    .small {
        height: 28px;
        padding: 0 6px;
        font-size: 14px;
        line-height: 16px;
    }

    .large {
        height: 43px;
        padding: 0 ${spacers.dp24};
        font-size: 16px;
        letter-spacing: 0.57px;
        line-height: 19px;
    }

    .primary {
        border-color: ${theme.primary800};
        background: linear-gradient(180deg, #1565c0 0%, #0650a3 100%);
        background-color: #2b61b3;
        color: ${colors.white};
        fill: ${colors.white};
        font-weight: 500;
    }

    .primary:hover {
        border-color: ${theme.primary800};
        background: linear-gradient(180deg, #054fa3 0%, #034793 100%);
        background-color: #21539f;
    }

    .primary:active,
    .primary:active:focus {
        background: linear-gradient(180deg, #054fa3 0%, #034793 100%);
        background-color: #1c4a90;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18) inset;
    }

    .primary:focus {
        background: ${colors.blue800};
        border-color: ${colors.blue900};
        outline-offset: -5px;
    }

    .primary:disabled {
        border-color: #93a6bd;
        background: #b3c6de;
        box-shadow: none;
        color: ${colors.white};
        fill: ${colors.white};
    }

    .secondary {
        border-color: rgba(74, 87, 104, 0.25);
        background-color: transparent;
    }

    .secondary:hover {
        border-color: rgba(74, 87, 104, 0.5);
        background-color: rgba(160, 173, 186, 0.05);
    }

    .secondary:active,
    .secondary:active:focus {
        background-color: rgba(160, 173, 186, 0.2);
        box-shadow: none;
    }

    .secondary:focus {
        background-color: transparent;
    }

    .secondary:disabled {
        border-color: rgba(74, 87, 104, 0.25);
        background-color: transparent;
        box-shadow: none;
        color: ${theme.disabled};
        fill: ${theme.disabled};
    }

    .destructive {
        border-color: #a10b0b;
        background: linear-gradient(180deg, #d32f2f 0%, #b71c1c 100%);
        background-color: #b9242b;
        color: ${colors.white};
        fill: ${colors.white};
        font-weight: 500;
    }

    .destructive:hover {
        border-color: #a10b0b;
        background: linear-gradient(180deg, #b81c1c 0%, #b80c0b 100%);
        background-color: #ac0f1a;
    }

    .destructive:active,
    .destructive:active:focus {
        background: linear-gradient(180deg, #b81c1c 0%, #b80c0b 100%);
        background-color: #ac101b;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18) inset;
    }

    .destructive:focus {
        background: linear-gradient(180deg, #d32f2f 0%, #b71c1c 100%);
        background-color: #b72229;
    }

    .destructive:disabled {
        border-color: #c59898;
        background: #d6a8a8;
        box-shadow: none;
        color: ${colors.white};
        fill: ${colors.white};
    }

    .destructive.secondary {
        border-color: rgba(74, 87, 104, 0.25);
        background: transparent;
        color: ${colors.red700};
        fill: ${colors.red700};
        font-weight: 400;
    }

    .destructive.secondary:hover {
        border-color: ${colors.red600};
        background: ${colors.red050};
        color: ${colors.red800};
        fill: ${colors.red800};
    }

    .destructive.secondary:active,
    .destructive.secondary:active:focus {
        background: ${colors.red100};
        border-color: ${colors.red700};
        box-shadow: none;
    }

    .destructive.secondary:disabled {
        background: transparent;
        border-color: rgba(74, 87, 104, 0.25);
        color: rgba(183, 28, 28, 0.6);
        fill: rgba(183, 28, 28, 0.6);
    }

    .icon-only {
        padding: 0 0 0 5px;
    }

    .button-icon {
        margin-inline-end: 6px;
        color: inherit;
        fill: inherit;
        font-size: 26px;
        vertical-align: middle;
        pointer-events: none;
    }

    .icon-only .button-icon {
        margin-inline-end: 5px;
    }

    .small.icon-only {
        padding-block: 0;
        padding-inline-start: 5px;
        padding-inline-end: 4px;
    }

    .small .button-icon {
        margin-inline-end: 2px;
    }

    .small.icon-only .button-icon {
        margin-inline-end: 1px;
    }

    .toggled {
        background: ${colors.grey700};
        border: 1px solid ${colors.grey900};
        color: ${colors.grey050};
        fill: ${colors.grey050};
    }

    .toggled:focus {
        background: ${colors.grey800};
    }

    .toggled:hover {
        background: ${colors.grey800};
        border-color: ${colors.grey900};
    }

    .toggled:active,
    .toggled:active:focus {
        background: ${colors.grey900};
        border-color: ${colors.grey900};
    }

    .toggled:disabled {
        background: ${colors.grey500};
        border-color: ${colors.grey600};
        color: ${colors.grey050};
        fill: ${colors.grey050};
    }

    .loader {
        width: 16px;
        height: 16px;
        margin-inline-end: 8px;
    }

    .loader + .button-icon {
        display: none;
    }

    .icon-only .loader {
        margin: 0 8px 0 4px;
        margin-inline-start: 4px;
        margin-inline-end: 8px;
    }
    .small.icon-only .loader {
        margin: 0 4px;
    }
`
