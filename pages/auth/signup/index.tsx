import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  LableTextInput,
  LoginButton,
  PasswordInput,
  SignButton,
} from '@components/index'

import axios from 'axios'
import { CommonLayout, SignPageLayout, SignSection } from '@containers/Layout'
import MainHeader from '@containers/MainHeader'

const Signup = () => {
  const [input, setInput] = useState({
    userName: '',
    email: '',
    password: '',
  })

  const router = useRouter()

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e
    setInput({
      ...input,
      [name]: value,
    })
  }

  const requestSignUp = async () => {
    const { userName, email, password } = input

    const { status, data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/signup`,
      {
        userName,
        email,
        password,
      }
    )

    console.log(data)

    if (status === 201) {
      // TODO : show signup success UI & redirect login page
      alert('signup success')
      router.push('/auth/login')
    } else {
      // TODO : show error UI
      alert('signup fail')
    }
  }

  return (
    <>
      <CommonLayout
        header={
          <MainHeader isLogin={false} userId={null} hideLoginBtn={true} />
        }>
        <SignPageLayout className='sign-area'>
          <SignSection className='sign-in'>
            <article className='sign'>
              <h2 className='title'>
                Sign in <span className='main-logo'>Phovis</span>
              </h2>
              <p className='division'>sign in and find new Phovis</p>
              <Link href='/auth/login'>
                <SignButton>Sign in</SignButton>
              </Link>
              <section className='sign-aside sign-in'></section>
            </article>
          </SignSection>
          <SignSection className='sign-up'>
            <article>
              <h2 className='title'>
                Sign up <span className='main-logo'>Phovis</span>
              </h2>
              <LableTextInput
                name='userName'
                placeholder='Your Name'
                onChange={inputChangeHandler}
                autoFocus={true}
                value={input.userName}
              />
              <LableTextInput
                name='email'
                placeholder='Email'
                onChange={inputChangeHandler}
                value={input.email}
              />
              <PasswordInput
                name='password'
                placeholder='Password'
                onChange={inputChangeHandler}
                value={input.password}
              />
              <LoginButton text='Sign up' onSubmit={requestSignUp} />
            </article>
          </SignSection>
        </SignPageLayout>
      </CommonLayout>
    </>
  )
}

export default Signup
