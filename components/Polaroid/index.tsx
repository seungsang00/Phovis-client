import { Wrapper, EditButton } from './polaroid.style'
import { IPhotoCard } from '@interfaces'
import { useState } from 'react'
import { Modal } from '@components/Modal'
import { PhotoModal } from '@components/Photo/photo.style'

interface Props {
  handleModify?: () => void
  type: 'main' | 'content'
}

const Polaroid = ({
  handleModify,
  imageurl,
  userName,
  description,
  type,
}: IPhotoCard & Props) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  // ! Modal control
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
    <>
      <Wrapper>
        {type === 'content' && (
          <EditButton onClick={handleModify}>수정하기</EditButton>
        )}
        <div className='polaroid' onClick={handleModalOpen}>
          <img src={imageurl} />
          <div className='caption'>
            <p className='description'>{description}</p>
            <span className='user-info'>@ {userName}</span>
          </div>
        </div>
      </Wrapper>
      {modalIsOpen && (
        <Modal w={'0px'} h={'0px'} handleModalClose={handleModalClose}>
          <PhotoModal>
            <div className='polaroid'>
              <img src={imageurl} />
              <div className='caption'>
                <p className='description'>{description}</p>
                <span className='user-info'>@ {userName}</span>
              </div>
            </div>
          </PhotoModal>
        </Modal>
      )}
    </>
  )
}
export default Polaroid
