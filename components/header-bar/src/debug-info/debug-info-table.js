import { colors } from '@dhis2/ui-constants'
import React from 'react'
import { useDebugInfo } from './use-debug-info.js'

const formatDebugInfoKey = (key) => {
    const tokens = key.split('_')
    return tokens
        .map((token) => {
            if (token.toLowerCase() === 'dhis2') {
                return 'DHIS2'
            } else {
                return token[0].toUpperCase() + token.substr(1).toLowerCase()
            }
        })
        .join(' ')
}

export function DebugInfoTable() {
    const debugInfo = useDebugInfo()
    return (
        <table {...{ 'data-test': 'dhis2-ui-headerbar-debuginfotable' }}>
            <tbody>
                {Object.keys(debugInfo).map((key) => (
                    <tr key={key}>
                        <td className="debug-info-key">
                            {formatDebugInfoKey(key)}
                        </td>
                        <td>{debugInfo[key]}</td>
                    </tr>
                ))}
            </tbody>
            <style jsx>{`
                table {
                    white-space: pre-wrap;
                    font-size: 14px;
                    line-height: 1.2;
                    color: ${colors.grey700};
                    font-famile: Menlo, Courier, monospace !important;
                }
                td {
                    padding: 3px 16px 3px 0;
                }
                .debug-info-key {
                    font-weight: bold;
                }
            `}</style>
        </table>
    )
}
