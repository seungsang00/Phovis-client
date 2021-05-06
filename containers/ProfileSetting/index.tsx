import { RootReducer } from '@actions/reducer'
import { logout } from '@actions/users'
import {
  Modal,
  ProfileInput,
  ProfileImageInput,
  ToggleBtn,
  DefaultBtn,
} from '@components/index'
import { PasswordConfirm } from '@containers/index'
import { TabContentSection } from '@containers/Layout'
import { IUser } from '@interfaces'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SettingContainer, EditPassword } from './profilesetting.style'

const props = {
  userName: 'Phovis',
  profileImgUrl:
    'https://media.vlpt.us/images/seungsang00/profile/08b725c1-cc7f-4bed-9292-97f2f7ff3415/%E3%85%87%E3%85%85%E3%85%87.jpeg?w=240',
  handlePublicSection: () => console.log(`public changed`),
}

interface IProps {
  user?: IUser
}

const ProfileSetting = ({}: IProps) => {
  const [isLogout, setIsLogout] = useState(false)
  const { isLogin, user } = useSelector((state: RootReducer) => state.user)

  useEffect(() => {
    if (!isLogin || !user) {
      router.push('/auth/login')
    }
  }, [])

  // ! Modal control
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const handleModalOpen = () => {
    setModalIsOpen(true)
  }

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    if (target.localName === 'div' && target.className.includes('overlay')) {
      setModalIsOpen(false)
    }
  }

  // ! signout handler
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isLogout && !isLogin) {
      router.push('/')
    }
  }, [isLogout, isLogin])

  const handleLogout = () => {
    dispatch(logout())
    setIsLogout(true)
  }

  return (
    <TabContentSection>
      <SettingContainer>
        <div className='profile-title'>
          Hello,{' '}
          <span className='username'>{user?.userName || props.userName}</span>{' '}
          👋 사진찍기 좋은 날이죠?
        </div>
        <div className='profile-form-area'>
          <div className='profile-img-area'>
            <ProfileImageInput
              profileImgUrl={user?.profileImg || props.profileImgUrl}
            />
          </div>
          <div className='profile-setting-area'>
            <div className='profile-input-area'>
              <ProfileInput
                label='이름'
                currentValue={user?.userName || 'test'}
              />
              <ProfileInput
                label='이메일'
                authType={user?.type || 'email'}
                currentValue={user?.email || user?.type || '이메일'}
              />
              <EditPassword>
                <button onClick={handleModalOpen}>Edit password</button>
              </EditPassword>
              {modalIsOpen && (
                <Modal w='400px' h='500px' handleModalClose={handleModalClose}>
                  <PasswordConfirm
                    handleModalClose={() => setModalIsOpen(false)}
                  />
                </Modal>
              )}
            </div>
            <hr />
            <div className='public-setting-area'>
              <div className='toggle-btn-area'>
                <ToggleBtn
                  sectionName='Bookmark'
                  description='내가 북마크한 컨텐츠의 공개여부를 설정할 수 있어요'
                  onClick={props.handlePublicSection}
                />
                <ToggleBtn
                  sectionName='Like'
                  description='내가 좋아하는 컨텐츠의 공개여부를 설정할 수 있어요'
                  onClick={props.handlePublicSection}
                />
              </div>
            </div>
            <div className='signout-button-area'>
              <DefaultBtn onClick={handleLogout}>로그아웃</DefaultBtn>
            </div>
          </div>
        </div>
      </SettingContainer>
    </TabContentSection>
  )
}

export default ProfileSetting
