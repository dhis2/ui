import i18n from '../locales/index.js'
import { isEmpty } from './helpers/index.js'

const hasValueMessage = i18n.t('Please provide a value')

const hasValue = value => (isEmpty(value) ? hasValueMessage : undefined)

export { hasValue, hasValueMessage }
