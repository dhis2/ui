import { colors, spacers, elevations } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export const ANIMATION_TIME = 350

export default css`
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 4px;
        box-shadow: ${elevations.e300};
        padding-top: ${spacers.dp8};
        padding-right: ${spacers.dp8};
        padding-bottom: ${spacers.dp8};
        padding-left: ${spacers.dp24};
        margin-bottom: ${spacers.dp16};
        max-width: 600px;
        font-size: 14px;
        pointer-events: all;
    }

    /* States */

    div.info {
        background-color: ${colors.grey900};
        color: ${colors.white};
    }
    div.success {
        background-color: ${colors.green800};
        color: ${colors.white};
    }
    div.warning {
        background-color: ${colors.yellow300};
        color: ${colors.yellow900};
    }
    div.critical {
        background-color: ${colors.red800};
        color: ${colors.white};
    }

    /* Animation */

    @keyframes slidein {
        from {
            transform: translateY(1000px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slideout {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(1000px);
        }
    }

    div.inViewport {
        animation-duration: ${ANIMATION_TIME}ms;
        animation-name: slidein;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }

    div {
        animation-duration: ${ANIMATION_TIME}ms;
        animation-name: slideout;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
`
