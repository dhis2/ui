import { spacers } from '@dhis2/ui-constants'
import React, { Component } from 'react'

export interface ActionProps {
    dataTest: string
    hide: (event: React.MouseEvent<HTMLSpanElement>) => void
    label: string
    onClick: (event: React.MouseEvent<HTMLSpanElement>) => void
}

class Action extends Component<ActionProps> {
    onClick = (event: React.MouseEvent<HTMLSpanElement>) => {
        this.props.onClick(event)
        this.props.hide(event)
    }

    onKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            this.onClick(event as unknown as React.MouseEvent<HTMLSpanElement>)
        }
    }

    render() {
        return (
            <span
                role="button"
                tabIndex={0}
                onClick={this.onClick}
                onKeyDown={this.onKeyDown}
                data-test={this.props.dataTest}
            >
                {this.props.label}
                <style jsx>{`
                    span {
                        margin-inline-end: ${spacers.dp12};
                        text-decoration: underline;
                        white-space: nowrap;
                    }
                    span:hover {
                        cursor: pointer;
                    }
                `}</style>
            </span>
        )
    }
}

export { Action }
