import React from 'react'
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'

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
