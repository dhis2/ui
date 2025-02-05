import { useCallback, useMemo } from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'

const useGrid = ({ rows, columns }) => {
    const { highlightedIndex } = useCommandPaletteContext()
    const rowIndexDifference = columns - 1

    const firstIndexPerRowArray = useMemo(() => {
        const arr = []
        for (let rowNumber = 0; rowNumber < rows; rowNumber++) {
            arr.push(rowNumber * columns)
        }
        return arr
    }, [rows, columns])

    const lastIndexPerRowArray = useMemo(() => {
        return firstIndexPerRowArray.map(
            (firstIndex) => firstIndex + rowIndexDifference
        )
    }, [firstIndexPerRowArray, rowIndexDifference])

    const activeRow = useMemo(() => {
        let row = 0
        for (let rowNumber = 0; rowNumber < rows; rowNumber++) {
            if (highlightedIndex >= firstIndexPerRowArray[rowNumber]) {
                row = rowNumber
            }
        }
        return row
    }, [rows, firstIndexPerRowArray, highlightedIndex])

    const [activeRowFirstIndex, activeRowLastIndex] = useMemo(() => {
        const activeRowFirstIndex = firstIndexPerRowArray[activeRow]
        const activeRowLastIndex = lastIndexPerRowArray[activeRow]

        return [activeRowFirstIndex, activeRowLastIndex]
    }, [activeRow, firstIndexPerRowArray, lastIndexPerRowArray])

    const nextLeftIndex = useMemo(() => {
        return highlightedIndex > activeRowFirstIndex
            ? highlightedIndex - 1
            : activeRowLastIndex
    }, [highlightedIndex, activeRowFirstIndex, activeRowLastIndex])

    const nextRightIndex = useMemo(() => {
        return highlightedIndex >= activeRowLastIndex
            ? activeRowFirstIndex
            : highlightedIndex + 1
    }, [highlightedIndex, activeRowFirstIndex, activeRowLastIndex])

    const lastRowFirstIndex = useMemo(() => {
        return firstIndexPerRowArray[rows - 1]
    }, [firstIndexPerRowArray, rows])

    const isInFirstRow = useCallback(
        (index) => {
            const firstRowFirstIndex = firstIndexPerRowArray[0]
            const firstRowLastIndex = lastIndexPerRowArray[0]

            return index >= firstRowFirstIndex && index <= firstRowLastIndex
        },
        [firstIndexPerRowArray, lastIndexPerRowArray]
    )

    const isInLastRow = useCallback(
        (index) => {
            return index >= lastRowFirstIndex
        },
        [lastRowFirstIndex]
    )

    return {
        isInFirstRow,
        isInLastRow,
        nextLeftIndex,
        nextRightIndex,
        lastRowFirstIndex,
    }
}

export default useGrid
