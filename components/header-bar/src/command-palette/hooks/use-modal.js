import { useCallback, useState, useEffect } from 'react'

const useModal = (modalRef) => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleOpenModal = useCallback(() => {
        if (modalRef.current) {
            modalRef.current.showModal()
        }
    }, [modalRef])

    const handleCloseModal = useCallback(() => {
        if (modalRef.current) {
            modalRef.current.close()
        }
    }, [modalRef])

    useEffect(() => {
        if (modalOpen) {
            handleOpenModal()
        } else {
            handleCloseModal()
        }
    }, [modalOpen, handleCloseModal, handleOpenModal])

    return {
        modalOpen,
        setModalOpen,
    }
}

export default useModal
