import { spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Action extends Component {
    onClick = (event) => {
        this.props.onClick(event)
        this.props.hide(event)
    }

    render() {
        return (
            <span onClick={this.onClick} data-test={this.props.dataTest}>
                {this.props.label}
                <style jsx>{`
                    span {
                        margin-right: ${spacers.dp12};
                        text-decoration: underline;
                    }
                    span:hover {
                        cursor: pointer;
                    }
                `}</style>
            </span>
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
