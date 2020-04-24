import css from 'styled-jsx/css'

import { spacers } from '@dhis2/ui-constants'

export default css`
    .icon {
        padding-left: ${spacers.dp12};
    }

    .icon-only.icon {
        padding-left: 6px;
    }

    .icon-only {
        padding: 0;
    }

    .icon-only i {
        margin-right: 0;
        margin-left: 0;
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
