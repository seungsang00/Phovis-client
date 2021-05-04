import { CommonLayout, ContentBanner, ContentMain } from 'containers'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '@actions/reducer'

// ! sample data
import {
  sampleContent,
  sampleContents,
  samplePhotoCardData,
} from '@utils/index'
import useAction from '@hooks/useAction'
import {
  getContentData,
  getRelatedContentList,
  getRelatedPhotocardList,
} from '@actions/content'

const ContentPage = () => {
  const router = useRouter()
  const { content_id } = router.query

  const _getContentData = useAction(getContentData)
  const _getRelatedContentList = useAction(getRelatedContentList)
  const _getRelatedPhotoCardList = useAction(getRelatedPhotocardList)

  useEffect(() => {
    // TODO: get content data from redux store
    if (content_id) {
      _getContentData(content_id as string)
    }
  }, [content_id])

  const { contentData } = useSelector((state: RootReducer) => state.content)

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

  useEffect(() => {
    const tags = tag?.join(',')
    console.log(tags)
    if (tags) {
      _getRelatedContentList(tags as string)
      _getRelatedPhotoCardList(tags as string)
    }
  }, [tag])

  const { relatedContentList, photocardList } = useSelector(
    (state: RootReducer) => state.content
  )
  console.log(relatedContentList)

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
