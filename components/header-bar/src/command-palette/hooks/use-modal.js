import { useCallback, useState, useEffect } from 'react'

const useModal = (modalRef) => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleOpenModal = useCallback(() => {
        if (modalRef.current) {
            modalRef.current.showModal()
        }
    }, [])

    const handleCloseModal = useCallback(() => {
        if (modalRef.current) {
            modalRef.current.close()
        }
    }, [])

    useEffect(() => {
        if (modalOpen) {
            handleOpenModal()
        } else {
            handleCloseModal
        }
    }, [modalOpen])

    return {
        modalOpen,
        setModalOpen,
    }
}

export default useModal
