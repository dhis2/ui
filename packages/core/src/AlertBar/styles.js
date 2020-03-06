import css from 'styled-jsx/css'
import { colors, spacers, elevations } from '../theme.js'

export const ANIMATION_TIME = 350

export default css`
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 4px;
        box-shadow: ${elevations.e300};

        padding-top: ${spacers.dp12};
        padding-right: ${spacers.dp16};
        padding-bottom: ${spacers.dp12};
        padding-left: ${spacers.dp24};

        margin-bottom: ${spacers.dp16};

        max-width: 600px;

        font-size: 14px;

        transform: translateY(1000px);
        transition: transform ${ANIMATION_TIME}ms cubic-bezier(0.4, 0, 0.6, 1);

        pointer-events: all;
    }

    /* States */
    div.info {
        background-color: ${colors.grey900};
        color: ${colors.white};
    }
    div.info :global(path) {
        fill: ${colors.white};
    }
    div.success {
        background-color: ${colors.green800};
        color: ${colors.white};
    }
    div.success :global(path) {
        fill: ${colors.white};
    }
    div.warning {
        background-color: ${colors.yellow300};
        color: ${colors.yellow900};
    }
    div.warning :global(path) {
        fill: ${colors.yellow900};
    }
    div.critical {
        background-color: ${colors.red800};
        color: ${colors.white};
    }
    div.critical :global(path) {
        fill: ${colors.white};
    }

    /* Animation */
    div.visible {
        transform: translateY(0px);
    }
`
