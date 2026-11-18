import React from 'react'
import type { MatchSegment } from '../search'

export interface OuTreeMatchedTextProps {
    segments: MatchSegment[]
    dataTest?: string
}

/** Each segment with the offset of its text in the label, its key. */
const withOffsets = (segments: MatchSegment[]) => {
    let offset = 0
    return segments.map((segment) => {
        const at = offset
        offset += segment.text.length
        return { segment, at }
    })
}

/** A label's segments, the matched ones in an emphasised span. */
export const OuTreeMatchedText = ({
    segments,
    dataTest,
}: OuTreeMatchedTextProps) => (
    <>
        {withOffsets(segments).map(({ segment, at }) =>
            segment.matched ? (
                <span key={at} className="match" data-test={dataTest}>
                    {segment.text}
                </span>
            ) : (
                <React.Fragment key={at}>{segment.text}</React.Fragment>
            )
        )}
        <style jsx>{`
            .match {
                font-weight: 600;
            }
        `}</style>
    </>
)
