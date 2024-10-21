import { colors, elevations } from '@dhis2/ui-constants'
import { Layer } from '@dhis2-ui/layer'
import PropTypes from 'prop-types'
import React from 'react'

const Container = ({ children, setShow, show }) => {
    return (
        <Layer onBackdropClick={() => setShow(false)} translucent={show}>
            <div role="dialog" aria-modal="true">
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

Container.propTypes = {
    children: PropTypes.node,
    setShow: PropTypes.func,
    show: PropTypes.bool,
}

export default Container
