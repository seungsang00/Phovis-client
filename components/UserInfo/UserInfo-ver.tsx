import { UserContainer, Avatar } from './user-info'

type props = {
  userName: string
  profileImage?: string
}

const UserInfoVer = ({
  profileImage = '/src/tmpProfileImg.webp',
  userName = 'jeong',
}: props) => {
  return (
    <div>
      <UserContainer>
        <div className='vertical'>
          <Avatar src={profileImage} alt='user profile' />
          <span className='userName'>{userName}</span>
        </div>
      </UserContainer>
    </div>
  )
}

export default UserInfoVer
