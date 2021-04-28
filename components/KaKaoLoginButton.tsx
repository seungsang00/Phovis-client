import React from 'react'
import KakaoLogin from 'react-kakao-login'

type Props = {
  clientId: string
  onSubmit: (rsult: any) => void
}

// TODO : 카카오로고 추가
// TODO : 클릭시 클라이언트 아이디를 사용하여 로그인 요청을 한다.

const KakaoLoginButton = ({ clientId, onSubmit }: Props) => (
  <div>
    <KakaoLogin
      token={clientId}
      onSuccess={onSubmit}
      onFail={onSubmit}
      render={(renderProps) => (
        <button onClick={renderProps.onClick}>KaKao</button>
      )}
    />
  </div>
)

export default KakaoLoginButton
