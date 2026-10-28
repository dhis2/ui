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
    OuTreeContainer,
    OuTreeLoader,
    OuTreeNodeLabel,
    OuTreeNodeStoreProvider,
    OuTreeRetryNode,
    OuTreeRetrySkeleton,
    OuTreeRowShell,
    OuTreeSkeleton,
    OuTreeToggle,
    OuTreeVirtualRow,
    OuTreeVirtualSizer,
    type RenderLabel,
} from './ou-tree/index'

const description = `
A replacement for \`OrganisationUnitTree\`, not exported from any package yet.
It renders browse mode as a virtualised list: only the visible rows are in
the DOM, rows are measured so a long name wraps and takes the space it needs,
and children load in pages, with skeleton rows where a page has not arrived.

The tree fills its box, so the box needs a height. The stories run over an
in-memory stand-in for the endpoint with 19,190 PAHO organisation units, in a
400px by 600px box. The stand-in answers after 1.5 seconds, so every loading
state can be seen; start Storybook with
\`STORYBOOK_OU_TREE_DELAY=<milliseconds>\` for another latency, 0 included
(the loading and errors story keeps at least one second).

\`renderLabel\` swaps the label slot and keeps the row's indent, toggle and
loader. It must be a stable function: define it outside the component or
memoise it.

The \`Building block:\` stories show the pieces the tree is composed of, each
in each state, with no tree behind them.
`

export default {
    title: 'OuTree',
    component: OuTree,
    parameters: {
        componentSubtitle:
            'Virtualised, paged organisation unit tree (browse mode).',
        docs: { description: { component: description } },
    },
}

const AMR = 'nOsaOsg36TR'
const CAR = 'eFkh5oWtyud'
const BRAZIL = 'KIefFmlLBBF'
const MINAS_GERAIS = 'IsBNuUZU5zm'
const RIO_DE_JANEIRO = 'bZ3jYafKNhw'
const ARGENTINA = 'G1m9fXttEFw'
const COLOMBIA = 'V0f2N6oMsxs'
const PAHO_ROOTS = [AMR, CAR]

/**
 * The stand-in's latency in milliseconds: enough to see every loading
 * state in a demo, unless the environment says otherwise.
 */
const delay =
    process.env.STORYBOOK_OU_TREE_DELAY === undefined
        ? 1500
        : Number(process.env.STORYBOOK_OU_TREE_DELAY) || 0

const data = {
    [TREE_RESOURCE]: createTreeResolver({ ...pahoOrgUnits, delay }),
    [GIST_RESOURCE]: createGistResolver({ ...pahoOrgUnits, delay }),
}

/** The providers a tree needs, over the stand-in, and a bordered box. */
const Tree = ({
    data: treeData = data,
    children,
}: {
    data?: typeof data
    children: React.ReactNode
}) => (
    <CustomDataProvider data={treeData}>
        <OuTreeNodeStoreProvider>
            <div
                style={{
                    width: 400,
                    height: 600,
                    border: `1px solid ${colors.grey400}`,
                }}
            >
                {children}
            </div>
        </OuTreeNodeStoreProvider>
    </CustomDataProvider>
)

export const Default = () => (
    <Tree>
        <OuTree rootIds={PAHO_ROOTS} />
    </Tree>
)

export const InitiallyOpen = () => (
    <Tree>
        <OuTree
            rootIds={PAHO_ROOTS}
            initiallyOpen={[AMR, BRAZIL, MINAS_GERAIS]}
        />
    </Tree>
)

export const LongNames = () => (
    <Tree>
        <OuTree
            rootIds={PAHO_ROOTS}
            initiallyOpen={[AMR, ARGENTINA, COLOMBIA]}
        />
    </Tree>
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
    <Tree>
        <OuTree
            rootIds={PAHO_ROOTS}
            initiallyOpen={[AMR, BRAZIL]}
            renderLabel={renderLabel}
        />
    </Tree>
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

/**
 * Rio de Janeiro's first page fails, so it does not open: its row is a
 * retry button. Minas Gerais's third page fails: open it and scroll to the
 * retry skeletons.
 */
export const LoadingAndErrors = () => (
    <Tree data={slowData}>
        <OuTree
            rootIds={PAHO_ROOTS}
            initiallyOpen={[AMR, BRAZIL, RIO_DE_JANEIRO]}
        />
    </Tree>
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
    <Tree data={failingRootsData}>
        <OuTree rootIds={PAHO_ROOTS} />
    </Tree>
)

export const RightToLeft = () => (
    <Tree>
        <div dir="rtl" style={{ height: '100%' }}>
            <OuTree rootIds={PAHO_ROOTS} initiallyOpen={[AMR]} />
        </div>
    </Tree>
)

// Building blocks: each piece in each state, with no tree behind it.

const noop = () => undefined
const LONG_NAME = 'Archipielago de San Andres, Providencia y Santa Ca'

const Stack = ({ children }: { children: React.ReactNode }) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            padding: 16,
        }}
    >
        {children}
    </div>
)

