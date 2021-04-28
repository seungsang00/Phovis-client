import React from 'react'

type Props = {
  onSubmit: () => void
}

// TODO : 카카오로고 추가
// TODO : 클릭시 클라이언트 아이디를 사용하여 로그인 요청을 한다.

const KakaoLoginButton = ({ onSubmit }: Props) => (
  <div onClick={onSubmit}>Kakao</div>
)

export default KakaoLoginButton
