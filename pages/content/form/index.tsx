import { Modal } from '@components/Modal'
import AddLocationSection from '@containers/AddLocationSection'
import { MapContainer } from '@containers/index'
import { useState } from 'react'

const Form = () => {
  const [location, setLocation] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const handleModalOpen = () => {
    setModalIsOpen(true)
  }

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    if (target.localName === 'div' && target.className.includes('overlay')) {
      setModalIsOpen(false)
    }
  }

  return (
    <section>
      <AddLocationSection location={location} onClick={handleModalOpen} />
      {modalIsOpen && (
        <Modal handleModalClose={handleModalClose}>
          <MapContainer
            setLocation={setLocation}
            handleModalClose={() => setModalIsOpen(false)}
          />
        </Modal>
      )}
    </section>
  )
}

export default Form
