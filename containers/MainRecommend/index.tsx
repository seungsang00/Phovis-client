import React from 'react'
import { IPhotoCard } from '@interfaces'
import { ThumbnailSquare } from '@components/index'

interface IProps {
  photoCards: IPhotoCard[]
}

const MainRecommend = ({ photoCards }: IProps) => (
  <section>
    <h3>여기는 어때요?</h3>
    <div>
      {photoCards.length > 0 &&
        photoCards.map((data) => {
          const { photocardId, profileImage, userName, imageurl } = data
          return (
            <ThumbnailSquare
              key={photocardId}
              profileImage={profileImage}
              username={userName}
              bgImage={imageurl}
            />
          )
        })}
    </div>
  </section>
)

export default MainRecommend
