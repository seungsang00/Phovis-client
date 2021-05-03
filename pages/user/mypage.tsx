import { CommonLayout } from '@containers/Layout'
import Head from 'next/head'

const MyPage = () => {
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

export default MyPage
