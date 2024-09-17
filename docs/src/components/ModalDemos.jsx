import {
    Modal,
    ModalTitle,
    ModalContent,
    ModalActions,
    Box,
    Button,
    ButtonStrip,
    CenteredContent,
    CircularLoader,
    InputField,
    NoticeBox,
} from '@dhis2/ui'
import React, { useState } from 'react'

export const ModalDemoMain = () => {
    const [hide, setHide] = useState(true)

    return (
        <div>
            <Button onClick={() => setHide(false)}>Show modal</Button>

            {!hide && (
                <Modal hide={hide}>
                    <ModalTitle>Modal title</ModalTitle>

                    <ModalContent>Modal content goes here.</ModalContent>

                    <ModalActions>
                        <ButtonStrip end>
                            <Button onClick={() => setHide(true)} secondary>
                                Secondary action
                            </Button>
                            <Button onClick={() => setHide(true)} primary>
                                Primary action
                            </Button>
                        </ButtonStrip>
                    </ModalActions>
                </Modal>
            )}
        </div>
    )
}

export const ModalDemoActions = () => {
    const [hide, setHide] = useState(true)

    return (
        <div>
            <Button onClick={() => setHide(false)}>Show modal</Button>

            {!hide && (
                <Modal hide={hide}>
                    <ModalTitle>Modal title</ModalTitle>

                    <ModalContent>
                        <InputField
                            label="First name"
                            required
                            value="Karimbe"
                            inputWidth="320px"
                        />
                        <InputField
                            label="Last name"
                            value="Olefeme"
                            required
                            inputWidth="320px"
                        />
                    </ModalContent>

                    <ModalActions>
                        <ButtonStrip end>
                            <Button onClick={() => setHide(true)} secondary>
                                Cancel
                            </Button>
                            <Button onClick={() => setHide(true)} primary>
                                Save changes
                            </Button>
                        </ButtonStrip>
                    </ModalActions>
                </Modal>
            )}
        </div>
    )
}

export const ModalDemoLoading = () => {
    const [hide, setHide] = useState(true)

    return (
        <div>
            <Button onClick={() => setHide(false)}>Show modal</Button>

            {!hide && (
                <Modal hide={hide}>
                    <ModalTitle>Modal title</ModalTitle>
                    <ModalContent>
                        <Box minHeight="240px">
                            <CenteredContent>
                                <CircularLoader />
                            </CenteredContent>
                        </Box>
                    </ModalContent>
                    <ModalActions>
                        <ButtonStrip end>
                            <Button onClick={() => setHide(true)} secondary>
                                Cancel
                            </Button>
                            <Button onClick={() => setHide(true)} primary>
                                Save changes
                            </Button>
                        </ButtonStrip>
                    </ModalActions>
                </Modal>
            )}
        </div>
    )
}

export const ModalDemoError = () => {
    const [hide, setHide] = useState(true)

    return (
        <div>
            <Button onClick={() => setHide(false)}>Show modal</Button>

            {!hide && (
                <Modal hide={hide}>
                    <ModalTitle>Update profile</ModalTitle>
                    <ModalContent>
                        <InputField
                            label="First name"
                            required
                            error
                            validationText="First name can't be empty."
                            inputWidth="320px"
                        />
                        <InputField
                            label="Last name"
                            value="Olefeme"
                            required
                            inputWidth="320px"
                        />
                        <Box marginTop="16px">
                            <NoticeBox error>
                                There&apos;s a problem with this form.
                            </NoticeBox>
                        </Box>
                    </ModalContent>
                    <ModalActions>
                        <ButtonStrip end>
                            <Button onClick={() => setHide(true)} secondary>
                                Cancel
                            </Button>
                            <Button
                                disabled
                                onClick={() => setHide(true)}
                                primary
                            >
                                Save changes
                            </Button>
                        </ButtonStrip>
                    </ModalActions>
                </Modal>
            )}
        </div>
    )
}
