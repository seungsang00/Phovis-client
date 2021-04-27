import React from 'react'
import {
  PhotoCardPreviewContainer,
  DscriptionContainer,
  PhotoContainer,
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
<<<<<<< HEAD
    <>
      <PhotoCardPreviewContainer>
=======
    <PhotoCardPreviewContainer>
      <PhotoContainer>
>>>>>>> 8a770c116d0ff26b7a57433319a2bbdaab206925
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
<<<<<<< HEAD
      </PhotoCardPreviewContainer>
=======
      </PhotoContainer>
>>>>>>> 8a770c116d0ff26b7a57433319a2bbdaab206925
      <DscriptionContainer>
        <span>{description}</span>
      </DscriptionContainer>
    </PhotoCardPreviewContainer>
  )
}

export default PhotoCardPreview
