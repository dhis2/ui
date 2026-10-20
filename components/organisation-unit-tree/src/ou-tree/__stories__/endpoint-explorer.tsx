import { useDataEngine } from '@dhis2/app-runtime'
import { colors, spacers } from '@dhis2/ui-constants'
import React, { useState } from 'react'
import { TREE_RESOURCE } from '../__fixtures__/index'

type FormValues = {
    roots: string
    depth: string
    search: string
    shortName: boolean
    groups: string
    level: string
    currentlyOpen: boolean
    locale: string
    page: string
    pageSize: string
}

const initialValues: FormValues = {
    roots: '',
    depth: '',
    search: '',
    shortName: false,
    groups: '',
    level: '',
    currentlyOpen: false,
    locale: '',
    page: '1',
    pageSize: '50',
}

const textFields: Array<[keyof FormValues, string]> = [
    ['roots', 'roots (comma-separated ids)'],
    ['depth', 'depth'],
    ['search', 'search'],
    ['groups', 'groups (comma-separated ids)'],
    ['level', 'level'],
    ['locale', 'locale'],
    ['page', 'page'],
    ['pageSize', 'pageSize'],
]

/**
 * Runs a query against `TREE_RESOURCE` through the data engine and shows the
 * raw response, for comparing the in-memory endpoint with the real backend.
 */
export const EndpointExplorer = () => {
    const engine = useDataEngine()
    const [values, setValues] = useState(initialValues)
    const [output, setOutput] = useState('')

    const run = async (event: React.FormEvent) => {
        event.preventDefault()
        const params = Object.fromEntries(
            Object.entries(values).filter(
                ([, value]) => value !== '' && value !== false
            )
        )
        try {
            const { tree } = await engine.query({
                tree: { resource: TREE_RESOURCE, params },
            })
            setOutput(JSON.stringify(tree, null, 2))
        } catch (error) {
            setOutput(String(error))
        }
    }

    return (
        <div className="explorer">
            <form onSubmit={run}>
                {textFields.map(([name, label]) => (
                    <label key={name}>
                        <span>{label}</span>
                        <input
                            name={name}
                            value={values[name] as string}
                            onChange={(event) =>
                                setValues({
                                    ...values,
                                    [name]: event.target.value,
                                })
                            }
                        />
                    </label>
                ))}
                <label>
                    <input
                        type="checkbox"
                        name="shortName"
                        checked={values.shortName}
                        onChange={(event) =>
                            setValues({
                                ...values,
                                shortName: event.target.checked,
                            })
                        }
                    />
                    <span>shortName</span>
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="currentlyOpen"
                        checked={values.currentlyOpen}
                        onChange={(event) =>
                            setValues({
                                ...values,
                                currentlyOpen: event.target.checked,
                            })
                        }
                    />
                    <span>currentlyOpen</span>
                </label>
                <button type="submit">Run query</button>
            </form>
            <pre data-test="endpoint-explorer-output">{output}</pre>
            <style jsx>{`
                .explorer {
                    display: grid;
                    grid-template-columns: 280px 1fr;
                    gap: ${spacers.dp16};
                    font-family: monospace;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    gap: ${spacers.dp8};
                }
                label {
                    display: flex;
                    flex-direction: column;
                    gap: ${spacers.dp4};
                    font-size: 12px;
                    color: ${colors.grey800};
                }
                pre {
                    margin: 0;
                    padding: ${spacers.dp8};
                    border: 1px solid ${colors.grey400};
                    border-radius: 3px;
                    background: ${colors.grey050};
                    font-size: 12px;
                    overflow: auto;
                    max-height: 80vh;
                }
            `}</style>
        </div>
    )
}
