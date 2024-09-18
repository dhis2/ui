import * as React from 'react'

export interface TableProps {
    /**
     * Should be `<TableHead>`, `<TableBody>`, and `<TableFoot>` components
     */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    role?: string
    /**
     * Remove the default striping on alternating rows
     */
    suppressZebraStriping?: boolean
}

export const Table: React.FC<TableProps>

export interface TableBodyProps {
    /**
     * Should be `<TableRow>` components
     */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    role?: string
}

export const TableBody: React.FC<TableBodyProps>

export interface TableCellProps {
    children?: React.ReactNode
    className?: string
    colSpan?: string
    dataTest?: string
    /**
     * Uses less padding and height for information-dense layouts
     */
    dense?: boolean
    role?: string
    rowSpan?: string
}

export const TableCell: React.FC<TableCellProps>

export interface TableFootProps {
    /**
     * Should be `<TableRow>` components
     */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    role?: string
}

export const TableFoot: React.FC<TableFootProps>

export interface TableHeadProps {
    /**
     * Should be `<TableRowHead>` components
     */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    role?: string
}

export const TableHead: React.FC<TableHeadProps>

export interface TableCellHeadProps {
    children?: React.ReactNode
    className?: string
    colSpan?: string
    dataTest?: string
    /**
     * Uses less padding and height for information-dense layouts
     */
    dense?: boolean
    role?: string
    rowSpan?: string
}

export const TableCellHead: React.FC<TableCellHeadProps>

export interface TableRowProps {
    /**
     * Should be `<TableCell>` or `<TableCellHead>` components
     */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    role?: string
    /**
     * Disables the default row striping for this row
     */
    suppressZebraStriping?: boolean
}

export const TableRow: React.FC<TableRowProps>

export interface TableRowHeadProps {
    /**
     * Should be `<TableCellHead>` components
     */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    role?: string
    /**
     * Disables the default row striping for this row
     */
    suppressZebraStriping?: boolean
}

export const TableRowHead: React.FC<TableRowHeadProps>

/** STACKEDTABLE  */

export interface StackedTableBodyProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

export const StackedTableBody: React.FC<StackedTableBodyProps>

export interface StackedTableCellHeadProps {
    children?: string
    className?: string
    colSpan?: string
    dataTest?: string
    rowSpan?: string
}

export const StackedTableCellHead: React.FC<StackedTableCellHeadProps>

export interface StackedTableCellProps {
    children?: React.ReactNode
    className?: string
    colSpan?: string
    column?: number
    dataTest?: string
    headerLabels?: string[]
    hideTitle?: boolean
    rowSpan?: string
    title?: string
}

export const StackedTableCell: React.FC<StackedTableCellProps>

export interface StackedTableFootProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

export const StackedTableFoot: React.FC<StackedTableFootProps>

export interface StackedTableHeadProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

export const StackedTableHead: React.FC<StackedTableHeadProps>

export interface StackedTableRowHeadProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

export const StackedTableRowHead: React.FC<StackedTableRowHeadProps>

export interface StackedTableRowProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

export const StackedTableRow: React.FC<StackedTableRowProps>

export interface StackedTableProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * Labels for columns. Use an empty string for a column without a header.
     */
    headerLabels?: string[]
}

export const StackedTable: React.FC<StackedTableProps>

/** DATATABLE */

export type DataTableLayout = 'auto' | 'fixed' | 'initial' | 'inherit'

export interface DataTableProps {
    /**
     * Should be `<DataTableHead>`, `<DataTableBody>`, and `<DataTableFoot>` components
     */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * Sets the `datatable-layout` property. Switching to `fixed` can prevent style
     * issues when dealing with a datatable with multiple frozen columns or when dealing
     * with filter elements in the datatable headers.
     */
    layout?: DataTableLayout
    role?: string
    /**
     * Sets max-height of scrollbox
     */
    scrollHeight?: string
    /**
     * Sets max-width of scrollbox
     */
    scrollWidth?: string
    /**
     * Sets the `width` property. Providing an explicit width can prevent style
     * issues when dealing with horizontally scrolling datatables with a fixed layout.
     */
    width?: string
}

export const DataTable: React.ForwardRefExoticComponent<DataTableProps>

