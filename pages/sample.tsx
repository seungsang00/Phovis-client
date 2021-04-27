import Link from 'next/link'
import Layout from '../components/Layout'
import TabMenu from '../components/TabMenu'
import LocationInfo from '../components/LocationInfo'
import Like from '../components/Like'
import PhotoCardInput from '../components/PhotoCardInput'
import UserHor from '../components/UserInfo-hor'
import UserVer from '../components/UserInfo-ver'
import PhotoCardPreview from '../components/PhotoCardPreview'
import PhotoCardGallery from '../components/PhotoCardGallery'
import UserCard from '../components/UserCard'
import UserBanner from '../components/UserBanner'
import ToggleBtn from '@coponents/ToggleBtn'

import { sampleUserData, samplePhotoData, samplePhotoCardData } from '../utils/sample-data'
import { sampleHandler } from '../utils/sample-function'

const { photoUrl_v } = samplePhotoData

const { handleUnfollow, handleToggle } = sampleHandler
const { name, imgUrl, contentCount } = sampleUserData[0]


const ComponentSamplePage = () => (
  <Layout title='Component Sample | Next.js + TypeScript Example'>
    <h1>Component Sample</h1>
    <p>This is the Component Sample page</p>
    <hr />
    <UserCard
      username={name}
      profileImage={imgUrl}
      contentCount={contentCount}
      onClick={handleUnfollow}
    />
    <hr />
    <UserBanner username={name} profileImage={imgUrl} bgImage={photoUrl_v} />
    <hr />
    <ToggleBtn sectionName={'Bookmark'} onClick={handleToggle} />
    <hr />
    {/* 여기에 새로 생성한 컴포넌트들을 배치해주세요 */}
    <hr />
    <TabMenu isOwner={true} />
    <hr />
    <LocationInfo location={'서울시 강서구 서울식물원'} />
    <hr />
    <Like like={23} />
    <PhotoCardInput location={''} />
    <UserHor userName={'jeong'} />
    <UserVer userName={'jeong'} />
    <PhotoCardPreview
      description={'장소에 대한 정보'}
      imageurl={''}
      userName={'jeong'}
      profileImage={''}
      like={24}
    />
    <PhotoCardGallery photocards={samplePhotoCardData} />
    <hr />
    <PhotoCardInput location={''} />
    <hr />
    <UserHor userName={'jeong'} />
    <hr />
    <UserVer userName={'jeong'} />
    <hr />
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
