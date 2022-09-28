import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const OrganisationUnitNodeText = ({
    isDisabled,
    displayName,
    isFilterMatch,
    filteredString,
    toggleOpen,
}) => {
    return (
        <div
            onClick={toggleOpen}
            className={cx('container', { isFilterMatch, isDisabled })}
        >
            {getMatchingSegments(displayName, filteredString, isFilterMatch)}
            <style jsx>{`
                div.container {
                    display: inline-flex;
                    height: 24px;
                    align-items: center;
                    justify-content: flex-start;
                    font-size: 14px;
                    line-height: 16px;
                    color: ${colors.grey900};
                }
                div.container.isFilterMatch {
                    background-color: ${colors.yellow050};
                    border-radius: 3px;
                }
                div.container.isFilterMatch > :global(span.highlight) {
                    border-radius: 3px;
                    background-color: ${colors.yellow300};
                }
            `}</style>
        </div>
    )
}

OrganisationUnitNodeText.defaultProps = {
    filteredString: '',
}

OrganisationUnitNodeText.propTypes = {
    displayName: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isFilterMatch: PropTypes.bool.isRequired,
    filteredString: PropTypes.string,
    toggleOpen: PropTypes.func,
}

function getMatchingSegments(fullString, filteredString, isFilterMatch) {
    const lowerCasedFullString = fullString.toLowerCase()
    const lowerCasedSubstring = filteredString.toLowerCase()
    const hasSearchHighlights =
        isFilterMatch &&
        lowerCasedSubstring &&
        lowerCasedFullString.includes(lowerCasedSubstring)

    if (!hasSearchHighlights) {
        return fullString
    }

    const segments = []
    let cursor = 0
    let matchIndex = lowerCasedFullString.indexOf(lowerCasedSubstring)
    while (matchIndex >= 0) {
        /* If the match is not at the start of the string, add the
         * non-matching segment to the array and move the cursor to the
         * start of the match */
        if (matchIndex > 0) {
            segments.push(fullString.substring(cursor, matchIndex))
            cursor = matchIndex
        }

        // Add match to array as highlighted span
        segments.push(
            <span className="highlight" key={cursor}>
                {fullString.substring(
                    cursor,
                    matchIndex + lowerCasedSubstring.length
                )}
            </span>
        )

        // Move cursor to the first character after the match
        cursor = matchIndex + lowerCasedSubstring.length
        // Find next match in remaining string
        const subStringMatchIndex = lowerCasedFullString
            .substring(cursor)
            .indexOf(lowerCasedSubstring)
        matchIndex =
            subStringMatchIndex === -1 ? -1 : cursor + subStringMatchIndex

        /* If the end of the string has not yet been reached and no more
         * matches are present, then add the the remaining segment to
         * the end of the array */
        if (lowerCasedFullString.length > cursor + 1 && matchIndex === -1) {
            segments.push(fullString.substring(cursor))
        }
    }
    return segments
}

export { OrganisationUnitNodeText, getMatchingSegments }
