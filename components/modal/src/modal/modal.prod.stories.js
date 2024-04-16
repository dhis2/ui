import { Box } from '@dhis2-ui/box'
import { Button, ButtonStrip } from '@dhis2-ui/button'
import {
    FlyoutMenu,
    MenuDivider,
    MenuItem,
    MenuSectionHeader,
} from '@dhis2-ui/menu'
import { SingleSelect, SingleSelectOption } from '@dhis2-ui/select'
import { Tooltip } from '@dhis2-ui/tooltip'
import { sharedPropTypes } from '@dhis2/ui-constants'
import React, { useEffect, useState } from 'react'
import { ModalActions, ModalContent, ModalTitle } from '../index.js'
import { Modal } from './modal.js'

const description = `
_**Note**: For performance reasons, only one representative example is shown here. For more (interactive) examples, see individual stories in the Canvas tab._

A modal focuses user attention on a single task or piece of information inside a container. A modal blocks the rest of the application until it is dismissed.

#### Usage

A modal should be used to focus user attention on a single task or piece of information. Modals take over the entire screen and should be used sparingly to avoid interrupting a user's flow too often.

Use a modal in the following cases:

- to collect short, focussed user input that is blocking progress
- to present critical information that a user needs to acknowledge before continuing
- to ask the user to confirm a destructive action that cannot be undone

Do not use a modal in the following cases:

- to display unrelated or non-critical information; use an alert bar or a notice box instead
- to display complex, workflows that span multiple screens; navigate to a new, full page in the app instead

#### Children

Modals should be used with children \`<ModalTitle>\` (optional), \`<ModalContent>\` (required), and \`<ModalActions>\` (recommended)

See more about modal usage, including alignment and sizing, at [Design System: Modals](https://github.com/dhis2/design-system/blob/master/molecules/modal.md#usage).

\`\`\`js
import { Modal } from '@dhis2/ui'
\`\`\`
`

const say = (something) => () => alert(something)

window.onClose = (payload, event) => {
    console.log('onClose payload', payload)
    console.log('onClose event', event)
}

const onClose = (...args) => window.onClose(...args)

export default {
    title: 'Modal',
    component: Modal,
    parameters: {
        docs: {
            // Use iframes to contain modals in docs page (otherwise chaos ensues)
            inlineStories: false,
            iframeHeight: '500px',
            /**
             * Due to iframes being very slow, disable stories on the docs page by default and
             * make one representative story as the primary ('SmallTitleContentAction')
             */
            disable: true,
            description: { component: description },
        },
    },
    argTypes: {
        small: { ...sharedPropTypes.sizeArgType },
        large: { ...sharedPropTypes.sizeArgType },
        position: { ...sharedPropTypes.insideAlignmentArgType },
    },
}

export const DefaultContent = (args) => (
    <Modal {...args}>
        <ModalContent>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </ModalContent>
    </Modal>
)
DefaultContent.args = {
    onClose: onClose,
}
DefaultContent.storyName = 'Default: Content'

export const AlignmentMiddle = (args) => (
    <Modal {...args}>
        <ModalContent>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </ModalContent>
    </Modal>
)
AlignmentMiddle.args = { onClose, position: 'middle' }
AlignmentMiddle.storyName = 'Alignment: Middle'

export const AlignmentBottom = (args) => (
    <Modal {...args}>
        <ModalContent>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </ModalContent>
    </Modal>
)
AlignmentBottom.args = { onClose, position: 'bottom' }
AlignmentBottom.storyName = 'Position: Bottom'

export const SmallTitleContentAction = (args) => (
    <Modal {...args}>
        <ModalTitle>
            This is a small modal with title, content and primary action
        </ModalTitle>

        <ModalContent>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </ModalContent>

        <ModalActions>
            <ButtonStrip end>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <Button onClick={say('Button primary')} primary>
                    Primary action
                </Button>
            </ButtonStrip>
        </ModalActions>
    </Modal>
)
// Have this be the primary story on the docs page
SmallTitleContentAction.parameters = {
    docs: { disable: false, source: { type: 'dynamic' } },
}
SmallTitleContentAction.args = { small: true, onClose }
SmallTitleContentAction.storyName = 'Small: Title, Content, Action'

