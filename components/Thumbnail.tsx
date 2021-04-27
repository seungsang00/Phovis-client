import { DivWithBgImg } from '../styles/common'
import {
  ThumbnailContainer_square,
  ThumbnailContainer_rect,
} from '../styles/thumbnail'
import BookmarkBtn from './BookmarkBtn'
import Like from './Like'
import UserInfoHor from './UserInfo-hor'

interface IRect {
  profileImage: string
  username: string
  bgImage: string
  likeCount: number
}

export const ThumbnailRect = ({
  profileImage,
  username,
  bgImage,
  likeCount,
}: IRect) => (
  <ThumbnailContainer_rect>
    <DivWithBgImg bgUrl={bgImage} p={'24px'}>
      <span className='bookmark'>
        <BookmarkBtn />
      </span>
      <UserInfoHor userName={username} profileImage={profileImage} />
      <span className='like'>
        <Like like={likeCount} />
      </span>
    </DivWithBgImg>
  </ThumbnailContainer_rect>
)

interface ISquare {
  profileImage: string
  username: string
  bgImage: string
}

export const ThumbnailSquare = ({
  profileImage,
  username,
  bgImage,
}: ISquare) => (
  <ThumbnailContainer_square>
    <DivWithBgImg bgUrl={bgImage} p={'24px'}>
      <UserInfoHor userName={username} profileImage={profileImage} />
    </DivWithBgImg>
  </ThumbnailContainer_square>
)
