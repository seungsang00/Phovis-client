// "/content/:content_id"
import { CommonLayout, ContentBanner, ContentMain } from 'containers'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

// ! sample data
import { sampleContent, sampleContents } from '@utils/index'

const {
  contentid,
  title,
  likecount,
  user,
  imageurl,
  description,
  location,
  images,
  tag,
} = sampleContent
const { id, name, imgUrl } = user

// TODO: content_id로 서버에 데이터를 요청합니다
const ContentPage = () => {
  const router = useRouter()
  const { content_id } = router.query

  useEffect(() => {
    console.log(router.query)
    console.log(sampleContent)
  })
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
            title={title}
            mainImgUrl={imageurl}
            username={name}
            userProfileUrl={imgUrl}
            likesCount={likecount}
          />
        }>
        <ContentMain
          description={description}
          location={location}
          images={images}
          tags={tag}
          related={sampleContents}
        />
      </CommonLayout>
    </>
  )
}

export default ContentPage
