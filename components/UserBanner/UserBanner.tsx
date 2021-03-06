import { BannerContainer } from './user-banner.style'
import { DivWithBgImg, AvatarWithProps } from '@styles/index'

interface IProps {
  profileImage?: string
  username?: string
  bgImage?: string
}

const UserBanner = ({ profileImage, username, bgImage }: IProps) => (
  <BannerContainer>
    <DivWithBgImg bgUrl={bgImage} p={'36px'}>
      <div className='user-info'>
        <AvatarWithProps size={48} url={profileImage} alt='user profile' />
        <h1>{username}</h1>
      </div>
    </DivWithBgImg>
  </BannerContainer>
)

export default UserBanner
