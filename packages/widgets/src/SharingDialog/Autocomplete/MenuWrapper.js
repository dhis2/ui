import PropTypes from '@dhis2/prop-types'
import { Card, Layer, Popper } from '@dhis2/ui-core'
import React from 'react'
import { resolve } from 'styled-jsx/css'

const MenuWrapper = ({
    children,
    dataTest,
    maxHeight,
    menuWidth,
    onClick,
    menuRef,
}) => {
    const { styles, className: cardClassName } = resolve`
        height: auto;
        max-height: ${maxHeight};
        overflow: auto;
    `
    return (
        <Layer onClick={onClick} transparent>
            <Popper
                reference={menuRef}
                placement="bottom"
                observeReferenceResize
            >
                <div data-test={`${dataTest}-menuwrapper`}>
                    <Card className={cardClassName}>{children}</Card>

                    {styles}

                    <style jsx>{`
                        div {
                            width: ${menuWidth};
                        }
                    `}</style>
                </div>
            </Popper>
        </Layer>
    )
}

MenuWrapper.defaultProps = {
    maxHeight: '280px',
}

MenuWrapper.propTypes = {
    dataTest: PropTypes.string.isRequired,
    menuRef: PropTypes.object.isRequired,
    menuWidth: PropTypes.string.isRequired,
    children: PropTypes.node,
    maxHeight: PropTypes.string,
    onClick: PropTypes.func,
}

export { MenuWrapper }
