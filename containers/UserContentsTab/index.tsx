import React from 'react'
import { IContent } from '@interfaces'
import { ThumbnailRect } from '@components/index'

interface IProps {
  userContents: IContent[]
}

const UserContentsTab = ({ userContents }: IProps) => {
  return (
    <section>
      {userContents.length > 0 &&
        userContents.map((content) => {
          const {
            id,
            user,
            mainimageUrl,
            likecount,
            isBookmark,
            isLike,
          } = content
          return (
            <ThumbnailRect
              key={id}
              id={id as string}
              profileImage={user.profileImg}
              username={user.userName as string}
              bgImage={mainimageUrl as string}
              likeCount={likecount}
              isLike={isLike}
              isBookmark={isBookmark}
            />
          )
        })}
    </section>
  )
}

export default UserContentsTab
