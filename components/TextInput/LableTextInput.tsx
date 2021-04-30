import React from 'react'

type Props = {
  label?: string
  placeholder?: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const LableTextInput = ({
  label,
  placeholder,
  name,
  value,
  onChange,
}: Props) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      type='text'
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
)

export default LableTextInput
