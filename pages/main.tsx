import React, { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import Head from 'next/head'
import { RootReducer } from '@actions/reducer'
// import useAction from '../hooks/useAction'

import {
  SearchBar,
  MainBanner,
  ThumbnailSquare,
  ThumbnailRect,
  TagBig,
  LinkBanner,
} from '@components/index'

// NOTE : Test data
import {
  sampleContents,
  sampleUserData,
  samplePhotoData,
  samplePhotoCardData,
} from '@utils/index'
const { photoUrl_s } = samplePhotoData
const sampleTag = ['야경', '서울', '밤바다', '등산', '여름']

const mainPage = () => {
  const [input, setInput] = useState({
    search: '',
  })

  const { isLogin } = useSelector((state: RootReducer) => state.user)
  console.log('isLogin : ', isLogin)
  // TODO : get main contents from Redux store
  // const mainContents = useSelector((state: RootReducer) => state.mainContents);

  useEffect(() => {
    // TODO : load main data
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
        <header>
          <article>
            <div>Main Logo</div>
            <div>
              {isLogin && <Link href='/users'>마이 페이지</Link>}
              {!isLogin && <Link href='/auth/login'>로그인</Link>}
            </div>
          </article>
          <article>
            <SearchBar
              name='search'
              value={input.search}
              onChange={onChangeInput}
              onSubmit={onSearchKeywordSubmit}
            />
          </article>
        </header>

        <section>
          <MainBanner
            contents={sampleContents}
            onClickItem={onClickMainBannerItem}
          />
        </section>

        <section>
          <h3>여기는 어때요?</h3>
          <div>
            {sampleUserData.length > 0 &&
              sampleUserData.map((data) => {
                const { id, imgUrl, name } = data
                return (
                  <ThumbnailSquare
                    key={id}
                    profileImage={imgUrl}
                    username={name}
                    bgImage={photoUrl_s}
                  />
                )
              })}
          </div>
        </section>

        <aside>
          <h3>🏄‍♂️ 관심 카테고리</h3>
          <div>
            {sampleTag.length > 0 &&
              sampleTag.map((tag) => (
                <TagBig tagname={tag} onClick={onTagClickHandler} />
              ))}
            <div>Make a new content</div>
          </div>
        </aside>

        <section>
          <LinkBanner link={isLogin ? '/main' : '/auth/login'} />
        </section>

        <section>
          Main content gallery
          {samplePhotoCardData.length > 0 &&
            samplePhotoCardData.map((data) => {
              const { id, userName, profileImage, imageurl, like } = data
              return (
                <ThumbnailRect
                  key={id}
                  id={id}
                  profileImage={profileImage}
                  username={userName}
                  bgImage={imageurl}
                  likeCount={like as number}
                />
              )
            })}
        </section>
      </main>
    </div>
  )
}

// TODO : make server side render method

// TODO : make static page source

export default mainPage
