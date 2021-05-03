import { CommonLayout } from '@containers/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const UserPage = () => {
  const router = useRouter()
  const user_id = router.query.id

  useEffect(() => {
    if (user_id) {
      console.log(`user id >>`, user_id)
    }
  }, [user_id])

  return (
    <>
      <Head>
        <title>Phovis - Mypage</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <CommonLayout>{/* 탭이 들어갈 예정입니다 */}</CommonLayout>
    </>
  )
}

export default UserPage
