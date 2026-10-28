#!/usr/bin/env node

/*
 * Derives fixtures/paho-org-units.json from a DHIS2 metadata export of
 * organisation units and groups. Keeps only what the in-memory tree endpoint
 * needs: id, name, shortName, path, level, parentId, openingDate,
 * closedDate and non-empty translations; for groups, id, name and member
 * ids. Everything else in the export (people, geometry, dates of creation,
 * codes, attribute values) is dropped, as is the unit "_País_Test", a
 * test unit that looks out of place among the countries.
 *
 * Usage: node scripts/derive-ou-tree-fixture.js < metadata-export.json
 */
const fs = require('node:fs')
const path = require('node:path')

if (process.stdin.isTTY) {
    console.error(
        'Usage: node scripts/derive-ou-tree-fixture.js < metadata-export.json'
    )
    process.exit(1)
}

const target = path.join(__dirname, '..', 'fixtures', 'paho-org-units.json')
const metadata = JSON.parse(fs.readFileSync(process.stdin.fd, 'utf8'))

const deriveOrgUnit = (ou) => {
    const unit = {
        id: ou.id,
        name: ou.name,
        shortName: ou.shortName,
        path: ou.path,
        level: ou.level,
    }
    if (ou.parent) {
        unit.parentId = ou.parent.id
    }
    if (ou.openingDate) {
        unit.openingDate = ou.openingDate
    }
    if (ou.closedDate) {
        unit.closedDate = ou.closedDate
    }
    if (ou.translations && ou.translations.length > 0) {
        unit.translations = ou.translations.map(
            ({ locale, property, value }) => ({ locale, property, value })
        )
    }
    return unit
}

const testUnitId = 'ENpzWwrAj7A'

const orgUnits = metadata.organisationUnits
    .filter((ou) => ou.id !== testUnitId)
    .map(deriveOrgUnit)
    .sort((a, b) => a.path.localeCompare(b.path))
const groups = metadata.organisationUnitGroups.map((group) => ({
    id: group.id,
    name: group.name,
    organisationUnits: group.organisationUnits.map((ou) => ou.id),
}))

fs.mkdirSync(path.dirname(target), { recursive: true })
fs.writeFileSync(target, JSON.stringify({ orgUnits, groups }))
console.log(
    `Wrote ${orgUnits.length} org units and ${groups.length} groups to ${target}`
)
