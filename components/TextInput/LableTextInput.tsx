import React from 'react'
import { InputContainer, Label, Input } from './input.style'

type Props = {
  label?: string
  placeholder?: string
  name: string
  value: string
  autoFocus?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const LableTextInput = ({
  label,
  placeholder,
  name,
  value,
  autoFocus,
  onChange,
}: Props) => (
  <InputContainer>
    {label && <Label htmlFor={name}>{label}</Label>}
    <Input
      type='text'
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoFocus={autoFocus}
    />
  </InputContainer>
)

export default LableTextInput
