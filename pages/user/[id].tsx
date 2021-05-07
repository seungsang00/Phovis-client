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

  // const [userInfo, setUserInfo] = useState<IUser | null>(null)
  const [isLoginedUser, setIsLoginedUser] = useState(false)
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
    if (isLoginedUser) {
      loadContent(selectedTab)
    }
  }, [isLoginedUser])

  useEffect(() => {
    if (user && String(user.id) === user_id) {
      console.log(`user id query parameter : `, user_id)
      console.log('login user id : ', user.id)
      console.log('Set my page')
      setTabList(['Content', 'Likes', 'Bookmark', 'Setting'])
      setIsLoginedUser(true)
    } else if (user && String(user.id) !== user_id) {
      console.log('Set user page')
      setIsLoginedUser(false)
      loadContent(selectedTab)
    }
  }, [user, user_id])

  const onClickTabHandler = (tab: string) => {
    setSelectedTab(tab)
    loadContent(tab)
  }

  const loadUserContents = async () => {
    try {
      const sendData = {
        params: {
          maxnum: 15,
          userId: user_id,
        },
        headers: isLoginedUser
          ? { Authorization: `Bearer ${accessToken}` }
          : {},
      }

      const { status, data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/content`,
        sendData
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
      const sendData = {
        params: {
          maxnum: 15,
          userId: user_id,
          filter: 'like',
        },
        headers: isLoginedUser
          ? { Authorization: `Bearer ${accessToken}` }
          : {},
      }

      const { status, data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/content`,
        sendData
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
      const sendData = {
        params: {
          maxnum: 15,
          userId: user_id,
          filter: 'bookmark',
        },
        headers: isLoginedUser
          ? { Authorization: `Bearer ${accessToken}` }
          : {},
      }

      const { status, data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/content`,
        sendData
      )
      if (status === 200) {
        console.log('loadUserBookmarkContents : ', data)
        setUserBookmarkContents([...data])
      }
    } catch (err) {
      console.log(err)
    }
  }

  // const loadUserInfo = async () => {
  //   try {
  //     const { status, data } = await axios.get(
  //       `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/info`,
  //       {
  //         params: {
  //           id: user_id,
  //         },
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     )
  //     if (status === 200) {
  //       console.log('loadUserInfo : ', data)
  //       setUserInfo({ ...data })
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

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
      // loadUserInfo()
    }
  }

  const onClickLike = async (contentId: string) => {
    console.log('onClickLike : ', contentId)

    if (!accessToken) return

    const { status, data } = await axios.put(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/like`,
      {
        id: contentId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    )

    if (status !== 201) {
      return
    }

    const { isLike: setLike } = data

    if (selectedTab === 'Content') {
      const _userContents = userContents.map((content) => {
        if (content.id === contentId) {
          if (setLike) {
            content.isLike = true
            content.like += 1
          } else {
            content.isLike = false
            content.like -= 1
          }
        }
        return content
      })
      setUserContents(_userContents)
    } else if (selectedTab === 'Likes') {
      const _userLikesContents = userLikesContents.map((content) => {
        if (content.id === contentId) {
          if (setLike) {
            content.isLike = true
            content.like += 1
          } else {
            content.isLike = false
            content.like -= 1
          }
        }
        return content
      })
      setUserLikesContents(_userLikesContents)
    } else if (selectedTab === 'Bookmark') {
      const _userBookmarkContents = userBookmarkContents.map((content) => {
        if (content.id === contentId) {
          if (setLike) {
            content.isLike = true
            content.like += 1
          } else {
            content.isLike = false
            content.like -= 1
          }
        }
        return content
      })
      setUserBookmarkContents(_userBookmarkContents)
    }
  }

  const onClickBookmark = async (contentId: string) => {
    console.log('onClickBookmark : ', contentId)

    const { status, data } = await axios.put(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/bookmark`,
      {
        id: contentId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    )

    if (status !== 201) {
      return
    }

    const { isBookmark } = data

    if (selectedTab === 'Content') {
      const _userContents = userContents.map((content) => {
        if (content.id === contentId) {
          content.isBookmark = isBookmark
        }
        return content
      })
      setUserContents(_userContents)
    } else if (selectedTab === 'Likes') {
      const _userLikesContents = userLikesContents.map((content) => {
        if (content.id === contentId) {
          content.isBookmark = isBookmark
        }
        return content
      })
      setUserLikesContents(_userLikesContents)
    } else if (selectedTab === 'Bookmark') {
      const _userBookmarkContents = userBookmarkContents.map((content) => {
        if (content.id === contentId) {
          content.isBookmark = isBookmark
        }
        return content
      })
      setUserBookmarkContents(_userBookmarkContents)
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
            <UserContentsTab
              nullText='작성한 컨텐츠가 없습니다.'
              userContents={userContents}
              onClickBookmark={onClickBookmark}
              onClickLike={onClickLike}
            />
          )}
          {selectedTab === 'Likes' && (
            <UserContentsTab
              nullText='좋아요한 컨텐츠가 없습니다.'
              userContents={userLikesContents}
              onClickBookmark={onClickBookmark}
              onClickLike={onClickLike}
            />
          )}
          {selectedTab === 'Bookmark' && (
            <UserContentsTab
              nullText='북마크한 컨텐츠가 없습니다.'
              userContents={userBookmarkContents}
              onClickBookmark={onClickBookmark}
              onClickLike={onClickLike}
            />
          )}
          {selectedTab === 'Setting' && <ProfileSetting user={user as IUser} />}
        </TabContainer>
      </CommonLayout>
    </>
  )
}

export default UserPage
