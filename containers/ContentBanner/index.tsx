import { BookmarkBtn, LikeBtn, UserInfoHor } from '@components/index'
import { IContentBanner } from '@interfaces'
import { DivWithBgImg } from '@styles/index'

const ContentBanner = ({
  title,
  mainImgUrl,
  username,
  userProfileUrl,
  likesCount,
}: IContentBanner) => {
  return (
    <DivWithBgImg bgUrl={mainImgUrl}>
      <div className='top-right'>
        <BookmarkBtn />
      </div>
      <div className='main-title'>{title}</div>
      <div className='bottom-left'>
        <UserInfoHor userName={username} profileImage={userProfileUrl} />
      </div>
      <div className='bottom-right'>
        <LikeBtn like={likesCount} />
      </div>
    </DivWithBgImg>
  )
}

export default ContentBanner
