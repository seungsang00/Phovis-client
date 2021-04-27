import React, { useState } from 'react'

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
  const [viewPassword, setViewPassword] = useState(false)
  const passwordVisibleHandler = () => {
    setViewPassword(!viewPassword)
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type={viewPassword ? 'text' : 'password'}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <div onClick={passwordVisibleHandler}>Eye Icon</div>
      </div>
    </div>
  )
}

export default PasswordInput
