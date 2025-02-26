import { useRef, useState, useEffect } from 'react'

const useModal = () => {
    const modalRef = useRef(null)
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
        modalRef,
        modalOpen,
        setModalOpen,
    }
}

export default useModal
