import * as React from 'react'
import { LayerBackdropClickHandler } from '@dhis2-ui/layer'

export type ModalOnCloseEventHandler = LayerBackdropClickHandler

export interface ModalProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    fluid?: boolean
    hide?: boolean
    large?: boolean
    position?: 'top' | 'middle' | 'bottom'
    small?: boolean
    /**
     * Callback used when the Modal closes
     */
    onClose?: LayerBackdropClickHandler
}

export const Modal: React.FC<ModalProps>

export interface ModalActionsProps {
    children?: React.ReactNode
    dataTest?: string
}

export const ModalActions: React.FC<ModalActionsProps>

export interface ModalContentProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

export const ModalContent: React.FC<ModalContentProps>

export interface ModalTitleProps {
    children?: string
    dataTest?: string
}

export const ModalTitle: React.FC<ModalTitleProps>
