import React, { useState } from 'react'
import Link from 'next/link'
import LableTextInput from '../../../components/LableTextInput'
import PasswordInput from '../../../components/PasswordInput'
import Checkbox from '../../../components/Checkbox'
import SubmitButton from '../../../components/SubmitButton'
import OauthButton, { SNS } from '../../../components/OauthButton'
import axios from 'axios'

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    checkKeepLoggedIn: false,
  })

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e
    setInput({
      ...input,
      [name]: value,
    })
  }

  const checkChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { checked: checkKeepLoggedIn },
    } = e
    setInput({
      ...input,
      checkKeepLoggedIn,
    })
  }

  const requestLogin = async () => {
    const { email, password } = input
    const { status, data } = await axios.post('/login', {
      email,
      password,
    })

    console.log(data)

    if (status === 201) {
      // TODO : redirect main page & laod user data.
    } else {
      // TODO : show error UI
    }
  }

  const requestGoogleLogin = async () => {
    // TODO : make function
    console.log('requestGoogleLogin')
  }

  const requestkaKaoLogin = async () => {
    // TODO : make function
    console.log('requestkaKaoLogin')
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
            <OauthButton type={SNS.Google} onSubmit={requestGoogleLogin} />
            <OauthButton type={SNS.Kakao} onSubmit={requestkaKaoLogin} />
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
