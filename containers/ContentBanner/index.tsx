import { BookmarkBtn, LikeBtn, UserInfoHor } from '@components/index'
import { IContentBanner } from '@interfaces'
import { DivWithBgImg } from '@styles/index'

const ContentBanner = ({
  id,
  title,
  mainImgUrl,
  username,
  userProfileUrl,
  likesCount,
  isLike = false,
  isBookmark = false,
}: IContentBanner) => {
  return (
    <DivWithBgImg bgUrl={mainImgUrl}>
      <div className='content-banner bookmark'>
        <BookmarkBtn id={id} isChecked={isBookmark} />
      </div>
      <div className='main-title content-banner'>{title}</div>
      <div className='bottom-left content-banner'>
        <UserInfoHor
          userName={username || 'Anonymous'}
          profileImage={userProfileUrl}
        />
      </div>
      <div className='bottom-right content-banner'>
        <LikeBtn id={id} like={likesCount || 0} isChecked={isLike} />
      </div>
    </DivWithBgImg>
  )
}

export default ContentBanner
