import Layout from '../components/Layout'
import TabMenu from '../components/TabMenu'

const ComponentSamplePage = () => (
  <Layout title='Component Sample | Next.js + TypeScript Example'>
    <h1>Component Sample</h1>
    <p>This is the Component Sample page</p>
    {/* <Test text='Hello Next.js' /> */}
    <hr />
    <TabMenu isOwner={true} />
  </Layout>
)

export default ComponentSamplePage
