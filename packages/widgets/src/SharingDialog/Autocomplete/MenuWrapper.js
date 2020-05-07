import React from 'react'
import { resolve } from 'styled-jsx/css'

import propTypes from '@dhis2/prop-types'

import { Card, Layer, Popper } from '@dhis2/ui-core'

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
    dataTest: propTypes.string.isRequired,
    menuRef: propTypes.object.isRequired,
    menuWidth: propTypes.string.isRequired,
    children: propTypes.node,
    maxHeight: propTypes.string,
    onClick: propTypes.func,
}

export { MenuWrapper }
