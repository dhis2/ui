import { Button, ButtonStrip } from '@dhis2-ui/button'
import { SingleSelect, SingleSelectOption } from '@dhis2-ui/select'
import { sharedPropTypes } from '@dhis2/ui-constants'
import React, { useState } from 'react'
import { ModalActions } from '../index.js'
import { ModalContent } from '../index.js'
import { ModalTitle } from '../index.js'
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

const say = something => () => alert(something)

window.onClose = (payload, event) => {
    console.log('onClose payload', payload)
    console.log('onClose event', event)
}

const onClose = (...args) => window.onClose(...args)

export default {
    title: 'Layout/Modal',
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

export const DefaultContent = args => (
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

export const AlignmentMiddle = args => (
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

export const AlignmentBottom = args => (
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
AlignmentBottom.args = { onClose, alignment: 'bottom' }
AlignmentBottom.storyName = 'Alignment: Bottom'

export const SmallTitleContentAction = args => (
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

export const MediumTitleContentAction = args => (
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

export const LargeTitleContentPrimary = args => (
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

export const SmallContentPrimary = args => (
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

export const SmallDestructivePrimary = args => (
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

export const SmallClickableScreenCover = args => (
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
    onClose: args => {
        onClose(args)
        say('Clickable screen cover')()
    },
}
SmallClickableScreenCover.storyName = 'Small: Clickable screen cover'

export const TopScrollable = args => (
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

export const MiddleScrollable = args => (
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

export const BottomScrollable = args => (
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

export const SmallLongTitle = args => (
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

export const LargeWithSelectComponent = args => (
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

export const LargeModalWithMoreNestedModals = args => (
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
            <Modal large>
                <ModalTitle>
                    Select opens on top of the Modal - Level 2
                </ModalTitle>

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
                    <Modal large>
                        <ModalTitle>
                            Select opens on top of the Modal - Level 3
                        </ModalTitle>

                        <ModalContent>
                            <SingleSelect>
                                <SingleSelectOption
                                    key="1"
                                    value="1"
                                    label="one"
                                />
                                <SingleSelectOption
                                    key="2"
                                    value="2"
                                    label="two"
                                />
                                <SingleSelectOption
                                    key="3"
                                    value="3"
                                    label="three"
                                />
                                <SingleSelectOption
                                    key="4"
                                    value="3"
                                    label="four"
                                />
                                <SingleSelectOption
                                    key="5"
                                    value="3"
                                    label="five"
                                />
                                <SingleSelectOption
                                    key="6"
                                    value="3"
                                    label="six"
                                />
                                <SingleSelectOption
                                    key="7"
                                    value="3"
                                    label="seven"
                                />
                                <SingleSelectOption
                                    key="8"
                                    value="3"
                                    label="eight"
                                />
                                <SingleSelectOption
                                    key="9"
                                    value="3"
                                    label="nine"
                                />
                                <SingleSelectOption
                                    key="10"
                                    value="3"
                                    label="ten"
                                />
                            </SingleSelect>
                        </ModalContent>

                        <ModalActions>
                            <ButtonStrip end>
                                <Button
                                    onClick={say('Button secondary')}
                                    secondary
                                >
                                    Secondary action
                                </Button>

                                <Button onClick={say('Button primary')} primary>
                                    Primary action
                                </Button>
                            </ButtonStrip>
                        </ModalActions>
                    </Modal>
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
