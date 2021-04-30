import { DivWithBgImg } from '@styles/index'
import {
  ThumbnailContainer_square,
  ThumbnailContainer_rect,
} from './thumbnail.style'
import BookmarkBtn from '../Buttons/BookmarkBtn'
import { LikeBtn } from '@components/Buttons'
import UserInfoHor from '@components/UserInfo/UserInfo-hor'

interface IRect {
  id: string
  profileImage?: string
  username: string
  bgImage: string
  likeCount: number
}

// NOTE : ThumbnailRect, ThumbnailSquare 컴포넌트 하단에 태그를 노출 시키면 좋을것 같아요

export const ThumbnailRect = ({
  id,
  profileImage,
  username,
  bgImage,
  likeCount,
}: IRect) => (
  <ThumbnailContainer_rect>
    <DivWithBgImg bgUrl={bgImage} p={'24px'}>
      <span className='bookmark'>
        <BookmarkBtn id={id} />
      </span>
      <UserInfoHor userName={username} profileImage={profileImage} />
      <span className='like'>
        <LikeBtn like={likeCount} />
      </span>
    </DivWithBgImg>
  </ThumbnailContainer_rect>
)

interface ISquare {
  profileImage?: string
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
