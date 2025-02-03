import { colors, elevations } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'

const ModalContainer = forwardRef(function ModalContainer(
    { children, onFocus, onKeyDown },
    ref
) {
    return (
        <>
            <dialog ref={ref} onFocus={onFocus} onKeyDown={onKeyDown}>
                {children}
            </dialog>
            <style jsx>{`
                dialog {
                    display: flex;
                    flex-direction: column;
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
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
}

export default ModalContainer
