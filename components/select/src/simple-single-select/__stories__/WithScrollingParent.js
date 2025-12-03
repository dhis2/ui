import React, { useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'
import { fiveOptions } from './options.js'

export const WithScrollingParent = () => {
    const [selected, setSelected] = useState(null)
    const [selected2, setSelected2] = useState(null)

    return (
        <div style={{ overflow: 'scroll', height: '200px' }}>
            <SimpleSingleSelect
                tabIndex="1"
                inputMaxHeight="50px"
                name="simple"
                selected={selected}
                onChange={setSelected}
                options={fiveOptions}
            />
            <SimpleSingleSelect
                tabIndex="2"
                inputMaxHeight="50px"
                name="simple2"
                selected={selected2}
                onChange={setSelected2}
                options={fiveOptions}
            />
            <div>
                Some text to force a window with scrolling (to validate the
                KeyDown on the combo box does not scroll the whole window)
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Some text to force scrolling
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                Some text to force scrolling
            </div>
        </div>
    )
}
