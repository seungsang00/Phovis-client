import React from 'react'
import { useRouter } from 'next/router'
import { IContent } from '@interfaces'
import { ThumbnailRect } from '@components/index'
import { TabContentSection } from '@containers/Layout'

interface IProps {
  nullText: string
  userContents: IContent[]
  onClickBookmark: (contentId: string) => void
  onClickLike: (cotentId: string) => void
}

const UserContentsTab = ({
  nullText,
  userContents,
  onClickBookmark,
  onClickLike,
}: IProps) => {
  const router = useRouter()
  const onClickContentHandle = (conetntId: string) => {
    router.push(`/content/${conetntId}`)
  }

  return (
    <TabContentSection>
      {userContents.length > 0 ? (
        userContents.map((content) => {
          const { id, user, mainimageUrl, like, isBookmark, isLike } = content
          return (
            <ThumbnailRect
              key={id}
              id={id as string}
              profileImage={user.profileImg}
              username={user.userName as string}
              bgImage={mainimageUrl as string}
              like={like}
              isLike={isLike}
              isBookmark={isBookmark}
              onClickContents={onClickContentHandle}
              onClickBookmark={onClickBookmark}
              onClickLike={onClickLike}
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
