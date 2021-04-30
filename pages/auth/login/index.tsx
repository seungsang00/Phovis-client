import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
// import axios from 'axios'
import { RootReducer } from '@actions/reducer'
import { login, loginWithGoogle } from '@actions/users'
import LableTextInput from '../../../components/LableTextInput'
import PasswordInput from '../../../components/PasswordInput'
import Checkbox from '../../../components/Checkbox'
import SubmitButton from '../../../components/SubmitButton'
import GoogleLoginButton from '../../../components/GoogleLoginButton'
import KakaoLoginButton from '../../../components/KaKaoLoginButton'

import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'

// import useAction from '../../../hooks/useAction';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    checkKeepLoggedIn: false,
  })

  const { isLogin, error } = useSelector((state: RootReducer) => state.user)
  const dispatch = useDispatch()
  // const _Login = useAction(login);

  const router = useRouter()

  useEffect(() => {
    if (isLogin) {
      alert('Login success')
      // redirect main page & laod user data.

      // NOTE : load user data on main page.
      // dispatch(getUserInfo(user.accessToken))
      router.push('/main')
    }
    if (error) {
      // TODO : show error UI
      alert(`Login fail : ${error}`)
    }
  }, [isLogin, error])

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { name, value },
    } = e
    setInput({
      ...input,
      [name]: value,
    })
  }

  const checkChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { checked: checkKeepLoggedIn },
    } = e
    setInput({
      ...input,
      checkKeepLoggedIn,
    })
  }

  const requestLogin = async () => {
    dispatch(login(input))
  }

  const requestGoogleLogin = async (
    result: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    // console.log(result)
    // console.log('requestGoogleLogin')
    if ('error' in result) {
      alert('Google Login fail')
    } else {
      dispatch(loginWithGoogle((result as GoogleLoginResponse).tokenId))
      //alert('Google Login success!')
      // router.push('/')
    }
  }

  const requestkaKaoLogin: React.MouseEventHandler<HTMLDivElement> = () => {
    // console.log('requestkaKaoLogin')
    // 카카오 로그인 버튼클릭시 redirect 주소창이 열린다.
    // redirect 한 장소에서 카카오 계정 정보를 받아온 뒤 새 윈도우가 닫힌다.

    // TODO : Redirect URL 을 개발환경에 따라 다르게 줄 수 있도록 설정
    const baseUrl = 'https://kauth.kakao.com/oauth/authorize'
    const clientId = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID
    const redirectUrl = 'http://localhost:3000/auth/kakao'
    window.open(
      `${baseUrl}?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}`,
      '_blank'
    )
  }

  return (
    <div>
      <section>
        <article>
          <h2>Log in</h2>
          <LableTextInput
            name='email'
            label='Email'
            onChange={inputChangeHandler}
            value={input.email}
          />
          <PasswordInput
            name='password'
            label='Password'
            onChange={inputChangeHandler}
            value={input.password}
          />
          <div>
            <Checkbox
              name='checkKeepLoggedIn'
              text='Keep me logged in'
              onChange={checkChangeHandler}
            />
            <Link href='/auth/forgotpassword'>Forgot your password ?</Link>
          </div>
          <SubmitButton text='Sign in' onSubmit={requestLogin} />
          <Link href='/auth/signup'>Go to sign up new account !</Link>
          <hr />
          <p>Or login with SNS account</p>
          <div>
            <GoogleLoginButton
              clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
              onSubmit={requestGoogleLogin}
            />
            <KakaoLoginButton onSubmit={requestkaKaoLogin} />
          </div>
        </article>
        <article>
          <h2>Title text and Logo</h2>
          <img />
          <p>Main comment</p>
        </article>
      </section>
    </div>
  )
}

export default Login
