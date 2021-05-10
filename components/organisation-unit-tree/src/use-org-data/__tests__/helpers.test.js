import {
    createOrgUnitQuery,
    createQuery,
    addMissingDisplayNameProps,
} from '../helpers'

describe('OrganisationUnitTree - createOrgUnitQuery', () => {
    it('should create a query resource object with the id in the resource url for an id', () => {
        const id = 'foo'
        const actual = createOrgUnitQuery(id)
        const expected = expect.objectContaining({
            resource: `organisationUnits/foo`,
        })

        expect(actual).toEqual(expected)
    })

    it('should load the displayName, path and children with their path, displayName, childrenIds and id', () => {
        const variables = { withChildren: true }
        const actual = createOrgUnitQuery('foo', variables)
        const params = actual.params(variables)
        const expected = expect.objectContaining({
            params: expect.objectContaining({
                fields: 'children[path,displayName,id],displayName,path,id',
            }),
        })

        expect({ ...actual, params }).toEqual(expected)
    })

    it('should load the displayName, path and id', () => {
        const variables = { withChildren: false }
        const actual = createOrgUnitQuery('foo', variables)
        const params = actual.params(variables)
        const expected = expect.objectContaining({
            params: expect.objectContaining({
                fields: 'displayName,path,id',
            }),
        })

        expect({ ...actual, params }).toEqual(expected)
    })

    it('should send the isUserDataViewFallback parameter', () => {
        const variables = { isUserDataViewFallback: true }
        const actual = createOrgUnitQuery('foo', variables)
        const params = actual.params(variables)
        const expected = expect.objectContaining({
            params: expect.objectContaining({
                isUserDataViewFallback: true,
            }),
        })

        expect({ ...actual, params }).toEqual(expected)
    })

    it('should load without pagination', () => {
        const actual = createOrgUnitQuery('foo')
        const params = actual.params({})
        const expected = expect.objectContaining({
            params: expect.objectContaining({
                paging: false,
            }),
        })

        expect({ ...actual, params }).toEqual(expected)
    })
})

describe('OrganisationUnitTree - createQuery', () => {
    it('should create an object with a query for each id', () => {
        const id1 = 'foo'
        const id2 = 'bar'
        const id1Query = createOrgUnitQuery(id1)
        const id2Query = createOrgUnitQuery(id2)
        const ids = [id1, id2]

        const actual = JSON.stringify(createQuery(ids))
        const expected = JSON.stringify({ foo: id1Query, bar: id2Query })

        expect(actual).toEqual(expected)
    })
})

describe('OrganisationUnitTree - addMissingDisplayNameProps', () => {
    it('should add an empty string as displayName if the prop is falsy', () => {
        const nodes = {
            id1: { noDisplayName: 'foo' },
            id2: { displayName: null },
            id3: { displayName: false },
            id4: { displayName: undefined },
            id5: { displayName: 'Should stay the same' },
        }

        const actual = addMissingDisplayNameProps(nodes)
        const expected = {
            id1: { noDisplayName: 'foo', displayName: '' },
            id2: { displayName: '' },
            id3: { displayName: '' },
            id4: { displayName: '' },
            id5: { displayName: 'Should stay the same' },
        }

        expect(actual).toEqual(expected)
    })
})
