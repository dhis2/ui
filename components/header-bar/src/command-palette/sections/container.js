import { colors, elevations } from '@dhis2/ui-constants'
import { Layer } from '@dhis2-ui/layer'
import PropTypes from 'prop-types'
import React from 'react'

const ModalContainer = ({
    children,
    setShow,
    show,
    modalRef,
    onFocus,
    onKeyDown,
}) => {
    return (
        <Layer onBackdropClick={() => setShow(false)} translucent={show}>
            <div
                role="dialog"
                aria-modal="true"
                ref={modalRef}
                tabIndex={0}
                onFocus={onFocus}
                onKeyDown={onKeyDown}
            >
                {children}
            </div>
            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
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
        </Layer>
    )
}

ModalContainer.propTypes = {
    children: PropTypes.node,
    modalRef: PropTypes.object,
    setShow: PropTypes.func,
    show: PropTypes.bool,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
}

export default ModalContainer
