import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import { colors, elevations } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

const MenuWrapper = ({
    children,
    dataTest,
    maxHeight,
    menuWidth,
    onClick,
    selectRef,
}) => {
    return (
        <Layer onClick={onClick} transparent>
            <Popper
                reference={selectRef}
                placement="bottom-start"
                observeReferenceResize
            >
                <div data-test={`${dataTest}-menuwrapper`}>
                    {children}

                    <style jsx>{`
                        div {
                            width: ${menuWidth};
                            height: auto;
                            max-height: ${maxHeight};
                            overflow: auto;
                            background: ${colors.white};
                            border: 1px solid ${colors.grey200};
                            border-radius: 3px;
                            box-shadow: ${elevations.e300};
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
