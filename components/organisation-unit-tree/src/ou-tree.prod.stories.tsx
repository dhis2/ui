import { CustomDataProvider } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import React from 'react'
import {
    createGistResolver,
    createTreeResolver,
    pahoOrgUnits,
} from './ou-tree/__fixtures__/index'
import { GIST_RESOURCE, TREE_RESOURCE } from './ou-tree/data/index'
import {
    OuTree,
    OuTreeNodeLabel,
    OuTreeNodeStoreProvider,
    type RenderLabel,
} from './ou-tree/index'

const description = `
A replacement for \`OrganisationUnitTree\`, not exported from any package yet.
It renders browse mode as a virtualised list: only the visible rows are in
the DOM, rows are measured so a long name wraps and takes the space it needs,
and children load in pages, with skeleton rows where a page has not arrived.

The tree fills its box, so the box needs a height. The stories run over an
in-memory stand-in for the endpoint with 19,190 PAHO organisation units, in a
400px by 600px box. The stand-in answers at once; start Storybook with
\`STORYBOOK_OU_TREE_DELAY=<milliseconds>\` to give every request that much
latency (the loading and errors story keeps at least one second).

\`renderLabel\` swaps the label slot and keeps the row's indent, toggle, loader
and retry button. It must be a stable function: define it outside the
component or memoise it.
`

const AMR = 'nOsaOsg36TR'
const CAR = 'eFkh5oWtyud'
const BRAZIL = 'KIefFmlLBBF'
const MINAS_GERAIS = 'IsBNuUZU5zm'
const RIO_DE_JANEIRO = 'bZ3jYafKNhw'
const ARGENTINA = 'G1m9fXttEFw'
const COLOMBIA = 'V0f2N6oMsxs'
const PAHO_ROOTS = [AMR, CAR]

/** Latency of the stand-in, in milliseconds, from the environment. */
const delay = Number(process.env.STORYBOOK_OU_TREE_DELAY) || 0

const data = {
    [TREE_RESOURCE]: createTreeResolver({ ...pahoOrgUnits, delay }),
    [GIST_RESOURCE]: createGistResolver({ ...pahoOrgUnits, delay }),
}

const Box = ({ children }: { children: React.ReactNode }) => (
    <div
        style={{
            width: 400,
            height: 600,
            border: `1px solid ${colors.grey400}`,
        }}
    >
        {children}
    </div>
)

export default {
    title: 'OuTree',
    component: OuTree,
    decorators: [
        (fn: () => React.ReactNode) => (
            <CustomDataProvider data={data}>
                <OuTreeNodeStoreProvider>
                    <Box>{fn()}</Box>
                </OuTreeNodeStoreProvider>
            </CustomDataProvider>
        ),
    ],
    parameters: {
        componentSubtitle:
            'Virtualised, paged organisation unit tree (browse mode).',
        docs: { description: { component: description } },
    },
}

export const Default = () => <OuTree rootIds={PAHO_ROOTS} />

export const InitiallyOpen = () => (
    <OuTree rootIds={PAHO_ROOTS} initiallyOpen={[AMR, BRAZIL, MINAS_GERAIS]} />
)

export const LongNames = () => (
    <OuTree rootIds={PAHO_ROOTS} initiallyOpen={[AMR, ARGENTINA, COLOMBIA]} />
)

const renderLabel: RenderLabel = ({ node, toggle }) => (
    <OuTreeNodeLabel
        clickable={!node.leaf}
        onClick={node.leaf ? undefined : toggle}
    >
        {node.leaf ? '• ' : ''}
        {node.displayName}
        <span style={{ color: colors.grey600 }}> L{node.level}</span>
    </OuTreeNodeLabel>
)

export const CustomLabel = () => (
    <OuTree
        rootIds={PAHO_ROOTS}
        initiallyOpen={[AMR, BRAZIL]}
        renderLabel={renderLabel}
    />
)

const slowData = {
    [TREE_RESOURCE]: createTreeResolver({
        ...pahoOrgUnits,
        delay: Math.max(delay, 1000),
        failChildrenPageWith: (parentId, page) => {
            if (parentId === MINAS_GERAIS && page === 3) {
                return new Error('Simulated failure of page 3')
            }
            return parentId === RIO_DE_JANEIRO && page === 1
                ? new Error('Simulated failure of page 1')
                : undefined
        },
    }),
    [GIST_RESOURCE]: createGistResolver({
        ...pahoOrgUnits,
        delay: Math.max(delay, 1000),
    }),
}

export const LoadingAndErrors = () => (
    <CustomDataProvider data={slowData}>
        <OuTreeNodeStoreProvider>
            <OuTree rootIds={PAHO_ROOTS} initiallyOpen={[AMR, BRAZIL]} />
        </OuTreeNodeStoreProvider>
    </CustomDataProvider>
)

const failingRootsData = {
    [TREE_RESOURCE]: createTreeResolver({ ...pahoOrgUnits, delay }),
    [GIST_RESOURCE]: createGistResolver({
        ...pahoOrgUnits,
        delay,
        failWith: () => new Error('Simulated failure'),
    }),
}

export const RootsFailed = () => (
    <CustomDataProvider data={failingRootsData}>
        <OuTreeNodeStoreProvider>
            <OuTree rootIds={PAHO_ROOTS} />
        </OuTreeNodeStoreProvider>
    </CustomDataProvider>
)

export const RightToLeft = () => (
    <div dir="rtl" style={{ height: '100%' }}>
        <OuTree rootIds={PAHO_ROOTS} initiallyOpen={[AMR]} />
    </div>
)
