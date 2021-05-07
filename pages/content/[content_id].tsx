import {
  CommonLayout,
  ContentBanner,
  ContentMain,
  MainHeader,
} from 'containers'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '@actions/reducer'
import { getUserInfo } from '@actions/users'

import useAction from '@hooks/useAction'
import {
  getContentData,
  getRelatedContentList,
  getRelatedPhotocardList,
  putLikeRequest,
  putBookmarkRequest,
} from '@actions/content'
// import { StringifyOptions } from 'node:querystring'

const ContentPage = () => {
  const router = useRouter()
  const { content_id } = router.query
  const { isLogin, user, accessToken } = useSelector(
    (state: RootReducer) => state.user
  )
  const _getUserInfo = useAction(getUserInfo)

  const { contentData, relatedContentList, photocardList } = useSelector(
    (state: RootReducer) => state.content
  )

  const _getContentData = useAction(getContentData)
  const _getRelatedContentList = useAction(getRelatedContentList)
  const _getRelatedPhotoCardList = useAction(getRelatedPhotocardList)

  const _putLikeRequest = useAction(putLikeRequest)
  const _putBookmarkRequest = useAction(putBookmarkRequest)

  useEffect(() => {
    _getUserInfo(accessToken)
  }, [])

  useEffect(() => {
    if (content_id) {
      console.log('accessToken : ', accessToken)
      _getContentData({
        contentId: content_id as string,
        accessToken,
      })
    }
  }, [content_id, accessToken])

  useEffect(() => {
    const tags = contentData.tag?.join(',')
    // console.log('tags : ', tags)
    // console.log(contentData)
    if (tags) {
      _getRelatedContentList(tags as string)
      _getRelatedPhotoCardList(content_id as string)
    }
  }, [contentData])

  let userId = ''
  if (user) {
    userId = user.id as string
  }
  const handlemodify = (id: string): void => {
    if (contentData.user.id === userId) {
      router.push(`/content/form?isModify=${true}&contentId=${id}`)
    }
  }

  const onClickLike = (contentId: string) => {
    _putLikeRequest({ contentId, accessToken })
  }

  const onClickBookmark = (contentId: string) => {
    _putBookmarkRequest({ contentId, accessToken })
  }

  const {
    id,
    title,
    mainimageUrl,
    like,
    description,
    location,
    images,
    tag,
    isLike,
    isBookmark,
    user: creator,
  } = contentData

  return (
    <>
      <Head>
        <title>Phovis - Content title</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <CommonLayout
        header={<MainHeader isLogin={isLogin} userId={userId as string} />}
        banner={
          <ContentBanner
            userId={userId as string}
            id={id as string}
            title={title}
            mainImgUrl={mainimageUrl}
            username={creator.userName as string}
            userProfileUrl={creator.profileImg}
            like={like}
            isLike={isLike}
            isBookmark={isBookmark}
            onClickLike={onClickLike}
            onClickBookmark={onClickBookmark}
          />
        }>
        <ContentMain
          owner={creator.id as string}
          userId={userId as string}
          handlemodify={() => handlemodify(id as string)}
          contentId={content_id as string}
          description={description}
          location={location}
          images={images}
          tags={tag}
          related={relatedContentList}
          photocards={photocardList}
        />
      </CommonLayout>
    </>
  )
}

export default ContentPage
