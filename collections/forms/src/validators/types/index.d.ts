type ValuesWithId = Array<{ id: string }> | undefined

type Validator = (value: unknown) => string | undefined

export const alphaNumeric: Validator
export const boolean: Validator
export const composeValidators: (...validators: Validator[]) => Validator

export const createCharacterLengthRange: (
    lowerBound: number,
    upperBound: number,
    customMessage?: string
) => Validator
export const createEqualTo: (key: string, description?: string) => Validator
export const createMaxCharacterLength: (upperBound: number) => Validator
export const createMaxNumber: (upperBound: number) => Validator
export const createMinCharacterLength: (lowerBound: number) => Validator
export const createMinNumber: (lowerBound: number) => Validator
export const createNumberRange: (
    lowerBound: number,
    upperBound: number,
    customMessage?: string
) => Validator
export const createPattern: (pattern: RegExp, message?: string) => Validator
export const dhis2Password: Validator
export const dhis2Username: Validator
export const email: Validator
export const hasValue: Validator
export const integer: Validator
export const internationalPhoneNumber: Validator
export const number: Validator
export const string: Validator
export const url: Validator
