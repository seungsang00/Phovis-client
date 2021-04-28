import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import axios from 'axios'
import { RootReducer } from '../../../modules/reducer'
import { login, loginWithGoogle } from '../../../modules/users'
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

  const user = useSelector((state: RootReducer) => state.user)
  const dispatch = useDispatch()
  // const _Login = useAction(login);

  const router = useRouter()

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
    // _Login(input);
    if (user.isLogin && user.accessToken) {
      // redirect main page & laod user data.
      // dispatch(getUserInfo(user.accessToken))
      // _Login(input);
      alert('Login success')
      router.push('/')
    } else {
      // TODO : show error UI
      alert('Login fail')

      console.log(user)
    }
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
      alert('Google Login success!')
      // router.push('/')
    }

    console.log(user)
  }

  const requestkaKaoLogin = async (result: any) => {
    console.log('requestkaKaoLogin')
    console.log(result)
    // client KEY, redirect URL, response Type
    // axios req -> Kakao login URL
    // axios.get('https://kauth.kakao.com/oauth/authorize', {
    //   params: {
    //     state: 'body',
    //     client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
    //     redirect_uri: 'http://localhost:3000/auth/kakao',
    //     response_type: 'code',
    //   },
    // })
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
            <KakaoLoginButton
              clientId={process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID as string}
              onSubmit={requestkaKaoLogin}
            />
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
