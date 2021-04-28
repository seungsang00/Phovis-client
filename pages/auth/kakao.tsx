import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

type Props = {
  location?: string
  match?: string
}

const KakaoLoginPage = ({ location, match }: Props) => {
  // parse query string params
  console.log(location)
  console.log(match)

  useEffect(() => {
    // API req to server : https://localhost:4000/auth/kakao
    // body -> kakao code
  }, [])

  return <div>Kakao loading</div>
}

export default KakaoLoginPage
