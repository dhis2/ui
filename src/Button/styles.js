import css from 'styled-jsx/css'

import { colors, theme, spacers } from '../theme.js'

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
        transition: all 0.15s cubic-bezier(0.4, 0, 0.6, 1);
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
        /* Prevent default browser behavior which adds an outline */
        outline: none;
    }

    /* Use the ::after pseudo-element for focus styles */
    button::after {
        content: ' ';
        pointer-events: none;

        position: absolute;
        top: -2px;
        right: -2px;
        bottom: -2px;
        left: -2px;
        z-index: 1;

        border: 2px solid transparent;
        border-radius: inherit;

        transition: border-color 0.15s cubic-bezier(0.4, 0, 0.6, 1);
    }

    /* Prevent focus styles on active and disabled buttons */
    button:active:focus::after,
    button:disabled:focus::after {
        border-color: transparent;
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

    button:focus::after {
        border-color: ${theme.primary600};
    }

    button:disabled {
        border-color: ${colors.grey400};
        background-color: #f9fafb;
        box-shadow: none;
        color: ${theme.disabled};
        fill: ${theme.disabled};
    }

    button.icon {
        padding-left: ${spacers.dp12};
    }

    button.icon-only.icon {
        padding-left: 6px;
    }

    .small {
        height: 28px;
        padding: 0 8px;
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

    .icon-only {
        padding: 0;
    }
    .icon-only i {
        margin-right: 0;
        margin-left: 0;
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
        border-color: ${theme.primary800};
        background: linear-gradient(180deg, #054fa3 0%, #034793 100%);
        background-color: #1c4a90;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18) inset;
    }

    .primary:focus {
        background: linear-gradient(180deg, #1565c0 0%, #0650a3 100%);
        background-color: #285dac;
    }

    .primary:focus::after {
        border-color: ${colors.yellow300};
    }

    .primary:disabled {
        border-color: ${theme.primary800};
        background: linear-gradient(180deg, #1565c0 0%, #0650a3 100%);
        background-color: #b6c8e2;
        box-shadow: none;
        color: ${colors.white};
        fill: ${colors.white};
        opacity: 0.33;
    }

    .secondary {
        border-color: ${colors.grey400};
        background-color: transparent;
    }

    .secondary:hover {
        border-color: ${colors.grey400};
        background-color: rgba(160, 173, 186, 0.08);
    }

    .secondary:active,
    .secondary:active:focus {
        border-color: ${colors.grey400};
        background-color: rgba(160, 173, 186, 0.2);
        box-shadow: none;
    }

    .secondary:focus {
        background-color: transparent;
    }

    .secondary:focus::after {
        border-color: ${theme.primary600};
    }

    .secondary:disabled {
        border-color: ${colors.grey400};
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
        border-color: #a10b0b;
        background: linear-gradient(180deg, #b81c1c 0%, #b80c0b 100%);
        background-color: #ac101b;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18) inset;
    }

    .destructive:focus {
        background: linear-gradient(180deg, #d32f2f 0%, #b71c1c 100%);
        background-color: #b72229;
    }

    .destructive:focus:after {
        border-color: #5e0303;
    }

    .destructive:disabled {
        border-color: #a10b0b;
        background: linear-gradient(180deg, #d32f2f 0%, #b71c1c 100%);
        background-color: #e5b5b7;
        box-shadow: none;
        color: ${colors.white};
        fill: ${colors.white};
        opacity: 0.33;
    }

    .button-icon {
        margin-right: 6px;
        color: inherit;
        fill: inherit;
        font-size: 26px;
        vertical-align: middle;
        pointer-events: none;
    }
`
