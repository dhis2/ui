export const inputTypes = [
    'text',
    'number',
    'password',
    'email',
    'url',
    'tel',
    'date',
    'datetime',
    'datetime-local',
    'month',
    'week',
    'time',
    'search',
] as const

export type InputType = (typeof inputTypes)[number]
