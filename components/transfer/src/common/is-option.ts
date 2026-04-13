export interface TransferOptionObject {
    label: string
    value: string
    disabled?: boolean
}

export const isOption = (
    left: TransferOptionObject,
    right: TransferOptionObject
): boolean => left.label === right.label && left.value === right.value
