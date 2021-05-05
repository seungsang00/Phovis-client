import { RootReducer } from '@actions/reducer'
import { Modal, Polaroid } from '@components/index'
import PhotoCardInput from '@containers/PhotoCardInput'
import { IPhotoCard, IUser, LocationType } from '@interfaces'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container } from './polaroids.style'

interface IProps {
  photocards: IPhotoCard[]
  contentId?: string
  locationinfo?: LocationType
  handleModify?: React.MouseEvent<HTMLButtonElement>
  type: 'main' | 'content'
}
const Polaroids = ({ locationinfo, photocards, contentId, type }: IProps) => {
  // ! Modal control
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [isModify, setModify] = useState<boolean>(false)
  const [targetModifyPhotocardId, settargetModify] = useState<string>('')
  const { user, isLogin } = useSelector((state: RootReducer) => state.user)

  const handleModalOpen = () => {
    setModify(false)
    setModalIsOpen(true)
  }

  const handleModify = (photocadid: string, userid: string) => {
    if (user) {
      const { id } = user as IUser
      if (userid === id) {
        setModify(true)
        settargetModify(photocadid)
        setModalIsOpen(true)
      } else {
        alert('자신의 게시물만 수정할 수 있습니다')
      }
    }
  }

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    if (target.localName === 'div' && target.className.includes('overlay')) {
      setModalIsOpen(false)
    }
  }

  return (
    <>
      <Container className='thumbnails'>
        <div className='photocardUploadBtn' onClick={handleModalOpen}>
          <Image
            layout='fixed'
            src='/src/iconmonstr-photo-camera-4.svg'
            width={24}
            height={24}
          />
        </div>
        {isLogin
          ? modalIsOpen && (
              <Modal w='400px' h='500px' handleModalClose={handleModalClose}>
                <PhotoCardInput
                  isModify={isModify}
                  photocardId={targetModifyPhotocardId}
                  location={locationinfo}
                  contentId={contentId}
                  handleModalClose={() => setModalIsOpen(false)}
                />
              </Modal>
            )
          : alert('로그인이 필요합니다')}
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
                type={type}
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
      </Container>
    </>
  )
}
export default Polaroids
