import raw from '../../../fixtures/paho-org-units.json'
import type {
    FixtureOrgUnit,
    FixtureOrgUnitGroup,
} from './in-memory-tree-endpoint'

export interface Fixture {
    orgUnits: FixtureOrgUnit[]
    groups: FixtureOrgUnitGroup[]
}

/**
 * 19,190 organisation units on four levels under two roots, from a PAHO
 * metadata export, reduced to the fixture shape by
 * `scripts/derive-ou-tree-fixture.js`. The widest parent has 853 children.
 * The file is generated and trusted; its test checks the counts.
 */
export const pahoOrgUnits = raw as Fixture
