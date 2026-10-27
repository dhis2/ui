import { colors } from '@dhis2/ui-constants'
import React from 'react'
import {
    OuTreeContainer,
    OuTreeErrorIcon,
    OuTreeLoader,
    OuTreeNodeLabel,
    OuTreeRetryButton,
    OuTreeRetrySkeleton,
    OuTreeRowShell,
    OuTreeSkeleton,
    OuTreeToggle,
    OuTreeVirtualRow,
    OuTreeVirtualSizer,
} from './ou-tree/index'

export default {
    title: 'OuTree/Pieces',
    parameters: {
        componentSubtitle:
            'The pieces OuTree is built from, each in each state, with no tree behind them.',
    },
}

const noop = () => undefined
const LONG_NAME = 'Archipielago de San Andres, Providencia y Santa Ca'

const Column = ({ children }: { children: React.ReactNode }) => (
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
    <Column>
        <Captioned caption="closed">
            <OuTreeToggle open={false} onToggle={noop} />
        </Captioned>
        <Captioned caption="open">
            <OuTreeToggle open onToggle={noop} />
        </Captioned>
        <Captioned caption="leaf (the toggle's space, nothing in it)">
            <OuTreeToggle leaf />
        </Captioned>
    </Column>
)

export const Loader = () => (
    <Column>
        <Captioned caption="loader">
            <OuTreeLoader />
        </Captioned>
    </Column>
)

export const ErrorIcon = () => (
    <Column>
        <Captioned caption="error icon, hover for the message">
            <OuTreeErrorIcon message="Could not load children" />
        </Captioned>
    </Column>
)

export const RetryButton = () => (
    <Column>
        <Captioned caption="retry button">
            <OuTreeRetryButton onRetry={noop} />
        </Captioned>
    </Column>
)

export const Skeleton = () => (
    <Column>
        <Captioned caption="plain">
            <OuTreeSkeleton />
        </Captioned>
        <Captioned caption="error">
            <OuTreeSkeleton error />
        </Captioned>
    </Column>
)

export const RetrySkeleton = () => (
    <Column>
        <Captioned caption="retry skeleton (hover or focus for the icon)">
            <OuTreeRetrySkeleton onRetry={noop} />
        </Captioned>
    </Column>
)

export const NodeLabel = () => (
    <Column>
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
    </Column>
)

export const RowShell = () => (
    <Column>
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
    </Column>
)

export const Structure = () => (
    <Column>
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
    </Column>
)
