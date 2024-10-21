import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../../locales/index.js'
import Heading from '../sections/heading.js'
import List from '../sections/list.js'

function SearchResults({ filter, filteredItems }) {
    return (
        <>
            {filteredItems.length > 0 ? (
                <>
                    <Heading heading={i18n.t(`Results for "${filter}"`)} />
                    <List filteredItems={filteredItems} />
                </>
            ) : (
                <div className="empty-results">
                    <Heading
                        heading={i18n.t(`Nothing found for "${filter}"`)}
                    />
                </div>
            )}
            <style jsx>{`
                .empty-results {
                    min-height: 92px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    font-size: 14px;
                    line-height: 19px;
                    color: ${colors.grey700};
                }
            `}</style>
        </>
    )
}

SearchResults.propTypes = {
    filter: PropTypes.string,
    filteredItems: PropTypes.array,
}

export default SearchResults
