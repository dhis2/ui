import React from 'react'
import { StackedTableHead } from './stacked-table-head.tsx'

const isChildTableHead = (child: React.ReactNode): boolean =>
    React.isValidElement(child) && child.type === StackedTableHead
const extractChildrenProp = (
    component: React.ReactElement<{ children?: React.ReactNode }>
) => component.props.children

const extractRowsFromTableChildren = (children: React.ReactNode) =>
    React.Children.toArray(children)
        .filter(isChildTableHead)

        // extract table head children (rows)
        .map((child) =>
            extractChildrenProp(
                child as React.ReactElement<{ children?: React.ReactNode }>
            )
        )

        // when there are multiple header rows,
        // children will come as arrays
        .reduce(
            (flattened: React.ReactNode[], row) =>
                Array.isArray(row)
                    ? [...flattened, ...row]
                    : [...flattened, row],
            []
        )

        // extract table row children (cells),
        // will return an array with arrays of cells
        .map((row) =>
            extractChildrenProp(
                row as React.ReactElement<{ children?: React.ReactNode }>
            )
        )

const calculateColumnCount = (row: React.ReactNode) =>
    Array.isArray(row)
        ? row.reduce(
              (total: number, col: React.ReactElement<{ colSpan?: string }>) =>
                  // make sure to take col span into account
                  col.props.colSpan
                      ? total + parseInt(col.props.colSpan, 10)
                      : total + 1,
              0
          )
        : 1

const mapCellsToLabels = (rowChildren: React.ReactNode) => {
    let labels: string[] = []
    // in case there's only one cell, the children are not an array
    const row = Array.isArray(rowChildren) ? rowChildren : [rowChildren]

    // Using a for loop here to be able to increment "i"
    // when a cell has a colspan prop by the colspan number
    for (let i = 0, count = row.length; i < count; ++i) {
        const cell = row[i] as React.ReactElement<{
            colSpan?: string
            children?: React.ReactNode
            hideResponsiveLabel?: boolean
        }>
        const colSpan = cell.props.colSpan
            ? parseInt(cell.props.colSpan, 10)
            : 1

        const label = extractLabelFromCell(cell)

        // Add a label entry for each column
        labels = [...labels, ...Array(colSpan).fill(label)]
    }

    return labels
}

const extractLabelFromCell = (
    cell: React.ReactElement<{
        children?: React.ReactNode
        hideResponsiveLabel?: boolean
    }>
) => (!cell.props.hideResponsiveLabel ? cell.props.children : '')

const combineRowLables = (
    columnCount: number,
    rowCount: number,
    headerLabels: (string | React.ReactNode)[][]
) =>
    // create array with length of column count
    Array(columnCount)
        .fill('')
        .reduce((labels: string[], _, colIndex) => {
            // an array with all labels for a column
            const colLabels =
                // create array with length of rows
                Array(rowCount)
                    .fill('')
                    // get label for current row & col
                    .map((__, rowIndex) => headerLabels[rowIndex][colIndex])
                    // remove empty ones
                    .filter((val) => val)

            return [...labels, colLabels.join(' / ')]
        }, [])

export const extractHeaderLabels = (children: React.ReactNode): string[] => {
    if (React.Children.count(children) === 0) {
        return []
    }

    const rows = extractRowsFromTableChildren(children)

    if (!rows.length) {
        return []
    }

    const rowCount = rows.length
    const columnCount = calculateColumnCount(rows[0])
    const headerLabels = rows.map(mapCellsToLabels)

    return combineRowLables(columnCount, rowCount, headerLabels)
}
