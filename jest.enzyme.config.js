import util from 'util'
import Adapter from '@cfaester/enzyme-adapter-react-18'
import { configure } from 'enzyme'

configure({ adapter: new Adapter() })

Object.defineProperty(global, 'TextEncoder', {
    value: util.TextEncoder,
})