export const MediumTitleContentAction = (args) => (
    <Modal {...args}>
        <ModalTitle>
            This is a medium modal with title, content and primary action
        </ModalTitle>

        <ModalContent>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </ModalContent>

        <ModalActions>
            <ButtonStrip end>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <Button onClick={say('Button primary')} primary>
                    Primary action
                </Button>
            </ButtonStrip>
        </ModalActions>
    </Modal>
)
MediumTitleContentAction.storyName = 'Medium: Title, Content, Action'

export const LargeTitleContentPrimary = (args) => (
    <Modal {...args}>
        <ModalTitle>
            This is a large modal with title, content and primary action
        </ModalTitle>

        <ModalContent>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </ModalContent>

        <ModalActions>
            <ButtonStrip end>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <Button onClick={say('Button primary')} primary>
                    Primary action
                </Button>
            </ButtonStrip>
        </ModalActions>
    </Modal>
)
LargeTitleContentPrimary.args = { large: true }
LargeTitleContentPrimary.storyName = 'Large: Title, Content, Primary'

export const FluidTitleContentPrimary = (args) => (
    <Modal {...args}>
        <ModalTitle>
            This is a modal using custom dimensions, with title, content and
            primary action
        </ModalTitle>

        <ModalContent>
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                }}
            >
                <div
                    style={{
                        width: '600px',
                        backgroundColor: '#fea',
                    }}
                >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div>
                <div
                    style={{
                        width: '300px',
                        backgroundColor: '#eaf',
                    }}
                >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div>
            </div>
        </ModalContent>

        <ModalActions>
            <ButtonStrip end>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <Button onClick={say('Button primary')} primary>
                    Primary action
                </Button>
            </ButtonStrip>
        </ModalActions>
    </Modal>
)
FluidTitleContentPrimary.args = {
    fluid: true,
    position: 'top',
}
FluidTitleContentPrimary.storyName =
    'Fluid (Custom sizes): Title, Content, Primary'

export const SmallContentPrimary = (args) => (
    <Modal {...args}>
        <ModalContent>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </ModalContent>

        <ModalActions>
            <ButtonStrip end>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <Button onClick={say('Button primary')} primary>
                    Primary action
                </Button>
            </ButtonStrip>
        </ModalActions>
    </Modal>
)
SmallContentPrimary.args = { small: true }
SmallContentPrimary.storyName = 'Small: Content & Primary'

export const SmallDestructivePrimary = (args) => (
    <Modal {...args}>
        <ModalContent>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </ModalContent>

        <ModalActions>
            <ButtonStrip end>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <Button destructive onClick={say('Button primary')}>
                    Primary action
                </Button>
            </ButtonStrip>
        </ModalActions>
    </Modal>
)
SmallDestructivePrimary.args = { small: true }
SmallDestructivePrimary.storyName = 'Small: Destructive Primary'

export const SmallClickableScreenCover = (args) => (
    <Modal {...args}>
        <ModalTitle>This is a modal with clickable screen cover</ModalTitle>

        <ModalContent>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
        </ModalContent>

        <ModalActions>
            <ButtonStrip end>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <Button primary onClick={say('Button primary')}>
                    Primary action
                </Button>
            </ButtonStrip>
        </ModalActions>
    </Modal>
)
SmallClickableScreenCover.args = {
    small: true,
    onClose: (args) => {
        onClose(args)
        say('Clickable screen cover')()
    },
}
SmallClickableScreenCover.storyName = 'Small: Clickable screen cover'

