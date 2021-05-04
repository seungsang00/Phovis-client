import React, { useEffect } from 'react'
import { IContent } from '@interfaces'
import { ThumbnailRect } from '@components/index'

// NOTE : Test data
import { sampleContents } from '@utils/index'

interface IProps {
  userContents: IContent[]
}

const UserContentsTab = ({ userContents }: IProps) => {
  useEffect(() => {
    console.log('this is UserContentsTab')
  }, [])

  return (
    <section>
      {userContents.length > 0 &&
        userContents.map((content) => {
          const { id, user, mainimageUrl, likecount } = content
          return (
            <ThumbnailRect
              key={id}
              id={id as string}
              profileImage={user.profileImg}
              username={user.userName as string}
              bgImage={mainimageUrl as string}
              likeCount={likecount}
            />
          )
        })}
      {/* Test data */}
      {userContents.length === 0 &&
        sampleContents.map((content) => {
          const { id, user, mainimageUrl, likecount } = content
          return (
            <ThumbnailRect
              key={id}
              id={id as string}
              profileImage={user.profileImg}
              username={user.userName as string}
              bgImage={mainimageUrl as string}
              likeCount={likecount}
            />
          )
        })}
    </section>
  )
}

export default UserContentsTab
