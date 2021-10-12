import React from 'react'
import * as icons from '../react/index.js'

export default {
    title: 'Icons/List',
    component: icons,
}

export const CompleteIconSet = () => (
    <table>
        <thead>
            <tr>
                <td>
                    <h4>Name</h4>
                </td>
                <td>
                    <h4>Icon</h4>
                </td>
            </tr>
        </thead>
        <tbody>
            {Object.keys(icons).map(key => {
                // eslint-disable-next-line import/namespace
                const Icon = icons[key]
                return (
                    <tr key={key}>
                        <td>{key}</td>
                        <td>
                            <Icon />
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
)
