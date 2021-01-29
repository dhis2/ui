import React from 'react'
import {
    Button,
    ButtonStrip,
    ModalTitle,
    ModalActions,
    ModalContent,
    SingleSelect,
    SingleSelectOption,
} from '../index.js'
import { Modal } from './Modal.js'

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
            description: {
                component: 'These stories may take some time to load.',
            },
        },
    },
    decorators: [story => <div style={{ minHeight: '500px' }}>{story()}</div>],
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

export const AlignmentMiddle = () => (
    <Modal onClose={onClose} position="middle">
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
AlignmentMiddle.storyName = 'Alignment: Middle'

export const AlignmentBottom = () => (
    <Modal onClose={onClose} position="bottom">
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
AlignmentBottom.storyName = 'Alignment: Bottom'

export const SmallTitleContentAction = () => (
    <Modal small onClose={onClose}>
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
SmallTitleContentAction.storyName = 'Small: Title, Content, Action'

export const MediumTitleContentAction = () => (
    <Modal>
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

export const LargeTitleContentPrimary = () => (
    <Modal large>
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
LargeTitleContentPrimary.storyName = 'Large: Title, Content, Primary'

export const SmallContentPrimary = () => (
    <Modal small>
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
SmallContentPrimary.storyName = 'Small: Content & Primary'

export const SmallDestructivePrimary = () => (
    <Modal small>
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
SmallDestructivePrimary.storyName = 'Small: Destructive Primary'

export const SmallClickableScreenCover = () => (
    <Modal small onClose={say('Clickable screen cover')}>
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
SmallClickableScreenCover.storyName = 'Small: Clickable screen cover'

export const TopScrollable = () => (
    <Modal small onClose={say('Clickable screen cover')}>
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
TopScrollable.storyName = 'Top: scrollable'

export const MiddleScrollable = () => (
    <Modal small onClose={say('Clickable screen cover')} position="middle">
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
MiddleScrollable.storyName = 'Middle: scrollable'

export const BottomScrollable = () => (
    <Modal small onClose={say('Clickable screen cover')} position="bottom">
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
BottomScrollable.storyName = 'Bottom: scrollable'

export const SmallLongTitle = () => (
    <Modal small>
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
SmallLongTitle.storyName = 'Small: Long title'

export const LargeWithSelectComponent = () => (
    <Modal large>
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
LargeWithSelectComponent.storyName = 'Large: with Select component'

export const LargeModalWithMoreNestedModals = () => (
    <Modal large>
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
LargeModalWithMoreNestedModals.storyName =
    'Large: modal with more nested modals'
