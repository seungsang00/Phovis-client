import React, { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import { RootReducer } from '@actions/reducer'
import { getUserInfo } from '@actions/users'
import useAction from '../hooks/useAction'

import { MainBanner, LinkBanner } from '@components/index'

import {
  MainHeader,
  MainRecommend,
  MainSidebar,
  MainGallery,
} from '@containers/index'

// NOTE : Test data
import { sampleContents, samplePhotoCardData } from '@utils/index'
const sampleTag = ['야경', '서울', '밤바다', '등산', '여름']
//

const mainPage = () => {
  const [input, setInput] = useState({
    search: '',
  })

  const _getUserInfo = useAction(getUserInfo)
  const { isLogin, accessToken } = useSelector(
    (state: RootReducer) => state.user
  )
  // const mainContents = useSelector((state: RootReducer) => state.mainContents);

  useEffect(() => {
    // TODO : get main contents from Redux store
    // TODO : load main data
    _getUserInfo(accessToken)
  }, [])

  // TODO : make infinite scrol interection

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
    console.log('submit search keyword :', input.search)
  }

  const onTagClickHandler = (tag: String) => {
    console.log('Tag click : ', tag)
  }

  const onClickMainBannerItem = (contentId: String) => {
    console.log(contentId)
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
          search={input.search}
          onChangeInput={onChangeInput}
          onSearchKeywordSubmit={onSearchKeywordSubmit}
        />

        <MainBanner
          contents={sampleContents}
          onClickItem={onClickMainBannerItem}
        />

        <MainRecommend photoCards={samplePhotoCardData} />

        <MainSidebar tags={sampleTag} onTagClickHandler={onTagClickHandler} />

        <LinkBanner link={isLogin ? '/content/form' : '/auth/login'} />

        <MainGallery photoCards={samplePhotoCardData} />
      </main>
    </div>
  )
}

// TODO : make server side render method

// TODO : make static page source

export default mainPage
