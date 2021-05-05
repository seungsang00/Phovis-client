import React from 'react'
import { IContent } from '@interfaces'
import { ThumbnailRect } from '@components/index'
import { TabContentSection } from '@containers/Layout'

interface IProps {
  userContents: IContent[]
}

const UserContentsTab = ({ userContents }: IProps) => {
  return (
    <TabContentSection>
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
    </TabContentSection>
  )
}

export default UserContentsTab
