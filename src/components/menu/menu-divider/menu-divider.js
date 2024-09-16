import { colors } from '../../../constants/index.js'
import { Divider } from '../../divider/index.js'
import PropTypes from 'prop-types'
import React from 'react'

const MenuDivider = ({ className, dataTest, dense }) => (
    <li className={className} data-test={dataTest}>
        <Divider dense={dense} />

        <style jsx>{`
            li {
                list-style: none;
                background-color: ${colors.white};
                user-select: none;
                padding: 0;
                line-height: 0;
            }
        `}</style>
    </li>
)

MenuDivider.defaultProps = {
    dataTest: 'dhis2-uicore-menudivider',
}

MenuDivider.propTypes = {
    className: PropTypes.string,
    dataTest: PropTypes.string,
    dense: PropTypes.bool,
}

export { MenuDivider }
