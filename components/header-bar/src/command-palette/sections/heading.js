import { colors, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

function Heading({ heading }) {
    return (
        <div className="section-header">
            {/* role='header' ?*/}
            <span>{heading}</span>
            <style>{`
              .section-header {
                  font-size: 14px;
                  font-weight: 400;
                  color: ${colors.grey700};
                  padding:  ${spacers.dp8};
                  margin: 2px ${spacers.dp4};
              }
              .section-header:first-of-type {
                  margin-top: ${spacers.dp4};
              }
        `}</style>
        </div>
    )
}

Heading.propTypes = {
    heading: PropTypes.string,
}

export default Heading
