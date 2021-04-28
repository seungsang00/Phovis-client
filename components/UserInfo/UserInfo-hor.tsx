import { UserContainer, Avatar } from './user-info.style'

type props = {
  userName: string
  profileImage?: string
}

const UserInfoHor = ({
  profileImage = '/src/tmpProfileImg.webp',
  userName = 'jeong',
}: props) => {
  return (
    <UserContainer>
      <div className='horizontal'>
        <Avatar className='img' src={profileImage} alt='user profile' />
        <span className='userName'>{userName}</span>
      </div>
    </UserContainer>
  )
}

export default UserInfoHor
