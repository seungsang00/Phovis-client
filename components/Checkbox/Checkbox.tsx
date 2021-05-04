import React from 'react'

type Props = {
  name: string
  text: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({ name, text, onChange }: Props) => (
  <div>
    <input type='checkbox' onChange={onChange} id={name} />
    <label htmlFor={name}>{text}</label>
  </div>
)

export default Checkbox
