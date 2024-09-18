import * as React from 'react'

export interface TagProps {
    /**
     * Use bold tags where it is important that the tag is seen by the user in an information dense interface. Bold tags should be reserved for edge cases and not overused.
     */
    bold?: boolean
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * Tags can contain icons. Use icons where they will help users easily identify the content of the tag. Tags must have a text label and cannot display only an icon.
     */
    icon?: React.ReactNode
    maxWidth?: string
    /**
     * Red 'negative' tags imply an error or a problem. `neutral`, `positive`, and `negative` are mutually exclusive props
     */
    negative?: boolean
    /**
     * Blue 'neutral' tags are used when a tag _could_ have valid or error status but is currently neutral. `neutral`, `positive`, and `negative` are mutually exclusive props
     */
    neutral?: boolean
    /**
     * Green 'valid' tags should be used to indicate validity or success. `neutral`, `positive`, and `negative` are mutually exclusive props
     */
    positive?: boolean
}

export const Tag: React.FC<TagProps>
