import { Modal, Polaroid } from '@components/index'
import PhotoCardInput from '@containers/PhotoCardInput'
import { IPhotoCard, LocationType } from '@interfaces'
import Image from 'next/image'
import React, { useState } from 'react'

interface IProps {
  photocards: IPhotoCard[]
  contentId: string
  locationinfo: LocationType
}
const Polaroids = ({ locationinfo, photocards, contentId }: IProps) => {
  // ! Modal control
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [isModify, setModify] = useState<boolean>(false)
  const [targetModifyPhotocardId, settargetModify] = useState<string>('')

  const handleModalOpen = () => {
    setModalIsOpen(true)
    setModify(false)
  }

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    if (target.localName === 'div' && target.className.includes('overlay')) {
      setModalIsOpen(false)
    }
  }

  return (
    <div>
      <div className='h2container'>
        <h2 className='section-title'>📸 이런 사진을 찍을 수 있어요</h2>
        <div className='photocardUploadBtn' onClick={handleModalOpen}>
          <Image
            layout='fixed'
            src='/src/iconmonstr-photo-camera-4.svg'
            width={24}
            height={24}
          />
        </div>
        {modalIsOpen && (
          <Modal w='400px' h='500px' handleModalClose={handleModalClose}>
            <PhotoCardInput
              isModify={isModify}
              photocardId={targetModifyPhotocardId}
              location={locationinfo}
              contentId={contentId}
              handleModalClose={() => setModalIsOpen(false)}
            />
          </Modal>
        )}
      </div>
      <div className='thumbnails'>
        {photocards &&
          photocards.length > 0 &&
          photocards.map((photoCard) => {
            const {
              photocardId,
              imageurl,
              description,
              userName,
              like,
            } = photoCard
            return (
              <Polaroid
                key={photocardId}
                handleModify={() => {
                  setModify(true)
                  settargetModify(photocardId as string)
                  console.log('click', targetModifyPhotocardId, isModify)
                  handleModalOpen()
                }}
                imageurl={imageurl}
                description={description}
                userName={userName}
                like={like}
              />
            )
          })}
      </div>
    </div>
  )
}
export default Polaroids
