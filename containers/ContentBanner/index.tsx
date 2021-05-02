import { BookmarkBtn, LikeBtn, UserInfoHor } from '@components/index'
import { DivWithBgImg } from '@styles/index'
import { ContentBannerContainer } from './contentbanner.style'

/**
title
mainImgUrl
likesCount
isBookmarked
username
profileImgUrl
 */
interface IProps {
  title: string
  mainImgUrl: string
  username: string
  likesCount: number
}

const ContentBanner = ({ title, mainImgUrl, username, likesCount }: IProps) => {
  return (
    <DivWithBgImg bgUrl={mainImgUrl}>
      <div className='top-right'>
        <BookmarkBtn />
      </div>
      <div className='main-title'>{title}</div>
      <div className='bottom-left'>
        <UserInfoHor userName={username} />
      </div>
      <div className='bottom-right'>
        <LikeBtn like={likesCount} />
      </div>
    </DivWithBgImg>
  )
}

export default ContentBanner
