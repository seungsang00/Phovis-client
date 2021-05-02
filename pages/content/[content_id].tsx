// "/content/:content_id"
import Layout from '@components/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

// ! sample data
import { sampleContents } from '@utils/index'
import ContentBanner from '@containers/ContentBanner'
const [{ contentid, title, likecount, user, imageurl }] = sampleContents

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
      <section>
        <ContentBanner mainImgUrl={imageurl} />
      </section>
      <main>content main</main>
      <section>연관 출장글</section>
      <section>photocards</section>
    </>
  )
}

export default ContentPage
