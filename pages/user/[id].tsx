import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Tab } from '@components/index'
import { CommonLayout } from '@containers/Layout'
import { MainHeader, ProfileSetting, UserContentsTab } from '@containers/index'
import { RootReducer } from '@actions/reducer'
import { getUserInfo } from '@actions/users'
import { useSelector } from 'react-redux'
import { IContent, IUser } from '@interfaces'
import useAction from '@hooks/useAction'
import axios from 'axios'
import { TabContainer } from '@containers/Layout/PageLayout'

const UserPage = () => {
  const router = useRouter()
  const user_id = router.query.id

  const [userInfo, setUserInfo] = useState(null)
  const [tabList, setTabList] = useState(['Content', 'Likes', 'Bookmark'])
  const [selectedTab, setSelectedTab] = useState('Content')
  const [userContents, setUserContents] = useState<IContent[]>([])
  const [userLikesContents, setUserLikesContents] = useState<IContent[]>([])
  const [userBookmarkContents, setUserBookmarkContents] = useState<IContent[]>(
    []
  )

  const { accessToken, user, isLogin } = useSelector(
    (state: RootReducer) => state.user
  )

  const _getUserInfo = useAction(getUserInfo)

  useEffect(() => {
    _getUserInfo(accessToken)
  }, [])

  useEffect(() => {
    if (user_id) {
      loadContent(selectedTab)
    }
  }, [user_id])

  useEffect(() => {
    if (userInfo && user && String(user.id) === userInfo.id) {
      console.log(`user id query parameter : `, user_id)
      console.log('login user id : ', user.id)
      console.log('Set my page')
      setTabList(['Content', 'Likes', 'Bookmark', 'Setting'])
    }
  }, [user, userInfo])

  const onClickTabHandler = (tab: string) => {
    setSelectedTab(tab)
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

  const loadUserInfo = async () => {
    try {
      const { status, data } = await axios.get(
        'https://localhost:4000/user/info',
        {
          params: {
            id: user_id,
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      if (status === 200) {
        console.log('loadUserInfo : ', data)
        setUserInfo({ ...data })
      }
    } catch (err) {
      console.log(err)
    }
  }

  const loadContent = async (tab: string) => {
    console.log('tab : ', tab)

    if (tab === 'Content') {
      loadUserContents()
    } else if (tab === 'Likes') {
      loadUserLikeContents()
    } else if (tab === 'Bookmark') {
      loadUserBookmarkContents()
    } else if (tab === 'Setting') {
      // _getUserInfo(accessToken)
      loadUserInfo()
    }
  }

  let userId
  if (user) {
    userId = user.id
  }

  return (
    <>
      <Head>
        <title>Phovis - Profile</title>
      </Head>
      <CommonLayout
        header={<MainHeader userId={userId as string} isLogin={isLogin} />}>
        <TabContainer>
          <Tab
            tablist={tabList}
            onClick={onClickTabHandler}
            selectedTab={selectedTab}
          />
          {selectedTab === 'Content' && (
            <UserContentsTab userContents={userContents} />
          )}
          {selectedTab === 'Likes' && (
            <UserContentsTab userContents={userLikesContents} />
          )}
          {selectedTab === 'Bookmark' && (
            <UserContentsTab userContents={userBookmarkContents} />
          )}
          {selectedTab === 'Setting' && <ProfileSetting user={user as IUser} />}
        </TabContainer>
      </CommonLayout>
    </>
  )
}

export default UserPage
