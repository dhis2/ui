import { spacers, theme } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Action extends Component {
    onClick = (event) => {
        this.props.onClick(event)
        this.props.hide(event)
    }

    render() {
        return (
            <button
                type="button"
                onClick={this.onClick}
                data-test={this.props.dataTest}
            >
                {this.props.label}
                <style jsx>{`
                    button {
                        margin-inline-end: ${spacers.dp12};
                        padding: 0;
                        border: none;
                        background: transparent;
                        color: inherit;
                        font: inherit;
                        text-decoration: underline;
                        white-space: nowrap;
                    }
                    button:hover {
                        cursor: pointer;
                    }
                    button:focus {
                        outline: 3px solid ${theme.focus};
                    }
                    button:focus:not(:focus-visible) {
                        outline: none;
                    }
                `}</style>
            </button>
        )
    }
}

Action.propTypes = {
    dataTest: PropTypes.string.isRequired,
    hide: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export { Action }
