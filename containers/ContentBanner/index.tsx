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
  isBookMark = false,
}: IContentBanner) => {
  return (
    <DivWithBgImg bgUrl={mainImgUrl}>
      <div className='top-right'>
        <BookmarkBtn id={id} isChecked={isBookMark} />
      </div>
      <div className='main-title'>{title}</div>
      <div className='bottom-left'>
        <UserInfoHor
          userName={username || 'Anonymous'}
          profileImage={userProfileUrl}
        />
      </div>
      <div className='bottom-right'>
        <LikeBtn id={id} like={likesCount || 0} isChecked={isLike} />
      </div>
    </DivWithBgImg>
  )
}

export default ContentBanner
