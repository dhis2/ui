import css from 'styled-jsx/css'
import { colors, theme, spacers } from '../theme.js'

export const styles = css`
    .textarea {
        display: flex;
    }
    textarea {
        box-sizing: border-box;
        padding: 8px 12px;

        color: ${colors.grey900};
        background-color: transparent;

        border: 1px solid ${colors.grey500};
        border-radius: 3px;
        box-shadow: inset 0 0 0 1px rgba(102, 113, 123, 0.15),
            inset 0 1px 2px 0 rgba(102, 113, 123, 0.1);
        outline: 0;

        font-size: 14px;
        line-height: 16px;
        user-select: text;
    }

    textarea.dense {
        padding: 4px 12px;
    }

    textarea:focus {
        border-color: ${colors.teal400};
    }

    textarea.valid {
        border-color: ${theme.valid};
    }

    textarea.warning {
        border-color: ${theme.warning};
    }

    textarea.error {
        border-color: ${theme.error};
    }

    textarea.read-only {
        background-color: ${colors.grey100};
        border-color: ${colors.grey500};
        cursor: text;
    }

    textarea.disabled {
        background-color: ${colors.grey100};
        border-color: ${colors.grey500};
        color: ${theme.disabled};
        cursor: not-allowed;
    }

    .status-icon {
        flex-grow: 0;
        flex-shrink: 0;
        margin-left: ${spacers.dp4};
    }
`
