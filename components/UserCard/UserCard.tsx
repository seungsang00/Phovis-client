import { Card, Button } from './user-card.style'
import { AvatarWithProps } from '@styles/index'

interface IProps {
  username: string
  profileImage?: string
  contentCount?: number
  onClick: () => void
}

const UserCard = ({
  username,
  profileImage,
  contentCount,
  onClick,
}: IProps) => (
  <Card>
    <div>
      <AvatarWithProps size={48} url={profileImage} alt='user profile' />
      <div className='info'>
        <span className='username'>{username}</span>
        <span className='count-info'>
          <span className='count'>{contentCount}</span>개의 출장 추천중
        </span>
      </div>
      <Button onClick={onClick}>UnFollow</Button>
    </div>
  </Card>
)

export default UserCard
