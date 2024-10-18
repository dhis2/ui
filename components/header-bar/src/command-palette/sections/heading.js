import { colors, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../../locales/index.js'

function Heading({ filter, filteredItems, heading }) {
    return (
        <div className="section-header">
            <span>
                {filter
                    ? filteredItems.length > 0
                        ? i18n.t(`Results for "${filter}"`)
                        : i18n.t(`Nothing found for "${filter}"`)
                    : i18n.t(`${heading}`)}
            </span>
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
    filter: PropTypes.string,
    filteredItems: PropTypes.array,
    heading: PropTypes.string,
}

export default Heading
