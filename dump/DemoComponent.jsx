import React from 'react'

export const Demo = (props) => {
    console.log(props)
    return (
        <div>
            my demo<br/>
            {props.children}
        </div>
    )
}
