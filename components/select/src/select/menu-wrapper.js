import { Card } from '@dhis2-ui/card'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import PropTypes from 'prop-types'
import React from 'react'
import { resolve } from 'styled-jsx/css'

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
    dataTest: PropTypes.string.isRequired,
    menuWidth: PropTypes.string.isRequired,
    selectRef: PropTypes.object.isRequired,
    children: PropTypes.node,
    maxHeight: PropTypes.string,
    onClick: PropTypes.func,
}

export { MenuWrapper }
