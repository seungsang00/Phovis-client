import { RootReducer } from '@actions/reducer'
// import { getUserInfo } from '@actions/users'
import { LoginButton, PasswordInput } from '@components/index'
// import useAction from '@hooks/useAction'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { EditContainer } from './passwordedit.style'

interface IProps {
  handleModalClose: () => void
}
export const PasswordConfirm = ({ handleModalClose }: IProps) => {
  const [sessionToken, setSessionToken] = useState(null)
  const [input, setInput] = useState({
    current_pw: '',
    new_pw: '',
    check_pw: '',
    isValid: false,
  })

  const { user, accessToken } = useSelector((state: RootReducer) => state.user)

  useEffect(() => {
    console.log('여기 user state :', user)
  }, [user])

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { name, value },
    } = e
    setInput({
      ...input,
      [name]: value,
    })
    // TODO: 비번 확인 같아야 버튼 활성화 시키기
  }

  const confirmPassword = async () => {
    try {
      const res = await axios.post(
        `https://localhost:4000/auth/password`,
        {
          password: input.current_pw,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      console.log(`비밀번호 확인 응답`, res)
      const { key } = res.data
      setSessionToken(key)
    } catch (e) {
      console.log(e)
    }
  }

  const changePw = async () => {
    try {
      const res = await axios.put(
        `https://localhost:4000/auth/password`,
        {
          key: sessionToken,
          newPassword: input.new_pw,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      console.log(`비밀번호 수정 응답`, res)
      if (res.status === 203) {
        handleModalClose()
      }
    } catch (e) {
      console.log(e)
    }
    // TODO: 203 응답이 오면 성공 알림 띄우고 모달창 닫기
    // if (res.status === 203) {
    //   handleModalClose()
    // }
    // if (user && user.accessToken) {
    // } else {
    //   alert(`로그인 상태가 아닙니다`)
    //   // router.push('/auth/login')
    // }
  }

  return (
    <EditContainer>
      {!sessionToken ? (
        <div className='pw-edit-container'>
          <label htmlFor='password-confirm'>
            <h4>
              비밀번호를 변경하시기 전에,
              <br /> 현재 비밀번호를 확인해주세요
            </h4>
          </label>
          <PasswordInput
            name='current_pw'
            value={input.current_pw}
            placeholder='현재 패스워드를 입력해주세요'
            onChange={inputChangeHandler}
          />
          <LoginButton text='비밀번호 확인' onSubmit={confirmPassword} />
        </div>
      ) : (
        <div className='pw-edit-container'>
          <label htmlFor='password-confirm'>
            <h4>새로운 비밀번호를 입력해주세요</h4>
          </label>
          <PasswordInput
            name='new_pw'
            value={input.new_pw}
            placeholder='New Password'
            onChange={inputChangeHandler}
          />
          {/* <label htmlFor='password-new'>패스워드 확인</label> */}
          <PasswordInput
            name='check_pw'
            value={input.check_pw}
            placeholder='Confirm Password'
            onChange={inputChangeHandler}
          />
          <LoginButton
            text='비밀번호 바꿀래요!'
            onSubmit={changePw}></LoginButton>
        </div>
      )}
    </EditContainer>
  )
}
