import React from 'react'
import { IContent, IPhotoCard } from '@interfaces'
import { ContentThumbnail } from '@components/index'

interface IProps {
  contentList?: IContent[]
  photoCards: IPhotoCard[]
}

const MainRecommend = ({ contentList }: IProps) => (
  <section>
    <h3>여기는 어때요?</h3>
    <div className='flex'>
      {contentList &&
        contentList.map((content) => (
          <ContentThumbnail
            contentid={content.id as string}
            imageurl={content.mainimageUrl as string}
            title={content.title as string}
            username={content.user.userName as string}
          />
        ))}
      {/* {photoCards.length > 0 &&
        photoCards.map((data) => {
          const { photocardId, profileImage, userName, url } = data
          return (
            <>
              <ThumbnailSquare
                key={photocardId}
                profileImage={profileImage}
                username={userName}
                bgImage={url}
              />
            </>
          )
        })} */}
    </div>
  </section>
)

export default MainRecommend
