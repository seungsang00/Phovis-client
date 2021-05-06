import React from 'react'
import { useRouter } from 'next/router'
import { IContent } from '@interfaces'
import { ThumbnailRect } from '@components/index'
import { TabContentSection } from '@containers/Layout'

interface IProps {
  nullText: string
  userContents: IContent[]
}

const UserContentsTab = ({ nullText, userContents }: IProps) => {
  const router = useRouter()
  const onClickContentHandle = (conetntId: string) => {
    router.push(`/content/${conetntId}`)
  }

  return (
    <TabContentSection>
      {userContents.length > 0 ? (
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
              onClickContents={onClickContentHandle}
            />
          )
        })
      ) : (
        <div>{nullText}</div>
      )}
    </TabContentSection>
  )
}

export default UserContentsTab
