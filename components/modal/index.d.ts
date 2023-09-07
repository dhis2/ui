import * as React from 'react'

export interface CloseButtonProps {
    onClick?: (...args: any[]) => any
}

export const CloseButton: React.FC<CloseButtonProps>

export interface ModalProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    fluid?: boolean
    hide?: boolean
    large?: any
    position?: any
    small?: any
    /**
     * Callback used when the Modal closes
     */
    onClose?: (...args: any[]) => any
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
