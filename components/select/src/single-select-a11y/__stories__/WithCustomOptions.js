import React, { useState, useMemo } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
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
    const [value, setValue] = useState('')
    const optionsWithCustomStyle = useMemo(() => {
        return options.slice(0, 3).map((option) => ({
            ...option,
            component: CustomOption,
        }))
    }, [])

    return (
        <SingleSelectA11y
            idPrefix="a11y"
            value={value}
            valueLabel={
                value
                    ? options.find((option) => option.value === value).label
                    : ''
            }
            onChange={(nextValue) => setValue(nextValue)}
            options={optionsWithCustomStyle}
        />
    )
}
