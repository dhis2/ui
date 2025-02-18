import { useState, useEffect } from 'react'

const useModal = (modalRef) => {
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        if (modalRef.current) {
            if (modalOpen) {
                modalRef.current.showModal()
            } else {
                modalRef.current.close()
            }
        }
    }, [modalOpen, modalRef])

    return {
        modalOpen,
        setModalOpen,
    }
}

export default useModal
