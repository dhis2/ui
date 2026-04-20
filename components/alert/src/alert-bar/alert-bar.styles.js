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
        padding-inline-end: ${spacers.dp8};
        padding-bottom: ${spacers.dp8};
        padding-inline-start: ${spacers.dp16};
        margin-bottom: ${spacers.dp16};
        max-width: 600px;
        min-width: 300px;
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
            transform: translateY(${spacers.dp24});
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slideout {
        0% {
            transform: translateY(0);
            opacity: 1;
            margin-bottom: ${spacers.dp16};
        }
        45% {
            opacity: 0;
        }
        100% {
            transform: translateY(${spacers.dp8});
            opacity: 0;
            margin-bottom: var(--alert-bar-collapse, ${spacers.dp16});
        }
    }

    div.inViewport {
        animation-duration: ${ANIMATION_TIME}ms;
        animation-name: slidein;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    div {
        animation-duration: ${ANIMATION_TIME}ms;
        animation-name: slideout;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    }

    @media (prefers-reduced-motion: reduce) {
        div,
        div.inViewport {
            animation-duration: 0ms;
        }
    }
`
