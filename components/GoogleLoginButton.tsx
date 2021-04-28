import React from 'react'
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'

type Props = {
  onSubmit: (result: GoogleLoginResponse | GoogleLoginResponseOffline) => void
}

// TODO : 구글로고 추가

const GoogleLoginButton = ({ onSubmit }: Props) => (
  <div>
    <GoogleLogin
      clientId={process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID as string}
      render={(renderProps) => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          Google
        </button>
      )}
      onSuccess={onSubmit}
      onFailure={onSubmit}
      cookiePolicy={'single_host_origin'}
    />
  </div>
)

export default GoogleLoginButton
