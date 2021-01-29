import React from 'react'
import { Chip } from './Chip.js'

window.onClick = (payload, event) => {
    console.log('onClick payload', payload)
    console.log('onClick event', event)
}

window.onRemove = (payload, event) => {
    console.log('onRemove payload', payload)
    console.log('onRemove event', event)
}

const onClick = (...args) => window.onClick(...args)
const onRemove = (...args) => window.onRemove(...args)

export default {
    title: 'Actions/Chip',
    component: Chip,
}

export const Default = () => <Chip onClick={onClick}>Chippy</Chip>

export const Selected = () => (
    <Chip selected onClick={onClick}>
        Chipmunk
    </Chip>
)

export const Overflow = () => (
    <Chip selected onClick={onClick}>
        A super long chip which should definitely truncate
    </Chip>
)

export const Removable = () => (
    <Chip onClick={onClick} onRemove={onRemove}>
        Chipmunk
    </Chip>
)

export const Icon = () => (
    <Chip onClick={onClick} icon={<Globe />}>
        With an icon
    </Chip>
)

export const Dense = () => <Chip dense>I am dense</Chip>

export const DenseRemoveable = () => (
    <Chip dense onRemove={onRemove}>
        Removeable and dense
    </Chip>
)
DenseRemoveable.storyName = 'Dense removeable'

const Globe = () => (
    <svg role="img" viewBox="0 0 24 24" height="100px" width="100px">
        <title>LGTM icon</title>
        <path d="M12.008 4.866c-2.914 0-5.377.679-6.995 2.11-.05-.088-.085-.163-.141-.253-.17-.273-.328-.583-.828-.89a2.699 2.699 0 0 0-1.014-.387 2.14 2.14 0 0 0-.47-.001l.099-.013c-.91 0-1.442.546-1.788 1.016-.344.47-.566.999-.71 1.577-.285 1.155-.289 2.651.81 3.767.575.588 1.251.863 1.863 1.027.118.032.223.04.336.063.399 1.892 1.58 3.492 3.158 4.381v.001h.002c.929.522 1.81.761 2.472 1.014.924.357 1.9.751 3.036.85l.06.006h.15c1.306 0 2.296-.527 3.152-.855.655-.25 1.54-.482 2.477-1.008a6.156 6.156 0 0 0 1.196-.88 6.759 6.759 0 0 0 1.967-3.45 3.913 3.913 0 0 0 2.19-1.15c1.098-1.115 1.094-2.611.809-3.766-.144-.578-.366-1.106-.71-1.577-.345-.47-.879-1.016-1.788-1.016l.1.013a2.14 2.14 0 0 0-.472.002 2.695 2.695 0 0 0-1.01.385c-.499.307-.658.616-.827.888-.055.089-.09.163-.139.249-1.617-1.426-4.076-2.103-6.985-2.103zm.023 1.37c3.557 0 6.013 1.065 7.057 2.97.63-.243 1.093-1.89 1.612-2.209.42-.26.665-.195.665-.195.95 0 1.93 2.797.712 4.032-.644.657-1.83.842-2.422.795-.045 1.906-1.155 3.626-2.624 4.45-.748.42-1.552.64-2.296.924-.921.352-1.786.763-2.662.763h-.092c-.872-.076-1.74-.407-2.662-.763-.744-.285-1.548-.51-2.296-.93-1.46-.824-2.571-2.54-2.616-4.445-.587.05-1.788-.132-2.436-.794-1.217-1.235-.238-4.032.712-4.032 0 0 .246-.064.666.195.521.321.987 1.984 1.62 2.214C6.013 7.3 8.47 6.236 12.032 6.236zm-3.876 2.33a3.053 3.053 0 1 0 0 6.105 3.053 3.053 0 0 0 0-6.105zm7.751 0a3.052 3.052 0 1 0 0 6.105 3.052 3.052 0 0 0 0-6.105zM8.591 10.28a1.357 1.357 0 0 1 0 2.713 1.356 1.356 0 0 1-1.313-1.694.57.57 0 0 0 1.098-.216.57.57 0 0 0-.547-.57 1.35 1.35 0 0 1 .762-.233zm6.888 0a1.357 1.357 0 0 1 0 2.713 1.356 1.356 0 0 1-1.314-1.694.57.57 0 1 0 .552-.785 1.35 1.35 0 0 1 .762-.234zM11.52 14.93c-.239.02-.377.146-.377.476 0 .21.138.365.378.365a.143.143 0 0 0 .033-.282c-.022-.005-.13-.044-.13-.136 0-.093 0-.125.183-.15.078-.012.116-.105.092-.18-.024-.075-.094-.1-.18-.093zm1.023 0c-.085-.006-.156.018-.18.093-.024.075.015.168.093.18.182.025.182.057.182.15 0 .092-.107.131-.13.136a.143.143 0 0 0 .033.282c.24 0 .379-.155.379-.365 0-.33-.139-.456-.377-.476z" />
    </svg>
)
