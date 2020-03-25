import React from 'react'
import ReactDOM from 'react-dom'
import propTypes from '@dhis2/prop-types'
import { resolve } from 'styled-jsx/css'
import { Card } from '../Card.js'
import { layers } from '../theme.js'
import { Backdrop } from '../Backdrop.js'
import { Popper } from '../Popper.js'

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
    return ReactDOM.createPortal(
        <Backdrop onClick={onClick} transparent zIndex={layers.applicationTop}>
            <Popper reference={selectRef} placement="bottom">
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
        </Backdrop>,
        document.body
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
