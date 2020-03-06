import {
    popperGenerator,
    defaultModifiers,
} from '@popperjs/core/lib/popper-lite'
import flip from '@popperjs/core/lib/modifiers/flip'
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow'

const createPopper = popperGenerator({
    defaultModifiers: [...defaultModifiers, flip, preventOverflow],
})

export { createPopper }
