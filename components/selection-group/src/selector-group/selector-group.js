import { Button } from '@dhis2-ui/button'
import i18n from '@dhis2/d2-i18n'
import { colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const ClearSelection = ({ disabled, onClick }) => {
    return (
        <div className="clear-selections">
            <Button small secondary disabled={disabled} onClick={onClick}>
                {i18n.t('Clear selections')}
            </Button>

            <style jsx>{`
                .clear-selections {
                    display: flex;
                    align-items: center;
                    height: 40px;
                    padding: 0 ${spacers.dp8};
                }
            `}</style>
        </div>
    )
}

ClearSelection.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export const SelectorGroup = ({
    children,
    onClearSelectionClick,
    disableClearSelections,
    rightHandSideContents,
}) => (
    <>
        <div
            className={cx('container', {
                withRHSContents: rightHandSideContents,
            })}
        >
            <div className="controls">
                {children}
                {onClearSelectionClick && (
                    <ClearSelection
                        disabled={disableClearSelections}
                        onClick={onClearSelectionClick}
                    />
                )}
            </div>

            {rightHandSideContents && (
                <div className="right-hand-side-contents">
                    {rightHandSideContents}
                </div>
            )}

            <style jsx>{`
                .container {
                    background: ${colors.white};
                    box-shadow: inset 0 -1px 0 0 ${colors.grey400};
                    padding-bottom: 1px;
                }

                .withRHSContents {
                    display: flex;
                }

                .controls {
                    display: flex;
                    flex-wrap: wrap;
                    flex-grow: 1;
                }

                .right-hand-side-contents {
                    ${
                        /*
                         * Specs define the space to be 12px.
                         * 8px already come from the clear selection component
                         */ ''
                    }
                    padding-left: 4px;
                }
            `}</style>
        </div>
    </>
)

SelectorGroup.propTypes = {
    children: PropTypes.any.isRequired,
    disableClearSelections: PropTypes.bool,
    rightHandSideContents: PropTypes.any,
    onClearSelectionClick: PropTypes.func,
}