export interface DataTableBodyProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    loading?: boolean
    role?: string
}

export const DataTableBody: React.ForwardRefExoticComponent<DataTableBodyProps>

type TdProps = React.ComponentPropsWithoutRef<'td'>
type ThProps = React.ComponentPropsWithoutRef<'th'>
type DataTableCellForwardProps = Omit<
    TdProps | ThProps,
    keyof DataTableCellProps
>

export type DataTableCellProps = {
    /**
     * To toggle border color, for example for editing
     */
    active?: boolean
    align?: 'left' | 'center' | 'right'
    /**
     * Sets background color of the cell. Disables dynamic background colors from active, hover, and selected states
     */
    backgroundColor?: string
    bordered?: boolean
    children?: React.ReactNode
    className?: string
    colSpan?: string
    dataTest?: string
    /**
     * Mutually exclusive with muted and valid
     */
    error?: boolean
    /**
     * When true a TableHeaderCell with sticky positioning will be rendered
     */
    fixed?: boolean
    large?: boolean
    /**
     * Required when fixed
     */
    left?: boolean
    /**
     * Mutually exclusive with error and valid
     */
    muted?: boolean
    role?: string
    rowSpan?: string
    scope?: string
    /**
     * Surpress hover and active event styles
     */
    staticStyle?: boolean
    /**
     * Render a TableDataCell or TableHeaderCell respectively
     */
    tag?: 'td' | 'th'
    /**
     * Mutually exclusive with error and muted
     */
    valid?: boolean
    /**
     * Required when fixed
     */
    width?: string
    onClick?: React.MouseEventHandler
}

export const DataTableCell: React.ForwardRefExoticComponent<
    DataTableCellProps & DataTableCellForwardProps
>

export type DataTableSortDirection = 'asc' | 'desc' | 'default'

export interface DataTableColumnHeaderProps {
    align?: 'left' | 'center' | 'right'
    children?: React.ReactNode
    className?: string
    colSpan?: string
    dataTest?: string
    /**
     * The filter element (JSX), required when onFilterIconClick or showFilter are present
     */
    filter?: boolean
    fixed?: boolean
    large?: boolean
    /**
     * Left or top required when fixed
     */
    left?: boolean
    /**
     * Can be used to match a column with a property name
     */
    name?: string
    role?: string
    rowSpan?: string
    scope?: string
    showFilter?: boolean
    sortDirection?: DataTableSortDirection
    sortIconTitle?: string
    /**
     * Left or top required when fixed
     */
    top?: boolean
    width?: string
    onFilterIconClick?: (
        payload: { name?: string; active: boolean },
        event: React.MouseEvent<HTMLButtonElement>
    ) => void
    /**
     * Sort icon click callback with `nextSortDirection` and `name` in payload
     */
    onSortIconClick?: (
        payload: { name?: string; direction: DataTableSortDirection },
        event: React.MouseEvent<HTMLButtonElement>
    ) => void
}

export const DataTableColumnHeader: React.ForwardRefExoticComponent<DataTableColumnHeaderProps>

export const DataTableFoot: React.ForwardRefExoticComponent<TableFootProps>

export const DataTableHead: React.ForwardRefExoticComponent<TableHeadProps>

export interface DataTableRowProps {
    /**
     * Should be `<DataTableCell>` or `<DataTableCellHead>` components
     */
    children?: React.ReactNode
    className?: string
    dataTest?: string
    /**
     * Renders and additional table cell with drag icon and applies draggable styles
     */
    draggable?: boolean
    /**
     * This content will be rendered into an additional row with fullwidth cell and the presence of this prop will display an additional table cell with expand icon
     */
    expandableContent?: React.ReactNode
    /**
     * Toggles expand icon (up/down) and expandable content visibility
     */
    expanded?: boolean
    role?: string
    /**
     * Adds a green background color
     */
    selected?: boolean
    /**
     * Callback for expand icon cell clicks
     */
    onExpandToggle?: (payload: { expanded: boolean }) => void
}

export const DataTableRow: React.ForwardRefExoticComponent<DataTableRowProps>

export interface DataTableToolbarProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
    position?: 'top' | 'bottom'
}

export const DataTableToolbar: React.ForwardRefExoticComponent<DataTableToolbarProps>
