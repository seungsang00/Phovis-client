import React from 'react'
import {
  PhotoCardPreviewContainer,
  DscriptionContainer,
  PhotoContainer,
} from './photocard-preview.style'
import { LikeBtn } from '@components/Buttons'
import UserInfoHor from '../UserInfo/UserInfo-hor'

type Props = {
  id: string
  imageurl: string | null
  description?: string
  userName: string
  profileImage?: string
  like: number
  isLike: boolean
  onClickLike: (cotentId: string) => void
}

const PhotoCardPreview = ({
  id,
  description = '장소에 대한 정보',
  imageurl,
  userName,
  profileImage,
  like,
  isLike,
  onClickLike,
}: Props) => {
  return (
    <PhotoCardPreviewContainer>
      <PhotoContainer>
        <img
          src={
            imageurl || 'https://t1.daumcdn.net/cfile/blog/253BAE4B57E3CFC022'
          }
        />
        <div className='PhotocardPreviewInfo'>
          <UserInfoHor
            userName={userName}
            profileImage={profileImage || '/src/tmpProfileImg.webp'}
          />
          <LikeBtn
            onClick={onClickLike}
            id={id}
            like={like}
            isChecked={isLike}
          />
        </div>
      </PhotoContainer>
      <DscriptionContainer>
        <span>{description}</span>
      </DscriptionContainer>
    </PhotoCardPreviewContainer>
  )
}

export default PhotoCardPreview
