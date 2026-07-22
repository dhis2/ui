import { CustomDataProvider } from '@dhis2/app-runtime'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import React from 'react'
import { OrganisationUnitTree } from './organisation-unit-tree.js'

describe('OrganisationUnitTree', () => {
    const origError = console.error.bind(console)
    const errorMock = jest.fn()

    beforeEach(() => {
        console.error = errorMock
    })

    afterEach(() => {
        console.error = origError
        errorMock.mockClear()
    })

    describe('Controlled expanded props', () => {
        describe('Missing props', () => {
            it('should throw a prop-types error when "handleCollapse" is missing', () => {
                shallow(
                    <CustomDataProvider data={{}}>
                        <OrganisationUnitTree
                            roots="/A001"
                            expanded={[]}
                            onChange={() => {}}
                            handleExpand={() => {}}
                        />
                    </CustomDataProvider>
                )

                expect(errorMock).toHaveBeenCalledTimes(1)
                expect(errorMock.mock.calls[0][2]).toMatch(
                    /Invalid prop `handleCollapse` supplied to `OrganisationUnitTree`/,
                    {}
                )
            })

            it('should throw a prop-types error when "handleExpand" is missing', () => {
                shallow(
                    <CustomDataProvider data={{}}>
                        <OrganisationUnitTree
                            roots="/A001"
                            expanded={[]}
                            onChange={() => {}}
                            handleCollapse={() => {}}
                        />
                    </CustomDataProvider>
                )

                expect(errorMock).toHaveBeenCalledTimes(1)
                expect(errorMock.mock.calls[0][2]).toMatch(
                    /Invalid prop `handleExpand` supplied to `OrganisationUnitTree`/
                )
            })

            it('should throw a prop-types error when "expanded" is missing', () => {
                shallow(
                    <CustomDataProvider data={{}}>
                        <OrganisationUnitTree
                            roots="/A001"
                            onChange={() => {}}
                            handleCollapse={() => {}}
                            handleExpand={() => {}}
                        />
                    </CustomDataProvider>
                )

                expect(errorMock).toHaveBeenCalledTimes(1)
                expect(errorMock.mock.calls[0][2]).toMatch(
                    'Invalid prop `expanded` supplied to `OrganisationUnitTree`, this prop is conditionally required but has value `undefined`. The condition that made this prop required is: `props => !!props.handleExpand || !!props.handleCollapse`.'
                )
            })
        })
    })

    describe('Root node sorting', () => {
        // displayNames intentionally out of alphabetical order relative to ids
        const rootNodes = {
            A001: { id: 'A001', path: '/A001', displayName: 'Bravo' },
            A002: { id: 'A002', path: '/A002', displayName: 'Alpha' },
            A003: { id: 'A003', path: '/A003', displayName: 'Charlie' },
        }

        const dataProvider = {
            organisationUnits: (type, { id }) => {
                const node = rootNodes[id]
                if (node) {
                    // children: 0 so nodes don't try to load descendants
                    return { ...node, children: 0 }
                }
                return Promise.reject(`No org unit with id "${id}"`)
            },
        }

        it('sorts root nodes alphabetically by displayName by default', async () => {
            const { container, findByText } = render(
                <CustomDataProvider data={dataProvider}>
                    <OrganisationUnitTree
                        roots={['A001', 'A002', 'A003']}
                        onChange={() => {}}
                    />
                </CustomDataProvider>
            )

            await findByText('Alpha')

            const { textContent } = container
            expect(textContent.indexOf('Alpha')).toBeLessThan(
                textContent.indexOf('Bravo')
            )
            expect(textContent.indexOf('Bravo')).toBeLessThan(
                textContent.indexOf('Charlie')
            )
        })

        it('keeps the provided roots order when suppressAlphabeticalSorting is true', async () => {
            const { container, findByText } = render(
                <CustomDataProvider data={dataProvider}>
                    <OrganisationUnitTree
                        roots={['A003', 'A001', 'A002']}
                        suppressAlphabeticalSorting
                        onChange={() => {}}
                    />
                </CustomDataProvider>
            )

            await findByText('Charlie')

            const { textContent } = container
            expect(textContent.indexOf('Charlie')).toBeLessThan(
                textContent.indexOf('Bravo')
            )
            expect(textContent.indexOf('Bravo')).toBeLessThan(
                textContent.indexOf('Alpha')
            )
        })
    })
})
