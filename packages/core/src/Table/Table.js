import propTypes from '@dhis2/prop-types'
import React from 'react'
import { Provider } from './TableContext.js'

const createFixedColumnStyles = fixedColWidths =>
    fixedColWidths
        .reduce((acc, width, index) => {
            const previous = index > 0 ? acc[index - 1] : null
            acc.push({
                left: previous ? previous.left + previous.width : 0,
                width,
            })

            return acc
        }, [])
        .map(
            (column, index) => `
            table td:nth-child(${index + 1}) {
                position: sticky;
                width: ${column.width}px;
                left: ${column.left}px;
                z-index: 1;
            }
        `
        )
        .join('\n')

/**
 * @module
 * @param {Table.PropTypes} props
 * @returns {React.Component}
 * @example import { Table } from '@dhis2/ui-core'
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/organisms/data-table.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/table--static-layout|Storybook}
 */
export const Table = ({
    role,
    borderedCells,
    children,
    className,
    dataTest,
    fixedColWidths,
    fixedCols,
    fixedHeader,
    largeCells,
}) => {
    const contextValue = { borderedCells, fixedHeader, largeCells }
    const fixedColumnStyles = fixedCols
        ? createFixedColumnStyles(fixedColWidths)
        : ''

    return (
        <Provider value={contextValue}>
            <table className={className} data-test={dataTest} role={role}>
                {children}
                <style jsx>{`
                    table {
                        border: 1px solid #e8edf2;
                        background-color: #ffffff;
                        min-width: 100%;
                        text-align: left;
                        border-collapse: collapse;
                        vertical-align: top;
                    }
                `}</style>
                <style jsx>{fixedColumnStyles}</style>
            </table>
        </Provider>
    )
}

Table.defaultProps = {
    dataTest: 'dhis2-uicore-table',
    fixedColWidths: [100, 100, 100],
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {boolean} [borderedCells]
 * @prop {TableHead|TableBody|TableFoot|Array.<TableHead|TableBody|TableFoot>} [children]
 * @prop {string} [className]
 * @prop {string} [role]
 * @prop {string} [dataTest]
 * @prop {number[]} [fixedColWidths]
 * @prop {number} [fixedCols]
 * @prop {boolean} [fixedHeader]
 * @prop {boolean} [largeCells]
 */
Table.propTypes = {
    borderedCells: propTypes.boolean,
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    fixedColWidths: propTypes.arrayOf(propTypes.number),
    fixedCols: propTypes.number,
    fixedHeader: propTypes.boolean,
    largeCells: propTypes.boolean,
    role: propTypes.string,
}
