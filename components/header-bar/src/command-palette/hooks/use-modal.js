import { useRef, useState, useEffect } from 'react'

const useModal = (currentItem) => {
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

    useEffect(() => {
        if (modalRef.current) {
            const activeItem = modalRef.current.querySelector('.highlighted')
            if (activeItem && typeof activeItem.scrollIntoView === 'function') {
                currentItem !== null &&
                    activeItem.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                    })
            }
        }
    }, [currentItem, modalRef])

    return {
        modalRef,
        modalOpen,
        setModalOpen,
    }
}

export default useModal
