import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Tab } from '@components/index'
import { CommonLayout } from '@containers/Layout'
import { UserContentsTab } from '@containers/index'
import { TabContainer } from './userpage.style'
import { RootReducer } from '@actions/reducer'
import { getUserInfo } from '@actions/users'
import { useSelector } from 'react-redux'
import { IContent } from '@interfaces'
import useAction from '@hooks/useAction'
import axios from 'axios'

const UserPage = () => {
  const tabList = ['Content', 'Likes', 'Bookmark', 'Setting']
  const router = useRouter()
  const user_id = router.query.id

  const [selctTab, setSelectTab] = useState('Content')
  const [userContents, setUserContents] = useState<IContent[]>([])
  const [userLikesContents, setUserLikesContents] = useState<IContent[]>([])
  const [userBookmarkContents, setUserBookmarkContents] = useState<IContent[]>(
    []
  )

  const { accessToken, user } = useSelector((state: RootReducer) => state.user)

  const _getUserInfo = useAction(getUserInfo)

  useEffect(() => {
    _getUserInfo(accessToken)
  }, [])

  useEffect(() => {
    if (user_id && user && String(user.id) === user_id) {
      console.log('login user id : ', user.id)
      console.log('Set my page')
    } else {
      console.log(`user id query parameter : `, user_id)
      console.log('user state :', user)
      console.log('Set user page')
    }
  }, [user, user_id])

  const onClickTabHandler = (tab: string) => {
    setSelectTab(tab)
    loadContent(tab)
  }

  const loadUserContents = async () => {
    try {
      const { status, data } = await axios.get(
        'https://localhost:4000/content',
        {
          params: {
            maxnum: 15,
            userId: user_id,
          },
        }
      )

      if (status === 200) {
        console.log('loadUserContents : ', data)
        setUserContents([...data])
      }
    } catch (err) {
      console.log(err)
    }
  }

  const loadUserLikeContents = async () => {
    try {
      const { status, data } = await axios.get(
        'https://localhost:4000/content',
        {
          params: {
            maxnum: 15,
            userId: user_id,
            filter: 'like',
          },
        }
      )
      if (status === 200) {
        console.log('loadUserLikeContents : ', data)
        setUserLikesContents([...data])
      }
    } catch (err) {
      console.log(err)
    }
  }

  const loadUserBookmarkContents = async () => {
    try {
      const { status, data } = await axios.get(
        'https://localhost:4000/content',
        {
          params: {
            maxnum: 15,
            userId: user_id,
            filter: 'bookmark',
          },
        }
      )
      if (status === 200) {
        console.log('loadUserBookmarkContents : ', data)
        setUserBookmarkContents([...data])
      }
    } catch (err) {
      console.log(err)
    }
  }

  const loadContent = async (tab: string) => {
    if (tab === 'Content') {
      loadUserContents()
    } else if (tab === 'Likes') {
      loadUserLikeContents()
    } else if (tab === 'Bookmark') {
      loadUserBookmarkContents()
    } else if (tab === 'Setting') {
      _getUserInfo(accessToken)
    }
  }

  return (
    <>
      <Head>
        <title>Phovis - Profile</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <CommonLayout>
        <TabContainer>
          <Tab
            tablist={tabList}
            onClick={onClickTabHandler}
            selectedTab={selctTab}
          />
          {/* 여기에 탭 메뉴에 해당하는 내용을 넣어주세요. 동적 라우트로 처리하는게 좋을까요? */}
          {selctTab === 'Content' && (
            <UserContentsTab userContents={userContents} />
          )}
          {selctTab === 'Likes' && (
            <UserContentsTab userContents={userLikesContents} />
          )}
          {selctTab === 'Bookmark' && (
            <UserContentsTab userContents={userBookmarkContents} />
          )}
          {selctTab === 'Setting' && (
            <div>Setting Tab Compoent 를 작성해 주세요</div>
          )}
        </TabContainer>
      </CommonLayout>
    </>
  )
}

export default UserPage
