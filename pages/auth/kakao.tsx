import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import useAction from 'hooks/useAction'
import { loginWithKakao } from 'modules/users'
import { RootReducer } from 'modules/reducer'

// TODO: token 못 받았을 경우 분기처리

const KakaoLoginPage = () => {
  const router = useRouter()
  const { isLogin } = useSelector((state: RootReducer) => state.user)
  const { code } = router.query

  const _loginWithKakao = useAction(loginWithKakao)

  useEffect(() => {
    if (isLogin) {
      window.close()
    }
  }, [isLogin])
  useEffect(() => {
    if (code) {
      _loginWithKakao(code as string)
    }
  }, [code])

  return <div>Kakao loading</div>
}

export default KakaoLoginPage
