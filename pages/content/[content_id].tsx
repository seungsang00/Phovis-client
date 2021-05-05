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
// import { StringifyOptions } from 'node:querystring'

const ContentPage = () => {
  const { isLogin, user } = useSelector((state: RootReducer) => state.user)
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
  const { relatedContentList, photocardList } = useSelector(
    (state: RootReducer) => state.content
  )

  const {
    id,
    title,
    mainimageUrl,
    likecount,
    description,
    location,
    images,
    tag,
  } = contentData
  const creator = contentData.user

  useEffect(() => {
    const tags = tag?.join(',')
    console.log(tags)
    if (tags) {
      _getRelatedContentList(tags as string)
      _getRelatedPhotoCardList(content_id as string)
    }
  }, [tag])

  console.log(relatedContentList)
  console.log('다시불러오니?', photocardList)

  let userId = ''
  if (user) {
    userId = user.id as string
  }
  const handlemodify = (id: string): void => {
    if (creator.id === userId) {
      router.push(`/content/form?isModify=${true}&contentId=${id}`)
    }
  }
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
            handlemodify={() => handlemodify(id as string)}
            owner={creator.id as string}
            userId={userId as string}
            id={id as string}
            title={title || sampleContent.title}
            mainImgUrl={mainimageUrl || sampleContent.mainimageUrl}
            username={
              (creator.userName as string) ||
              (sampleContent.user.userName as string)
            }
            userProfileUrl={creator.profileImg || sampleContent.user.profileImg}
            likesCount={likecount || sampleContent.likecount}
          />
        }>
        <ContentMain
          contentId={(content_id as string) || (sampleContent.id as string)}
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
