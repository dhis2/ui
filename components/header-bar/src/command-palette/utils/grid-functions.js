// Grid functions for the home view

export const getFirstIndexPerRow = ({ rows, columns }) => {
    const arr = []
    for (let rowNumber = 0; rowNumber < rows; rowNumber++) {
        arr.push(rowNumber * columns)
    }
    return arr
}

export const getLastIndexPerRow = ({ rows, columns, gridSize }) => {
    const rowIndexDifference = columns - 1
    const arr = []

    for (let rowNumber = 0; rowNumber < rows - 1; rowNumber++) {
        arr.push(rowNumber * columns + rowIndexDifference)
    }
    if (gridSize < rows * columns) {
        arr.push(gridSize - 1)
    } else {
        arr.push(rows * columns - 1)
    }
    return arr
}

export const getActiveRow = ({ rows, columns, highlightedIndex }) => {
    let row = 0
    const firstIndexPerRowArray = getFirstIndexPerRow({ rows, columns })

    for (let rowNumber = 0; rowNumber < rows; rowNumber++) {
        if (highlightedIndex >= firstIndexPerRowArray[rowNumber]) {
            row = rowNumber
        }
    }
    return row
}

export const getFirstIndexOfActiveRow = ({
    rows,
    columns,
    highlightedIndex,
}) => {
    const activeRow = getActiveRow({ rows, columns, highlightedIndex })
    const firstIndexPerRowArray = getFirstIndexPerRow({ rows, columns })

    return firstIndexPerRowArray[activeRow]
}

export const getLastIndexOfActiveRow = ({
    rows,
    columns,
    highlightedIndex,
    gridSize,
}) => {
    const activeRow = getActiveRow({ rows, columns, highlightedIndex })
    const lastIndexPerRowArray = getLastIndexPerRow({
        rows,
        columns,
        gridSize,
    })

    return lastIndexPerRowArray[activeRow]
}

export const getFirstIndexOfLastRow = ({ rows, columns }) => {
    const firstIndexPerRowArray = getFirstIndexPerRow({ rows, columns })
    return firstIndexPerRowArray[rows - 1]
}

export const getNextLeftIndex = ({
    rows,
    columns,
    highlightedIndex,
    gridSize,
}) => {
    const firstIndexOfActiveRow = getFirstIndexOfActiveRow({
        rows,
        columns,
        highlightedIndex,
    })

    const lastIndexOfActiveRow =
        getLastIndexOfActiveRow({
            rows,
            columns,
            highlightedIndex,
            gridSize,
        }) || highlightedIndex

    return highlightedIndex > firstIndexOfActiveRow
        ? highlightedIndex - 1
        : lastIndexOfActiveRow
}

export const getNextRightIndex = ({
    rows,
    columns,
    highlightedIndex,
    gridSize,
}) => {
    const firstIndexOfActiveRow = getFirstIndexOfActiveRow({
        rows,
        columns,
        highlightedIndex,
    })
    const lastIndexOfActiveRow =
        getLastIndexOfActiveRow({
            rows,
            columns,
            highlightedIndex,
            gridSize,
        }) || highlightedIndex

    return highlightedIndex >= lastIndexOfActiveRow
        ? firstIndexOfActiveRow
        : highlightedIndex + 1
}

export const isInFirstRow = ({ rows, columns, index, gridSize }) => {
    const firstIndexPerRowArray = getFirstIndexPerRow({ rows, columns })
    const lastIndexPerRowArray = getLastIndexPerRow({
        rows,
        columns,
        gridSize,
    })

    const firstIndexOfFirstRow = firstIndexPerRowArray[0]
    const lastIndexOfFirstRow = lastIndexPerRowArray[0]

    return index >= firstIndexOfFirstRow && index <= lastIndexOfFirstRow
}

export const isInLastRow = ({ rows, columns, index, gridSize }) => {
    const firstIndexOfLastRow = getFirstIndexOfLastRow({ rows, columns })
    const lastIndexOfLastRow = getLastIndexPerRow({
        rows,
        columns,
        gridSize,
    })?.pop()
    if (gridSize === rows * columns) {
        return index >= firstIndexOfLastRow && index <= lastIndexOfLastRow
    } else {
        return index + columns > lastIndexOfLastRow
    }
}
