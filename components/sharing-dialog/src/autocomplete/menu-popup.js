import { Card } from '@dhis2-ui/card'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import PropTypes from 'prop-types'
import React from 'react'

export const MenuPopup = ({
    children,
    dataTest,
    maxHeight,
    menuWidth,
    onClick,
    menuRef,
}) => {
    return (
        <Layer onClick={onClick} transparent>
            <Popper
                reference={menuRef}
                placement="bottom"
                observeReferenceResize
            >
                <div className="card" data-test={`${dataTest}-menuwrapper`}>
                    <Card>{children}</Card>
                </div>
            </Popper>
            <style jsx>{`
                .card {
                    width: ${menuWidth};
                    max-height: ${maxHeight};
                }
            `}</style>
        </Layer>
    )
}

MenuPopup.defaultProps = {
    maxHeight: '280px',
}

MenuPopup.propTypes = {
    dataTest: PropTypes.string.isRequired,
    menuRef: PropTypes.object.isRequired,
    menuWidth: PropTypes.string.isRequired,
    children: PropTypes.node,
    maxHeight: PropTypes.string,
    onClick: PropTypes.func,
}
