import { spacers } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

export default css`
    span.container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    span.showFilter {
        padding-bottom: ${spacers.dp4};
    }
    span.top {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`
