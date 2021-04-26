import Link from 'next/link'
import Layout from '../components/Layout'
import UserCard from '../components/UserCard'
import { sampleUserData, sampleHandler } from '../utils/sample-data'

const sampleUser = sampleUserData[0]

const ComponentSamplePage = () => (
  <Layout title='Component Sample | Next.js + TypeScript Example'>
    <h1>Component Sample</h1>
    <p>This is the Component Sample page</p>
    <hr />
    <UserCard
      username={sampleUser.name}
      profileImage={sampleUser.imgUrl}
      contentCount={sampleUser.contentCount}
      onClick={sampleHandler.handleUnfollow}
    />
    <hr />
    {/* 여기에 새로 생성한 컴포넌트들을 배치해주세요 */}
    <hr />
    <p>
      <Link href='/'>
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default ComponentSamplePage
