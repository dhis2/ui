class GridNavigation {
    constructor(rows, columns) {
        this.rows = rows
        this.columns = columns
        this.expectedGridSize = rows * columns
    }

    getFirstIndexPerRow = () => {
        const arr = []
        for (let rowNumber = 0; rowNumber < this.rows; rowNumber++) {
            arr.push(rowNumber * this.columns)
        }
        return arr
    }

    getLastIndexPerRow = (gridSize) => {
        const rowIndexDifference = this.columns - 1
        const arr = []

        for (let rowNumber = 0; rowNumber < this.rows - 1; rowNumber++) {
            arr.push(rowNumber * this.columns + rowIndexDifference)
        }
        if (gridSize < this.expectedGridSize) {
            arr.push(gridSize - 1)
        } else {
            arr.push(this.expectedGridSize - 1)
        }
        return arr
    }

    getActiveRow = (highlightedIndex) => {
        let row = 0
        const firstIndexPerRowArray = this.getFirstIndexPerRow()

        for (let rowNumber = 0; rowNumber < this.rows; rowNumber++) {
            if (highlightedIndex >= firstIndexPerRowArray[rowNumber]) {
                row = rowNumber
            }
        }
        return row
    }

    getFirstIndexOfActiveRow = (highlightedIndex) => {
        const activeRow = this.getActiveRow(highlightedIndex)
        const firstIndexPerRowArray = this.getFirstIndexPerRow()

        return firstIndexPerRowArray[activeRow]
    }

    getLastIndexOfActiveRow = (highlightedIndex, gridSize) => {
        const activeRow = this.getActiveRow(highlightedIndex)
        const lastIndexPerRowArray = this.getLastIndexPerRow(gridSize)
        const lastIndexOfActiveRow = lastIndexPerRowArray[activeRow]

        return lastIndexOfActiveRow || highlightedIndex
    }

    getFirstIndexOfLastRow = () => {
        const firstIndexPerRowArray = this.getFirstIndexPerRow()
        return firstIndexPerRowArray[this.rows - 1]
    }

    isInFirstRow = (index, gridSize) => {
        const firstIndexPerRowArray = this.getFirstIndexPerRow()
        const lastIndexPerRowArray = this.getLastIndexPerRow(gridSize)

        const firstIndexOfFirstRow = firstIndexPerRowArray[0]
        const lastIndexOfFirstRow = lastIndexPerRowArray[0]

        return index >= firstIndexOfFirstRow && index <= lastIndexOfFirstRow
    }

    isInLastRow = (index, gridSize) => {
        const firstIndexOfLastRow = this.getFirstIndexOfLastRow()
        const lastIndexOfLastRow = this.getLastIndexPerRow(gridSize)?.pop()
        if (gridSize === this.expectedGridSize) {
            return index >= firstIndexOfLastRow && index <= lastIndexOfLastRow
        } else {
            return index + this.columns > lastIndexOfLastRow
        }
    }

    getNextLeftIndex = (highlightedIndex, gridSize) => {
        const firstIndexOfActiveRow =
            this.getFirstIndexOfActiveRow(highlightedIndex)

        const lastIndexOfActiveRow = this.getLastIndexOfActiveRow(
            highlightedIndex,
            gridSize
        )

        return highlightedIndex > firstIndexOfActiveRow
            ? highlightedIndex - 1
            : lastIndexOfActiveRow
    }

    getNextRightIndex = (highlightedIndex, gridSize) => {
        const firstIndexOfActiveRow =
            this.getFirstIndexOfActiveRow(highlightedIndex)
        const lastIndexOfActiveRow = this.getLastIndexOfActiveRow(
            highlightedIndex,
            gridSize
        )

        return highlightedIndex >= lastIndexOfActiveRow
            ? firstIndexOfActiveRow
            : highlightedIndex + 1
    }

    static getNextUpperIndex = ({
        isTopIndexInCurrentSection,
        lastIndexInNextSection,
        verticalGap,
        highlightedIndex,
    }) => {
        if (isTopIndexInCurrentSection) {
            return lastIndexInNextSection
        } else {
            return highlightedIndex - verticalGap
        }
    }

    static getNextLowerIndex = ({
        isLastIndexInCurrentSection,
        verticalGap,
        highlightedIndex,
    }) => {
        if (isLastIndexInCurrentSection) {
            return 0
        } else {
            return highlightedIndex + verticalGap
        }
    }
}

export default GridNavigation
