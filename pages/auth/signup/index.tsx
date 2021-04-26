import React, { useState } from 'react'
import Link from 'next/link'
import LableTextInput from '../../../components/LableTextInput'
import PasswordInput from '../../../components/PasswordInput'
import SubmitButton from '../../../components/SubmitButton'
import axios from 'axios'

const Signup = () => {
  const [input, setInput] = useState({
    userName: '',
    email: '',
    password: '',
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

  const requestSignUp = async () => {
    const { userName, email, password } = input
    const { status, data } = await axios.post('/signup', {
      userName,
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

  return (
    <section>
      <article>
        <h2>Title text and Logo</h2>
        <img />
        <p>Wellcome comment</p>
      </article>
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
  )
}

export default Signup
