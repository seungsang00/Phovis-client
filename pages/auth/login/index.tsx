import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { RootReducer } from '@actions/reducer'
import { login, loginWithGoogle, resetErrorMessage } from '@actions/users'
import {
  LableTextInput,
  PasswordInput,
  GoogleLoginButton,
  KakaoLoginButton,
  LoginButton,
  SignButton,
} from '@components/index'

import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'
import {
  CommonLayout,
  SignPageLayout,
  MainHeader,
  SignSection,
} from '@containers/index'

// import useAction from '../../../hooks/useAction';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    checkKeepLoggedIn: false,
  })

  const { isLogin, error, user } = useSelector(
    (state: RootReducer) => state.user
  )
  const dispatch = useDispatch()
  // const _Login = useAction(login);

  const router = useRouter()

  useEffect(() => {
    if (isLogin) {
      alert('Login success')
      router.push('/')
    }
    if (error) {
      // TODO : show error UI
      alert(`Login fail : ${error}`)
      dispatch(resetErrorMessage())
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

  const requestLogin = async () => {
    dispatch(login(input))
  }

  const requestGoogleLogin = async (
    result: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log(result)
    // console.log('requestGoogleLogin')
    if ('error' in result) {
      alert('Google Login fail')
    } else {
      dispatch(loginWithGoogle((result as GoogleLoginResponse).tokenId))
      //alert('Google Login success!')
      // router.push('/')
    }
  }

  const requestkaKaoLogin: React.MouseEventHandler<HTMLButtonElement> = () => {
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

  let userId
  if (user) {
    userId = user.id
  }

  return (
    <>
      <CommonLayout
        header={
          <MainHeader
            isLogin={false}
            userId={userId as string}
            hideLoginBtn={true}
          />
        }>
        <SignPageLayout className='sign-area'>
          <SignSection className='sign-in'>
            <article>
              <h2 className='title'>
                Sign in <span className='main-logo'>Phovis</span>
              </h2>
              <LableTextInput
                name='email'
                onChange={inputChangeHandler}
                placeholder='Email'
                value={input.email}
                autoFocus={true}
              />
              <PasswordInput
                name='password'
                placeholder='Password'
                onChange={inputChangeHandler}
                value={input.password}
              />
              <LoginButton text='Sign in' onSubmit={requestLogin} />

              <p className='division'>or login with social account</p>

              <div>
                <GoogleLoginButton
                  clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
                  onSubmit={requestGoogleLogin}
                />
                <KakaoLoginButton onSubmit={requestkaKaoLogin} />
              </div>
            </article>
            {/* <article>
              <h2>Title text and Logo</h2>
              <img />
              <p>Main comment</p>
            </article> */}
          </SignSection>
          <SignSection className='sign-up'>
            <article className='sign'>
              <h2 className='title'>
                Sign up <span className='main-logo'>Phovis</span>
              </h2>
              <p className='division'>sign up and share your Phovis</p>
              <Link href='/auth/signup'>
                <SignButton>Sign Up</SignButton>
              </Link>
              <section className='sign-aside sign-up'></section>
            </article>
          </SignSection>
        </SignPageLayout>
      </CommonLayout>
    </>
  )
}

export default Login
