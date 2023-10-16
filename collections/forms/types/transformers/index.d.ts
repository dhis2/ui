
import type { ValuesWithId } from "../validators"

export const arrayWithIdObjects: {
    format: (value: ValuesWithId) => string,
    pars: (value: string) => ValuesWithId
}
