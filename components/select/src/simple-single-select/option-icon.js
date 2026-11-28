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
                    align-items: center;
                    justify-content: center;
                    margin-inline-end: ${spacers.dp8};
                    width: ${spacers.dp16};
                    height: ${spacers.dp16};
                    overflow: hidden;
                    flex-shrink: 0;
                }

                span > :global(*) {
                    max-width: 100%;
                    max-height: 100%;
                }
            `}</style>
        </span>
    )
}

OptionIcon.propTypes = {
    icon: PropTypes.node.isRequired,
}