const Captioned = ({
    caption,
    width,
    children,
}: {
    caption: string
    width?: number
    children: React.ReactNode
}) => (
    <div style={{ width }}>
        <div style={{ fontSize: 12, color: colors.grey600, marginBottom: 4 }}>
            {caption}
        </div>
        {children}
    </div>
)

export const Toggle = () => (
    <Stack>
        <Captioned caption="closed">
            <OuTreeToggle open={false} onToggle={noop} />
        </Captioned>
        <Captioned caption="open">
            <OuTreeToggle open onToggle={noop} />
        </Captioned>
        <Captioned caption="leaf (the toggle's space, nothing in it)">
            <OuTreeToggle leaf />
        </Captioned>
    </Stack>
)
Toggle.storyName = 'Building block: Toggle'

export const Loader = () => (
    <Stack>
        <Captioned caption="loader">
            <OuTreeLoader />
        </Captioned>
    </Stack>
)
Loader.storyName = 'Building block: Loader'

export const RetryNode = () => (
    <Stack>
        <Captioned
            caption="a node whose children did not load (hover or focus for the sync icon)"
            width={240}
        >
            <OuTreeRowShell depth={0}>
                <OuTreeRetryNode onRetry={noop}>
                    <OuTreeNodeLabel>Rio de Janeiro</OuTreeNodeLabel>
                </OuTreeRetryNode>
            </OuTreeRowShell>
        </Captioned>
    </Stack>
)
RetryNode.storyName = 'Building block: Retry node'

export const Skeleton = () => (
    <Stack>
        <Captioned caption="skeleton">
            <OuTreeSkeleton />
        </Captioned>
    </Stack>
)
Skeleton.storyName = 'Building block: Skeleton'

export const RetrySkeleton = () => (
    <Stack>
        <Captioned caption="retry skeleton (hover or focus for the icon)">
            <OuTreeRetrySkeleton onRetry={noop} />
        </Captioned>
    </Stack>
)
RetrySkeleton.storyName = 'Building block: Retry skeleton'

export const NodeLabel = () => (
    <Stack>
        <Captioned caption="plain">
            <OuTreeNodeLabel>Central Province</OuTreeNodeLabel>
        </Captioned>
        <Captioned caption="clickable">
            <OuTreeNodeLabel clickable onClick={noop}>
                Central Province
            </OuTreeNodeLabel>
        </Captioned>
        <Captioned caption="wrapping in 160px">
            <div
                style={{
                    width: 160,
                    display: 'flex',
                    border: `1px dashed ${colors.grey400}`,
                }}
            >
                <OuTreeNodeLabel>{LONG_NAME}</OuTreeNodeLabel>
            </div>
        </Captioned>
    </Stack>
)
NodeLabel.storyName = 'Building block: Node label'

export const RowShell = () => (
    <Stack>
        <Captioned caption="depths 0 to 3, each with an open toggle and a label">
            {[0, 1, 2, 3].map((depth) => (
                <OuTreeRowShell key={depth} depth={depth}>
                    <OuTreeToggle open onToggle={noop} />
                    <OuTreeNodeLabel>Depth {depth}</OuTreeNodeLabel>
                </OuTreeRowShell>
            ))}
        </Captioned>
        <Captioned caption="depth 2 with a wrapped label, in 240px" width={240}>
            <OuTreeRowShell depth={2}>
                <OuTreeToggle open onToggle={noop} />
                <OuTreeNodeLabel>{LONG_NAME}</OuTreeNodeLabel>
            </OuTreeRowShell>
        </Captioned>
    </Stack>
)
RowShell.storyName = 'Building block: Row shell'

export const Structure = () => (
    <Stack>
        <Captioned
            caption="container (120px tall) with a 240px sizer and two rows placed at 0 and 48"
            width={320}
        >
            <div
                style={{ height: 120, border: `1px dashed ${colors.grey400}` }}
            >
                <OuTreeContainer>
                    <OuTreeVirtualSizer height={240}>
                        {[0, 2].map((index) => (
                            <OuTreeVirtualRow
                                key={index}
                                item={{ index, start: index * 24, key: index }}
                                measureElement={noop}
                            >
                                <OuTreeRowShell depth={0}>
                                    <OuTreeNodeLabel>
                                        Row {index}
                                    </OuTreeNodeLabel>
                                </OuTreeRowShell>
                            </OuTreeVirtualRow>
                        ))}
                    </OuTreeVirtualSizer>
                </OuTreeContainer>
            </div>
        </Captioned>
    </Stack>
)
Structure.storyName = 'Building block: Structure'
