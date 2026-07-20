import { colors, elevations } from '@dhis2/ui-constants'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import PropTypes from 'prop-types'
import React from 'react'

const MenuWrapper = ({
    children,
    dataTest,
    inputWidth,
    maxHeight = '280px',
    menuMaxWidth,
    menuMinWidth,
    onClick,
    selectRef,
}) => {
    // menuMinWidth or menuMaxWidth enables flexible sizing (fit-content), with
    // min-width = max(input, menuMinWidth). Without them, width matches the input.
    const flexible = menuMinWidth || menuMaxWidth
    const width = flexible ? 'fit-content' : inputWidth
    const flexibleMinWidth = menuMinWidth
        ? `max(${inputWidth}, ${menuMinWidth})`
        : inputWidth
    const minWidth = flexible ? flexibleMinWidth : 'auto'
    const maxWidth = menuMaxWidth || 'none'

    return (
        <Layer onBackdropClick={onClick} transparent>
            <Popper
                reference={selectRef}
                placement="bottom-start"
                observeReferenceResize
            >
                <div data-test={`${dataTest}-menuwrapper`}>
                    {children}

                    <style jsx>{`
                        div {
                            width: ${width};
                            min-width: ${minWidth};
                            max-width: ${maxWidth};
                            height: auto;
                            max-height: ${maxHeight};
                            overflow: auto;
                            background: ${colors.white};
                            border: 1px solid ${colors.grey200};
                            border-radius: 3px;
                            box-shadow: ${elevations.popover};
                        }
                    `}</style>
                </div>
            </Popper>
        </Layer>
    )
}

MenuWrapper.propTypes = {
    dataTest: PropTypes.string.isRequired,
    inputWidth: PropTypes.string.isRequired,
    selectRef: PropTypes.object.isRequired,
    children: PropTypes.node,
    maxHeight: PropTypes.string,
    menuMaxWidth: PropTypes.string,
    menuMinWidth: PropTypes.string,
    onClick: PropTypes.func,
}

export { MenuWrapper }
