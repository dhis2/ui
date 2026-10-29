import React from 'react'
import { findMatch } from '../search/index'

export interface OuTreeMatchedTextProps {
    text: string
    term: string
    dataTest?: string
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
    const match = findMatch(text, term)
    const [before, matched, after] =
        match === undefined
            ? [text, '', '']
            : match === 'all'
              ? ['', text, '']
              : [
                    text.slice(0, match.start),
                    text.slice(match.start, match.end),
                    text.slice(match.end),
                ]
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
