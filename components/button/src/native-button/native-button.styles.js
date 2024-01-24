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
        height: 36px;
        padding: 0 ${spacers.dp12};
        font-size: 14px;
        line-height: 16px;
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
`
