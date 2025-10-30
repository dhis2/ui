import React, { useState, useMemo } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
import { options } from './options.js'

const CustomOption = ({ label }) => (
    <span className="container">
        <span className="label">{label}</span>

        <span
            className="button"
            role="button"
            onClick={(e) => {
                e.stopPropagation()
                alert('Custom "button" clicked!')
            }}
        >
            x
        </span>

        <style jsx>{`
            .container {
                display: flex;
                color: white;
                cursor: pointer;
                height: 30px;
            }

            .label {
                flex-grow: 1;
                background: green;
                padding: 5px 10px;
            }

            .label:hover {
                background: blue;
            }

            .button {
                height: 30px;
                width: 30px;
                padding: 0;
                border: 0;
                background: none;
                background: white;
                cursor: pointer;
                font-size: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: black;
            }

            .button:hover {
                background: black;
                color: white;
            }
        `}</style>
    </span>
)

export const WithCustomOptions = () => {
    const [selected, setSelected] = useState(null)
    const optionsWithCustomStyle = useMemo(() => {
        return options.slice(0, 3).map((option) => ({
            ...option,
            component: CustomOption,
        }))
    }, [])

    return (
        <SimpleSingleSelect
            name="simple"
            selected={selected}
            onChange={setSelected}
            options={optionsWithCustomStyle}
        />
    )
}
