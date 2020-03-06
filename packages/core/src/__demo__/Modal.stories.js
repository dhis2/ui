import React from 'react'
import { storiesOf } from '@storybook/react'

import {
    Button,
    ButtonStrip,
    Modal,
    ModalTitle,
    ModalActions,
    ModalContent,
    SingleSelectField,
    SingleSelectOption,
} from '../index.js'

const say = something => () => alert(something)

window.onClose = (payload, event) => {
    console.log('onClose payload', payload)
    console.log('onClose event', event)
}

const onClose = (...args) => window.onClose(...args)

storiesOf('Component/Widget/Modal', module)
    .add('Default: Content', () => (
        <Modal onClose={onClose}>
            <ModalContent>
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
            </ModalContent>
        </Modal>
    ))
    .add('Alignment: Middle', () => (
        <Modal onClose={onClose} position="middle">
            <ModalContent>
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
            </ModalContent>
        </Modal>
    ))
    .add('Alignment: Bottom', () => (
        <Modal onClose={onClose} position="bottom">
            <ModalContent>
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
            </ModalContent>
        </Modal>
    ))
    .add('Small: Title, Content, Action', () => (
        <Modal small onClose={onClose}>
            <ModalTitle>
                This is a small modal with title, content and primary action
            </ModalTitle>

            <ModalContent>
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
    ))
    .add('Medium: Title, Content, Action', () => (
        <Modal>
            <ModalTitle>
                This is a medium modal with title, content and primary action
            </ModalTitle>

            <ModalContent>
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
    ))
    .add('Large: Title, Content, Primary', () => (
        <Modal large>
            <ModalTitle>
                This is a large modal with title, content and primary action
            </ModalTitle>

            <ModalContent>
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
    ))
    .add('Small: Content & Primary', () => (
        <Modal small>
            <ModalContent>
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
    ))
    .add('Small: Destructive Primary', () => (
        <Modal small>
            <ModalContent>
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
    ))
    .add('Small: Clickable screen cover', () => (
        <Modal small onClose={say('Clickable screen cover')}>
            <ModalTitle>This is a modal with clickable screen cover</ModalTitle>

            <ModalContent>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
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
    ))
    .add('Top: scrollable', () => (
        <Modal small onClose={say('Clickable screen cover')}>
            <ModalTitle>This is a modal with scrollable content</ModalTitle>

            <ModalContent>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
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
    ))
    .add('Middle: scrollable', () => (
        <Modal small onClose={say('Clickable screen cover')} position="middle">
            <ModalTitle>This is a modal with scrollable content</ModalTitle>

            <ModalContent>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
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
    ))
    .add('Bottom: scrollable', () => (
        <Modal small onClose={say('Clickable screen cover')} position="bottom">
            <ModalTitle>This is a modal with scrollable content</ModalTitle>

            <ModalContent>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
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
    ))
    .add('Small: Long title', () => (
        <Modal small>
            <ModalTitle>
                This headline should break into multiple lines because it&apos;s
                way too long for one!
            </ModalTitle>

            <ModalContent>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
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
    ))
    .add('Large: with Select component', () => (
        <Modal large>
            <ModalTitle>Select opens on top of the Modal</ModalTitle>

            <ModalContent>
                <SingleSelectField>
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
                </SingleSelectField>
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
    ))
    .add('Large: modal with more nested modals', () => (
        <Modal large>
            <ModalTitle>Select opens on top of the Modal - Level 1</ModalTitle>

            <ModalContent>
                <SingleSelectField>
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
                </SingleSelectField>
                <Modal large>
                    <ModalTitle>
                        Select opens on top of the Modal - Level 2
                    </ModalTitle>

                    <ModalContent>
                        <SingleSelectField>
                            <SingleSelectOption key="1" value="1" label="one" />
                            <SingleSelectOption key="2" value="2" label="two" />
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
                            <SingleSelectOption key="6" value="3" label="six" />
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
                        </SingleSelectField>
                        <Modal large>
                            <ModalTitle>
                                Select opens on top of the Modal - Level 3
                            </ModalTitle>

                            <ModalContent>
                                <SingleSelectField>
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
                                </SingleSelectField>
                            </ModalContent>

                            <ModalActions>
                                <ButtonStrip end>
                                    <Button
                                        onClick={say('Button secondary')}
                                        secondary
                                    >
                                        Secondary action
                                    </Button>

                                    <Button
                                        onClick={say('Button primary')}
                                        primary
                                    >
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
    ))
