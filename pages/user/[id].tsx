import { CommonLayout } from '@containers/Layout'
import { Tab } from '@components/index'
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
  const tabList = ['Content', 'Likes', 'Bookmark']
  return (
    <>
      <Head>
        <title>Phovis - Mypage</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <CommonLayout>
        <>
          <Tab tablist={tabList} />
          {/* 여기에 탭 메뉴에 해당하는 내용을 넣어주세요. 동적 라우트로 처리하는게 좋을까요? */}
        </>
      </CommonLayout>
    </>
  )
}

export default UserPage
