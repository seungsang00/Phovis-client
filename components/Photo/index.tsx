import { Modal } from '@components/Modal'
import { DivWithBgImg } from '@styles/common'
import { PhotoWrap, PhotoModal } from './photo.style'
import {, useState } from 'react'
import { IImage } from '@interfaces'

// TODO: 사진을 클릭하면 원래의 크기로 보여주는 기능을 추가해야 합니다.
const Photo = ({ imageurl, description }: IImage) => {
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
    <>
      <PhotoWrap className='photo-wrap' onClick={handleModalOpen}>
        <div className='photo'>
          <div className='photo-bg'>
            <DivWithBgImg bgUrl={imageurl} />
          </div>
          <div className='photo-info'>
            <p>{description}</p>
          </div>
        </div>
      </PhotoWrap>
      {modalIsOpen && (
        <Modal w={'0px'} h={'0px'} handleModalClose={handleModalClose}>
          <PhotoModal>
            <div className='active'>
              <img src={imageurl} alt='' />
            </div>
          </PhotoModal>
        </Modal>
      )}
    </>
  )
}
export default Photo
