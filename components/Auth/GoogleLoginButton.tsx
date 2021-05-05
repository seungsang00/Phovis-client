import React from 'react'
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'
import { SocialButton } from './social-login-button.style'

type Props = {
  clientId: string
  onSubmit: (result: GoogleLoginResponse | GoogleLoginResponseOffline) => void
}

// TODO : 구글로고 추가

const GoogleLoginButton = ({ clientId, onSubmit }: Props) => (
  <div>
    <GoogleLogin
      clientId={clientId}
      render={(renderProps) => (
        <SocialButton
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}>
          Google 계정으로 로그인
        </SocialButton>
      )}
      onSuccess={onSubmit}
      onFailure={onSubmit}
      cookiePolicy={'single_host_origin'}
    />
  </div>
)

export default GoogleLoginButton
