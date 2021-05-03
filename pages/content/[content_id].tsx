// "/content/:content_id"
import { CommonLayout, ContentBanner, ContentMain } from 'containers'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '@actions/reducer'

// ! sample data
import {
  sampleContent,
  sampleContents,
  samplePhotoCardData,
} from '@utils/index'
import useAction from '@hooks/useAction'
import { getContentData } from '@actions/content'

// TODO: content_id로 서버에 데이터를 요청합니다
const ContentPage = () => {
  const router = useRouter()
  const { content_id } = router.query

  const _getContentData = useAction(getContentData)

  useEffect(() => {
    // TODO: get content data from redux store
    if (content_id) {
      _getContentData(content_id as string)
    }
    // console.log(sampleContent)
  }, [content_id])

  const { contentData, relatedContentList, photocardList } = useSelector(
    (state: RootReducer) => state.content
  )

  // const initialState: any = {
  //   error: null,
  //   contentData: {
  //     contentid: null,
  //     imageurl: null,
  //     description: null,
  //     location: {
  //       location: null,
  //       lat: undefined,
  //       lng: undefined,
  //     },
  //     user: {
  //       id: null,
  //       name: null,
  //     },
  //     likecount: 0,
  //     images: [],
  //     title: null,
  //   },
  //   relatedContentList: [],
  //   photocardList: [],
  // }
  // const [content_data, setContent_data] = useState(initialState)

  // useEffect(() => {
  //   if (contentData) {
  //     setContent_data(contentData)
  //     console.log(`>>>>`, content_data)
  //   }
  // }, [contentData])

  console.log(contentData)

  const {
    title,
    mainimageUrl,
    user,
    likecount,
    description,
    location,
    images,
    tag,
  } = contentData

  return (
    <>
      <Head>
        <title>Phovis - Content title</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <CommonLayout
        banner={
          <ContentBanner
            title={title || sampleContent.title}
            mainImgUrl={mainimageUrl || sampleContent.mainimageUrl}
            username={user.userName || sampleContent.user.userName}
            userProfileUrl={user.profileImg || sampleContent.user.profileImg}
            likesCount={likecount || sampleContent.likecount}
          />
        }>
        <ContentMain
          description={description || sampleContent.description}
          location={location || sampleContent.location}
          images={images || sampleContent.images}
          tags={tag || sampleContent.tag}
          related={relatedContentList || sampleContents}
          photocards={photocardList || samplePhotoCardData}
        />
      </CommonLayout>
    </>
  )
}

export default ContentPage
