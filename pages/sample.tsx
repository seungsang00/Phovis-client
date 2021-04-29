import React, { useState } from 'react'
import Link from 'next/link'
import {
  Layout,
  LinkTitle,
  LinkBanner,
  SearchBar,
  SearchBarBig,
  TagBig,
  TagSmall,
  ThumbnailRect,
  ThumbnailSquare,
  LikeBtn,
  ToggleBtn,
  BookmarkBtn,
  MainBanner,
  UserBanner,
  UserCard,
  PhotoCardPreview,
  UserInfoVer,
  UserInfoHor,
  TabMenu,
  LocationInfo,
} from '@components/index'
import { PhotoCardInput } from '@containers/index'
import {
  sampleUserData,
  samplePhotoData,
  sampleContents,
  sampleHandler,
} from '@utils/index'

const { handleUnfollow, handleToggle, handler } = sampleHandler
const { photoUrl_v, photoUrl_s } = samplePhotoData
const { name, imgUrl, contentCount } = sampleUserData[0]

const ComponentSamplePage = () => {
  const [input, setInput] = useState({
    search: '',
  })

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { name, value },
    } = e
    setInput({
      ...input,
      [name]: value,
    })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('load submit !')
  }

  const onClickMainBannerItem = (contentId: String) => {
    console.log(contentId)
  }
  return (
    <Layout title='Component Sample | Next.js + TypeScript Example'>
      <h1>Component Sample</h1>
      <p>This is the Component Sample page</p>
      <hr />
      <MainBanner
        contents={sampleContents}
        onClickItem={onClickMainBannerItem}
      />
      <LinkTitle to='/sample' />
      <hr />
      <SearchBar
        name='search'
        value={input.search}
        onChange={onChangeInput}
        onSubmit={onSubmit}
      />
      <hr />
      <SearchBarBig query='직전에검색한키워드가들어갑니다' />
      <hr />
      <LinkBanner link='/' />
      <hr />
      <TagBig tagname={'야경'} onClick={handler} />
      <hr />
      <TagSmall tagname={'야경'} onClick={handler} />
      <hr />
      <ThumbnailSquare
        profileImage={imgUrl}
        username={name}
        bgImage={photoUrl_s}
      />
      <hr />
      <ThumbnailRect
        id='sampleId'
        profileImage={imgUrl}
        username={name}
        bgImage={photoUrl_v}
        likeCount={30}
      />
      <hr />
      <UserCard
        username={name}
        profileImage={imgUrl}
        contentCount={contentCount}
        onClick={handleUnfollow}
      />
      <hr />
      <UserBanner username={name} profileImage={imgUrl} bgImage={photoUrl_v} />
      <hr />
      <BookmarkBtn id='bookMarkTest' />
      <hr />
      <ToggleBtn sectionName={'Bookmark'} onClick={handleToggle} />
      <hr />
      {/* 여기에 새로 생성한 컴포넌트들을 배치해주세요 */}
      <hr />
      <TabMenu isOwner={true} />
      <hr />
      <LocationInfo location={'서울시 강서구 서울식물원'} />
      <hr />
      <LikeBtn like={23} />
      <PhotoCardInput location={''} />
      <UserInfoHor userName={'jeong'} />
      <UserInfoVer userName={'jeong'} />
      <PhotoCardPreview
        description={'장소에 대한 정보'}
        imageurl={''}
        userName={'jeong'}
        profileImage={''}
        like={24}
      />
      <hr />
      <PhotoCardInput location={''} />
      <hr />
      <UserInfoHor userName={'jeong'} />
      <hr />
      <UserInfoVer userName={'jeong'} />
      <hr />
      <PhotoCardPreview
        description={'장소에 대한 정보'}
        imageurl={''}
        userName={'jeong'}
        profileImage={''}
        like={24}
      />
      <hr />
      <p>
        <Link href='/'>
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
}

export default ComponentSamplePage
