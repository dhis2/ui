import { colors, elevations } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { forwardRef, useEffect } from 'react'

const ModalContainer = forwardRef(function ModalContainer(
    { children, onKeyDown },
    ref
) {
    useEffect(() => {
        const activeItem = ref?.current?.querySelector('.highlighted')
        if (activeItem && typeof activeItem.scrollIntoView === 'function') {
            activeItem?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        }
    }, [ref])

    useEffect(() => {
        if (!ref.current) {
            return
        }
        const dialog = ref.current

        const handleFocus = (event) => {
            if (event.target === ref?.current) {
                ref.current?.querySelector('input').focus()
            }
        }

        dialog.addEventListener('focus', handleFocus)
        dialog.addEventListener('keydown', onKeyDown)

        return () => {
            dialog.removeEventListener('focus', handleFocus)
            dialog.removeEventListener('keydown', onKeyDown)
        }
    }, [onKeyDown, ref])

    return (
        <>
            <dialog ref={ref}>{children}</dialog>
            <style jsx>{`
                dialog {
                    display: flex;
                    flex-direction: row;
                    border: none;
                    border-radius: 1px;
                    padding: 1px;
                    width: 572px;
                    max-height: 544px;
                    margin: 0 auto;
                    border-radius: 3px;
                    background: ${colors.white};
                    box-shadow: ${elevations.e100};
                    margin-top: 92px;
                }
            `}</style>
        </>
    )
})

ModalContainer.propTypes = {
    children: PropTypes.node,
    onKeyDown: PropTypes.func,
}

export default ModalContainer
