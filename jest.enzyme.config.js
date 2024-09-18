import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

jest.mock('styled-jsx/css', () => {
    const actualExports = jest.requireActual('styled-jsx/css')
    const defaultExport = jest.fn()
    defaultExport.resolve = jest.fn(() => ({ styles: '', className: '' }))
    defaultExport.css = jest.fn()

    return {
        ...actualExports,
        __esModule: true,
        css: defaultExport.css,
        resolve: defaultExport.resolve,
        default: defaultExport,
    }
})

configure({ adapter: new Adapter() })
