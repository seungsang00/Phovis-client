import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import { RootReducer } from '@actions/reducer'
import { getUserInfo } from '@actions/users'
import {
  getBannderContentList,
  getRecommendContentList,
  getTrendTagList,
  getPhotoCardList,
} from '@actions/main'
import useAction from '../hooks/useAction'

import { MainBanner, LinkBanner } from '@components/index'

import {
  MainRecommend,
  MainSidebar,
  MainGallery,
  MainHeader,
} from '@containers/index'

// NOTE : Test data
import { sampleContents, samplePhotoCardData } from '@utils/index'
//

const MainPage = () => {
  const [input, setInput] = useState({
    search: '',
  })

  const router = useRouter()

  const _getUserInfo = useAction(getUserInfo)
  const _getBannderContentList = useAction(getBannderContentList)
  const _getRecommendContentList = useAction(getRecommendContentList)
  const _getTrendTagList = useAction(getTrendTagList)
  const _getPhotoCardList = useAction(getPhotoCardList)

  const { isLogin, accessToken, user } = useSelector(
    (state: RootReducer) => state.user
  )
  const {
    error,
    bannerContentList,
    recommendContentList,
    trendTagList,
    photocardList,
  } = useSelector((state: RootReducer) => state.main)

  useEffect(() => {
    _getUserInfo(accessToken)
    _getBannderContentList()
    _getRecommendContentList()
    _getTrendTagList()
    _getPhotoCardList()
  }, [])

  useEffect(() => {
    console.log('error : ', error)
    console.log('bannerContentList : ', bannerContentList)
    console.log('recommendContentList : ', recommendContentList)
    console.log('trendTagList : ', trendTagList)
    console.log('photocardList : ', photocardList)
  }, [
    error,
    bannerContentList,
    recommendContentList,
    trendTagList,
    photocardList,
  ])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { name, value },
    } = e
    setInput({
      ...input,
      [name]: value,
    })
  }

  const onSearchKeywordSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    router.push(`/search?keyword=${input.search}`, `/search`)
  }

  const onTagClickHandler = (tag: String) => {
    console.log('Tag click : ', tag)
  }

  const onClickMainBannerItem = (contentId: String) => {
    console.log(contentId)
  }

  const onScrollEnd = () => {
    // _getPhotoCardList()
  }

  let userId
  if (user) {
    userId = user.id
  }

  return (
    <div>
      <Head>
        <title>Phovis - Main</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <main>
        <MainHeader
          isLogin={isLogin}
          userId={userId as string}
          search={input.search}
          onChangeInput={onChangeInput}
          onSearchKeywordSubmit={onSearchKeywordSubmit}
        />

        <MainBanner
          contents={sampleContents}
          onClickItem={onClickMainBannerItem}
        />

        <MainRecommend photoCards={samplePhotoCardData} />

        <MainSidebar
          tags={trendTagList}
          onTagClickHandler={onTagClickHandler}
        />

        <LinkBanner link={isLogin ? '/content/form' : '/auth/login'} />

        <MainGallery
          photoCards={samplePhotoCardData}
          onScrollEnd={onScrollEnd}
        />
      </main>
    </div>
  )
}

// TODO : make server side render method

// TODO : make static page source

export default MainPage
