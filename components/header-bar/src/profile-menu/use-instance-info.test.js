import { useDataQuery } from '@dhis2/app-runtime'
import { useInstanceInfo } from './use-instance-info.js'

jest.mock('@dhis2/app-runtime', () => ({
    useDataQuery: jest.fn(),
}))

describe('useInstanceInfo', () => {
    it('should use the "useDataQuery" hook with a query', () => {
        useInstanceInfo()
        expect(useDataQuery).toHaveBeenCalledTimes(1)
        expect(useDataQuery).toHaveBeenCalledWith({
            systemInfo: {
                resource: 'system/info',
                params: {
                    fields: ['version', 'revision'],
                },
            },
        })
    })
})
