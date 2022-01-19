import React from 'react'

export const Demo = (props) => {
    return (
        <div className="demo">
            <div className="demo-title">Demo</div>
            <div className="demo-content">{props.children}</div>
            <style>
                {`
                    .demo {
                        border: 1px solid #e5e5e5;
                        margin-bottom: 16px;
                    }
                    .demo-title {
                        width: 100%;
                        background-color: #e5e5e5;
                        font-size: 0.8rem;
                        padding: 2px 4px;
                        font-family: monospace;
                    }
                    .demo-content {
                        padding: 24px 16px;
                    }
                `}
            </style>
        </div>
    )
}
