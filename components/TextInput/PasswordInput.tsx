import React, { useState } from 'react'
import {
  InputContainer,
  ShowController,
  Input,
  PasswordContainer,
} from './input.style'

type Props = {
  label?: string
  placeholder?: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PasswordInput = ({
  label,
  placeholder,
  name,
  value,
  onChange,
}: Props) => {
  const [viewPassword, setViewPassword] = useState<boolean>(false)
  const passwordVisibleHandler = () => {
    setViewPassword(!viewPassword)
  }

  return (
    <InputContainer>
      {label && <label htmlFor={name}>{label}</label>}
      <PasswordContainer>
        <Input
          type={viewPassword ? 'text' : 'password'}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <ShowController onClick={passwordVisibleHandler}></ShowController>
      </PasswordContainer>
    </InputContainer>
  )
}

export default PasswordInput
