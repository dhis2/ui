import { colors, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

const NavigationKey = ({ icon, label }) => {
    return (
        <div>
            <div className="icon">{icon}</div>
            <span className="label">{label}</span>

            <style jsx>{`
                div {
                    display: flex;
                    align-items: center;
                    gap: ${spacers.dp4};
                }
                span.label {
                    font-size: 13px;
                    color: ${colors.grey700};
                }
                div.icon {
                    width: auto;
                    height: auto;
                    margin: 0;
                    padding: 1px;
                    position: unset;
                    background: ${colors.white};
                    border: 1px solid ${colors.grey400};
                    border-radius: 3px;
                }
            `}</style>
        </div>
    )
}

NavigationKey.propTypes = {
    icon: PropTypes.node,
    label: PropTypes.string,
}

export default NavigationKey
