// "/content/:content_id"
import { CommonLayout } from 'containers'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

// ! sample data
import { sampleContents } from '@utils/index'
import ContentBanner from '@containers/ContentBanner'
const [{ contentid, title, likecount, user, imageurl }] = sampleContents
const { id, name } = user

// TODO: content_id로 서버에 데이터를 요청합니다
const ContentPage = () => {
  const router = useRouter()
  const { content_id } = router.query

  useEffect(() => {
    console.log(router.query)
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
            likesCount={likecount}
          />
        }>
        <main>content main</main>
        <section>연관 출장글</section>
        <section>photocards</section>
      </CommonLayout>
    </>
  )
}

export default ContentPage
