import { colors, theme, spacers } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export const styles = css`
    .textarea {
        display: flex;
        gap: ${spacers.dp8};
    }
    textarea {
        box-sizing: border-box;
        padding: 8px 12px;

        color: ${colors.grey900};
        background-color: white;

        border: 1px solid ${colors.grey500};
        border-radius: 3px;
        box-shadow: inset 0 0 1px 0 rgba(48, 54, 60, 0.1);
        outline: 0;

        font-size: 14px;
        line-height: 17px;
        user-select: text;
    }

    textarea.dense {
        padding: 6px 8px;
    }

    textarea:focus {
        outline: none;
        box-shadow: inset 0 0 0 2px ${theme.focus};
        border-color: ${theme.focus};
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
`
