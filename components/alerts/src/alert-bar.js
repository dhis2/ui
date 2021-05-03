import { mutuallyExclusive } from '@dhis2/prop-types'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Actions, actionsPropType } from './actions.js'
import styles, { ANIMATION_TIME } from './alert-bar.styles.js'
import { Dismiss } from './dismiss.js'
import { Icon, iconPropType } from './icon.js'
import { Message } from './message.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {AlertBar.PropTypes} props
 *
 * @returns {React.Component}
 *
 * @example import { AlertBar } from @dhis2/ui-core
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/molecules/alertbar.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/alertbar--default|Storybook}
 */
class AlertBar extends Component {
    // visible is used to control the show/hide animation
    // hidden is used to stop rendering entirely after hide animation
    state = {
        visible: true,
        hidden: false,
    }

    componentDidMount() {
        this.startTime = Date.now()
        this.timeRemaining = this.props.duration
        this.startDisplayTimeout()
    }

    componentWillUnmount() {
        clearTimeout(this.displayTimeout)
        clearTimeout(this.onHiddenTimeout)
    }

    startDisplayTimeout = () => {
        if (this.shouldAutoHide()) {
            this.displayTimeout = setTimeout(() => {
                this.hide(null)
            }, this.timeRemaining)
        }
    }

    stopDisplayTimeOut = () => {
        if (this.shouldAutoHide()) {
            const elapsedTime = Date.now() - this.startTime
            this.timeRemaining = this.timeRemaining - elapsedTime
            clearTimeout(this.displayTimeout)
        }
    }

    hide = event => {
        clearTimeout(this.displayTimeout)
        this.setState({ visible: false })

        this.onHiddenTimeout = setTimeout(() => {
            this.setState(
                { hidden: true },
                () => this.props.onHidden && this.props.onHidden({}, event)
            )
        }, ANIMATION_TIME)
    }

    shouldAutoHide() {
        const { permanent, warning, critical } = this.props
        return !(permanent || warning || critical)
    }

    render() {
        const {
            className,
            children,
            success,
            warning,
            critical,
            icon,
            actions,
            dataTest,
        } = this.props
        const { visible, hidden } = this.state

        if (hidden) {
            return null
        }

        const info = !critical && !success && !warning

        return (
            <div
                className={cx(className, {
                    info,
                    success,
                    warning,
                    critical,
                    visible,
                })}
                data-test={dataTest}
                onMouseEnter={this.stopDisplayTimeOut}
                onMouseLeave={this.startDisplayTimeout}
            >
                <Icon
                    dataTest={`${dataTest}-icon`}
                    icon={icon}
                    critical={critical}
                    success={success}
                    warning={warning}
                    info={info}
                />
                <Message>{children}</Message>
                <Actions
                    actions={actions}
                    hide={this.hide}
                    dataTest={dataTest}
                />
                <Dismiss onClick={this.hide} dataTest={`${dataTest}-dismiss`} />

                <style jsx>{styles}</style>
            </div>
        )
    }
}

const alertTypePropType = mutuallyExclusive(
    ['success', 'warning', 'critical'],
    PropTypes.bool
)

AlertBar.defaultProps = {
    duration: 8000,
    dataTest: 'dhis2-uicore-alertbar',
    icon: true,
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [children] - The message string for the alert
 * @prop {string} [className]
 * @prop {boolean} [success] - `success`, `warning`, and `critical` are
 * mutually exclusive props.
 * @prop {boolean} [warning] - `AlertBar`s with `warning` will not autohide
 * @prop {boolean} [critical] - `AlertBar`s with `critical` will not autohide
 *
 * @prop {(Element|boolean)} [icon=true]
 *
 * @prop {number} [duration]
 * @prop {boolean} [permanent]
 * @prop {Array} [actions] An array of 0-2 action objects with the shape: `{ label: {string}, onClick: {function} }`
 * @prop {function} [onHidden]
 * @prop {string} [dataTest]
 */
AlertBar.propTypes = {
    /** An array of 0-2 action objects */
    actions: actionsPropType,
    /** The message string for the alert */
    children: PropTypes.string,
    className: PropTypes.string,
    /** Alert bars with `critical` will not autohide */
    critical: alertTypePropType,
    dataTest: PropTypes.string,
    duration: PropTypes.number,
    /**
     * A specific icon to override the default icon in the bar.
     * If `false` is provided, no icon will be shown.
     */
    icon: iconPropType,
    permanent: PropTypes.bool,
    success: alertTypePropType,
    /** Alert bars with `warning` will not autohide */
    warning: alertTypePropType,
    onHidden: PropTypes.func,
}

export { AlertBar }
