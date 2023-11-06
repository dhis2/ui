import React, { useState } from 'react'
import AccessibleSelectOption from './accessible-select-option.js'
import AccessibleSelect from './accessible-select.js'

export default {
    title: 'Accessible Select',
    component: AccessibleSelect,
}

export const Default = () => {
    const [selected, setSelected] = useState('foo')
    const name = 'selectName'

    return (
        <AccessibleSelect
            name={name}
            selected={selected}
            onChange={(e) => setSelected(e.target.value)}
        >
            <AccessibleSelectOption value="foo" label="Foo" />
            <AccessibleSelectOption value="bar" label="Bar" />
            <AccessibleSelectOption value="baz" label="Baz" />
        </AccessibleSelect>
    )
}

export const Searchable = () => {
    const [selected, setSelected] = useState('foo')
    const name = 'selectName'
    const allOptions = [
        { value: 'foo', label: 'Foo' },
        { value: 'bar', label: 'Bar' },
        { value: 'baz', label: 'Baz' },
    ]
    const [options, setOptions] = useState(allOptions)

    return (
        <AccessibleSelect
            name={name}
            selected={selected}
            onChange={(e) => setSelected(e.target.value)}
        >
            <input
                type="input"
                onChange={(e) => {
                    const filter = e.target.value.toLowerCase()

                    if (!filter) {
                        return setOptions(allOptions)
                    }

                    const nextOptions = allOptions.filter((option) => {
                        return option.label.toLowerCase().includes(filter)
                    })
                    setOptions(nextOptions)
                }}
                placeholder="Search options"
            />

            {options.map(({ value, label }) => (
                <AccessibleSelectOption
                    key={value}
                    value={value}
                    label={label}
                />
            ))}
        </AccessibleSelect>
    )
}

export const NestedOptions = () => {
    const [selected, setSelected] = useState('foo')
    const name = 'selectName'
    const H2 = ({ children }) => (
        <h2 style={{ margin: 0, padding: '16px' }}>{children}</h2>
    )

    return (
        <AccessibleSelect
            name={name}
            selected={selected}
            onChange={(e) => setSelected(e.target.value)}
        >
            <section>
                <H2>Headline #1</H2>
                <AccessibleSelectOption value="foo" label="Foo" />
                <AccessibleSelectOption value="bar" label="Bar" />
                <AccessibleSelectOption value="baz" label="Baz" />
            </section>

            <section>
                <H2>Headline #2</H2>
                <AccessibleSelectOption value="foobar" label="Foobar" />
                <AccessibleSelectOption value="barbaz" label="Barbaz" />
                <AccessibleSelectOption value="bazfar" label="Bazfoo" />
            </section>
        </AccessibleSelect>
    )
}
