import { spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

export function OptionIcon({ icon }) {
    return (
        <span aria-hidden="true">
            {icon}

            <style jsx>{`
                span {
                    display: flex;
                    margin-inline-end: ${spacers.dp8};
                    width: ${spacers.dp16};
                    height: ${spacers.dp16};
                    overflow: hidden;
                    flex-shrink: 0;
                }
            `}</style>
        </span>
    )
}

OptionIcon.propTypes = {
    icon: PropTypes.node.isRequired,
}
