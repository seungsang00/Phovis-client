import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LableTextInput, PasswordInput, SubmitButton } from '@components/index'

import axios from 'axios'
import { CommonLayout } from '@containers/Layout'
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
      'https://localhost:4000/auth/signup',
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
      <CommonLayout header={<MainHeader isLogin={false} userId={null} />}>
        <section>
          <article>
            <h2>Sign up</h2>
            <LableTextInput
              name='userName'
              label='User name'
              onChange={inputChangeHandler}
              value={input.userName}
            />
            <LableTextInput
              name='email'
              label='Email address'
              onChange={inputChangeHandler}
              value={input.email}
            />
            <PasswordInput
              name='password'
              label='Password'
              onChange={inputChangeHandler}
              value={input.password}
            />
            <SubmitButton text='Sign in' onSubmit={requestSignUp} />
            <Link href='/auth/login'>Back to login</Link>
          </article>
        </section>
      </CommonLayout>
    </>
  )
}

export default Signup
