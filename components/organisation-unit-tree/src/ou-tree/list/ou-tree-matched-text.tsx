import React from 'react'
import type { MatchSegment } from '../search'

export interface OuTreeMatchedTextProps {
    segments: MatchSegment[]
    dataTest?: string
}

/** A label's segments, the matched ones in an emphasised span. */
export const OuTreeMatchedText = ({
    segments,
    dataTest,
}: OuTreeMatchedTextProps) => (
    <>
        {segments.map((segment, index) =>
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
