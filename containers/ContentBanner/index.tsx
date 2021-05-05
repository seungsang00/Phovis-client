import { BookmarkBtn, LikeBtn, UserInfoHor } from '@components/index'
import { IContentBanner } from '@interfaces'
import { DivWithBgImg } from '@styles/index'

interface props {
  handlemodify: () => void
  userId?: string
  owner: string
}

const ContentBanner = ({
  id,
  title,
  mainImgUrl,
  username,
  userProfileUrl,
  likesCount,
  isLike = false,
  isBookmark = false,
  userId,
  owner,
  handlemodify,
}: IContentBanner & props) => {
  return (
    <DivWithBgImg bgUrl={mainImgUrl}>
      {owner === userId && <div onClick={handlemodify}>수정</div>}
      <div className='top-right'>
        <BookmarkBtn id={id} isChecked={isBookmark} />
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
