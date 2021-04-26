import Layout from '../components/Layout'
import TabMenu from '../components/TabMenu'
import LocationInfo from '../components/LocationInfo'

const ComponentSamplePage = () => (
  <Layout title='Component Sample | Next.js + TypeScript Example'>
    <h1>Component Sample</h1>
    <p>This is the Component Sample page</p>
    {/* <Test text='Hello Next.js' /> */}
    <hr />
    <TabMenu isOwner={true} />
    <LocationInfo location={'서울시 강서구 서울식물원'} />
  </Layout>
)

export default ComponentSamplePage
