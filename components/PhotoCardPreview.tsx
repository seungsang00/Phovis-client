import React from 'react'
import {
  PhotoCardPreview,
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

const PhotoCardPreview = ({
  description = '장소에 대한 정보',
  imageurl,
  userName = 'jeong',
  profileImage,
  like = 24,
}: Props) => {
  return (
    <>
      <PhotoCardPreview>
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
      </PhotoCardPreview>
      <DscriptionContainer>
        <h3>{description}</h3>
      </DscriptionContainer>
    </>
  )
}

export default PhotoCardPreview