export const TopScrollable = (args) => (
    <Modal {...args}>
        <ModalTitle>This is a modal with scrollable content</ModalTitle>

        <ModalContent>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem
            ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
            diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </ModalContent>

        <ModalActions>
            <ButtonStrip end>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <Button destructive onClick={say('Button primary')}>
                    Primary action
                </Button>
            </ButtonStrip>
        </ModalActions>
    </Modal>
)
TopScrollable.args = { ...SmallClickableScreenCover.args }
TopScrollable.storyName = 'Top: scrollable'

export const MiddleScrollable = (args) => (
    <Modal {...args}>
        <ModalTitle>This is a modal with scrollable content</ModalTitle>

        <ModalContent>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem
            ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
            diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </ModalContent>

        <ModalActions>
            <ButtonStrip end>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <Button destructive onClick={say('Button primary')}>
                    Primary action
                </Button>
            </ButtonStrip>
        </ModalActions>
    </Modal>
)
MiddleScrollable.args = { ...TopScrollable.args, position: 'middle' }
MiddleScrollable.storyName = 'Middle: scrollable'

export const BottomScrollable = (args) => (
    <Modal {...args}>
        <ModalTitle>This is a modal with scrollable content</ModalTitle>

        <ModalContent>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem
            ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
            diam voluptua. At vero eos et accusam et justo duo dolores et ea
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </ModalContent>

        <ModalActions>
            <ButtonStrip end>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <Button destructive onClick={say('Button primary')}>
                    Primary action
                </Button>
            </ButtonStrip>
        </ModalActions>
    </Modal>
)
BottomScrollable.args = { ...TopScrollable.args, position: 'bottom' }
BottomScrollable.storyName = 'Bottom: scrollable'

export const SmallLongTitle = (args) => (
    <Modal {...args}>
        <ModalTitle>
            This headline should break into multiple lines because it&apos;s way
            too long for one!
        </ModalTitle>

        <ModalContent>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
        </ModalContent>

        <ModalActions>
            <ButtonStrip end>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <Button onClick={say('Button primary')} primary>
                    Primary action
                </Button>
            </ButtonStrip>
        </ModalActions>
    </Modal>
)
SmallLongTitle.args = { small: true }
SmallLongTitle.storyName = 'Small: Long title'

export const LargeWithSelectComponent = (args) => (
    <Modal {...args}>
        <ModalTitle>Select opens on top of the Modal</ModalTitle>

        <ModalContent>
            <SingleSelect>
                <SingleSelectOption key="1" value="1" label="one" />
                <SingleSelectOption key="2" value="2" label="two" />
                <SingleSelectOption key="3" value="3" label="three" />
                <SingleSelectOption key="4" value="3" label="four" />
                <SingleSelectOption key="5" value="3" label="five" />
                <SingleSelectOption key="6" value="3" label="six" />
                <SingleSelectOption key="7" value="3" label="seven" />
                <SingleSelectOption key="8" value="3" label="eight" />
                <SingleSelectOption key="9" value="3" label="nine" />
                <SingleSelectOption key="10" value="3" label="ten" />
            </SingleSelect>
        </ModalContent>

        <ModalActions>
            <ButtonStrip end>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <Button onClick={say('Button primary')} primary>
                    Primary action
                </Button>
            </ButtonStrip>
        </ModalActions>
    </Modal>
)
LargeWithSelectComponent.args = { large: true }
LargeWithSelectComponent.storyName = 'Large: with Select component'

