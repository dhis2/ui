import propTypes from '@dhis2/prop-types'
import Card from '@dhis2/ui-card'
import React from 'react'
import { resolve } from 'styled-jsx/css'
import { Layer } from '../Layer/Layer.js'
import { Popper } from '../Popper/Popper.js'

const MenuWrapper = ({
    children,
    dataTest,
    maxHeight,
    menuWidth,
    onClick,
    selectRef,
}) => {
    const { styles, className: cardClassName } = resolve`
        height: auto;
        max-height: ${maxHeight};
        overflow: auto;
    `
    return (
        <Layer onClick={onClick} transparent>
            <Popper
                reference={selectRef}
                placement="bottom-start"
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
    menuWidth: propTypes.string.isRequired,
    selectRef: propTypes.object.isRequired,
    children: propTypes.node,
    maxHeight: propTypes.string,
    onClick: propTypes.func,
}

export { MenuWrapper }
