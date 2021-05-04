import { RootReducer } from '@actions/reducer'
// import { getUserInfo } from '@actions/users'
import { DefaultBtn, PasswordInput } from '@components/index'
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

  const { user } = useSelector((state: RootReducer) => state.user)

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
    if (user && user.accessToken) {
      const res = await axios.post(
        `https://localhost:4000/auth/password`,
        {
          password: input.current_pw,
        },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      console.log(`프사 체인지`, res)
      const { key } = res.data
      setSessionToken(key)
    } else {
      alert(`login!!`)
    }
  }

  const changePw = async () => {
    if (user && user.accessToken) {
      const res = await axios.put(
        `https://localhost:4000/auth/password`,
        {
          key: sessionToken,
          newPassword: input.new_pw,
        },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      console.log(res)
      // TODO: 203 응답이 오면 성공 알림 띄우고 모달창 닫기
      if (res.status === 203) {
        handleModalClose()
      }
    } else {
      alert(`login!!`)
    }
  }

  return (
    <EditContainer>
      {!sessionToken ? (
        <div>
          <label htmlFor='password-confirm'>현재 패스워드</label>
          <PasswordInput
            name='current_pw'
            value={input.current_pw}
            onChange={inputChangeHandler}
          />
          <DefaultBtn onClick={confirmPassword}>비밀번호 확인</DefaultBtn>
        </div>
      ) : (
        <div>
          <label htmlFor='password-confirm'>New 패스워드</label>
          <PasswordInput
            name='new_pw'
            value={input.new_pw}
            onChange={inputChangeHandler}
          />
          <label htmlFor='password-new'>패스워드 확인</label>
          <PasswordInput
            name='check_pw'
            value={input.check_pw}
            onChange={inputChangeHandler}
          />
          <DefaultBtn onClick={changePw}>비밀번호 바꿀래요!</DefaultBtn>
        </div>
      )}
    </EditContainer>
  )
}
