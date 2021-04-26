import { Card, Button } from '../styles/user-card'
import { AvatarWithProps } from '../styles/common'

interface IProps {
  username: string
  profileImage: string
  contentCount: number
  onClick: () => void
}

const UserCard = (props: IProps) => (
  <Card>
    <div>
      <AvatarWithProps size={48} url={props.profileImage} alt='user profile' />
      <div className='info'>
        <span className='username'>{props.username}</span>
        <span className='count-info'>
          <span className='count'>{props.contentCount}</span>개의 출장 추천중
        </span>
      </div>
      <Button onClick={props.onClick}>UnFollow</Button>
    </div>
  </Card>
)

export default UserCard