export const LargeModalWithMoreNestedModals = (args) => (
    <>
        <Modal {...args}>
            <ModalTitle>Select opens on top of the Modal - Level 1</ModalTitle>

            <ModalContent>
                <SingleSelect>
                    <SingleSelectOption key="1" value="1" label="one" />
                    <SingleSelectOption key="2" value="2" label="two" />
                    <SingleSelectOption key="3" value="3" label="three" />
                    <SingleSelectOption key="4" value="3" label="four" />
                    <SingleSelectOption key="5" value="3" label="five" />
                    <SingleSelectOption key="6" value="3" label="six" />
                    <SingleSelectOption key="7" value="3" label="seven" />
                    <SingleSelectOption key="8" value="3" label="eight" />
                    <SingleSelectOption key="9" value="3" label="nine" />
                    <SingleSelectOption key="10" value="3" label="ten" />
                </SingleSelect>
            </ModalContent>

            <ModalActions>
                <ButtonStrip end>
                    <Button onClick={say('Button secondary')} secondary>
                        Secondary action
                    </Button>

                    <Button onClick={say('Button primary')} primary>
                        Primary action
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>

        <Modal {...args}>
            <ModalTitle>Select opens on top of the Modal - Level 2</ModalTitle>

            <ModalContent>
                <SingleSelect>
                    <SingleSelectOption key="1" value="1" label="one" />
                    <SingleSelectOption key="2" value="2" label="two" />
                    <SingleSelectOption key="3" value="3" label="three" />
                    <SingleSelectOption key="4" value="3" label="four" />
                    <SingleSelectOption key="5" value="3" label="five" />
                    <SingleSelectOption key="6" value="3" label="six" />
                    <SingleSelectOption key="7" value="3" label="seven" />
                    <SingleSelectOption key="8" value="3" label="eight" />
                    <SingleSelectOption key="9" value="3" label="nine" />
                    <SingleSelectOption key="10" value="3" label="ten" />
                </SingleSelect>
            </ModalContent>

            <ModalActions>
                <ButtonStrip end>
                    <Button onClick={say('Button secondary')} secondary>
                        Secondary action
                    </Button>

                    <Button onClick={say('Button primary')} primary>
                        Primary action
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>

        <Modal small>
            <ModalTitle>Select opens on top of the Modal - Level 3</ModalTitle>

            <ModalContent>
                <SingleSelect>
                    <SingleSelectOption key="1" value="1" label="one" />
                    <SingleSelectOption key="2" value="2" label="two" />
                    <SingleSelectOption key="3" value="3" label="three" />
                    <SingleSelectOption key="4" value="3" label="four" />
                    <SingleSelectOption key="5" value="3" label="five" />
                    <SingleSelectOption key="6" value="3" label="six" />
                    <SingleSelectOption key="7" value="3" label="seven" />
                    <SingleSelectOption key="8" value="3" label="eight" />
                    <SingleSelectOption key="9" value="3" label="nine" />
                    <SingleSelectOption key="10" value="3" label="ten" />
                </SingleSelect>

                <Tooltip content="Some extra info">
                    {({ ref, onMouseOver, onMouseOut }) => (
                        <span
                            ref={ref}
                            onMouseOver={onMouseOver}
                            onMouseOut={onMouseOut}
                        >
                            <button>Tooltip on button</button>
                            <style jsx>{`
                                span {
                                    display: inline-flex;
                                }
                            `}</style>
                        </span>
                    )}
                </Tooltip>

                <FlyoutMenu>
                    <MenuSectionHeader label="Section with sub-menus" />
                    <MenuItem label="Item 1" />
                    <MenuItem label="Item 2">
                        <MenuItem label="Item 2 a" />
                        <MenuItem label="Item 2 b">
                            <MenuItem label="Item 2 b i" />
                            <MenuItem label="Item 2 b ii" />
                        </MenuItem>
                        <MenuItem label="Item 2 c" />
                    </MenuItem>
                    <MenuItem label="Item 3" />
                    <MenuItem label="Item 4">
                        <MenuItem label="Item 4 a" />
                        <MenuItem label="Item 4 b">
                            <MenuItem label="Item 4 b i" />
                            <MenuItem label="Item 4 b ii" />
                        </MenuItem>
                        <MenuItem label="Item 4 c" />
                    </MenuItem>
                    <MenuItem label="Item 5" />
                    <MenuSectionHeader label="Section with dividers between menu items" />
                    <MenuItem label="Item 1" />
                    <MenuDivider />
                    <MenuItem label="Item 2" />
                    <MenuDivider />
                    <MenuItem label="Item 3" />
                </FlyoutMenu>
            </ModalContent>

            <ModalActions>
                <ButtonStrip end>
                    <Button onClick={say('Button secondary')} secondary>
                        Secondary action
                    </Button>

                    <Button onClick={say('Button primary')} primary>
                        Primary action
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    </>
)
LargeModalWithMoreNestedModals.args = { large: true }
LargeModalWithMoreNestedModals.storyName =
    'Large: modal with more nested modals'

