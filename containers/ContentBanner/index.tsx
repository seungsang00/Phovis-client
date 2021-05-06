import { BookmarkBtn, LikeBtn, UserInfoHor } from '@components/index'
import { IContentBanner } from '@interfaces'
import { DivWithBgImg } from '@styles/index'

interface Iprops extends IContentBanner {
  onClickBookmark: (contentId: string) => void
  onClickLike: (cotentId: string) => void
}

const ContentBanner = ({
  id,
  title,
  mainImgUrl,
  username,
  userProfileUrl,
  like,
  isLike,
  isBookmark,
  onClickBookmark,
  onClickLike,
}: Iprops) => {
  return (
    <DivWithBgImg bgUrl={mainImgUrl}>
      <div className='content-banner bookmark'>
        <BookmarkBtn id={id} isChecked={isBookmark} onClick={onClickBookmark} />
      </div>
      <div className='main-title content-banner'>{title}</div>
      <div className='bottom-left content-banner'>
        <UserInfoHor
          userName={username || 'Anonymous'}
          profileImage={userProfileUrl}
        />
      </div>
      <div className='bottom-right content-banner'>
        <LikeBtn id={id} like={like} isChecked={isLike} onClick={onClickLike} />
      </div>
    </DivWithBgImg>
  )
}

export default ContentBanner
