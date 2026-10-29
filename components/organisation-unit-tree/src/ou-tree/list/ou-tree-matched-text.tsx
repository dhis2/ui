import React from 'react'
import { findMatch, type MatchRange } from '../search/index'

export interface OuTreeMatchedTextProps {
    text: string
    term: string
    dataTest?: string
}

/** The text as [before, matched, after]. */
const splitAt = (
    text: string,
    match: MatchRange | undefined
): [string, string, string] => {
    if (match === undefined) {
        return [text, '', '']
    }
    if (match === 'all') {
        return ['', text, '']
    }
    return [
        text.slice(0, match.start),
        text.slice(match.start, match.end),
        text.slice(match.end),
    ]
}

/**
 * The text with the term's match, or all of it for a whole-value match,
 * in an emphasised span; the text alone when the client finds no match.
 */
export const OuTreeMatchedText = ({
    text,
    term,
    dataTest,
}: OuTreeMatchedTextProps) => {
    const [before, matched, after] = splitAt(text, findMatch(text, term))
    return (
        <>
            {before}
            {matched && (
                <span className="match" data-test={dataTest}>
                    {matched}
                </span>
            )}
            {after}
            <style jsx>{`
                .match {
                    font-weight: 600;
                }
            `}</style>
        </>
    )
}
