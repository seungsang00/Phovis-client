import { CommonLayout } from '@containers/Layout'
import { Tab } from '@components/index'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

const UserPage = () => {
  const tabList = ['Content', 'Likes', 'Bookmark']
  const router = useRouter()
  const user_id = router.query.id

  const [selctTab, setSelectTab] = useState('Content')

  useEffect(() => {
    if (user_id) {
      console.log(`user id >>`, user_id)
    }
  }, [user_id])

  const onClickTabHandler = (tab: string) => {
    setSelectTab(tab)
  }

  return (
    <>
      <Head>
        <title>Phovis - Mypage</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <CommonLayout>
        <>
          <Tab tablist={tabList} onClick={onClickTabHandler} />
          {/* 여기에 탭 메뉴에 해당하는 내용을 넣어주세요. 동적 라우트로 처리하는게 좋을까요? */}
          {selctTab === 'Content' && (
            <div>Content Tab Compoent 를 작성해 주세요</div>
          )}
          {selctTab === 'Likes' && (
            <div>Likes Tab Compoent 를 작성해 주세요</div>
          )}
          {selctTab === 'Bookmark' && (
            <div>Bookmark Tab Compoent 를 작성해 주세요</div>
          )}
        </>
      </CommonLayout>
    </>
  )
}

export default UserPage
