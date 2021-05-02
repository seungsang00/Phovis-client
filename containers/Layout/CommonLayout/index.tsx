import Head from 'next/head'
import { ReactNode } from 'react'
import { HeaderContainer, Banner, Main } from './commonlayout'
import Header from './header'

interface ILayout {
  header?: ReactNode
  banner?: ReactNode
  children?: ReactNode
  title?: string
}
const CommonLayout = ({ banner, children, title = 'Phovis' }: ILayout) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Banner>{banner}</Banner>
      <Main>{children}</Main>
    </>
  )
}

export default CommonLayout
