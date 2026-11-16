import React from 'react'
import { splitMatches } from '../search'

export interface OuTreeMatchedTextProps {
    text: string
    term: string
    dataTest?: string
}

/**
 * The text with every match of the term, or all of it for a whole-value
 * match, in an emphasised span; the text alone when the client finds no
 * match.
 */
export const OuTreeMatchedText = ({
    text,
    term,
    dataTest,
}: OuTreeMatchedTextProps) => (
    <>
        {splitMatches(text, term).map((segment, index) =>
            segment.matched ? (
                <span key={index} className="match" data-test={dataTest}>
                    {segment.text}
                </span>
            ) : (
                <React.Fragment key={index}>{segment.text}</React.Fragment>
            )
        )}
        <style jsx>{`
            .match {
                font-weight: 600;
            }
        `}</style>
    </>
)
