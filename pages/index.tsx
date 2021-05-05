// import Link from 'next/link'
// import Layout from '../components/Layout'

// const IndexPage = () => (
//   <Layout title='Home | Next.js + TypeScript Example'>
//     <h1>Hello Next.js 👋</h1>
//     <p>
//       <Link href='/about'>
//         <a>About</a>
//       </Link>
//       <hr />
//       <Link href='/content/form'>출장글 쓰러가기</Link>
//     </p>
//   </Layout>
// )

// export default IndexPage

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
  MainSideMenu,
  MainSectionHeader,
  CommonLayout,
} from '@containers/index'

// NOTE : Test data
import { sampleContents, samplePhotoCardData } from '@utils/index'
import { MainGridContainer } from '@containers/Layout/PageLayout'
const sampleTag = ['야경', '서울', '밤바다', '등산', '여름']
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
    // console.log('Tag click : ', tag)
    router.push(`/search?keyword=${tag}`, `/search`)
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
    <>
      <Head>
        <title>Phovis - Main</title>
      </Head>
      <CommonLayout
        title='Phovis'
        header={
          <MainHeader
            isLogin={isLogin}
            userId={userId as string}
            search={input.search}
            onChangeInput={onChangeInput}
            onSearchKeywordSubmit={onSearchKeywordSubmit}
          />
        }>
        <main>
          <MainSideMenu isLogin={isLogin} />
          <section id='section-header' style={{ paddingTop: '60px' }}>
            <MainSectionHeader />
          </section>
          <section id='section-recommend'>
            <MainRecommend
              contentList={sampleContents}
              photoCards={samplePhotoCardData}
              tags={sampleTag}
              onTagClickHandler={onTagClickHandler}
            />
          </section>
          <section id='section-photo-card'>
            <MainGallery
              photoCards={samplePhotoCardData}
              onScrollEnd={onScrollEnd}
            />
          </section>
        </main>
      </CommonLayout>
    </>
  )
}

// TODO : make server side render method

// TODO : make static page source

export default MainPage
