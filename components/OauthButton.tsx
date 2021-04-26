import React from 'react'

enum SNS {
  Google = 'Google',
  Kakao = 'Kakao',
}

type Props = {
  type: SNS
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
}

// TODO : SNS 타입에 따라 로고 넣어야 한다.
// TODO : 타입에 따라서 Oauth 기능도 제공 ?

const OauthButton = ({ type, onSubmit }: Props) => (
  <button onClick={onSubmit}>Oauth : {type}</button>
)

export default OauthButton
export { SNS }
