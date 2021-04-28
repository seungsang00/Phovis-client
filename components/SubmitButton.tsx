import React from 'react'
import { Button } from '@styles/index'

type Props = {
  text?: string
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
}

// TODO : 버튼에 아이콘 추가 해야 됨

const SubmitButton = ({ text, onSubmit }: Props) => (
  <Button w={100} h={50} onClick={onSubmit}>
    {text || 'Submit'}
  </Button>
)

export default SubmitButton
