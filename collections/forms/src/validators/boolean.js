import i18n from '../locales/index.js'
import { isEmpty } from './helpers/index.js'

const boolean = (value) => {
    if (isEmpty(value) || typeof value === 'boolean') {
        return undefined
    }

    return i18n.t('Please provide a boolean value')
}

export { boolean }
