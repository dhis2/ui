import React, { Fragment } from 'react'
import { CssReset } from '@dhis2/ui-core'

const CssResetWrapper = fn => (
    <Fragment>
        {fn()}
        <CssReset />
    </Fragment>
)

export { CssResetWrapper }
