import { Modal, Polaroid } from '@components/index'
import PhotoCardInput from '@containers/PhotoCardInput'
import { IPhotoCard, LocationType } from '@interfaces'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

interface IProps {
  photocards: IPhotoCard[]
  contentId: string
  locationinfo: LocationType
  handleModify?: React.MouseEvent<HTMLButtonElement>
}
const Polaroids = ({ locationinfo, photocards, contentId }: IProps) => {
  // ! Modal control
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [isModify, setModify] = useState<boolean>(false)
  const [targetModifyPhotocardId, settargetModify] = useState<string>('')
  const { id } = useSelector((state: RootReducer) => state.user)

  const handleModalOpen = () => {
    setModify(false)
    setModalIsOpen(true)
  }
  const handleModify = (photocadid: string, userid: string) => {
    if (userid === id) {
      setModify(true)
      settargetModify(photocadid)
      setModalIsOpen(true)
    } else {
      alert('자신의 게시물만 수정할 수 있습니다')
    }
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
              userId,
            } = photoCard
            return (
              <Polaroid
                key={photocardId}
                handleModify={() =>
                  handleModify(photocardId as string, userId as string)
                }
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
