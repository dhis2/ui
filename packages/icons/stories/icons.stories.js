import React from 'react'
import { storiesOf } from '@storybook/react'
import * as icons from '../build'

storiesOf('Icons', module).add('List of all icons', () => {
    const exported = Object.entries(icons)
    const components = exported.map(([name, Icon]) => {
        const importStatement = `import { ${name} } from '@dhis2/ui'`

        return (
            <tr key={name}>
                <td>{importStatement}</td>
                <td>
                    <Icon />
                </td>
            </tr>
        )
    })

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
