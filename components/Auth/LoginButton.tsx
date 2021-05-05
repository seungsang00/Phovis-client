import React from 'react'
import { SignButton } from './social-login-button.style'

type Props = {
  text?: string
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
}

// TODO : 버튼에 아이콘 추가 해야 됨

const LoginButton = ({ text, onSubmit }: Props) => (
  <SignButton onClick={onSubmit}>{text || 'Login'}</SignButton>
)

export default LoginButton
