import { spacers, spacersNum } from '@dhis2/ui-constants'
import { Card } from '@dhis2-ui/card'
import { Center } from '@dhis2-ui/center'
import { Layer } from '@dhis2-ui/layer'
import cx from 'classnames'
import React, { useEffect } from 'react'
import css from 'styled-jsx/css'
import { CloseButton } from './close-button.tsx'

const resolveLayerStyles = (hide?: boolean) =>
    css.resolve`
        div {
            padding: ${spacers.dp64};
            display: ${hide ? 'none' : 'block'};
        }
    `

export interface ModalProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    fluid?: boolean
    hide?: boolean
    large?: boolean
    position?: 'top' | 'middle' | 'bottom'
    small?: boolean
    /** Callback used when the Modal closes */
    onClose?: (
        payload: Record<string, never>,
        event: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>
    ) => void
}

export const Modal = ({
    children,
    className,
    dataTest = 'dhis2-uicore-modal',
    hide,
    fluid,
    large,
    onClose,
    position = 'top',
    small,
}: ModalProps) => {
    const layerStyles = resolveLayerStyles(hide)

    useEffect(() => {
        if (hide) {
            return
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && onClose) {
                event.preventDefault()
                event.stopPropagation()
                onClose(
                    {} as Record<string, never>,
                    event as unknown as React.MouseEvent<HTMLDivElement>
                )
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [hide, onClose])

    return (
        <Layer
            onBackdropClick={onClose}
            className={layerStyles.className}
            translucent={!hide}
        >
            <Center position={position}>
                <aside
                    role="dialog"
                    aria-modal="true"
                    data-test={dataTest}
                    className={cx(className, { small, large, fluid })}
                >
                    <Card>
                        {onClose && <CloseButton onClick={onClose} />}
                        <div>{children}</div>
                    </Card>
                </aside>
                {layerStyles.styles}
            </Center>

            <style jsx>{`
                aside {
                    height: auto;
                    width: 600px;
                    max-width: calc(100vw - ${2 * spacersNum.dp64}px);
                    max-height: calc(100vh - ${2 * spacersNum.dp64}px);
                }

                aside.small {
                    width: 400px;
                }

                aside.large {
                    width: 800px;
                }

                aside.fluid {
                    width: auto;
                }
                div {
                    padding: 24px;
                    display: flex;
                    flex-flow: column;
                    max-width: calc(100vw - ${2 * spacersNum.dp64}px);
                    max-height: calc(100vh - ${2 * spacersNum.dp64}px);
                }
            `}</style>
        </Layer>
    )
}
