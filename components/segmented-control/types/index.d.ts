import * as React from 'react'

export interface SegmentedControlOptions {
    label: string
    value: string
    disabled?: boolean
}

export interface SegmentedControlProps {
    /**
     * Options to populate the segmented control
     */
    options: SegmentedControlOptions[]
    /**
     * An option to select; should match the `value` property of the option to be selected
     */
    selected: string
    /**
     * Called with the signature `({ value: string }, event)`
     */
    onChange: (
        payload: { value: string },
        arg1: React.MouseEvent<HTMLButtonElement>
    ) => void
}

export const SegmentedControl: React.FC<SegmentedControlProps>
