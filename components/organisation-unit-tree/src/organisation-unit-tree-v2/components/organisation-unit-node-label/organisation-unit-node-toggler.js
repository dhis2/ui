import { CircularLoader } from '@dhis2-ui/loader'
import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const ToggleIcon = ({ isLeafNode, isLoading, isOpen }) => {
    if (isLeafNode) {
        return null
    }

    if (isLoading) {
        return <CircularLoader extrasmall />
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={cx({ isOpen })}
        >
            <path d="M14 20l10 10 10-10z" />
            {isOpen && (
                <line
                    x1="23"
                    x2="23"
                    y1="29"
                    y2="48"
                    stroke={colors.grey400}
                    strokeWidth="2"
                    shapeRendering="geometricPrecision"
                />
            )}
            <style jsx>{`
                svg {
                    fill: ${colors.grey700};
                    height: 24px;
                    width: 24px;
                    vertical-align: top;
                    pointer-events: none;
                    transform: rotate(-90deg);
                }
                svg.isOpen {
                    transform: rotate(0deg);
                }
            `}</style>
        </svg>
    )
}

ToggleIcon.propTypes = {
    isLeafNode: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
}

const OrganisationUnitNodeToggler = ({
    isLeafNode,
    isOpen,
    isLoading,
    toggleOpen,
}) => (
    <div
        onClick={toggleOpen}
        className={cx('toggler', {
            withHoverEffect: !isLeafNode && !isLoading,
        })}
    >
        <ToggleIcon
            isLeafNode={isLeafNode}
            isOpen={isOpen}
            isLoading={isLoading}
        />
        <style jsx>{`
            div {
                background-color: transparent;
                display: flex;
                width: 24px;
                height: 24px;
                align-items: center;
                justify-content: center;
                position: relative;
            }
            div.withHoverEffect:hover {
                cursor: pointer;
                background-color: ${colors.grey100};
            }
        `}</style>
    </div>
)

OrganisationUnitNodeToggler.propTypes = {
    isLeafNode: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func,
}

export { OrganisationUnitNodeToggler }
