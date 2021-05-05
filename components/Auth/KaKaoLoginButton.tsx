import React from 'react'
import { SocialButton } from './social-login-button.style'

type Props = {
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
}

// TODO : 카카오로고 추가
// TODO : 클릭시 클라이언트 아이디를 사용하여 로그인 요청을 한다.

const KakaoLoginButton = ({ onSubmit }: Props) => (
  <SocialButton onClick={onSubmit}>Kakao 계정으로 로그인</SocialButton>
)

export default KakaoLoginButton
