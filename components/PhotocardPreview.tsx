import React from 'react'
import {
  PhotoCardPreviewContainer,
  DscriptionContainer,
} from '../styles/photocard-preview'
import Like from './Like'
import UserInfoHor from './UserInfo-hor'

type Props = {
  imageurl: string
  description?: string
  userName: string
  profileImage?: string
  like?: number
}

const PhotocardPreview = ({
  description = '장소에 대한 정보',
  imageurl,
  userName = 'jeong',
  profileImage,
  like = 24,
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
          <Like like={like} />
        </div>
      </PhotoContainer>
      <DscriptionContainer>
        <h3>{description}</h3>
      </DscriptionContainer>
    </PhotoCardPreviewContainer>
  )
}

export default PhotocardPreview