const StatefuleComponent = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <p>Current counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>
                Add 1 to counter
            </button>
        </div>
    )
}

export const ModalThatHidesWithStatefulComponens = () => {
    const [render, setRender] = useState(false)
    const [hide, setHide] = useState(false)

    return (
        <div>
            <ButtonStrip>
                <Button onClick={() => setHide(false)} disabled={!render}>
                    Show the hidden modal
                </Button>

                <Button onClick={() => setRender(true)} disabled={render}>
                    Render Modal
                </Button>
            </ButtonStrip>

            {render && (
                <Modal hide={hide}>
                    <ModalTitle>Can be hidden</ModalTitle>

                    <ModalContent>
                        <StatefuleComponent />
                    </ModalContent>

                    <ModalActions>
                        <ButtonStrip end>
                            <Button onClick={() => setRender(false)} secondary>
                                Close modal
                            </Button>

                            <Button onClick={() => setHide(true)} primary>
                                Hide modal
                            </Button>
                        </ButtonStrip>
                    </ModalActions>
                </Modal>
            )}
        </div>
    )
}

export const FluidTop = (args) => (
    <Modal {...args}>
        <ModalTitle>
            This is a modal using custom dimensions, with title, content and
            primary action
        </ModalTitle>

        <ModalContent>
            <Box width="666px" height="666px">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
            </Box>
        </ModalContent>

        <ModalActions>
            <ButtonStrip end>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <Button onClick={say('Button primary')} primary>
                    Primary action
                </Button>
            </ButtonStrip>
        </ModalActions>
    </Modal>
)
FluidTop.args = {
    fluid: true,
    position: 'top',
}
FluidTop.storyName = 'Fluid (Top)'

export const FluidMiddle = (args) => (
    <Modal {...args}>
        <ModalTitle>
            This is a modal using custom dimensions, with title, content and
            primary action
        </ModalTitle>

        <ModalContent>
            <Box width="666px" height="666px">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
            </Box>
        </ModalContent>

        <ModalActions>
            <ButtonStrip end>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <Button onClick={say('Button primary')} primary>
                    Primary action
                </Button>
            </ButtonStrip>
        </ModalActions>
    </Modal>
)
FluidMiddle.args = {
    fluid: true,
    position: 'middle',
}
FluidMiddle.storyName = 'Fluid (Middle)'

export const FluidBottom = (args) => (
    <Modal {...args}>
        <ModalTitle>
            This is a modal using custom dimensions, with title, content and
            primary action
        </ModalTitle>

        <ModalContent>
            <Box width="666px" height="666px">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
            </Box>
        </ModalContent>

        <ModalActions>
            <ButtonStrip end>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <Button onClick={say('Button primary')} primary>
                    Primary action
                </Button>
            </ButtonStrip>
        </ModalActions>
    </Modal>
)
FluidBottom.args = {
    fluid: true,
    position: 'bottom',
}
FluidBottom.storyName = 'Fluid (Bottom)'

export const RTL = (args) => {
    useEffect(() => {
        document.body.dir = 'rtl'
        return () => {
            document.body.dir = 'ltr'
        }
    }, [])
    return (
        <div dir="rtl">
            <SmallTitleContentAction {...args} />
        </div>
    )
}
RTL.args = { small: true, onClose }
