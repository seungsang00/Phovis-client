import Link from 'next/link'
import Layout from '../components/Layout'
import TabMenu from '../components/TabMenu'
import LocationInfo from '../components/LocationInfo'
import Like from '../components/Like'
import UserHor from '../components/UserInfo-hor'
import UserVer from '../components/UserInfo-ver'
import PhotocardPreview from '../components/PhotocardPreview'

const ComponentSamplePage = () => (
  <Layout title='Component Sample | Next.js + TypeScript Example'>
    <h1>Component Sample</h1>
    <p>This is the Component Sample page</p>
    <hr />
    {/* 여기에 새로 생성한 컴포넌트들을 배치해주세요 */}
    <TabMenu isOwner={true} />
    <LocationInfo location={'서울시 강서구 서울식물원'} />
    <Like like={23} />
    <UserHor userName={'jeong'} />
    <UserVer userName={'jeong'} />
    <PhotocardPreview
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

export default ComponentSamplePage
