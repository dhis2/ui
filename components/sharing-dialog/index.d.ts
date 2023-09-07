import * as React from 'react'
import { ModalOnCloseEventHandler } from '../modal'

interface SharingObject {
    access: string
    id: string
    name: string
}

type SharingPublic = 'ACCESS_NONE' | 'ACCESS_VIEW_ONLY' | 'ACCESS_VIEW_AND_EDIT'
type SharingType =
    | 'visualization'
    | 'dashboard'
    | 'eventVisualization'
    | 'interpretation'

export interface SharingDialogInitialSharingSettings {
    allowPublic: boolean
    groups?: SharingObject
    name?: string
    public?: SharingPublic
    users?: SharingObject
}

export interface SharingDialogProps {
    /**
     * The id of the object to share
     */
    id: string
    /**
     * The type of object to share
     */
    type: SharingType
    /**
     * Used to seed the component with data to show whilst loading
     */
    initialSharingSettings?: SharingDialogInitialSharingSettings
    onClose?: ModalOnCloseEventHandler
    onError?: (error: any) => void
    onSave?: () => void
}

export const SharingDialog: React.FC<SharingDialogProps>
