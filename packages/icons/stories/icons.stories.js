import React from 'react'
import { storiesOf } from '@storybook/react'
import * as icons from '../storybook'

storiesOf('icons', module).add('List of all icons', () => {
    const exported = Object.entries(icons)
    const components = exported.map(([name, Icon]) => (
        <tr key={name}>
            <td>
                import {'{ '}
                {name}
                {' }'} from '@dhis2/icons'
            </td>
            <td>
                <Icon />
            </td>
        </tr>
    ))

    return (
        <table>
            <tr>
                <td>Import</td>
                <td>Example</td>
            </tr>
            {components}
        </table>
    )
})
